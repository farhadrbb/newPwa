import React, { useState, useEffect, memo } from "react";
import { CreditCardIcon, MenoIcon, ProfileIcon, WalletIcon } from "../../../assest/img/icon";
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
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


    //________________________________ varibles________________________
    let parentClass = "h-[80px] w-full   fixed bottom-0 left-0 flex justify-evenly items-center  py-2 px-1   "
    let parentLinkClass = "flex flex-col relative  items-center transition-all cursor-pointer w-[90px] "
    let isActiveClass = 'animate-[downAnime10_0.5s] text-blue font-bold !text-sm'

    let dataFooter = [
        {
            title: 'حساب ها',
            icon: WalletIcon,
            route: '/account'

        },
        {
            title: "کارت ها",
            icon: CreditCardIcon,
            route: '/card'

        },
        {
            title: 'خدمات',
            icon: MenoIcon,
            route: '/services'
        },
        {
            title: 'حساب کاربری',
            icon: ProfileIcon,
            route: '/profile'

        },
    ]
    //________________________________functions________________________
    const handleClickMenu = (itm: any) => {
        navigate(itm.route)
    }
    //________________________________useEffect________________________



    return (
        <>
            {handleRouteForLayout() && (
                <div className={parentClass} >
                    <div style={style} className="w-[97%] rounded-2xl relative dark:border-darkMode-gray bg-[rgba(255, 255, 255, 0.3)] border bg-white  dark:bg-darkMode-grayDark flex items-center justify-evenly py-2 px-2 h-full ">

                        {dataFooter.map((itm: any, ind: any) => (
                            <div className={`${parentLinkClass} ${location.pathname === itm.route ? 'text-sm ' : 'text-xs '}`} onClick={() => handleClickMenu(itm)}>
                                {location.pathname === itm.route && (

                                    <div className="absolute bottom-[100%] xs:left-[18%] bg-[rgba(255, 255, 255, 0.3)] bg-white dark:bg-darkMode-grayDark w-14 h-[14px]  rounded-[50%] border-t dark:border-darkMode-gray" ></div>
                                    // <div className="absolute bottom-[60px] left-[24%] bg-[rgba(255, 255, 255, 0.3)] bg-blue  w-12 h-[1px] rounded-full"></div>
                                )}

                                <span className={`mb-1 transition-all ${location.pathname === itm.route && ""}`}><itm.icon classNameIcon={`${location.pathname === itm.route ? 'fill-blue dark:fill-blue-500' : 'fill-gray-400 dark:fill-gray-400'}`} size={`22`} anime /></span>
                                <span className={`font-bold ${location.pathname === itm.route ? 'text-blue-500 dark:text-blue-500 animate-[downAnime10_1s]' : 'text-gray-500 dark:text-gray-400'}`}>{itm.title}</span>
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



