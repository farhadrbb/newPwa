import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { encryptRSA, sepreteNumber3 } from '../common/utils';




const useSendBtnConfirmFormModel = () => {
    const step = useSelector((state: any) => state.stepSlice.data.step1.data)
    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)

    const dataApi = (obj: any, formValue: any) => {
        let returnData = null
        let encPass = encryptRSA(formValue.password);
        let infoDataApi: any = {
            account: {
                accountNumber: activeAccount.accountNumber,
                amount: { amount: obj.amount.replace(/\,/g, ""), type: "IRR" },
                destinationAccountNumber: obj.destinationAccountNumber,
                destinationDescription: obj?.destinationDescription,
                sourceDescription: obj?.sourceDescription,
                transferIdentifier1: obj?.transferIdentifier1,
                accountPassword: encPass
            },
            mobileAccount: {
                accountNumber: activeAccount.accountNumber,
                destinationPhoneNumber: obj.destinationPhoneNumber,
                amount: { amount: obj.amount.replace(/\,/g, ""), type: "IRR" },
                destinationAccountNumber: obj.destinationAccountNumber,
                destinationDescription: obj?.destinationDescription,
                sourceDescription: obj?.sourceDescription,
                transferIdentifier1: obj?.transferIdentifier1,
                accountPassword: encPass
            },
            payaAccount: {
                accountNumber: activeAccount.accountNumber,
                amount: { amount: obj.amount.replace(/\,/g, ""), type: "IRR" },
                destinationIBANNumber: obj.destinationIBANNumber,
                accountPassword: encPass
            },
            billAccount: {
                accountNumber: activeAccount.accountNumber,
                amount: { amount: obj.amount.replace(/\,/g, ""), type: "IRR" },
                billIdentifier: obj.billIdentifier,
                paymentIdentifier: obj.paymentIdentifier,
                accountPassword: encPass,
                type: step.resultApi?.result?.info?.type,
            },

        }



        returnData = infoDataApi?.[step?.type]
        return returnData
    }


    let keyApi: any = {
        account: "accountTransferToAccount",
        mobileAccount: "accountTransferMobile",
        payaAccount: "accountTransferToIban",
        billAccount: 'accountPayBill'
    }



    return [dataApi,keyApi]
}

export default useSendBtnConfirmFormModel;