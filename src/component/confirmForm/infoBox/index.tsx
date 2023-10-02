import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Box from '../../box';



interface IProp {
    formValue: any,
    titleState:any

}



const InfoBox = (props:IProp) => {
    const step = useSelector((state: any) => state.stepSlice.data.step1.data)
    const { t } = useTranslation()
    const {formValue,titleState} = props
    // _________________________________________varibles____________________________
  




    // _________________________________________Hook____________________________


   

  


    // _________________________________________functions____________________________





    return (
        <>


                <div className='flex bg-gray-100 dark:bg-darkMode-black dark:text-gray-200  shadow-xl rounded-lg text-xs flex-col p-3'>
                    {Object.keys(formValue).map((itm: any, ind: any, { length }) => {
                        return (
                            <div className={`flex justify-between items-center mb-3 ${length - 1 != ind && ('border-b')}  py-1 dark:border-gray-500`}>
                                <div>{titleState?.[itm]}</div>
                                <div className='font-bold flex'>
                                    <div className={`${itm === "amount" || itm === 'destinationOwner' ? ('text-cyan-50') : ''}`}>{formValue?.[itm]}</div>
                                    {itm === "amount" && (
                                        <div className='mr-1'>{t('RIAL')}</div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

        </>
    );
}

export default InfoBox;