import { useTranslation } from "react-i18next"

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usePostAllDataMutation } from "../../../../redux/api/allApi";
import { IMenu } from "../../../../component/itemsSelect";
import { IcChequeManagment,  IcSayadConfirm, IcSayadInquiry } from "../../../../assest/img/icon/services";
import Box from "../../../../component/box";
import TabsCustom from "../../../../component/tabsCustom";
import VerticalItems, { VItem } from "../../../../component/itemsSelect/verticalItems";


function Sayad() {
     // ___________________________________Hook_______________________
   const { t } = useTranslation()
   const navigate = useNavigate()
  

    const SItems:VItem[] = [
        {
            title: t("SAYAD_CHECK_REGISTER"),
            icon: IcSayadInquiry,
            onClick: ()=>{
                console.log('test')
            }
           
        },
        {
            title: t("CONFIRM_REJECT_CHEQUE"),
            icon: IcSayadInquiry,
            onClick: ()=>{
                console.log('test')
            }
        
           
        }
    ]
// ____________________________________functions________________________________


     // ______________________________________varibles_____________________________

    

  
    return (
        <div>
             
             <VerticalItems items={SItems} />
             <IcSayadConfirm/>

            </div>
    )
}
export default Sayad