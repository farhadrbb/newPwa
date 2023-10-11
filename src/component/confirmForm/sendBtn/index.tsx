import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../common/url';
import { encryptRSA } from '../../../common/utils';
import { usePostAllDataMutation } from '../../../redux/api/allApi';
import { setStepsSlice } from '../../../redux/slice/step';
import BtnCustom from '../../btnCustom';




const SendBtnConfirmForm = (props: any) => {
    // _____________________________varibles_______________________

    const { infoDataObj, type, formValue } = props

    // _____________________________hook_______________________
    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const step = useSelector((state: any) => state.stepSlice.data)

    const [postData, resultPostData] = usePostAllDataMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()



    // _____________________________functions_______________________
    const dataApi = (obj: any) => {
        let returnData = null
        let encPass = encryptRSA(formValue.password);
        let infoDataApi: any = {
            account: {
                accountNumber: activeAccount.accountNumber,
                amount: obj.amount,
                destinationAccountNumber: obj.destinationAccountNumber,
                destinationDescription: obj?.destinationDescription,
                sourceDescription: obj?.sourceDescription,
                transferIdentifier1: obj?.transferIdentifier1,
                accountPassword: encPass
            },
            mobileAccount: {
                accountNumber: activeAccount.accountNumber,
                destinationPhoneNumber: obj.destinationPhoneNumber,
                amount: obj.amount,
                destinationAccountNumber: obj.destinationAccountNumber,
                destinationDescription: obj?.destinationDescription,
                sourceDescription: obj?.sourceDescription,
                transferIdentifier1: obj?.transferIdentifier1,
                accountPassword: encPass
            },
            payaAccount: {
                accountNumber: activeAccount.accountNumber,
                amount: obj.amount,
                destinationIBANNumber: obj.destinationIBANNumber,
                accountPassword: encPass
            }
        }
        returnData = infoDataApi?.[type]
        return returnData
    }





    const handleClick = (obj: any) => {
        let keyApi: any = {
            account: "accountTransferToAccount",
            mobileAccount: "accountTransferMobile",
            payaAccount: "accountTransferToIban"
        }
        let body = dataApi(obj)
        postData({ url: keyApi[type], body })
    }

    // _____________________________useEffect_______________________

    useEffect(() => {
        if (resultPostData.isSuccess && resultPostData.data) {
            dispatch(setStepsSlice({
                step2: {
                    pathname: URLS.account.receipt,
                    title: 'رسید انتقال وجه',
                    backUrl1: URLS.account.transfer,
                    backToHome: '/account',
                    data: { resultApi: resultPostData.data, type: type },
                }
            }))

            dispatch(setStepsSlice({
                step1: {
                    ...step.step1,
                    data: {},
                }
            }))
            navigate(URLS.account.receipt)
        }
    }, [resultPostData]);


    return (
        <>
            <BtnCustom title='ارسال' click={() => handleClick(infoDataObj)} />
        </>
    );
}

export default SendBtnConfirmForm;