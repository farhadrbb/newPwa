import React, { useState, useEffect } from "react";
import tejarat_img from "../../assest/img/tejarat.png"
import Box from "../../../component/box";
import { IInputCustom } from '../../../common/types'
import InputCustom from "../../../component/inputCustom";
import { Button } from "antd";
import BtnCustom from "../../../component/btnCustom";
import Footer from "../../../component/layout/footer";
import { useLazyAuthPostQuery, useLazyAuthQuery } from "../../../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setKeyExchnage } from "../../../redux/slice/user";
import { encryptRSA } from "../../../common/utils";
import { useNavigate } from "react-router-dom";
import { setLoadingSlice, setNotifySlice } from "../../../redux/slice/tool";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from 'react-icons/fa'



const LoginTabOne = () => {
    // _____________________________________hooks_________________________
    const [formValue, setformValue] = useState({
        userName: '',
        pass: ''
    });
    const [showPass, setShowPass] = useState(false);
    const [exchange, resultExchange] = useLazyAuthQuery()
    const [login, resultLogin] = useLazyAuthPostQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const user = useSelector((state: any) => state.user.user)

    const handleClickModal = () => {
        setShowPass(!showPass)
    }
    // ___________________________________varibles_________________________
    let dataForm = [
        {
            name: 'userName',
            title: 'نام کاربری - شماره ملی',
            type: "number",
            active:true

        },
        {
            name: 'pass',
            title: 'رمز عبور',
            type: "password",
            active:true,
            btn: {
                // title: 'انتخاب',
                click: handleClickModal,
                icon: showPass ? <FaEye /> : <FaEyeSlash />
            },
        },
    ]
    // ______________________________________functions______________________________
    const handleClickLoginBtn = () => {
        let encPass = encryptRSA(formValue.pass);
        let encUsername = encryptRSA(formValue.userName);

        let body = {
            captchaValue: '',
            cardCustomerFlag: false,
            customerInfoFlag: true,
            password: encPass,
            rootedDevice: true,
            sourceAccountBalanceFlag: true,
            sourceAccountFlag: true,
            sourceCardBalanceFlag: true,
            sourceCardFlag: true,
            username: encUsername,
        }

        login({ url: "authentication/login", body })
    }

    const handleRefetch = () => {
        exchange({ url: 'authentication/key/exchange' })
    }


    // ______________________________________useEffect______________________________
    useEffect(() => {
        exchange({ url: 'authentication/key/exchange' })
    }, []);


    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/account")
            }, 1000);
        }
    }, [resultLogin]);




    useEffect(() => {
        if (resultExchange.isSuccess && resultExchange.data) {
            dispatch(setKeyExchnage(resultExchange.data.result.key))
        }
        if (resultExchange.isError) {
            dispatch(setNotifySlice({
                title: t('RESTCALL_TIMEOUT_MSG'),
                type: 'error',
                btn: 'تلاش مجدد',
                fn: () => handleRefetch()
            }))
        }
    }, [resultExchange]);




    
    return (
        <>

            <Box className="mt-12">
                <InputCustom
                    dataForm={dataForm}
                    formValues={formValue}
                    setFormValues={setformValue} />
                <div className="flex mt-8 justify-between items-center">
                    <BtnCustom title={'ورود'} click={handleClickLoginBtn} />
                    <div className="text-[11px] text-blue">ثبت نام / فراموشی رمز </div>
                </div>
            </Box>


        </>
    )
}


export default LoginTabOne