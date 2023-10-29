import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { sepreteNumber3 } from '../common/utils';




const useConfirmFormModel = () => {
    const step = useSelector((state: any) => state.stepSlice.data.step1.data)
    const { t } = useTranslation()


    const [state, setstate] = React.useState<any>({});
    const [title, setTitle] = React.useState<any>({});

    console.log("step.resultApi?.result?.info?.amount?.amount",sepreteNumber3(step.resultApi?.result?.info?.amount?.amount));
    


    let infoData: any = {
        account: {
            title: t('MONEY_TRANSFER'),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber: step.resultApi?.result?.destinationAccountNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            destinationDescription: step.formValue?.destinationDescription,
            sourceDescription: step.formValue?.sourceDescription,
            transferIdentifier1: step.formValue?.transferIdentifier1,
            amount: sepreteNumber3(step.resultApi?.result?.amount?.amount),
        },
        mobileAccount: {
            title: t('MONEY_TRANSFER_MOBILE'),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber: step.resultApi?.result?.destinationAccountNumber,
            destinationPhoneNumber: step.resultApi?.result?.destinationPhoneNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            amount: sepreteNumber3(step.resultApi?.result?.amount?.amount),
        },
        payaAccount: {
            title: t('TRANSFER_IBAN'),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationIBANNumber: step.resultApi?.result?.destinationIBANNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            bank: step.resultApi?.result?.destinationIBAN?.bank?.name,
            amount: sepreteNumber3(step.resultApi?.result?.amount?.amount),
        },
        billAccount: {
            title: step.resultApi?.result?.info?.type?.name,
            accountNumber: step.resultApi?.result?.accountNumber,
            billIdentifier: step.resultApi?.result?.info?.billIdentifier,
            paymentIdentifier: step.resultApi?.result?.info?.paymentIdentifier,
            amount: sepreteNumber3(step.resultApi?.result?.info?.amount?.amount),
        },

    }



    let infoTitle: any = {
        account: {
            title: t('TRANSACTION_TYPE'),
            sourceAccountNumber: t('SOURCE'),
            destinationAccountNumber: t('DESTINATION'),
            destinationOwner: t('ACCOUNT_OWNER_NAME'),
            destinationDescription: "شرح مقصد",
            sourceDescription: "شرح مبدا",
            amount: t('AMOUNT'),
        },
        mobileAccount: {
            title: t('TRANSACTION_TYPE'),
            sourceAccountNumber: t('SOURCE'),
            destinationAccountNumber: t('DESTINATION'),
            destinationOwner: t('ACCOUNT_OWNER_NAME'),
            amount: t('AMOUNT'),
            destinationPhoneNumber: t('DESTINATION_PHONE_NUMBER'),
        },
        payaAccount: {
            title: t('TRANSACTION_TYPE'),
            sourceAccountNumber: t('SOURCE'),
            destinationIBANNumber: t('DESTINATION'),
            destinationOwner: t('ACCOUNT_OWNER_NAME'),
            bank: t('BANK'),
            amount: t('AMOUNT'),
        },
        billAccount: {
            title: t('BILL_TYPE'),
            accountNumber: t('SOURCE'),
            billIdentifier:t("BILL_IDENTIFIRE"),
            paymentIdentifier: t("PAYMENT_IDENTIFIRE"),
            amount:  t('AMOUNT'),
        },
    }



    React.useEffect(() => {
        if (step) {
            setstate(infoData[step.type])
            setTitle(infoTitle[step.type])
        }
    }, [step.type]);

    return [state, title]
}

export default useConfirmFormModel;