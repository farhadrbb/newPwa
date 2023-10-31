import { useTranslation } from "react-i18next"

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { IMenu } from "../../../../component/itemsSelect";
import { IcChequeManagment } from "../../../../assest/img/icon/services";



function Digital() {
     // ___________________________________Hook_______________________

   const [modalShow, setModalShow] = useState<boolean>(false)
   const { t } = useTranslation()
   const navigate = useNavigate()


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
  

    setTimeout(() => {
        navigate(itm.route)
    }, 100);
}


  
    return (
        <div>
             55555
            </div>
    )
}
export default Digital