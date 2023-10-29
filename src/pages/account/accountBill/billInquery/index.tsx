import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from 'react-icons/md';
import BtnCustom from '../../../../component/btnCustom';
import ImageBanks from '../../../../component/imageBank';
import InputCustom from '../../../../component/inputCustom';




interface IFormValue {

    inquery: string
}
const BillInquery = () => {
    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)
    const { t } = useTranslation()


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
            btn: {
                icon: <MdKeyboardArrowDown className='dark:!text-white' />
            },
            option: BillTypes.map((itm: any, ind: any) => {
                return ({
                    value: itm.type,
                    label: <div className='flex items-center'>
                        <div><ImageBanks logKey={itm.logo_key} bill/></div>
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
    return (
        <>
            <div className="mb-3">
                <InputCustom
                    dataForm={dataFormInquery}
                    formValues={formValue}
                    setFormValues={setFormValue}
                />
            </div>
            <div className='mt-5'>
                <BtnCustom title={t("SEND")} />
            </div>
        </>
    );
}

export default BillInquery;