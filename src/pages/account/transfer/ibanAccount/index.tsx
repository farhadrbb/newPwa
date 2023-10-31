import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BtnCustom from '../../../../component/btnCustom';
import InputCustom from '../../../../component/inputCustom';
import { setStepsSlice } from '../../../../redux/slice/step';
import { PiUserListBold } from 'react-icons/pi'
import { BsCalculator } from 'react-icons/bs'
import URLS from '../../../../common/url';
import { useLazyGetAllDataQuery, usePostAllDataMutation } from '../../../../redux/api/allApi';
import { useTranslation } from 'react-i18next';

interface IFormValue {
    amount: string,
    destinationIBAN: string,
    desTransfer: boolean
    transferId: boolean,
    transferIdentifier1: string
}

const TejaratAccountTransfer = () => {

    // ___________________________________Hook_______________________

    const step = useSelector((state: any) => state.stepSlice.data)
    const active = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    let formValueStep = step.step0?.data?.formValue
    const [formValue, setFormValue] = React.useState<IFormValue>({ ...formValueStep } as IFormValue)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [postData, resultPostData] = usePostAllDataMutation()
    const { t } = useTranslation()


    // ______________________________________varibles_____________________________
    const dataFormTejarat = [
        {
            title: 'شماره شبا مقصد',
            name: 'destinationIBAN',
            type: "number",
            active: true,
            value: formValue?.destinationIBAN,

            btn: {
                // title: 'انتخاب',
                click: () => handleClickBtnInput(),
                icon: <div className='p-2 bg-blue rounded-full '><PiUserListBold className='text-white' /></div>
            },
        },
        {
            title: 'مبلغ',
            name: 'amount',
            type: "amount",
            value: formValue?.amount,

            btn: {
                // title: 'ماشین حساب',
                click: () => handleClickBtnInput(),
                icon: <div className='p-2 bg-blue rounded-full '><BsCalculator className='text-white' /></div>
            },
            active: true
        },
        {
            title: 'شناسه واریز',
            name: 'transferId',
            type: "checkBox",
            value: formValue?.transferId,

            active: true
        },
        {
            title: '',
            name: 'transferIdentifier1',
            value: formValue?.transferIdentifier1,

            type: "number",
            active: formValue.transferId
        },

    ]


    // ______________________________________function_____________________________


    const dataApi = () => {


        let data = {
            amount: {
                amount: formValue.amount.replace(/\,/g, ""),
                type: active.balance.type,
            },
            destinationIBAN: formValue.destinationIBAN,
            externalRequestId: 0,
            requestSourceType: "CUSTOMER_NORMAL",
            sourceAccountNumber: active.accountNumber,
            transferIdentifier1: formValue.transferId,
        }
        return data

    }




    const handleClickSend = () => {
        let body = dataApi()
        postData({ url: 'accountVerifyIban', body })
    }



    const handleClickBtnInput = () => {

        dispatch(setStepsSlice({
            step1: {
                pathname: URLS.account.destAccounts,
                title: 'انتخاب مقصد',
                backUrl1:URLS.account.transfer,
                backToHome: '/account',
                data: {
                    formValue, apiKey: "accountIbanDestination",
                    dataReceipt: {
                        title: t('PAYMENT_RECEIPT'),
                        backUrl1: URLS.account.transfer,
                        backToHome: '/account',
                    },
                    activeTab: 2,
                },
            }
        }))
        navigate(URLS.account.destAccounts)


    }

    // ________________________________________________useEffect___________________________
    useEffect(() => {
        if (resultPostData.isSuccess) {
            dispatch(setStepsSlice({
                step1: {
                    pathname: URLS.account.confirmTransfer,
                    title: 'تایید انتقال وجه',
                    backUrl1: URLS.account.transfer,
                    backToHome: '/account',
                    data: {
                        formValue,
                        resultApi: resultPostData.data,
                        type: 'payaAccount',
                        activeTab: 2,
                    },
                }
            }))
            navigate(URLS.account.confirmTransfer)
        }
    }, [resultPostData]);

    return (
        <>
            <div className='flex flex-col'>
                <InputCustom
                    dataForm={dataFormTejarat}
                    setFormValues={setFormValue}
                    formValues={formValue}
                />
                <div className='mt-6'>
                    <BtnCustom title='ارسال' click={handleClickSend} />
                </div>
            </div>
        </>
    );
}

export default TejaratAccountTransfer;