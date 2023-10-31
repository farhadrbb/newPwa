import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useConfirmFormModel from '../../../customHook/useConfirmModel';






const InfoBox = React.memo(() => {
    const { t } = useTranslation()
    const [infoData,infoTitle] = useConfirmFormModel()

    return (
        <>
            <div className='flex bg-gray-100 dark:bg-darkMode-black dark:text-gray-200  shadow-xl rounded-lg text-xs flex-col px-3 py-1'>
                {Object.keys(infoData).map((itm: any, ind: any, { length }): any => {
                    return (
                        <>
                            {infoData?.[itm] && (
                                <div className={`flex justify-between items-center  ${length - 1 != ind && ('border-b')}  py-3 dark:border-gray-600`}>
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
        </>
    );
})

export default InfoBox;