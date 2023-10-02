import * as React from 'react';
import { useTranslation } from 'react-i18next';
import logo_t_img from "../../../../assest/img/logo_t.png"
import { dateStampToShamsi, sepreteNumber3, sepreteNumber4 } from '../../../../common/utils';
import card_img from "../../../../assest/img/img_tejarat_card_bg.jpg"



const CardBox = (props: any) => {
    // _________________________Varibles______________________
    const { itm } = props
    // _________________________HOOK______________________
    const { t } = useTranslation()


    // _________________________Functions______________________
    const handleDataJsx = (item: any, type: string) => {
        if (type === 'balance') {
            let balance = item ?
                sepreteNumber3(item) : item === 0 || item === "0" ? 0 : t("UPDATE");
            return balance
        } else if (type === "date") {
            let latestUpdatedDate = dateStampToShamsi(item["lastBalanceUpdateDateMill"])
            return latestUpdatedDate
        }
    }


    return (
        <>
            <div className={`w-full h-full rounded-lg  relative text-black z-[60] shadow-lg shadow-gray-500 dark:shadow-darkMode-black border border-gray-400`} style={{ fontFamily: 'TidFont' }} >
                <img src={card_img} className={`w-full h-full rounded-lg text-black z-[30]`}  />
                <div className='absolute top-20 w-[95%] mx-auto text-sm z-[100]' style={{ fontFamily: 'CardNumber', direction: 'ltr' }} >
                    <div className='w-full flex justify-center'>{sepreteNumber4(itm?.cardNumber)}</div>
                </div>
                <div className='text-xs  absolute top-32 right-5 font-bold '>{t('ACCOUNT_BALANCE')}</div>
                <div className='text-xs absolute font-semibold top-32 left-5'>{handleDataJsx(itm?.availableBalance?.amount, 'balance')}</div>
                <div className='text-[11px] absolute  bottom-4 left-5' style={{ direction: 'ltr' }}>{handleDataJsx(itm, "date")}</div>
            </div>
        </>
    );
}

export default CardBox;