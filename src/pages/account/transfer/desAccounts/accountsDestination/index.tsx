import React, { useState, useEffect } from "react";

import InputCustom from "../../../../../component/inputCustom";
import { useLazyGetAllDataQuery } from "../../../../../redux/api/allApi";
import { GiClick } from 'react-icons/gi'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStepsSlice } from "../../../../../redux/slice/step";
import URLS from "../../../../../common/url";
import ImageBanks from "../../../../../component/imageBank";




interface IFormValue {
    text: string,
}

const AccountsDestination = (props: any) => {
    const step = useSelector((state: any) => state.stepSlice.data)

    // ___________________________________Hook_______________________

    const [formValue, setFormValue] = useState<IFormValue>({} as IFormValue)
    const [stateData, setstateData] = useState<any>([]);
    const [getData, resultGetData] = useLazyGetAllDataQuery()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [apiKeyState, setapiKeyState] = useState<any>(null);

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


    let infoApi: any = {
        accountDestination: 'accounts',
        accountIbanDestination: 'ibans'
    }



    // ______________________________________Function_____________________________

    const handleClickItem = (itm: any) => {
        let obj = {
            destinationAccountNumber: itm?.accountNumber,
            destinationIBAN: itm?.iban
        }
        dispatch(setStepsSlice({
            step1: {
                id: 1,
                pathname: URLS.account.confirmTransfer,
                title: 'انتقال وجه',
                backUrl1: URLS.account.index,
                backToHome: URLS.account.index,
                data: { formValue: obj },
                activeTab: apiKeyState === 'accountDestination' ? 0 : 2,
                add: true
            }
        }))
        navigate(URLS.account.transfer)
    }

    
    const handleData = (itm: any) => {

        if (apiKeyState === 'accountDestination') {
            return {
                title: itm?.title,
                accountNumber: itm?.accountNumber
            }
        }

        if (apiKeyState === 'accountIbanDestination') {
            return {
                title: itm?.title,
                iban: itm?.iban
            }
        }
    }

    // ______________________________________useEffect_____________________________

    useEffect(() => {
        if (apiKeyState) {
            getData({ url: apiKeyState })
        }
    }, [apiKeyState]);


    useEffect(() => {
        setapiKeyState(step.step1?.data?.apiKey)
    }, []);

    useEffect(() => {
        if (resultGetData.isSuccess && resultGetData.data) {
            setstateData(resultGetData.data?.result?.[infoApi?.[apiKeyState]])
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
                    {stateData?.map((itm: any, ind: any) => (
                        <div className="boxItem-global cursor-pointer" onClick={() => handleClickItem(itm)}>
                            <div className="flex justify-between items-center">
                                <div className="flex text-xs font-bold items-center">
                                    <ImageBanks logKey={itm.bank?.logoKey}/>
                                    <div className="mr-2 dark:text-gray-100">{handleData(itm)?.title}</div>
                                </div>
                                {/* <GiClick className="text-xl text-cyan-50  rotate-[30deg]" /> */}
                            </div>
                            <div className="mt-1 text-xs text-gray-500 dark:text-gray-200 font-bold flex justify-end w-full ">{handleData(itm)?.accountNumber || handleData(itm)?.iban}</div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}


export default AccountsDestination