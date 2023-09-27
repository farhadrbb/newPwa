import React, { useState } from 'react';

interface IProp {
    title: string,
    classNameBtn?: string,
    click?: () => void
    error?: boolean,
    icon?: any
}
const BtnCustom = (props: IProp) => {
    const [stateClick, setstateClick] = useState<any>();
    // ______________________________varibles_________________________
    const { title, classNameBtn, click, error, icon } = props
    const classBtn = `py-2 px-5 max-w-max rounded-full flex justify-center items-center ml-1 cursor-pointer text-[13px]`
    const handleClick = () => {
        setstateClick(true)
        setTimeout(() => {
            click?.()
        }, 100);
        setTimeout(() => {
            setstateClick(false)
        }, 500);
    }
    return (
        <>
            <div
                className={`${error ? 'bg-white text-black border border-gray-500 ' : 'bg-cyan-50 text-white'} ${stateClick && "animate-[scaleClick_0.3s_linear]"}  ${classBtn} ${classNameBtn}`}
                onClick={() => handleClick()}>
                {icon}
                {title}
            </div>
        </>
    );
}

export default BtnCustom;