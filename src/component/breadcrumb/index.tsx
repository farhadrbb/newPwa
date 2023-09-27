import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { setStepsSlice, setStepsSliceBack, setStepsSliceEmpty } from '../../redux/slice/step';
import { HiHome } from 'react-icons/hi'
import { FaArrowLeft } from 'react-icons/fa'



const useBackButton = () => {
    const [isBack, setIsBack] = useState(false);

    const handleEvent = () => {
        setIsBack(true);
        // callback();
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

        // setstepState(step[step.length - 1])
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

        // let changeAdd = {
        //     ...obj,
        //     add: false
        // }


        // step.map((itm: any, ind: any) => {

        // })

        console.log("backState", backState);
        dispatch(setStepsSliceBack(backState))
        navigate(backHome ? obj.backToHome : obj?.backUrl1)
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
                    <div
                        onClick={() => handleRouteBack(stepState)}>
                        <FaArrowLeft className='text-[19px] mt-[1px] hover:text-gray-300 cursor-pointer' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default BreadCrumb