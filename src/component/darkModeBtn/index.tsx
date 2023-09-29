import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { BiSolidSun } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import Box from '../../component/box'
import Loading from '../../component/loading'
import { setDarkModeSlice } from '../../redux/slice/tool'
import BtnCustom from '../btnCustom'

const DarkBtn = () => {
    const darkmode = useSelector((state: any) => state.toolsSlice.dark)
    const dispatch = useDispatch()

    const handleClickTheme = () => {
        if (darkmode === 'dark') {
            dispatch(setDarkModeSlice('light'))
        }
        if (darkmode === 'light') {
            dispatch(setDarkModeSlice('dark'))
        }
    }
    return (
        <>
            {/* <div className="animate-[fade_0.8s]"> */}
            <div className="flex justify-center items-center">
                {darkmode === 'dark' && (
                    <div className='animate-[fade_1s]'>

                        <BiSolidSun onClick={handleClickTheme} className={'text-gray-200 text-xl'} />
                    </div>
                )}
                {darkmode === 'light' && (
                    <div className='animate-[fade_1s]'>
                        <BsFillMoonFill onClick={handleClickTheme} className={'text-gray-200  '} />
                    </div>
                )}
                {/* <BtnCustom title="dark" click={handleClickTheme}/> */}
            </div>
            {/* </div> */}
        </>
    )
}

export default DarkBtn