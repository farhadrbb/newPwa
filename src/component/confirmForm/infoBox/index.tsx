import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';




interface IProp {
    infoDataState: any,
    titleState: any

}



const InfoBox = (props: IProp) => {
    const step = useSelector((state: any) => state.stepSlice.data.step1.data)
    const { t } = useTranslation()
    const { infoDataState, titleState } = props
    // _________________________________________varibles____________________________





    // _________________________________________Hook____________________________







    // _________________________________________functions____________________________


    




    return (
        <>
            <div className='flex bg-gray-100 dark:bg-darkMode-black dark:text-gray-200  shadow-xl rounded-lg text-xs flex-col px-3 py-1'>
                {Object.keys(infoDataState).map((itm: any, ind: any, { length }): any => {
                    return (
                        <>
                            {infoDataState?.[itm] && (
                                <div className={`flex justify-between items-center  ${length - 1 != ind && ('border-b')}  py-3 dark:border-gray-600`}>
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
        </>
    );
}

export default InfoBox;