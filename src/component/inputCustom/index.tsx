import React, { useEffect, useRef, useState } from 'react'
import cx from "classnames";
import { withTranslation, useTranslation } from 'react-i18next'
import { Button, Select } from 'antd';
import BtnCustom from '../btnCustom';
import { IInputCustom } from '../../common/types';
import { useSelector } from 'react-redux';
import Box from '../box';
import { convertEnglishNumberToPersian } from '../../common/utils';
import ModalCustom from '../modalCustom';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import 'dayjs/locale/fa';
import Toolbar from 'react-multi-date-picker/plugins/toolbar';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import { JsxElement } from 'typescript';
interface IProps {
    // updateFormValues: Function,
    dataForm: IinputCustom[],
    setFormValues: any,
    formValues: any,
    // type?: string,
}

interface IinputCustom {
    name: string,
    title: string,
    btn?: any
    type: string,
    col?: string
    active: boolean,
    option?: any,
    notFillValueSelect?: boolean
    modalChild?: (itm: any, handleValueSelectModal: any) => {}
}

interface IOption {
    value: any,
    label: any
}

const InputCustom = (props: IProps) => {

    const { t } = useTranslation()



    // ___________________________________varibles______________________________

    const { formValues, setFormValues, dataForm } = props
    const inputClass = 'bg-[#E8F0FE] placeholder:text-xs   dark:bg-darkMode-black dark:border-0 dark:outline-0 dark:text-white pr-3 focus:outline-blue-400  border border-gray-300 rounded-full h-[36px] w-full absolute left-0 bottom-0 text-black text-sm font-bold'
    // ___________________________________hook______________________________
    const [showSelectList, setshowSelectList] = useState(false);
    const [label, setlabel] = useState();

    // _________________________________function_____________________________

    const addCommas = (num: any) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = (num: any) => num.toString().replace(/[^0-9]/g, "");
    function updateFormValues(e: any, type: string, date?: boolean) {

        let val = date ? e.toDate().getTime() : e;
        if (type === "amount") {
            if (val === undefined) {
                setFormValues({
                    ...formValues,
                    [type]: "",
                });
            } else if (val[0] == 0) {
                setFormValues({
                    ...formValues,
                    [type]: val.substring(1),
                });
            } else {
                setFormValues({
                    ...formValues,
                    [type]: val,
                });
            }
        } else {
            setFormValues({
                ...formValues,
                [type]: val,
            });
        }
    }


    const handleClickSelectModal = () => {
        setshowSelectList(!showSelectList)
    }

    const handleValueSelectModal = (item: any, itm: any) => {
        setFormValues({
            ...formValues,
            [itm.name]: item.value,
        });
        setlabel(item.label)
        setshowSelectList(false)
    }

    useEffect(() => {
        dataForm?.map((itm: any, ind: any) => {
            if (itm.option && itm.value ) {
                itm?.option?.map((opt:any,ind:any)=>{
                    if(opt.value === formValues[itm.name]){
                        setlabel(opt.label)
                    }
                })
            }
        })
    }, [formValues]);


    // _________________________________useEffect_____________________________

    useEffect(() => {

        dataForm?.map((itm: any, ind: any) => {
            if (itm.option && !itm.notFillValueSelect) {
                setlabel(itm.option?.[0].label)
                setFormValues(
                    {
                        ...formValues,
                        [itm.name]: itm.option?.[0].value,
                    }
                )
            }
        })
    }, []);

    console.log("formvalue", formValues);
    console.log("label", label);









    return (
        <div className='grid grid-cols-2'>
            {dataForm.map((itm: any, ind: any) => (
                <>
                    {itm.type === 'number' && itm.active && (
                        <>
                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>

                                <div className={`${ind > 0 && itm?.col != "1" ? 'mt-3' : 'mt-3'} relative w-full ${itm.title ? "h-[60px]" : 'h-[40px]'} `}>
                                    {itm.title != '' && (
                                        <div className='absolute top-0 right-0 text-gray-600 dark:text-darkMode-graylight text-xs font-semibold'>{itm.title}</div>
                                    )}
                                    <input
                                        className={inputClass}
                                        value={formValues[itm.name] ? formValues[itm.name] : itm?.value ? itm?.value : ''}
                                        placeholder={itm?.placeholder}
                                        onChange={(e) => { updateFormValues((e.target.value), itm.name) }}
                                        type="tel"
                                        maxLength={itm.maxLength && itm.maxLength || 25}
                                    ></input>
                                    {itm.btn && itm?.btn?.title && (
                                        <div className='absolute left-1 top-6   flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn.click()}>
                                            <BtnCustom title={itm?.btn?.title} classNameBtn={'text-xs !bg-cyan-50'} />
                                        </div>
                                    )}
                                    {itm.btn && !itm?.btn?.title && itm.btn.icon && (
                                        <div className='absolute left-1 text-lg top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn.click()}>
                                            {itm.btn.icon}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                    {itm.type === 'password' && itm.active && (
                        <>
                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>

                                <div className={`${ind > 0 && itm?.col != "1" ? 'mt-3' : 'mt-3'} relative w-full h-[60px] `}>
                                    {itm.title != '' && (
                                        <div className='absolute top-0 right-0 text-gray-600 dark:text-darkMode-graylight text-xs font-semibold'>{itm.title}</div>
                                    )}
                                    <input
                                        className={inputClass}
                                        value={formValues[itm.name] ? formValues[itm.name] : itm?.value ? itm?.value : ''}
                                        onChange={(e) => { updateFormValues((e.target.value), itm.name) }}
                                        placeholder={itm?.placeholder}
                                        type="password"
                                        maxLength={itm.maxLength && itm.maxLength || 25}
                                    ></input>
                                    {itm.btn && itm?.btn?.title && (
                                        <div className='absolute left-1 top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn.click()}>
                                            <BtnCustom title={itm?.btn?.title} classNameBtn={'text-xs !bg-cyan-50'} />
                                        </div>
                                    )}
                                    {itm.btn && !itm?.btn?.title && itm.btn.icon && (
                                        <div className='absolute left-4 text-lg top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn.click()}>
                                            {itm.btn.icon}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </>
                    )}
                    {itm.type === 'amount' && itm.active && (
                        <>
                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>
                                <div className={`${ind > 0 && itm?.col != "1" ? 'mt-3' : 'mt-3'} relative w-full h-[60px] `}>
                                    {itm.title != '' && (
                                        <div className='absolute top-0 right-0 text-gray-600 dark:text-darkMode-graylight text-xs font-semibold'>{itm.title}</div>
                                    )}
                                    <input
                                        // className={cx("input", "is-rounded")}
                                        className={inputClass}
                                        value={formValues[itm.name] ? formValues[itm.name] : itm?.value ? itm?.value : ''}
                                        onChange={(e) => { updateFormValues(addCommas(removeNonNumeric((e.target.value))), itm.name) }}
                                        placeholder={itm?.placeholder}
                                        type="tel"
                                        maxLength={itm.maxLength && itm.maxLength || 25}
                                    ></input>
                                    <div className={`absolute top-8 dark:text-darkMode-graylight text-xs ${itm.btn?.title ? 'left-[120px]' : itm.btn?.icon ? 'left-10' : 'left-2'}`}>{t('RIAL')}</div>
                                    {itm.btn && itm?.btn?.title && (
                                        <div className='absolute left-1 top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn.click()}>
                                            <BtnCustom title={itm?.btn?.title} classNameBtn={'text-xs !bg-cyan-50'} />
                                        </div>
                                    )}
                                    {itm.btn && !itm?.btn?.title && itm.btn.icon && (
                                        <div className='absolute left-1 text-lg top-6 flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn.click()}>
                                            {itm.btn.icon}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </>
                    )}
                    {itm.type === 'text' && itm.active && (
                        <>
                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>
                                <div className={`${ind > 0 && itm?.col != "1" ? 'mt-3' : 'mt-3'} relative w-full h-[60px] `}>
                                    {itm.title != '' && (
                                        <div className='absolute top-0 right-0 text-gray-600 dark:text-darkMode-graylight text-xs font-semibold'>{itm.title}</div>
                                    )}
                                    <input
                                        // className={cx("input", "is-rounded")}
                                        className={inputClass}
                                        onChange={(e) => updateFormValues(e.target.value, itm.name)}
                                        value={formValues[itm.name] ? formValues[itm.name] : itm?.value ? itm?.value : ''}
                                        maxLength={itm.maxLength && itm.maxLength || 35}
                                        placeholder={itm?.placeholder}
                                        autoComplete="off"
                                        type="text"
                                        style={{ direction: 'rtl' }}
                                    ></input>
                                    {itm.btn && itm?.btn?.title && (
                                        <div className='absolute left-1 top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                            <BtnCustom title={itm?.btn?.title} classNameBtn={'text-xs !bg-cyan-50'} />
                                        </div>
                                    )}
                                    {itm.btn && !itm?.btn?.title && itm.btn.icon && (
                                        <div className='absolute left-4 text-lg top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                            {itm.btn.icon}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </>
                    )}
                    {itm.type === 'checkBox' && itm.active && (
                        <>
                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>

                                <div className='flex mt-6'>
                                    <input
                                        type="checkbox"
                                        // name="visible_comments"
                                        className='cursor-pointer  checked:!text-blue'

                                        checked={formValues[itm.name] && formValues[itm.name]}
                                        onChange={(e) => updateFormValues(e.target.checked, itm.name)}
                                    ></input>
                                    {itm.title != '' && (
                                        <div className='text-xs text-gray-500 dark:text-darkMode-graylight font-semibold mr-1'>{itm.title}</div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                    {itm.type === 'select' && itm.active && (
                        <>


                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>
                                <div className={`${ind > 0 && itm?.col != "1" ? 'mt-3' : 'mt-3'} relative w-full h-[60px] `}>
                                    {itm.title != '' && (
                                        <div className='absolute top-0 right-0 text-gray-600 dark:text-darkMode-graylight text-xs font-semibold'>{itm.title}</div>
                                    )}

                                    <Select
                                        className={`${inputClass} !pr-0 !rounded-full !shadow-none`}
                                        defaultValue={10}
                                        popupClassName="!bg-gray-100 dark:!bg-darkMode-grayDark"
                                        rootClassName='dark:bg-darkMode-black'
                                        style={{ width: '100%', fontFamily: 'TidFont !important' }}
                                        onChange={(e) => updateFormValues(e, itm.name)}

                                        options={itm?.option}

                                        defaultActiveFirstOption={itm.name}
                                    />
                                </div>
                                {itm.btn && itm?.btn?.title && (
                                    <div className='absolute left-1 top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                        <BtnCustom title={itm?.btn?.title} classNameBtn={'text-xs !bg-cyan-50'} />
                                    </div>
                                )}
                                {itm.btn && !itm?.btn?.title && itm.btn.icon && (
                                    <div className='absolute left-4 text-lg top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                        {itm.btn.icon}
                                    </div>
                                )}
                            </div>


                        </>
                    )}
                    {itm.type === 'date' && itm.active && (
                        <>


                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>
                                <div className={`${ind > 0 && itm?.col != "1" ? 'mt-3' : 'mt-3'} relative w-full h-[60px] `}>
                                    {itm.title != '' && (
                                        <div className='absolute top-0 right-0 text-gray-600 dark:text-darkMode-graylight text-xs font-semibold'>{itm.title}</div>
                                    )}

                                    <DatePicker
                                        containerStyle={{
                                            width: "100%",
                                        }}
                                        style={{ fontFamily: 'TidFont' }}

                                        className="cal"
                                        calendar={persian}
                                        locale={persian_fa}
                                        value={formValues[itm?.name]}
                                        onChange={(value: any) =>
                                            updateFormValues(value, itm.name, true)
                                        }
                                        calendarPosition="bottom-center"
                                        inputClass={inputClass}
                                        portal
                                        editable={false}
                                        plugins={[

                                            <Toolbar
                                                position="bottom"
                                            />
                                        ]}

                                    />
                                    {itm.btn && itm?.btn?.title && (
                                        <div className='absolute left-1 top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                            <BtnCustom title={itm?.btn?.title} classNameBtn={'text-xs !bg-cyan-50'} />
                                        </div>
                                    )}
                                    {itm.btn && !itm?.btn?.title && itm.btn.icon && (
                                        <div className='absolute left-4 text-lg top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                            {itm.btn.icon}
                                        </div>
                                    )}
                                </div>
                            </div>


                        </>
                    )}
                    {itm.type === 'selectModal' && itm.active && (
                        <>
                            <div className={`${itm?.col === "1" ? "col-span-1 pl-1" : 'col-span-2'} animate-[fade_0.7s] w-full`}>
                                <div className={`${ind > 0 && itm?.col != "1" ? 'mt-3' : 'mt-3'} relative w-full h-[60px] `}>
                                    {itm.title != '' && (
                                        <div className='absolute top-0 right-0 text-gray-600 dark:text-darkMode-graylight text-xs font-semibold'>{itm.title}</div>
                                    )}

                                    <div className={`${inputClass} flex items-center`} onClick={() => handleClickSelectModal()}>
                                        {label ? label : 'انتخاب'}
                                    </div>
                                    {itm.btn && itm?.btn?.title && (
                                        <div className='absolute left-1 top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                            <BtnCustom title={itm?.btn?.title} classNameBtn={'text-xs !bg-cyan-50'} />
                                        </div>
                                    )}
                                    {itm.btn && !itm?.btn?.title && itm.btn.icon && (
                                        <div className='absolute left-4 text-lg top-6  flex justify-center items-center h-[35px] cursor-pointer' onClick={() => itm.btn?.click}>
                                            {itm.btn.icon}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ModalCustom show={showSelectList} setShow={setshowSelectList}>
                                {itm.modalChild(itm, handleValueSelectModal)}
                            </ModalCustom>
                        </>
                    )}

                </>
            )
            )}

        </div>
    )


    // return (
    //     <>
    //         {type === 'number' && (
    //             <>
    //                 <div className='relative w-full h-[50px] '>
    //                     <div></div>
    //                     <input
    //                         className={inputClass}
    //                         value={formValues[name]}
    //                         onChange={(e) => { updateFormValues((e.target.value), name) }}
    //                         type="tel"
    //                         maxLength={maxLength || 25}
    //                     ></input>
    //                     {btn && (

    //                         <div className='absolute left-3  flex justify-center items-center h-[35px] cursor-pointer'>
    //                             <Button className='bg-blue-1 rounded-xl'>test</Button>
    //                         </div>
    //                     )}
    //                 </div>
    //             </>
    //         )}
    //         {type === 'amount' && (
    //             <>
    //                 <input
    //                     // className={cx("input", "is-rounded")}
    //                     className={inputClass}
    //                     value={formValues[name]}
    //                     onChange={(e) => { updateFormValues(addCommas(removeNonNumeric((e.target.value))), name) }}
    //                     type="tel"
    //                     maxLength={maxLength || 25}
    //                 ></input>
    //             </>
    //         )}
    //         {type === 'text' && (
    //             <>
    //                 <input
    //                     // className={cx("input", "is-rounded")}
    //                     onChange={(e) => updateFormValues(e.target.value, name)}
    //                     value={formValues[name] && formValues[name]}
    //                     maxLength={maxLength || 30}
    //                     autoComplete="off"
    //                     type="text"
    //                     style={{ direction: 'rtl' }}
    //                 ></input>
    //             </>
    //         )}

    //         {type === 'checkBox' && (
    //             <>
    //                 <input
    //                     type="checkbox"
    //                     // name="visible_comments"
    //                     checked={formValues[name] && formValues[name]}
    //                     onChange={(e) => updateFormValues(e.target.value, name)}
    //                 ></input>
    //             </>
    //         )}

    //     </>
    // )
}
// export default InputCustom

export default InputCustom;