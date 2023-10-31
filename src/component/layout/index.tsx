import React, { useMemo ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setStepsSliceEmpty } from "../../redux/slice/step";
import Loading from "../loading";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";


const Layout = (props: any) => {
    const { children } = props

    // ______________________________hook___________________

    const location = useLocation()
    const dispatch = useDispatch()
    // ____________________________________functions________________
    const handleRouteForLayout = (itm?: string) => {
        let flag = false
        switch (location.pathname) {
            case '/account':
                
                flag = true
                return flag;

            case '/card':
                flag = true
                return flag;

            case '/services':
                flag = true
                return flag;

            case '/profile':
                flag = true
                return flag;

            default:
                return;
        }

    }

    useEffect(() => {
        if(location.pathname === '/account'){
            dispatch(setStepsSliceEmpty(true))
        }
        if(location.pathname === '/card'){
            dispatch(setStepsSliceEmpty(true))
        }
        if(location.pathname === '/service'){
            dispatch(setStepsSliceEmpty(true))
        }
        if(location.pathname === '/profile'){
            dispatch(setStepsSliceEmpty(true))
        }
    }, [location]);

    return (
        <>
            <div className="flex flex-col w-full h-full relative bg-white dark:bg-darkMode-black ">
                <Header handleRouteForLayout={handleRouteForLayout}></Header>
                <Content handleRouteForLayout={handleRouteForLayout}>{children}</Content>
                <Footer handleRouteForLayout={handleRouteForLayout}></Footer>
            </div>
        </>
    )
}

export default Layout