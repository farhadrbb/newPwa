import React, { useState, useEffect } from "react";
import tejarat_img from "../../assest/img/tejarat.png"

import LoginTabOne from "./loginTabOne";
import LoginTabTwo from "./loginTabTwo";



const Login = () => {



    return (
        <>
        
            <div className="flex flex-col ">
                <div className="flex items-center flex-col ">
                    <img src={tejarat_img} className="w-[144px] h-[43px]" />
                    <div className="text-gray-200 opacity-60 text-xs mt-2">{'به همراه بانک تجارت خوش آمدید'}</div>
                        <LoginTabOne />
                    {/* <LoginTabTwo/> */}

                </div>
            </div>
        </>
    )
}


export default Login