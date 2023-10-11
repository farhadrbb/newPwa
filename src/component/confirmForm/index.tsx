import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Box from '../box';
import InputCustom from '../inputCustom';
import OtpPassBtn from '../otpPassBtn';
import InfoBox from './infoBox';
import SendBtnConfirmForm from './sendBtn';


interface IFormValue {
    password: string,

}



const ConfirmForm = () => {
    const step = useSelector((state: any) => state.stepSlice.data.step1.data)
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


    let infoData: any = {
        account: {
            title: t('MONEY_TRANSFER'),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber: step.resultApi?.result?.destinationAccountNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            destinationDescription: step.formValue?.destinationDescription,
            sourceDescription: step.formValue?.sourceDescription,
            transferIdentifier1: step.formValue?.transferIdentifier1,
            amount: step.resultApi?.result?.amount?.amount,
        },
        mobileAccount: {
            title: t('MONEY_TRANSFER_MOBILE'),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber: step.resultApi?.result?.destinationAccountNumber,
            destinationPhoneNumber: step.resultApi?.result?.destinationPhoneNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            amount: step.resultApi?.result?.amount?.amount,
        },
        payaAccount: {
            title: t('TRANSFER_IBAN'),
            sourceAccountNumber: step.resultApi?.result?.sourceAccountNumber,
            destinationIBANNumber: step.resultApi?.result?.destinationIBANNumber,
            destinationOwner: step.resultApi?.result?.destinationOwner,
            bank: step.resultApi?.result?.destinationIBAN?.bank?.name,
            amount: step.resultApi?.result?.amount?.amount,
        },
    }



    let infoTitle: any = {
        account: {
            title: t('TRANSACTION_TYPE'),
            sourceAccountNumber: t('SOURCE'),
            destinationAccountNumber: t('DESTINATION'),
            destinationOwner: t('ACCOUNT_OWNER_NAME'),
            destinationDescription:"شرح مقصد",
            sourceDescription:"شرح مبدا",
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
    }




    // _________________________________________Hook____________________________


    const [infoDataState, setInfoDataState] = React.useState({
        ...infoData[step.type]
    });

    const [titleState, settitleState] = React.useState({
        ...infoTitle[step.type]
    });

    const [formValue, setformValue] = React.useState<IFormValue>(
        {
            password: ''
        }
    );




    // _________________________________________functions____________________________


    return (
        <>
            {/* <div className="animate-[fade_0.7s]">
                <div className="animate-[upAnime10_0.5s]"> */}

                    <Box>
                        <InfoBox infoDataState={infoDataState} titleState={titleState} />
                        <div className='mt-6'>
                            <InputCustom
                                dataForm={dataForm}
                                setFormValues={setformValue}
                                formValues={formValue}
                            />
                        </div>
                        <div className='flex justify-between mt-5'>
                            <SendBtnConfirmForm
                                infoDataObj={infoData[step.type]}
                                type={step.type}
                                formValue={formValue}
                                 />
                            <OtpPassBtn amount={infoData[step.type]?.amount} />
                        </div>
                    </Box>
                {/* </div>
            </div> */}
        </>
    );
}

export default ConfirmForm;