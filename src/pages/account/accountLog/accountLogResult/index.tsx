import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { dateStampToShamsi, sepreteNumber3 } from '../../../../common/utils';
import ActiveAccount from '../../../../component/activeAccount';
import Box from '../../../../component/box';
import ImageBanks from '../../../../component/imageBank';
import { usePostAllDataMutation } from '../../../../redux/api/allApi';




const AccountLogResult = () => {

    const step = useSelector((state: any) => state.stepSlice.data)
    const { t } = useTranslation()
    const [stateData, setstateData] = useState([]);
    const handleClickItem = (itm: any) => {

    }
    const handleDataTitle = (itm: any) => {
        let title = itm.actionType == 1 ? t("DEPOSIT") : t("WITHDRAW");
        let icon = itm.actionType == 1 ? <FaPlusCircle className='text-cyan-50 text-lg' /> : <FaMinusCircle className='text-red-500 text-lg' />;
        return {
            title,
            icon
        }
    }

    useEffect(() => {
        if (step.step1.data.resultApi) {
            setstateData(step.step1?.data?.resultApi?.result?.transactions)
        }
    }, [step.step1.data]);




    return (
        <>
            <ActiveAccount />
            <Box >
                <div>
                    {stateData?.map((itm: any, ind: any) => (
                        <div className="boxItem-global !h-16 cursor-pointer" onClick={() => handleClickItem(itm)}>
                            <div className="flex text-xs  justify-between mt-1 items-center">
                                {/* <ImageBanks logKey={itm.bank?.logoKey} /> */}
                                <div className='flex'>
                                    <div >{handleDataTitle(itm)?.icon}</div>
                                    <div className="mr-2 dark:text-gray-100 font-bold">{handleDataTitle(itm)?.title}</div>
                                </div>
                                <div className='flex flex-col' style={{ direction: 'ltr' }}>
                                    <div className='flex mb-2'>
                                        <div className='font-bold mr-1 dark:text-gray-100'>{t("IRR")}</div>
                                        <div className='text-cyan-50 font-bold'>{sepreteNumber3(itm?.transactionAmount?.amount)}</div>
                                    </div>
                                    <div className='dark:text-gray-100 ' style={{ direction: 'ltr' }}>{dateStampToShamsi(itm?.dateMill)}</div>
                                </div>
                            </div>
                            <div className="mt-1 text-xs text-gray-500 dark:text-gray-200 font-bold flex justify-end w-full "></div>
                        </div>
                    ))}

                </div>
            </Box>
        </>
    );
}

export default AccountLogResult;