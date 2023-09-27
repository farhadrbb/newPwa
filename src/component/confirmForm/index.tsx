import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Box from '../box';
import BtnCustom from '../btnCustom';
import InputCustom from '../inputCustom';
import { MdKey } from 'react-icons/md'
import { sepreteNumber3 } from '../../common/utils';


// interface IFormValue {
//     type: string,

// }



const ConfirmForm = () => {
    const step = useSelector((state: any) => state.stepSlice.data)
    const { t } = useTranslation()
    // _________________________________________varibles____________________________
    const dataForm = [
        {
            title: t('ACCOUNT_MOBILE_BANK_PASS'),
            name: 'pass',
            type: 'password',
            active: true
        }
    ]


    let infoData: any = {
        account: {
            title: t('MONEY_TRANSFER'),
            sourceAccountNumber:step.step1?.data?.resultApi?.result?.sourceAccountNumber,
            destinationAccountNumber:step.step1?.data?.resultApi?.result?.destinationAccountNumber,
            destinationOwner:step.step1?.data?.resultApi?.result?.destinationOwner,
            amount:step.step1?.data?.resultApi?.result?.amount?.amount,
        },
        mobileAccount: t('MONEY_TRANSFER_MOBILE'),
        payaAccount: t('MONEY_TRANSFER'),
    }



    let infoTitle:any= {
        account: {
            title1: t('TRANSACTION_TYPE'),
            title2: t('SOURCE'),
            title3: t('DESTINATION'),
            title4: t('ACCOUNT_OWNER_NAME'),
            title5: t('AMOUNT'),
        },
        mobileAccount: {
            title1: t('MONEY_TRANSFER'),
            title2: t('MONEY_TRANSFER'),
            title3: t('MONEY_TRANSFER'),
            title4: t('MONEY_TRANSFER'),
            title5: t('MONEY_TRANSFER'),
        },
        payaAccount: {
            title1: t('MONEY_TRANSFER'),
            title2: t('MONEY_TRANSFER'),
            title3: t('MONEY_TRANSFER'),
            title4: t('MONEY_TRANSFER'),
            title5: t('MONEY_TRANSFER'),
        },
    }




    // _________________________________________Hook____________________________


    const [formValue, setformValue] = React.useState({
        ...infoData[step.step1?.data?.type]
    });

    const [titleState, settitleState] = React.useState({
        ...infoTitle[step.step1?.data?.type]
    });

    


    // _________________________________________functions____________________________






    return (
        <>
          <div className="animate-[fade_0.7s]">
                <div className="animate-[upAnime10_0.5s]">
                    <Box>
                        <div className='flex bg-gray-100 dark:bg-darkMode-grayDark dark:text-gray-200  shadow-xl rounded-lg text-xs flex-col p-3'>
                            <div className='flex justify-between items-center mb-3 border-b py-1 dark:border-gray-500'>
                                <div>{titleState.title1}</div>
                                <div className='font-bold'>{formValue?.title}</div>
                            </div>
                            <div className='flex justify-between items-center mb-3 border-b dark:border-gray-500 py-1'>
                                <div>{titleState.title2}</div>
                                <div className='font-bold'>{formValue?.sourceAccountNumber}</div>
                            </div>
                            <div className='flex justify-between items-center mb-3 border-b dark:border-gray-500 py-1'>
                                <div>{titleState.title3}</div>
                                <div className='font-bold'>{formValue?.destinationAccountNumber}</div>
                            </div>
                            <div className='flex justify-between items-center mb-3 border-b dark:border-gray-500 py-1'>
                                <div>{titleState.title4}</div>
                                <div className='font-bold text-cyan-50'>{formValue?.destinationOwner}</div>
                            </div>
                            <div className='flex justify-between items-center mb-3'>
                                <div>{titleState.title5}</div>
                                <div className='flex font-bold'>
                                    <div className='text-cyan-50 text-sm font-bold ml-1'>{sepreteNumber3(formValue.amount)}</div>
                                    <div>ریال</div>
                                </div>
                            </div>
                        </div>


                        <div className='mt-6'>
                            <InputCustom
                                dataForm={dataForm}
                                setFormValues={setformValue}
                                formValues={formValue}
                            />
                        </div>
                        <div className='flex justify-between mt-5'>
                            <BtnCustom title='ارسال' />
                            <BtnCustom title='پیامکی' classNameBtn='bg-yellow-500' icon={<div className='ml-1 text-lg'><MdKey /></div>} />
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default ConfirmForm;