import React, { useState, memo } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import DarkBtn from "../../../darkModeBtn";
// import { RiSettings4Fill } from "react-icons/ri";
import {IoSettingsSharp} from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

// import icg_wallet from '../../../assest/img/wallet.svg'

const ToolMenu = memo((props: any) => {
    const { stateClickMenu } = props

    let classBtn = " bg-blue w-7 h-7 rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] shadow-blue dark:shadow-darkMode-black flex justify-center items-center text-white"
  
    // ____________________________hook________________________________
    const navigate = useNavigate()



    //________________________________ varibles________________________


 
    //________________________________functions________________________
   
    //________________________________useEffect________________________



    return (
        <>

            {stateClickMenu && (
                <>
                    <div className="animate-[fade_0.6s] absolute -top-[115%] left-[15%]">
                        <div className="animate-[downAnime20_1.1s]">
                            <div className={classBtn}>
                                <DarkBtn/>
                            </div>
                        </div>
                    </div>
                    <div className="animate-[fade_0.2s] absolute -top-[75%] -right-[90%]">
                        <div className="animate-[downAnime20_0.8s]">
                            <div className={classBtn}>
                            <IoSettingsSharp/>
                            </div>
                        </div>
                    </div>
                    <div className="animate-[fade_1s] absolute -top-[75%] -left-[90%]">
                        <div className="animate-[downAnime20_1.4s]">
                            <div className={classBtn}>
                                <AiOutlinePlus/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute -top-[50%] -right-[90%] bg-blue w-7 h-7  rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] shadow-blue"></div>
                                    <div className="absolute -top-[50%] -left-[90%] bg-blue w-7 h-7  rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] shadow-blue"></div> */}
                </>
            )}

        </>
    )
}
)

export default ToolMenu



