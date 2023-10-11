import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import { setNotifySlice } from '../../redux/slice/tool';
import { BsCheckCircleFill } from 'react-icons/bs'
import { RiErrorWarningFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next';
import BtnCustom from '../btnCustom';




const NotifyCustom = () => {
    // ____________________________________varibles___________________________

    let classNotify = 'absolute max-w-max mx-auto max-h-max !z-[2000] top-[45%] left-0 right-0 bg-black py-5 pr-4 pl-5 rounded-xl text-white animate-[upAnime10_0.5s] shadow-2xl shadow-gray-700 dark:shadow-gray-800'

    // ____________________________________hook___________________________
    const notify = useSelector((state: any) => state.toolsSlice.notify)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const [notifyState, setnotifyState] = useState<any>({});


    // ____________________________________functions___________________________
    const handleRemoveNotif = () => {
        notifyState.fn && notifyState.fn()
        setnotifyState({})
        dispatch(setNotifySlice({
            title:'',
            type:null
        }))
    }
    // ____________________________________useEffect___________________________
    useEffect(() => {
        if (notifyState.title) {
            if (!notifyState.btn) {
                setTimeout(() => {
                    handleRemoveNotif()
                }, 2000);
            }
        }
    }, [notifyState])
    useEffect(() => {
        if (notify.title) {
            setTimeout(() => {
                setnotifyState(notify)
            }, 500);
        }
    }, [notify])

    return (
        <>
            {notifyState?.title && (
                <div className={classNotify} onClick={() => handleRemoveNotif()}>
                    <div className='animate-[fade_0.5s] text-xs '>
                        <div className='flex items-center'>
                            {notifyState?.type === 'success' && (
                                <div><BsCheckCircleFill className='fill-green-600 text-2xl ml-2' /></div>
                            )}
                            {notifyState?.type === 'error' && (
                                <div><RiErrorWarningFill className='fill-red-600 text-2xl ml-2 ' /></div>
                            )}
                            <div>{notifyState?.title}</div>
                        </div>
                        {notifyState?.btn && (

                            <div className='flex justify-center'>
                                <BtnCustom title={notifyState?.btn} classNameBtn={"mt-2"} click={handleRemoveNotif} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
export default NotifyCustom;