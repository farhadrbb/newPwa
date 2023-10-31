import { useTranslation } from "react-i18next"

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usePostAllDataMutation } from "../../../../redux/api/allApi";
import { IMenu } from "../../../../component/itemsSelect";
import { IcChequeManagment } from "../../../../assest/img/icon/services";
import Box from "../../../../component/box";
import TabsCustom from "../../../../component/tabsCustom";


function Sayad() {
     // ___________________________________Hook_______________________

   const [modalShow, setModalShow] = useState<boolean>(false)
   const { t } = useTranslation()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
   const [postData, resultPostData] = usePostAllDataMutation()

    const SItems:IMenu[] = [
        {
            title: t("CHEQUE_MANAGEMENT"),
            icon: IcChequeManagment,
            color: 'bg-itemSelect-cyan',
            fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
            route: '/services/cheque',
            onclick: (item: IMenu) => handleOnclickItem(item)
        }
    ]
// ____________________________________functions________________________________

const handleOnclickItem = (itm: IMenu) => {
    // if (itm.title === 'جزییات') {
    //     setModalShow(true)
    //     return
    // }
    // if (itm.title === 'موجودی') {
    //     let body = {
    //         accountNumber: activeAccount.accountNumber
    //     }
    //     postData({ url: 'accountSourceBalance', body })
    //     return
    // }



    // dispatch(setStepsSlice({
    //     step0: {
    //         pathname: itm.route,
    //         title: itm.title,
    //         backUrl1: '/account',
    //         backToHome: '/account',
    //         data: {},
    //         add: true
    //     }
    // }))


    setTimeout(() => {
        navigate(itm.route)
    }, 100);
}

     // ______________________________________varibles_____________________________

     let dataTab = [
        {
            id: 0,
            title: t("PAPER_CHEQUE")
        },
        {
            id: 1,
            title: t("ELECTRONIC_CHEQUE"),
        },
       
    ]

  
    return (
        <div>
             jh
            </div>
    )
}
export default Sayad