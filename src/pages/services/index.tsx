import { useTranslation } from "react-i18next"
import { IcChequeManagment } from "../../assest/img/icon/services"
import ItemsSelect, { IMenu } from "../../component/itemsSelect"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usePostAllDataMutation } from "../../redux/api/allApi";
import { setStepsSlice } from "../../redux/slice/step";

function Services() {
   
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

    dispatch(setStepsSlice({
        step0: {
            pathname: itm.route,
            title: itm.title,
            backUrl1: '/services',
            backToHome: '/services',
            data: {},
            add: true
        }
    }))


    setTimeout(() => {
        navigate(itm.route)
    }, 100);
}
    return (
        <>  <div className="animate-[fade_0.8s_linear]">
        <div className="animate-[downAnime50_1s] ">
            <ItemsSelect menu={SItems}/>
        </div>
    </div></>
    )
}
export default Services