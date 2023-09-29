import React, { useState } from "react";

import { IInputCustom, ItemsTab } from "../../common/types";
import Box from "../../component/box";
import InputCustom from "../../component/inputCustom";
import TabsCustom from "../../component/tabsCustom";
export interface IMenu {
    title: string,
    icon: React.FC,
    color: string,
    fill:string,
    onclick: (itm:IMenu)=> void,
    route: string
}

interface IProps {
    menu: IMenu[]
}

const ItemsSelect = (props: IProps) => {
    // __________________________________varibles________________
    const { menu } = props
    let boxItemClass = `w-full h-[85px] rounded-2xl bg-white flex flex-col items-center cursor-pointer  relative shadow-lg  shadow-slate-400 dark:bg-darkMode-grayDark dark:shadow-slate-900`
    let boxItemTitle = `absolute bottom-0 w-full h-[25px] text-white  rounded-b-2xl flex justify-center items-center text-[11px] `
    // ___________________________________Hook_______________________
    const [clickItem, setClickItem] = useState({} as IMenu)
    // __________________________________functions______________

    const handleClickItem = (itm: IMenu) => {
        setClickItem(itm)
        setTimeout(() => {
            setClickItem({} as IMenu)
        }, 400);
        itm.onclick(itm)
    }



    return (
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-2 px-1  w-[95%]">
                    {menu?.map((itm:any, ind:any) => (
                        <div
                            className={`${boxItemClass} ${clickItem.title === itm.title ? 'animate-[scaleClick_0.3s_linear] ' : ''}` }
                            onClick={() => handleClickItem(itm)}
                            style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"}}

                        >
                            <div className="absolute top-4"><itm.icon classNameIcon={itm.fill} size={30}/></div>
                            <div className={`${boxItemTitle} ${itm.color}`}>{itm.title}</div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}


export default ItemsSelect