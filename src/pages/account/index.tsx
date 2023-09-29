import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileIcon } from "../../assest/img/icon";
import { IcAccountCar, IcAccountLogService, IcBalanceServicesIcon, IcBillService, IcCharityServices, IcDetailsServices, IcInternetService, IcOrganPaymentServies, IcRequstMoney, IcTopUpService, IcTransferService } from "../../assest/img/icon/services";

import { IInputCustom, ItemsTab } from "../../common/types";
import Box from "../../component/box";
import InputCustom from "../../component/inputCustom";
import ItemsSelect, { IMenu } from "../../component/itemsSelect";
import ModalCustom from "../../component/modalCustom";
import TabsCustom from "../../component/tabsCustom";
import { setStepsSlice } from "../../redux/slice/step";
import { setNotifySlice } from "../../redux/slice/tool";


interface IFormValue {
    amount: string,
    price: string
}


const Account = () => {
    // ___________________________________Hook_______________________

    const [formValue, setFormValue] = useState<IFormValue>({} as IFormValue)
    const [modalShow, setModalShow] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // ______________________________________varibles_____________________________
    const menu: IMenu[] = [
        {
            title: 'موجودی',
            icon: IcBalanceServicesIcon,
            color: 'bg-itemSelect-cyan',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'انتقال وجه',
            icon: IcTransferService,
            color: 'bg-itemSelect-purple',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'گردش حساب',
            icon: IcAccountLogService,
            color: 'bg-itemSelect-red',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'پرداخت قبوض',
            icon: IcBillService,
            color: 'bg-itemSelect-cyanDark',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'شارژ سیم کارت',
            icon: IcTopUpService,
            color: 'bg-itemSelect-blue',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'بسته اینترنت',
            icon: IcInternetService,
            color: 'bg-itemSelect-cyan',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'درخواست وجه',
            icon: IcRequstMoney,
            color: 'bg-itemSelect-purpleLight',
            fill: 'fill-itemSelect-graylight dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'خدمات خودرو',
            icon: IcAccountCar,
            color: 'bg-itemSelect-cyan',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'پرداخت سازمانی',
            icon: IcOrganPaymentServies,
            color: 'bg-itemSelect-orange',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'جزییات',
            icon: IcDetailsServices,
            color: 'bg-itemSelect-yellow',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
        {
            title: 'نیکو کاری',
            icon: IcCharityServices,
            color: 'bg-itemSelect-purpleLight',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/account/transfer',
            onclick: (itm: IMenu) => handleOnclickItem(itm)
        },
    ]
    // ____________________________________functions________________________________

    const handleOnclickItem = (itm: IMenu) => {
        if (itm.title === 'جزییات') {
            setModalShow(true)
            return
        }


        dispatch(setStepsSlice({
            step0: {
                id: 0,
                pathname: itm.route,
                title: itm.title,
                backUrl1: '/account',
                backToHome: '/account',
                data: {},
                add: true
            }
        }))


        setTimeout(() => {
            navigate(itm.route)
        }, 100);
    }


    return (
        <>
            <div className="animate-[fade_0.5s_linear]">
                <div className="animate-[downAnime50_1.3s] ">
                    <ItemsSelect menu={menu} />
                </div>
            </div>

            <ModalCustom show={modalShow} setShow={setModalShow}>
                <div>
                    <div>fdf</div>
                    <div>fdf</div>
                    <div>fdf</div>
                    <div>fdf</div>
                    <div>fdf</div>
                </div>
            </ModalCustom>
        </>
    )
}


export default Account