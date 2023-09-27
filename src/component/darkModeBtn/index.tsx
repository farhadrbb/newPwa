import React from 'react'
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
                <div className="animate-[downAnime20_0.8s] absolute top-0 left-0">
                        <BtnCustom title="dark" click={handleClickTheme}/>
                </div>
            {/* </div> */}
        </>
    )
}

export default DarkBtn