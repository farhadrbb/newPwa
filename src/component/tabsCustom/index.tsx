import React, { useState, useEffect, useCallback } from 'react'
import { ItemsTab } from '../../common/types'

import {CiCreditCard2, CiMobile3} from 'react-icons/ci'

type IProps = {
    dataTab: ItemsTab[],
    className?: string,
    center?: boolean,
    children: any,
    activeTab?:number
    notAnime?:boolean
}




const TabsCustom = (props: IProps) => {
    // __________________________________variebles_________________________
    let { dataTab, className, center, children,activeTab,notAnime } = props
    let classNamesTabs = "  text-xs flex justify-center items-center cursor-pointer dark:border-b-gray-100    "
 
    // ___________________________________hook_______________________________
    const [click, setClick] = useState<ItemsTab>({} as ItemsTab)
    // _________________________________function_____________________________

    const handleClick = (item: ItemsTab) => {
        setClick(item)
    }
    const handleRenderElement = (clickId: any) => {
        let div = children?.map((child: any, ind: any) => {
            return (
                <>
                    {clickId === ind && (
                        <div className={`min-h-[10vh] max-h-[70vh] !overflow-y-auto ${!notAnime && "animate-[upAnime10_0.8s]"}`}>
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
        setClick(dataTab?.[activeTab || 0])
    }, [])



    return (
        <>
            <div className={`w-full flex flex-col`}>
                <div className={`${center && 'justify-center'} flex w-full`}>
                    {dataTab?.map((itm, ind) => (
                        <div
                            className={`${className} ${classNamesTabs}  py-2 !text-xs ${click.id === itm.id ? 'border-blue-1 transition-all duration-500  text-blue dark:text-white dark:!border-blue-1   animate-[scaleClick_1s]     dark:shadow-darkMode-black  ' : 'hover:!border-gray-500 dark:hover:border-gray-500 dark:text-gray-100'}`}
                            onClick={() => handleClick(itm)}>
                            <div className={`flex relative px-5 whitespace-nowrap justify-center items-center${click.id === itm.id && ("animate-[scaleClick_1s]")}}`}>
                                {/* <CiCreditCard2 className='ml-1 text-lg'/> */}
                                {itm.title}
                                <div className={`${click.id === itm.id ? 'absolute -bottom-3 w-full h-[1px] bg-blue' : 'w-0'} transition-all duration-500`}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`w-full mt-7  `}>
                    {handleRenderElement(click.id)}
                </div>
            </div>
        </>
    )
}

export default TabsCustom