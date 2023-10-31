import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { IoSave } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../../common/url';
import BtnCustom from '../../../../component/btnCustom';
import ImageBanks from '../../../../component/imageBank';
import InputCustom from '../../../../component/inputCustom';
import { setStepsSlice } from '../../../../redux/slice/step';



interface IFormValue {

    inquery: string
}
const BillInquery = () => {
    const step = useSelector((state: any) => state.stepSlice.data)

    let formValueStep = step.step0?.data?.formValue
    const [formValue, setFormValue] = React.useState<IFormValue>({...formValueStep} as IFormValue)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const BillTypes: any = [
        {

            logo_key: "ic_electricity",
            field: "billIdentifier",
            code: 0,
            type: "ELECTRICITY",
            title: t("ELECTRICITY_TITLE")
        },
        {
            logo_key: "ic_gas",
            field: "subscriptionNumber",
            code: 1,
            type: "GAS",
            title: t("GAS_TITLE")
        },
        {
            logo_key: "ic_water",
            field: "billIdentifier",
            code: 2,
            type: 'WATER',
            title: t("WATER_TITLE")
        },
        {
            logo_key: "ic_logo_mci",
            field: "phoneNumber",
            inquiryEndPeriod: true,
            code: 3,
            type: 'MOBILE',

            title: t("MOBILE_TITLE")
        },
        {
            logo_key: "ic_logo_mci",
            field: "phoneNumber",
            inquiryMiddlePeriod: true,
            code: 4,
            type: "MOBILE_NOW",
            title: t("MOBILE_NOW_TITLE")
        },
        {
            logo_key: "ic_tele",
            field: "phoneNumber",
            inquiryEndPeriod: true,
            code: 5,
            type: 'TEL',
            title: t("TEL_NOW_TITLE")
        },
        {
            logo_key: "ic_tele",
            field: "phoneNumber",
            inquiryMiddlePeriod: true,
            code: 6,
            type: 'TEL_NOW',
            title: t("TEL_TITLE")
        }
    ]


    const dataFormInquery = [
        {
            title: t('BILL_TYPE'),
            name: 'inquery',
            type: "selectModal",
            notFillValueSelect: true,
            btn: {
                icon: <MdKeyboardArrowDown className='dark:!text-white' />
            },
            option: BillTypes.map((itm: any, ind: any) => {
                return ({
                    value: itm.type,
                    label: <div className='flex items-center'>
                        <div><ImageBanks logKey={itm.logo_key} bill /></div>
                        <div className='text-xs mr-1'>{itm.title}</div>
                    </div>,
                })
            }),
            modalChild: (itm: any, handleValueSelectModal: any) => (
                <div className='p-3 flex flex-col'>
                    <div className='font-bold text-xs text-black mb-2 dark:text-gray-200'>{t('LOG_NUMBER_LABLE')}</div>
                    {itm.option?.map((item: any, index: any) => (
                        <>
                            <div className={`${formValue.inquery === item.value && ('border border-cyan-50')} boxItem-modal-global`} onClick={() => handleValueSelectModal(item, itm)}>{item.label}</div>
                        </>
                    ))}
                </div>),
            value: formValue?.inquery,
            active: true,
        },

    ]




    const handleClickSend = () => {
        dispatch(setStepsSlice({
            step1: {
                pathname: URLS.services.bill,
                title: t("BILL_MANAGEMENT"),
                backUrl1: URLS.account.bill,
                backToHome: '/account',
                data: {
                    formValue,
                    // resultApi: resultPostData.data,
                    // type: 'account',
                    // dataReceipt: {
                    //     title: t('PAYMENT_RECEIPT'),
                    //     backUrl1: URLS.account.transfer,
                    //     backToHome: '/account',
                    // },
                    activeTab: 1,
                },
            }
        }))
        navigate(URLS.services.bill)
    }

    return (
        <>
            <div className="mb-3">
                <InputCustom
                    dataForm={dataFormInquery}
                    formValues={formValue}
                    setFormValues={setFormValue}
                />
            </div>
            <div className='mt-5 flex justify-between'>
                <BtnCustom title={t("SEND")} click={() => handleClickSend()} />
                <BtnCustom classNameBtn='!bg-blue' title={t("SAVE_LIST")} icon={<IoSave className='ml-1 text-lg mb-[2px]' />} click={() => handleClickSend()} />
            </div>
        </>
    );
}

export default BillInquery;

