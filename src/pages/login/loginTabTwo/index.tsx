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



const LoginTabTwo = () => {
    // _____________________________________hooks_________________________
    const [formValue, setformValue] = useState({
        userName: '',
        pass: ''
    });
    const [exchange, resultExchange] = useLazyAuthQuery()
    const [login, resultLogin] = useLazyAuthPostQuery()
    const dispatch = useDispatch()
    const key = useSelector((state: any) => state.user.key)
    const user = useSelector((state: any) => state.user.user)
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
            active:true
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
    // ______________________________________useEffect______________________________
    useEffect(() => {
        exchange({ url: 'authentication/key/exchange' })
    }, []);

    useEffect(() => {
        if (resultExchange.isSuccess && resultExchange.data) {
            dispatch(setKeyExchnage(resultExchange.data.result.key))
        }
    }, [resultExchange]);
    return (
        <>

            <Box className="mt-12">
                <InputCustom
                    dataForm={dataForm}
                    formValues={formValue}
                    setFormValues={setformValue} />
                <div className="flex mt-8">
                    <BtnCustom title={'ورود'} click={handleClickLoginBtn} />
                    {/* <BtnCustom title={'انصراف'} error /> */}
                </div>
            </Box>


        </>
    )
}


export default LoginTabTwo