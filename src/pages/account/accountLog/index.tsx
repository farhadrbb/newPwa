import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../common/url';
import { convertEnglishNumberToPersian } from '../../../common/utils';
import ActiveAccount from '../../../component/activeAccount';
import Box from '../../../component/box';
import BtnCustom from '../../../component/btnCustom';
import InputCustom from '../../../component/inputCustom';
import TabsCustom from '../../../component/tabsCustom';
import { usePostAllDataMutation } from '../../../redux/api/allApi';
import { setStepsSlice } from '../../../redux/slice/step';




interface IFormValue {
    logNumber?: number,
}


const AccountLog = () => {

    // _______________________________hook___________________

    const { t } = useTranslation()
    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)
    const [postData, resultPostData] = usePostAllDataMutation()
    const step = useSelector((state: any) => state.stepSlice.data)
    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    // _______________________________varibles___________________
    let dataTab = [
        {
            id: 0,
            title: 'حساب'
        },
        {
            id: 1,
            title: 'فیلتر',
        },

    ]

    const dataForm = [
        {
            title: t('LOG_NUMBER_LABLE'),
            name: 'logNumber',
            type: "selectModal",
            btn: {
                icon: <MdKeyboardArrowDown />
            },
            option: [
                { value: 10, label: 10 },
                { value: 20, label: 20 },
                { value: 30, label: 30 },
            ],
            modalChild: (itm: any, handleValueSelectModal: any) => (
                <div className='p-3 flex flex-col'>
                    <div className='font-bold text-xs text-black mb-2'>انتخاب کنید</div>
                    {itm.option?.map((item: any, index: any) => (
                        <>
                            <div className='mb-2 font-semibold bg-gray-200 p-2 rounded-lg' onClick={() => handleValueSelectModal(item, itm)}>{item.value}</div>
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
            <Box className="mb-7">
                <TabsCustom dataTab={dataTab} activeTab={step.step1?.data?.activeTab}>
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
                            <BtnCustom title={t('TURNOVER')} classNameBtn='!bg-blue' />
                        </div>
                    </div>
                    <div></div>
                </TabsCustom>
            </Box>
        </>
    );
}

export default AccountLog;