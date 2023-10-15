import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import useReceiptModel from '../../customHook/useReceiptModel';
import Box from '../box';
import BtnCustom from '../btnCustom';




const Receipt = () => {

    const { t } = useTranslation()
    const [infoData,infoTitle] = useReceiptModel()

    console.log("infoData",infoData);
    console.log("infoTitle",infoTitle);
    
  



    return (
        <>
            <Box>
                <div className='flex bg-gray-100 dark:bg-darkMode-black dark:text-gray-200  shadow-xl rounded-lg text-xs flex-col px-3 py-1'>
                    {Object.keys(infoData ? infoData :{}).map((itm: any, ind: any, { length }): any => {
                        return (
                            <>
                                {infoData?.[itm] && (
                                    <div className={`flex justify-between items-center  ${length - 1 != ind && ('border-b')}  py-3 dark:border-gray-500`}>
                                        <div>{infoTitle?.[itm]}</div>
                                        <div className='font-bold flex'>
                                            <div className={`${itm === "amount" || itm === 'destinationOwner' ? ('text-cyan-50') : ''}`}>{infoData?.[itm]}</div>
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