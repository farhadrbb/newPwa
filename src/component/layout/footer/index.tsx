import React, { useState, useEffect, memo } from "react";
import { CreditCardIcon, MenoIcon, ProfileIcon, WalletIcon } from "../../../assest/img/icon";
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { FaClipboardList, FaTools, FaWallet } from "react-icons/fa";
import ToolMenu from "./toolMenu";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingSlice } from "../../../redux/slice/tool";
// import icg_wallet from '../../../assest/img/wallet.svg'

const Footer = memo((props: any) => {
    const { children, handleRouteForLayout } = props
    let style = {
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
    }
    // ____________________________hook________________________________
    const navigate = useNavigate()
    const location = useLocation()
    const { t } = useTranslation()
    const [clickMenuLogin, setclickMenuLogin] = useState<any>(1);
    const [stateClickMenu, setstateClickMenu] = useState(false);
    const loading = useSelector((state: any) => state.toolsSlice.loading)
    const dispatch = useDispatch()


    //________________________________ varibles________________________
    let parentClass = "h-[60px] w-full   fixed bottom-0 left-0 flex justify-evenly items-center "
    let boxMenu = 'w-full  relative dark:border-darkMode-gray bg-[rgba(255, 255, 255, 0.3)]  rounded-full  border-gray-300 bg-gray-200  dark:bg-darkMode-grayDark flex items-center justify-evenly py-2 px-2 h-full '
    let parentLinkClass = "flex flex-col relative  items-center transition-all cursor-pointer w-[75px] "
    let classToolMenu = 'bg-cyan-50 w-10 h-10 flex justify-center items-center absolute -top-[22%] rounded-full  shadow-gray-400 dark:shadow-darkMode-black'
    let isActiveClass = 'animate-[downAnime10_0.5s] text-blue font-bold !text-sm'

    let dataFooter = [
        {
            title: 'حساب ها',
            icon: WalletIcon,
            // icon: FaWallet,
            route: '/account'

        },
        {
            title: "کارت ها",
            icon: CreditCardIcon,
            // icon: BsFillCreditCard2BackFill,
            route: '/card'

        },
        {
            title: 'خدمات',
            icon: MenoIcon,
            // icon: FaClipboardList,
            route: '/services'
        },
        {
            title: 'حساب کاربری',
            icon: ProfileIcon,
            // icon: BiSolidUser,
            route: '/profile'

        },
    ]
    //________________________________functions________________________
    const handleClickMenu = (itm: any) => {
        setstateClickMenu(false)
        navigate(itm.route)
    }
    //________________________________useEffect________________________
// useEffect(() => {
//     if(stateClickMenu){
//         dispatch(setLoadingSlice(true))
//     }
//     if(!stateClickMenu){
//         dispatch(setLoadingSlice(false))
//     }
// }, [loading]);


    return (
        <>
            {handleRouteForLayout() && (
                <div className={parentClass} >
                    <div className={boxMenu}>
                        <div className={classToolMenu} >
                            {stateClickMenu && (
                                <div className="animate-[fade_1s]">
                                    <AiOutlineClose className="text-white text-xl " onClick={() => setstateClickMenu(!stateClickMenu)} />
                                </div>
                            )}
                            {!stateClickMenu && (
                                <div className="animate-[fade_1s]">
                                    <FaTools className="text-white text-lg" onClick={() => setstateClickMenu(!stateClickMenu)} />
                                </div>
                            )}

                            <ToolMenu stateClickMenu={stateClickMenu} />
                        </div>

                        {dataFooter.map((itm: any, ind: any) => (
                            <div className={`${parentLinkClass} ${ind == 1 && ('ml-3')} ${ind == 2 && ('mr-3')} ${location.pathname === itm.route ? 'text-xs -translate-y-3 transition-all duration-1000' : 'text-xs '}`} onClick={() => handleClickMenu(itm)}>
                                {/* {location.pathname === itm.route && (

                                    <div className="absolute bottom-[100%] xs:left-[18%] bg-[rgba(255, 255, 255, 0.3)] bg-white dark:bg-darkMode-grayDark w-14 h-[14px]  rounded-[50%] border-t dark:border-darkMode-gray" ></div>
                                )} */}

                                <span style={location.pathname === itm.route ? {} : {}} className={`mb-1 transition-all duration-500 ${location.pathname === itm.route && "bg-blue-500 rounded-full flex justify-center items-center p-3 shadow-[0_0_10px_0px_rgba(0,0,0,0.5)] shadow-gray-400 dark:shadow-darkMode-black mb-2"}`}>
                                    <itm.icon className={`${location.pathname === itm.route ? 'fill-white  dark:fill-gray-200 ' : 'fill-black dark:fill-gray-400'}`} classNameIcon={`${location.pathname === itm.route ? 'fill-white  dark:fill-gray-200 ' : 'fill-gray-700 dark:fill-gray-400'}`} size={`22`} anime /></span>
                                <span className={`font-bold whitespace-nowrap text-[11px] ${location.pathname === itm.route ? 'text-blue-500 dark:text-blue-500 transition-all ' : 'text-gray-600 dark:text-gray-400 '}`}>{itm.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {location.pathname === '/login' && (
                <div className={`${parentClass} !justify-evenly`} >
                    <div style={style} className="w-[98%] rounded-3xl  dark:border-darkMode-gray bg-[rgba(255, 255, 255, 0.3)] bg-gray-100  dark:bg-darkMode-grayDark flex items-center justify-evenly py-2 px-2 h-full ">
                        <div className={`p-2 ${clickMenuLogin === 1 ? isActiveClass : 'text-gray-400 text-xs'}`} onClick={() => setclickMenuLogin(1)}>{t('MOBILE_BANK_TEJERAT')}</div>
                        <div className={`p-2 ${clickMenuLogin === 2 ? isActiveClass : 'text-gray-400 text-xs'}`} onClick={() => setclickMenuLogin(2)}>{t('SHETAB_LOGIN_LINK')}</div>
                    </div>
                </div>
            )}
        </>
    )
}
)

export default Footer



