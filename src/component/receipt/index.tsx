import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import Box from '../box';
import BtnCustom from '../btnCustom';




const Receipt = () => {

    const step = useSelector((state: any) => state.stepSlice?.data?.step2.data)
    const { t } = useTranslation()

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
            amount: step.resultApi?.result?.amount.amount,
        },
        mobileAccount: {
            activityStatus: handleStatus(step.resultApi?.result?.activityStatus),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber: step.resultApi?.result?.destinationAccountNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            dateMill: step.resultApi?.result?.dateMill,
            traceNumber: step.resultApi?.result?.traceNumber,
            referenceNumber: step.resultApi?.result?.referenceNumber,
            amount: step.resultApi?.result?.amount.amount,
        }
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
        }
    }

    const [infoDataState, setInfoDataState] = React.useState({
        ...infoData[step.type]
    });

    const [titleState, settitleState] = React.useState({
        ...infoTitle[step.type]
    });





    return (
        <>
            <Box>
                <div className='flex bg-gray-100 dark:bg-darkMode-black dark:text-gray-200  shadow-xl rounded-lg text-xs flex-col p-3'>
                    {Object.keys(infoDataState).map((itm: any, ind: any, { length }): any => {
                        return (
                            <>
                                {infoDataState?.[itm] && (
                                    <div className={`flex justify-between items-center mb-3 ${length - 1 != ind && ('border-b')}  py-1 dark:border-gray-500`}>
                                        <div>{titleState?.[itm]}</div>
                                        <div className='font-bold flex'>
                                            <div className={`${itm === "amount" || itm === 'destinationOwner' ? ('text-cyan-50') : ''}`}>{infoDataState?.[itm]}</div>
                                            {itm === "amount" && (
                                                <div className='mr-1'>{t('RIAL')}</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </>

                        )
                    })}
                </div>
                <div className='flex w-full justify-center text-xs text-center border border-blue dark:text-gray-100 font-semibold mt-5 rounded-md p-2'>
                    {t("TEJARAT_AD_MESSAGE")}
                </div>
                <div className='flex justify-between mt-5'>
                    <BtnCustom
                        title="اشتراک عکس رسید"
                        classNameBtn='whitespace-nowrap !text-[10px] !sm:text-xs'
                        icon={<AiOutlineShareAlt className='text-xl ml-1 ' />} />
                    <BtnCustom
                        title="اشتراک متن رسید"
                        classNameBtn='!bg-blue whitespace-nowrap !text-[10px] !sm:text-xs'
                        icon={<AiOutlineShareAlt className='text-xl ml-1 ' />} />
                </div>
            </Box>
        </>
    );
}

export default Receipt;