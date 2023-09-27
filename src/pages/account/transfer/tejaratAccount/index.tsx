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

interface IFormValue {
    amount: string,
    destAccountNumber: string,
    desTransfer: boolean
    transferId: boolean
}

const TejaratAccountTransfer = () => {

    // ___________________________________Hook_______________________

    const step = useSelector((state: any) => state.stepSlice.data)
    const active = useSelector((state: any) => state.activeCardOrAccount.activeAccount)

    const [formValue, setFormValue] = React.useState<IFormValue>({
        amount: step.step1?.data?.formValue?.amount || '',
        destAccountNumber: step.step1?.data?.formValue?.destAccountNumber || '',
        desTransfer: step.step1?.data?.formValue?.desTransfer || '',
        transferId: step.step1?.data?.formValue?.transferId || ''
    } as IFormValue)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [postData, resultPostData] = usePostAllDataMutation()

    // ______________________________________varibles_____________________________
    const dataFormTejarat = [
        {
            title: 'شماره حساب مقصد',
            name: 'destAccountNumber',
            type: "number",
            active: true,
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
            btn: {
                // title: 'ماشین حساب',
                click: () => handleClickBtnInput(),
                icon: <div className='p-2 bg-blue rounded-full '><BsCalculator className='text-white' /></div>
            },
            active: true
        },
        {
            title: 'شرح انتقال',
            name: 'desTransfer',
            type: "checkBox",
            active: true
        },
        {
            title: 'شرح مبدا',
            name: 'desSource',
            type: "number",
            active: formValue.desTransfer

        },
        {
            title: 'شرح مقصد',
            name: 'desDes',
            type: "amount",
            active: formValue.desTransfer
        },
        {
            title: 'شناسه واریز',
            name: 'transferId',
            type: "checkBox",
            active: true
        },
        {
            title: '',
            name: 'desSource',
            type: "number",
            active: formValue.transferId

        },

    ]

    // ______________________________________function_____________________________
    const handleClickSend = () => {
        let body = {
            amount: {
                amount: formValue.amount.replace(/\,/g, ""),
                type: active.balance.type,
            },
            destinationAccountNumber: formValue.destAccountNumber,
            externalRequestId: 0,
            requestSourceType: "CUSTOMER_NORMAL",
            sourceAccountNumber: active.accountNumber,
            transferIdentifier1: formValue.transferId,
        }

        postData({ url: 'accountTransferVerifyAccount', body })
    }



    const handleClickBtnInput = () => {

        dispatch(setStepsSlice({
            step1: {
                id: 1,
                pathname: URLS.account.destAccounts,
                title: 'انتخاب مقصد',
                backUrl1: '/account/transfer',
                backToHome: '/account',
                data: { formValue },
                add: true
            }
        }))
        navigate(URLS.account.destAccounts)


    }

    // ________________________________________________useEffect___________________________
    useEffect(() => {
        if (resultPostData.isSuccess) {
            dispatch(setStepsSlice({
                step1: {
                    id: 1,
                    pathname: URLS.account.confirmTransfer,
                    title: 'تایید انتقال وجه',
                    backUrl1: URLS.account.transfer,
                    backToHome: '/account',
                    data: { formValue, resultApi: resultPostData.data, type: 'account' },
                    add: true
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