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
    minAmount: any,
    maxAmount: any,
    depositType: string,
    withdrawType: string,
    email: string,
}


const AccountLogEmail = () => {
    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)
    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const [postData, resultPostData] = usePostAllDataMutation()



    const { t } = useTranslation()

    const dataForm = [
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
            title: `${"از"} ${t("AMOUNT")}`,
            name: 'minAmount',
            type: "amount",
            col: "1",
            value: formValue?.minAmount,
            active: true,
        },
        {
            title: `${"تا"} ${t("AMOUNT")}`,
            name: 'maxAmount',
            type: "amount",
            col: "1",
            value: formValue?.maxAmount,
            active: true,
        },
        {
            title: `${t("DEPOSIT")}`,
            name: 'depositType',
            col: "1",
            type: "checkBox",
            value: formValue?.depositType,
            active: true,
        },
        {
            title: `${t("WITHDRAW")}`,
            name: 'withdrawType',
            type: "checkBox",
            value: formValue?.withdrawType,
            col: "1",
            active: true,
        },
        {
            title: `${t("EMAIL")}`,
            name: 'email',
            type: "text",
            value: formValue?.email,
            active: true,
        },

    ]


    function handleSendClick() {
        let filterObj:any = {
            accountNumber: activeAccount.accountNumber,
            email: formValue.email,
            filterType: 0,
            fileFormat: 0
        }
        if (formValue.fromDate) {
            filterObj["fromDateMill"] = formValue.fromDate;
        }
        if (formValue.toDate) {
            filterObj['toDateMill'] = formValue.toDate;
        }
        if (formValue.minAmount > 0) {
            filterObj["transactionMinimumAmount"] = {
                amount: formValue.maxAmount,
                type: "IRR"
            }
        }
        if (formValue.maxAmount > 0) {
            filterObj["transactionMaximumAmount"] = {
                amount: formValue.maxAmount,
                type: "IRR"
            }
        }
        if (formValue.depositType) {
            filterObj["transactionType"] = 1
        }
        if (formValue.withdrawType) {
            filterObj["transactionType"] = 0
        }
        if (formValue.withdrawType && formValue.depositType) {
            filterObj["transactionType"] = 2;
        }
        postData({url:"accountTransctionEmail",body:filterObj})
            // props.sendToMail(filterObj).then(response => {
            //     if (response && response.result &&
            //         response.result.accountNumber && response.resultStatus == 0) {
            //         // notify("", "TRANSACTIONS_SENT_SUCCESSFULLY", "success");
                    
            //     }
            // })
    }
    return (
        <>
            <ActiveAccount />
            <Box>
                <div className="mb-3">
                    <InputCustom
                        dataForm={dataForm}
                        formValues={formValue}
                        setFormValues={setFormValue}
                    />
                </div>
                <div className='flex mt-10'>
                    <BtnCustom title={t('SEND')} click={()=>handleSendClick()}/>
                </div>
            </Box>
        </>
    );
}

export default AccountLogEmail;