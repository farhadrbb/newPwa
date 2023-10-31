import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../common/url';
import ActiveAccount from '../../../component/activeAccount';
import Box from '../../../component/box';
import BtnCustom from '../../../component/btnCustom';
import InputCustom from '../../../component/inputCustom';
import TabsCustom from '../../../component/tabsCustom';
import { usePostAllDataMutation } from '../../../redux/api/allApi';
import { setStepsSlice } from '../../../redux/slice/step';
import AccountPos from './accountPos';




interface IFormValue {
    logNumber?: number,
}


const AccountLog = () => {

    // _______________________________hook___________________
    
    const step = useSelector((state: any) => state.stepSlice.data)
    const { t } = useTranslation()
    let formValueStep = step.step0?.data?.formValue
    const [formValue, setFormValue] = React.useState<IFormValue>({...formValueStep} as IFormValue)
    const [postData, resultPostData] = usePostAllDataMutation()
    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // _______________________________varibles___________________
    let dataTab = [
        {
            id: 0,
            title: t('ACCOUNT')
        },
        {
            id: 1,
            title: t('POS_STORE'),
        },

    ]

    const dataForm = [
        {
            title: t('LOG_NUMBER_LABLE'),
            name: 'logNumber',
            type: "selectModal",
            btn: {
                icon: <MdKeyboardArrowDown className='dark:!text-white'/>
            },
            option: [
                { value: 10, label: 10 },
                { value: 20, label: 20 },
                { value: 30, label: 30 },
            ],
            modalChild: (itm: any, handleValueSelectModal: any) => (
                <div className='p-3 flex flex-col'>
                    <div className='font-bold text-xs text-black mb-2 dark:text-gray-200'>{t('LOG_NUMBER_LABLE')}</div>
                    {itm.option?.map((item: any, index: any) => (
                        <>
                            <div className={`${formValue?.logNumber === item.value && ('border border-cyan-50')} boxItem-modal-global`} onClick={() => handleValueSelectModal(item, itm)}>{item.value}</div>
                        </>
                    ))}
                </div>),
            value: formValue?.logNumber,
            active: true,
        },


    ]


    const handleClickView = () => {
        let body = {
            accountNumber: activeAccount.accountNumber,
            filterType: 0,
            paging: {
                enablePaging: false,
                pageNumber: 0,
                pageSize: formValue.logNumber
            },
            transactionCount: formValue.logNumber

        }
        postData({ url: 'accountTransaction', body })
    }


    const handleClickitem = () => {
        dispatch(setStepsSlice({
            step1: {
                pathname: URLS.account.logEmail,
                title: t("TURNOVER"),
                backUrl1: URLS.account.log,
                backToHome: '/account',
                data: {
                    activeTab: 0,
                },
            }
        }))
        navigate(URLS.account.logEmail)
    }


    React.useEffect(() => {
        if (resultPostData.isSuccess && resultPostData.data) {

            dispatch(setStepsSlice({
                step1: {
                    pathname: URLS.account.logResult,
                    title: t("TURNOVER"),
                    backUrl1: URLS.account.log,
                    backToHome: '/account',
                    data: {
                        resultApi: resultPostData.data,
                        activeTab: 0,
                    },
                }
            }))
            navigate(URLS.account.logResult)
        }
    }, [resultPostData]);




    return (
        <>
            <ActiveAccount />
            <Box >
                <TabsCustom dataTab={dataTab} activeTab={step.step0?.data?.activeTab}>
                    <div >
                        <div className="mb-3">
                            <InputCustom
                                dataForm={dataForm}
                                formValues={formValue}
                                setFormValues={setFormValue}
                            />
                        </div>
                        <div className='flex mt-10'>
                            <BtnCustom title={t('VIEW')} click={() => handleClickView()} />
                            <BtnCustom title={t('TURNOVER')} classNameBtn='!bg-blue' click={() => handleClickitem()} />
                        </div>
                    </div>
                    <div>
                        <AccountPos/>
                    </div>
                </TabsCustom>
            </Box>
        </>
    );
}

export default AccountLog;