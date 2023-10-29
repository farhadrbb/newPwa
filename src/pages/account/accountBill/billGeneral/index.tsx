import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../../common/url';
import BtnCustom from '../../../../component/btnCustom';
import InputCustom from '../../../../component/inputCustom';
import { usePostAllDataMutation } from '../../../../redux/api/allApi';
import { setStepsSlice } from '../../../../redux/slice/step';



interface IFormValue {
    billIdentifier?: number,
    paymentIdentifier?: number,
}

const BillGeneral = () => {
    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)
    const step = useSelector((state: any) => state.stepSlice.data)
    const [postData, resultPostData] = usePostAllDataMutation()
    const { t } = useTranslation()
    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const dataForm = [
        {
            title: t('BILL_IDENTIFIRE'),
            name: 'billIdentifier',
            type: "number",
            value: formValue?.billIdentifier,
            active: true,
        },
        {
            title: t('PAYMENT_IDENTIFIRE'),
            name: 'paymentIdentifier',
            type: "number",
            value: formValue?.paymentIdentifier,
            active: true,
        },



    ]


    const handleClickSend = () => {
        let bodyAccountBill = {
            accountNumber: activeAccount.accountNumber,
            billIdentifier: formValue?.billIdentifier,
            paymentIdentifier: formValue?.paymentIdentifier
        }
        postData({ url: "accountBillVerify", body: bodyAccountBill })
    }




    React.useEffect(() => {
        if (resultPostData.isSuccess && resultPostData.data) {
            dispatch(setStepsSlice({
                step1: {
                    pathname: URLS.account.billConfirmForm,
                    title: 'تایید پرداخت قبض',
                    backUrl1: URLS.account.bill,
                    backToHome: '/account',
                    data: {
                        formValue,
                        resultApi: resultPostData.data,
                        type: 'billAccount',
                        dataReceipt:{
                            title: t('PAYMENT_RECEIPT'),
                            backUrl1: URLS.account.bill,
                            backToHome: '/account',
                        },
                        activeTab: 0,
                    },
                }
            }))
            navigate(URLS.account.billConfirmForm)
        }
    }, [resultPostData]);



    return (
        <>


            <div >
                <div className="mb-3">
                    <InputCustom
                        dataForm={dataForm}
                        formValues={formValue}
                        setFormValues={setFormValue}
                    />
                </div>
                <div className='mt-5'>
                    <BtnCustom title={t("SEND")} click={() => handleClickSend()} />
                </div>
            </div>
        </>
    );
}

export default BillGeneral;