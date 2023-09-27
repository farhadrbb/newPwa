import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Loading from "../../loading";


const Content = (props: any) => {
    // _______________________________________varibles_______________________________
    const { children, handleRouteForLayout } = props
    let classContent = `absolute w-full  flex flex-col  justify-center`
    const location = useLocation()
    // _________________________________________hook_________________________________

    return (
        <>
            <div
                className={`${classContent} ${!handleRouteForLayout() && "px-5"}  ${handleRouteForLayout() && "bg-white dark:bg-darkMode-black "} 
                    ${handleRouteForLayout() && location.pathname != '/services' ? "top-[240px] pb-[110px] pt-10 " : 'top-[40px] z-[110] py-2'}`}
            >
                {children}
            </div>

        </>
    )
}

export default Content