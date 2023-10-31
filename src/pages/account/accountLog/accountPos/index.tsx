import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ActiveAccount from '../../../../component/activeAccount';
import Box from '../../../../component/box';
import BtnCustom from '../../../../component/btnCustom';
import InputCustom from '../../../../component/inputCustom';
import { useDispatch, useSelector } from 'react-redux';
import { usePostAllDataMutation } from '../../../../redux/api/allApi';


interface IFormValue {
    fromDate?: number,
    toDate?: number,
    terminalCode: string,
    mail: string,
}


const AccountPos = () => {
    // ___________________________________________HOOK__________________________________
    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)
    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const [postData, resultPostData] = usePostAllDataMutation()
    const { t } = useTranslation()

    // ___________________________________________Varibles__________________________________
    const dataForm = [
        {
            title: t("POS"),
            name: 'terminalCode',
            type: "text",
            value: formValue?.terminalCode,
            active: true,
        },
        {
            title: t('FROM_DATE'),
            name: 'fromDate',
            type: "date",
            col: "1",
            value: formValue?.fromDate,
            active: true,
            btn: {
                icon: <BsFillCalendar2EventFill className='text-blue text-sm' />
            },
        },
        {
            title: t('TO_DATE'),
            name: 'toDate',
            col: "1",
            type: "date",
            value: formValue?.toDate,
            active: true,
            btn: {
                icon: <BsFillCalendar2EventFill className='text-blue text-sm' />
            },
        },
        {
            title: `${t("EMAIL")}`,
            name: 'mail',
            type: "text",
            value: formValue?.mail,
            active: true,
        },
    ]

    // ___________________________________________Functions__________________________________

    function handleSendClick(type: string) {
        let filterObj: any = {
            accountNumber: activeAccount.accountNumber,
            fromDate: formValue?.fromDate,
            terminalCode: formValue?.terminalCode,
            toDate: formValue?.toDate
        }
        if (type === "TURNOVER") {
            filterObj["mail"] = formValue?.mail
        }
        if (type === "VIEW") {
            filterObj["paging"] = {
                pageNumber: 1,
                pageSize: 10,
                totalCount: 0
            }
        }
        postData({ url: type === "VIEW" ? "accountShaparakShow" : "accountShaparakEmail", body: filterObj })
    }



    return (
        <>
            <div className="mb-3">
                <InputCustom
                    dataForm={dataForm}
                    formValues={formValue}
                    setFormValues={setFormValue}
                />
            </div>
            <div className='flex mt-10'>
                <BtnCustom title={t('VIEW')} click={() => handleSendClick('VIEW')} />
                <BtnCustom title={t('TURNOVER')} classNameBtn="!bg-blue" click={() => handleSendClick("TURNOVER")} />
            </div>
        </>
    );
}

export default AccountPos;