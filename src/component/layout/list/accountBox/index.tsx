import * as React from 'react';
import { useTranslation } from 'react-i18next';
import logo_t_img from "../../../../assest/img/logo_t.png"
import { dateStampToShamsi, sepreteNumber3 } from '../../../../common/utils';


const AccountBoxList = (props: any) => {
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
        <div className={`w-full h-full rounded-lg bg-blue relative text-white z-[60] shadow-lg shadow-gray-500  dark:shadow-darkMode-black border border-gray-400`} style={{fontFamily: 'TidFont'}} >
            <img src={logo_t_img} className={'w-[40px] h-[40px] absolute top-2 right-2'} />
            <div className='absolute top-5 right-16 text-xs' >{itm?.accountNumber}</div>
            <div className='text-xs absolute top-[6.5rem] right-5'>{t('ACCOUNT_NUMBER')}</div>
            <div className='text-xs absolute top-[6.5rem] left-5'>{itm?.accountNumber}</div>
            <div className='text-xs font-semibold absolute top-32 right-5'>{t('ACCOUNT_BALANCE')}</div>
            <div className='text-xs absolute font-semibold top-32 left-5'>{handleDataJsx(itm?.availableBalance?.amount, 'balance')}</div>
            <div className='text-[11px] absolute  bottom-3 left-5' style={{ direction: 'ltr' }}>{handleDataJsx(itm, "date")}</div>
        </div>
    </>
);
}

export default AccountBoxList;