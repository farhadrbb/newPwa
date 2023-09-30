import React, { useState, useEffect } from "react";

import InputCustom from "../../../../../component/inputCustom";
import { useLazyGetAllDataQuery } from "../../../../../redux/api/allApi";
import { GiClick } from 'react-icons/gi'
import logo_img from '../../../../../assest/img/tejarat_logo1.png'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStepsSlice } from "../../../../../redux/slice/step";
import URLS from "../../../../../common/url";




interface IFormValue {
    text: string,
}

const AccountsDestination = () => {
    // ___________________________________Hook_______________________

    const [formValue, setFormValue] = useState<IFormValue>({} as IFormValue)
    const [stateData, setstateData] = useState<any>([]);
    const [getData, resultGetData] = useLazyGetAllDataQuery()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // ______________________________________varibles_____________________________

    const dataForm = [
        {
            title: '',
            name: 'text',
            type: "number",
            placeholder: "جست و جو",
            active: true,
            // btn: {
            //     // title: 'انتخاب',
            //     click: () => '',
            //     icon: <div className='p-2 bg-blue rounded-full '><PiUserListBold className='text-white' /></div>
            // },
        },

    ]

    // ______________________________________Function_____________________________

    const handleClickItem = (itm: any) => {
        let obj = {
            destinationAccountNumber: itm.accountNumber,
        }
        dispatch(setStepsSlice({
            step1: {
                id: 1,
                pathname: URLS.account.confirmTransfer,
                title: 'انتقال وجه',
                backUrl1: URLS.account.index,
                backToHome: URLS.account.index,
                data: { formValue: obj },
                activeTab:0,
                add: true
            }
        }))
        navigate(URLS.account.transfer)
    }

    // ______________________________________useEffect_____________________________

    useEffect(() => {
        getData({ url: 'accountDestination' })
    }, []);

    useEffect(() => {
        if (resultGetData.isSuccess && resultGetData.data) {
            setstateData(resultGetData.data?.result?.accounts)
        }
    }, [resultGetData.data]);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="mb-3">
                    <InputCustom
                        dataForm={dataForm}
                        formValues={formValue}
                        setFormValues={setFormValue}
                    />
                </div>
                <div className="">
                    {stateData.map((itm: any, ind: any) => (
                        <div className="boxItem-global cursor-pointer" onClick={() => handleClickItem(itm)}>
                            <div className="flex justify-between items-center">
                                <div className="flex text-xs font-bold items-center">
                                    <img src={logo_img} className='w-[35px] h-[37px]' />
                                    <div className="mr-1 dark:text-gray-100">{itm?.title}</div>
                                </div>
                                {/* <GiClick className="text-xl text-cyan-50  rotate-[30deg]" /> */}
                            </div>
                            <div className="mt-1 text-xs text-gray-500 dark:text-gray-200 font-bold flex justify-end w-full ">{itm.accountNumber}</div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}


export default AccountsDestination