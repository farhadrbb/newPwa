import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useConfirmFormModel from '../../customHook/useConfirmModel';
import Box from '../box';
import InputCustom from '../inputCustom';
import OtpPassBtn from '../otpPassBtn';
import InfoBox from './infoBox';
import SendBtnConfirmForm from './sendBtn';


interface IFormValue {
    password: string,

}



const ConfirmForm = () => {
    const { t } = useTranslation()

    // _________________________________________varibles____________________________
    const dataForm = [
        {
            title: t('ACCOUNT_MOBILE_BANK_PASS'),
            name: 'password',
            type: 'password',
            active: true
        },
    ]

    // _________________________________________Hook____________________________
    const [formValue, setformValue] = React.useState<IFormValue>({password: ''})
    // _________________________________________functions____________________________
  


    return (
        <>
            <Box>
                <InfoBox/>
                <div className='mt-6'>
                    <InputCustom
                        dataForm={dataForm}
                        setFormValues={setformValue}
                        formValues={formValue}
                    />
                </div>
                <div className='flex justify-between mt-5'>
                    <SendBtnConfirmForm
                        formValue={formValue}
                    />
                    <OtpPassBtn />
                </div>
            </Box>
            
         
        </>
    );
}

export default ConfirmForm;