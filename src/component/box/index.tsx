import React,{memo} from "react";

interface IProps {
    title?: string,
    children?: any,
    className?: string
}
const Box = memo((props: IProps) => {
    const { title, children, className } = props
    const boxClass = "bg-white w-full pt-2 rounded-xl flex flex-col dark:bg-darkMode-grayDark shadow-2xl shadow-gray-500 dark:shadow-gray-900 overflow-hidden "
    const titleClass = "bg-gray-300 text-black text-base rounded-tr-md rounded-tl-md p-2 dark:text-gray-100 dark:bg-darkMode-gray dark:shadow-slate-800"

    return (
        <>
            <div className={`${boxClass} ${className}`}>
                {title && (
                    <div className={`${titleClass}`}>{title}</div>
                )}
                <div className="w-full px-4 pt-2 pb-5">{children}</div>
            </div>
        </>
    )
})

export default Box