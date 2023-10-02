import React from "react";
import { useLocation } from "react-router-dom";
import img_type from "../../../assest/img/logo_type.png"

import BreadCrumb from "../../breadcrumb";
import DarkBtn from "../../darkModeBtn";
import List from "../list";


const Header = (props: any) => {
    // _____________________________varibles______________________
    const { handleRouteForLayout } = props
    let classHeader = `bg-blue-1 bg-contain w-full !fixed top-0 left-0 z-[100] bg-head flex justify-center`
    // _________________________________hook___________________________
    const location = useLocation()
    return (
        <>
            <div className={`${classHeader} ${location.pathname === '/services' ? 'h-[60px]' : 'h-[200px] '} relative`}>
              
                {handleRouteForLayout() && (
                    <>
                        <img src={img_type} className="w-[86px] h-[29px] mt-3" />
                        <div className="absolute top-[190px] bg-white w-full h-[70px] z-[100] dark:bg-darkMode-black "></div>
                        {location.pathname === '/account' || location.pathname === '/card' ? (
                            <div className="absolute top-6 h-[200px] w-full z-[120]">
                                <List></List>
                            </div>
                        ) : null}
                    </>
                )}
                {!handleRouteForLayout() && location.pathname != '/login' && (
                    <>
                        <BreadCrumb />
                    </>
                )}
            </div>
        </>
    )
}

export default Header