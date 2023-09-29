import React, { useState, useEffect } from "react";

import InputCustom from "../../../../../component/inputCustom";
import { useLazyGetAllDataQuery } from "../../../../../redux/api/allApi";
import { GiClick } from 'react-icons/gi'
import logo_img from '../../../../../assest/img/tejarat_logo1.png'




interface IFormValue {
    amount: string,
    price: string
}

const AccountsDestination = () => {
    // ___________________________________Hook_______________________

    const [formValue, setFormValue] = useState<IFormValue>({} as IFormValue)
    const [stateData, setstateData] = useState<any>([]);
    const [getData, resultGetData] = useLazyGetAllDataQuery()

    // ______________________________________varibles_____________________________

    const dataForm = [
        {
            title: '',
            name: 'destAccountNumber',
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
            <div className="flex flex-col w-full min-h-[10vh] h-[70vh] !overflow-y-auto">
                <div className="mb-3">
                    <InputCustom
                        dataForm={dataForm}
                        formValues={formValue}
                        setFormValues={setFormValue}
                    />
                </div>
                <div className="">
                    {stateData.map((itm: any, ind: any) => (
                        <div className="boxItem-global">
                            <div className="flex justify-between items-center">
                                <div className="flex text-xs font-bold items-center">
                                    <img src={logo_img} className='w-[35px] h-[37px]' />
                                    <div className="mr-1">{itm?.title}</div>
                                </div>
                                <GiClick className="text-xl text-cyan-50  rotate-[30deg]" />
                            </div>
                            <div className="mt-1 text-sm text-gray-600 font-bold flex  w-[98%] mr-2">{itm.accountNumber}</div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}


export default AccountsDestination