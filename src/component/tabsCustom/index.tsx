import React, { useState, useEffect, useCallback } from 'react'
import { ItemsTab } from '../../common/types'

type IProps = {
    dataTab: ItemsTab[],
    className?: string,
    center?: boolean,
    children: any
}




const TabsCustom = (props: IProps) => {
    // __________________________________variebles_________________________
    let { dataTab, className, center, children } = props
    let classNamesTabs = " px-5 text-xs flex justify-center items-center cursor-pointer dark:border-b-gray-100    "
    // ___________________________________hook_______________________________
    const [click, setClick] = useState<ItemsTab>({} as ItemsTab)
    // _________________________________function_____________________________

    const handleClick = (item: ItemsTab) => {
        setClick(item)
    }
    const handleRenderElement = (clickId: any, notAnime?: boolean) => {
        let div = children?.map((child: any, ind: any) => {
            return (
                <>
                    {clickId === ind && (
                        <div className={`${!notAnime && "animate-[scaleClick0_0.5s]"}`}>
                            {child}
                        </div>
                    )}
                </>
            )
        })
        return div
    }
    // __________________________________useEffect___________________________
    useEffect(() => {
        setClick(dataTab[0])
    }, [])



    return (
        <>
            <div className={`w-full flex flex-col`}>
                <div className={`${center && 'justify-center'} flex w-full`}>
                    {dataTab?.map((itm, ind) => (
                        <div
                            className={`${className} ${classNamesTabs} py-2  ${click.id === itm.id ? 'border-blue-1 text-blue dark:text-white dark:!border-blue-1   animate-[scaleClick_1s]  rounded-full  shadow-[0_0_5px_1px_rgba(0,0,0,0.2)]  dark:shadow-darkMode-black  text-md' : 'hover:!border-gray-500 dark:hover:border-gray-500 dark:text-gray-100'}`}
                            onClick={() => handleClick(itm)}>
                            <div className={`${click.id === itm.id && ("animate-[scaleClick_1s]")}}`}>

                                {itm.title}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`w-full mt-7`}>
                    {handleRenderElement(click.id)}
                </div>
            </div>
        </>
    )
}

export default TabsCustom