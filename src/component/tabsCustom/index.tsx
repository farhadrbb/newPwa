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
    let classNamesTabs = " px-4 text-xs flex justify-center items-center cursor-pointer dark:border-b-gray-100   rounded-t-md "
    // ___________________________________hook_______________________________
    const [click, setClick] = useState<ItemsTab>({} as ItemsTab)
    // _________________________________function_____________________________

    const handleClick = (item: ItemsTab) => {
        setClick(item)
    }
    const handleRenderElement = (clickId:any,notAnime?:boolean) => {
        let div = children?.map((child: any, ind: any) => {
            return (
                <>
                    {clickId === ind && (
                        <div className={`${!notAnime &&  "animate-[rightAnime_0.4s]"}`}>
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
                            className={`${className} ${classNamesTabs} py-1  ${click.id === itm.id ? 'border-blue-1 text-blue dark:!border-blue-1 border-b-0 border animate-[scaleClick_0.5s]  rounded-t-md text-md' : 'hover:!border-gray-500 dark:hover:border-gray-500 dark:text-gray-100'}`}
                            onClick={() => handleClick(itm)}>
                            {itm.title}
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