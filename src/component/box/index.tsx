import React, { memo } from "react";

interface IProps {
    title?: string,
    children?: any,
    className?: string
}
const Box = memo((props: IProps) => {
    const { title, children, className } = props
    const boxClass = "bg-white w-full pt-1 rounded-[15px] flex flex-col dark:bg-darkMode-grayDark shadow-xl shadow-gray-300 dark:shadow-gray-900 overflow-y-auto min-h-[10vh] max-h-[80vh]"
    const titleClass = "bg-gray-300 text-black text-base rounded-tr-md rounded-tl-md p-2 dark:text-gray-100 dark:bg-darkMode-gray dark:shadow-slate-800"

    return (
        <>


            <div className={`${boxClass} ${className} `}>
                {title && (
                    <div className={`${titleClass}`}>{title}</div>
                )}
                <div className="animate-[fade_0.7s] w-full">
                    <div className="animate-[upAnime10_0.5s] ">
                        <div className="w-full px-4 pt-3 pb-5 ">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Box