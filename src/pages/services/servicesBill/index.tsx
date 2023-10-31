import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiDotsVerticalRounded, BiPlusCircle } from 'react-icons/bi';
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../common/url';
import Box from '../../../component/box';
import BoxAdd from '../../../component/boxAdd';
import BtnCustom from '../../../component/btnCustom';
import ImageBanks from '../../../component/imageBank';
import ModalCustom from '../../../component/modalCustom';
import { useLazyGetAllDataQuery, usePostAllDataMutation } from '../../../redux/api/allApi';
import { setStepsSlice } from '../../../redux/slice/step';



const ServicesBill = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [getData, resultGetData] = useLazyGetAllDataQuery()
    const [postData, resultPostData] = usePostAllDataMutation()
    const [showModalDelete, setshowModalDelete] = useState(false);
    const dispatch = useDispatch()
    const step = useSelector((state: any) => state.stepSlice.data)




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



    const handleClickAddBox = () => {
        navigate("/card")
    }

    const handleImage = (item: any) => {
        let cm = <></>
        BillTypes?.map((itm: any, ind: any) => {
            if (itm.type === item.billType) {
                cm = <ImageBanks logKey={itm.logo_key} />
            }
        })
        return cm
    }

    const handleDelete = (itm: any) => {
        postData({ url: 'servicesDeleteBill', body: itm.id })
        setTimeout(() => {
            setshowModalDelete(false)
        }, 1000);
    }
    const handleClickItem = (itm: any) => {
        dispatch(setStepsSlice({
            step0: {
                ...step.step0,
                data: {
                    formValue: { inquery: itm.billType },
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
        navigate(URLS.account.bill)
    }

    React.useEffect(() => {
        getData({ url: "serviceGetBillList" })
    }, []);


    return (
        <>
            <Box>
                <BoxAdd
                    title1={t('BILLA_ADD')}
                    title2={t('CREATE_NEW_BILL')}
                    click={() => handleClickAddBox()}
                />
                {resultGetData?.data?.result?.bills?.map((itm: any, ind: any) => (
                    <>
                        <div className='boxItem-global' onClick={() => handleClickItem(itm)}>
                            <div className='flex items-center justify-between h-full'>
                                <div className='flex items-center'>
                                    <>{handleImage(itm)}</>
                                    <div className='flex flex-col mr-2 mt-1'>
                                        <div className='text-xs font-bold mb-1'>{itm.description}</div>
                                        <div className='text-xs'>{itm.billIdentifier}</div>
                                    </div>
                                </div>
                                <div>
                                    <BiDotsVerticalRounded className='text-xl ' onClick={() => setshowModalDelete(true)} />
                                </div>
                            </div>
                        </div>
                        <ModalCustom show={showModalDelete} setShow={setshowModalDelete}>
                            <div className='flex flex-col  p-3'>
                                <div className='text-sm font-bold mb-3'>انتخاب کنید</div>
                                <div className='boxItem-modal-global text-xs font-bold' onClick={() => handleDelete(itm)}>حذف</div>
                                <div className='flex justify-end mt-10'>
                                    <BtnCustom title={t("DISPENSING")} classNameBtn={'!bg-red-500'} click={() => setshowModalDelete(false)} />
                                </div>
                            </div>
                        </ModalCustom></>
                ))}
            </Box>
        </>
    );
}

export default ServicesBill;