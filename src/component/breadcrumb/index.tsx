import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { setBackClick, setStepsSlice, setStepsSliceBack, setStepsSliceEmpty, setStepsSliceEmptyTheStep } from '../../redux/slice/step';
import { HiHome } from 'react-icons/hi'
import { FaArrowLeft } from 'react-icons/fa'
import { BiCloset } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';



const useBackButton = () => {
    const [isBack, setIsBack] = useState(false);

    const handleEvent = () => {
        setIsBack(true);
        window.history.go(1);
    };

    useEffect(() => {
        window.addEventListener("popstate", handleEvent);
        return () => window.removeEventListener("popstate", handleEvent);
    }, []);

    return isBack;
};


const BreadCrumb = () => {

    // _____________________________________hook_________________________

    const step = useSelector((state: any) => state.stepSlice)
    const dispatch = useDispatch()
    const location = useLocation()
    const back = useBackButton()
    const [stepState, setstepState] = useState({
        title: '',
        backUrl1: '',
        backToHome: '',
        data: {},
        add: ''

    });
    const [backState, setbackState] = useState("");
    const navigate = useNavigate()


    // ___________________________________functions__________________________

    const handlePaste = () => {
        Object.keys(step.data).map((itm: any, ind: any) => {
            if (step.data[itm]) {
                if (step.data[itm].pathname == location.pathname) {
                    setstepState(step.data[itm])
                    setbackState(itm)
                }

            }
        })
    }

    const handleRouteBack = (obj: any, backHome?: any) => {
        let arrStep = Object.keys(step.data)
            if (arrStep[arrStep?.length - 2]) {
                dispatch(setStepsSlice(
                    {
                        [arrStep[arrStep?.length - 2]]: {
                            ...step?.data?.[arrStep[arrStep?.length - 2]],
                            data: {
                                ...step?.data?.[arrStep[arrStep?.length - 1]]?.data
                            }
                        }
                    }
                ))
            } else if (!arrStep[arrStep?.length - 2] && arrStep[arrStep?.length - 1]) {
                dispatch(setStepsSliceEmptyTheStep(arrStep[arrStep?.length - 1]))
            }else {
                dispatch(setStepsSliceEmpty(true))

            }
       
        dispatch(setBackClick(true))
        // dispatch(setStepsSliceBack(backState))
        navigate(backHome ? obj.backToHome : obj?.backUrl1)
        setTimeout(() => {
            dispatch(setBackClick(false))
        }, 1000);
    }

    // ___________________________________________useEffect__________________________
    useEffect(() => {
        if (location) {
            handlePaste()
        }

    }, [location]);
    return (
        <>
            <div className='flex justify-between items-center text-white w-full px-5 h-[20px] mt-3'>
                <div className='text-sm'>{stepState?.title}</div>
                <div className='flex'>
                    <div
                        onClick={() => handleRouteBack(stepState, true)}
                        className='mx-3'>
                        <HiHome className='text-xl hover:text-gray-300' />
                    </div>
                    {location.pathname.includes("receipt") && (

                        <div
                            onClick={() => handleRouteBack(stepState)}>
                            <IoCloseCircle className='text-[22px] mt-[1px] hover:text-gray-300 cursor-pointer' />
                        </div>
                    )}
                    {!location.pathname.includes("receipt") && (

                        <div
                            onClick={() => handleRouteBack(stepState)}>
                            <FaArrowLeft className='text-[19px] mt-[1px] hover:text-gray-300 cursor-pointer' />
                        </div>

                    )}
                </div>

            </div>
        </>
    )
}

export default BreadCrumb