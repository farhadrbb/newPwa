import React, { useState, memo } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import DarkBtn from "../../../darkModeBtn";
// import { RiSettings4Fill } from "react-icons/ri";
import {IoSettingsSharp} from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidUserVoice } from "react-icons/bi";

// import icg_wallet from '../../../assest/img/wallet.svg'

const ToolMenu = memo((props: any) => {
    const { stateClickMenu } = props

    let classBtn = " bg-blue w-7 h-7 rounded-full shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] shadow-gray-500 dark:shadow-darkMode-black flex justify-center items-center text-white"
  
    // ____________________________hook________________________________
    const navigate = useNavigate()



    //________________________________ varibles________________________


 
    //________________________________functions________________________
   
    //________________________________useEffect________________________



    return (
        <>

            {stateClickMenu && (
                <>
                    <div className="animate-[fade_0.8s] absolute -top-[150%] left-[60%] ">
                        <div className="animate-[downAnime20_0.6s]">
                            <div className={classBtn}>
                                <DarkBtn/>
                            </div>
                        </div>
                    </div>
                    <div className="animate-[fade_0.8s] absolute -top-[95%] -right-[100%]">
                        <div className="animate-[downAnime20_0.4s]">
                            <div className={classBtn}>
                            <IoSettingsSharp/>
                            </div>
                        </div>
                    </div>
                    <div className="animate-[fade_1.1s] absolute -top-[150%] right-[60%]">
                        <div className="animate-[downAnime20_0.9s]">
                            <div className={classBtn}>
                                <AiOutlinePlus/>
                            </div>
                        </div>
                    </div>
                    <div className="animate-[fade_1.4s] absolute -top-[95%] -left-[100%]" onClick={()=>window.open('tel:9971863733')}>
                        <div className="animate-[downAnime20_1.2s]">
                            <div className={classBtn}>
                                <BiSolidUserVoice/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute -bottom-[30%] rounded-full opacity-50 w-36 h-36 bg-gray-400"></div> */}
                    {/* <div className="absolute -top-[50%] -right-[90%] bg-blue w-7 h-7  rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] shadow-blue"></div>
                                    <div className="absolute -top-[50%] -left-[90%] bg-blue w-7 h-7  rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] shadow-blue"></div> */}
                </>
            )}

        </>
    )
}
)

export default ToolMenu



