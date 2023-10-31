import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { sepreteNumber3 } from '../common/utils';




const useReceiptModel = () => {
    const step = useSelector((state: any) => state.stepSlice.data.step2.data)
    const { t } = useTranslation()
    const [state, setstate] = React.useState<any>({});
    const [title, setTitle] = React.useState<any>({});


    const handleStatus = (str: string) => {

        if (str == 'SUCCESS') {
            return (
                <div className='flex items-center'>
                    <div >
                        {t("SUCCESS")}
                    </div>
                    <div>
                        <BsFillCheckCircleFill className='text-lg text-cyan-50 mr-1' />
                    </div>
                </div>
            )
        } else if (str == 'FAIL') {
            return (
                <div className='flex items-center'>
                    <div>
                        {t("FAIL")}
                    </div>
                    <div>
                        <IoCloseCircle className='text-lg text-red-500 mr-1' />
                    </div>
                </div>
            )
        } else if (!str && step.type === 'payaAccount') {
            return (
                <div className='flex items-center'>
                    <div>
                        {t("DOING")}
                    </div>
                    <div>
                        <IoCloseCircle className='text-lg text-red-500 mr-1' />
                    </div>
                </div>
            )
        } else {
            return (
                <div className='flex items-center'>
                    <div>
                        {t("SUCCESS")}
                    </div>
                    <div>
                        <BsFillCheckCircleFill className='text-lg text-cyan-50 mr-1' />
                    </div>
                </div>
            )
        }

    }

    let infoData: any = {
        account: {
            activityStatus: handleStatus(step.resultApi?.result?.activityStatus),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber: step.resultApi?.result?.destinationAccountNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            dateMill: step.resultApi?.result?.dateMill,
            traceNumber: step.resultApi?.result?.traceNumber,
            referenceNumber: step.resultApi?.result?.referenceNumber,
            amount: sepreteNumber3(step.resultApi?.result?.amount?.amount),
        },
        mobileAccount: {
            activityStatus: handleStatus(step.resultApi?.result?.activityStatus),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber: step.resultApi?.result?.destinationAccountNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            dateMill: step.resultApi?.result?.dateMill,
            traceNumber: step.resultApi?.result?.traceNumber,
            referenceNumber: step.resultApi?.result?.referenceNumber,
            amount: sepreteNumber3(step.resultApi?.result?.amount?.amount),
        },
        payaAccount: {
            activityStatus: handleStatus(step.resultApi?.result?.activityStatus),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationIBANNumber: step.resultApi?.result?.destinationIBANNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            dateMill: step.resultApi?.result?.dateMill,
            traceNumber: step.resultApi?.result?.traceNumber,
            referenceNumber: step.resultApi?.result?.referenceNumber,
            amount: sepreteNumber3(step.resultApi?.result?.amount?.amount),
        },
        billAccount: {
            activityStatus: handleStatus(step.resultApi?.result?.activityStatus),
            title: step.resultApi?.result?.billCompanyName,
            accountNumber: step.resultApi?.result?.accountNumber,
            billIdentifier: step.resultApi?.result?.billInfo?.billIdentifier,
            paymentIdentifier: step.resultApi?.result?.billInfo?.paymentIdentifier,
            amount: sepreteNumber3(step.resultApi?.result?.billInfo?.amount?.amount),
        },


    }

    let infoTitle: any = {
        account: {
            activityStatus: t("STATUS"),
            sourceAccountNumber: t("SOURCE_ACCOUNT"),
            destinationAccountNumber: t('DEST_ACCOUNT'),
            destinationOwner: t('ACCOUNT_OWNER_NAME'),
            dateMill: t('DATE_TIME'),
            traceNumber: t('TRACKING_CODE'),
            referenceNumber: t('REFRENCE_NUMBER'),
            amount: t('AMOUNT'),
        },
        mobileAccount: {
            activityStatus: t("STATUS"),
            sourceAccountNumber: t("SOURCE_ACCOUNT"),
            destinationAccountNumber: t('DEST_ACCOUNT'),
            destinationOwner: t('ACCOUNT_OWNER_NAME'),
            dateMill: t('DATE_TIME'),
            traceNumber: t('TRACKING_CODE'),
            referenceNumber: t('REFRENCE_NUMBER'),
            amount: t('AMOUNT'),
        },
        payaAccount: {
            activityStatus: t("STATUS"),
            sourceAccountNumber: t("SOURCE_ACCOUNT"),
            destinationIBANNumber: t('DEST_ACCOUNT'),
            destinationOwner: t('ACCOUNT_OWNER_NAME'),
            dateMill: t('DATE_TIME'),
            traceNumber: t('TRACKING_CODE'),
            referenceNumber: t('REFRENCE_NUMBER'),
            amount: t('AMOUNT'),
        },
        billAccount: {
            
            activityStatus: t("STATUS"),
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

export default useReceiptModel;