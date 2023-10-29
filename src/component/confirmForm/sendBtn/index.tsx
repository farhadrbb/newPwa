import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../common/url';
import { encryptRSA } from '../../../common/utils';
import useConfirmFormModel from '../../../customHook/useConfirmModel';
import useSendBtnConfirmFormModel from '../../../customHook/useSendBtnConfirmFormModel';
import { usePostAllDataMutation } from '../../../redux/api/allApi';
import { setStepsSlice } from '../../../redux/slice/step';
import BtnCustom from '../../btnCustom';




const SendBtnConfirmForm = (props: any) => {
    // _____________________________varibles_______________________

    const { formValue } = props

    // _____________________________hook_______________________
    const step = useSelector((state: any) => state.stepSlice.data)
    const step1Data = useSelector((state: any) => state.stepSlice.data.step1.data)
    const [postData, resultPostData] = usePostAllDataMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [dataApi,keyApi] = useSendBtnConfirmFormModel()
    const [infoData,infoTitle] = useConfirmFormModel()

    // _____________________________functions_______________________

    const handleClick = (obj: any) => {
        let body = dataApi(obj,formValue)
        postData({ url: keyApi[step1Data.type], body })
    }

    // _____________________________useEffect_______________________

    useEffect(() => {
        if (resultPostData.isSuccess && resultPostData.data) {
            dispatch(setStepsSlice({
                step2: {
                    pathname: URLS.account.receipt,
                    title:step1Data.dataReceipt.title,
                    backUrl1: step1Data.dataReceipt.backUrl1,
                    backToHome: step1Data.dataReceipt.backToHome,
                    data: { resultApi: resultPostData.data, type: step1Data.type },
                }
            }))

            // dispatch(setStepsSlice({
            //     step1: {
            //         ...step.step1,
            //         data: {},
            //     }
            // }))
            navigate(URLS.account.receipt)
        }
    }, [resultPostData]);


    return (
        <>
            <BtnCustom title='ارسال' click={() => handleClick(infoData)} />
        </>
    );
}

export default SendBtnConfirmForm;