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
import { setNotifySlice } from "../../redux/slice/tool";


interface IFormValue {
    amount: string,
    price: string
}


const Card = () => {
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
            title: 'خدمات بدون کارت',
            icon: IcTopUpService,
            color: 'bg-itemSelect-blue',
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
            title: 'جزییات',
            icon: IcDetailsServices,
            color: 'bg-itemSelect-yellow',
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
        setTimeout(() => {
            navigate(itm.route)
        }, 200);
    }


    return (
        <>
            {/* <div className="animate-[fade_0.8s_linear]"> */}
                <div className="animate-[downAnime50_1s] ">
                    <ItemsSelect menu={menu} />
                </div>
            {/* </div> */}

            <ModalCustom show={modalShow} setShow={setModalShow}>
                <></>
            </ModalCustom>
        </>
    )
}


export default Card