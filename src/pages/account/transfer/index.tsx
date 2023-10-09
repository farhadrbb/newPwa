import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IInputCustom, ItemsTab } from "../../../common/types";
import ActiveAccount from "../../../component/activeAccount";
import Box from "../../../component/box";
import InputCustom from "../../../component/inputCustom";
import TabsCustom from "../../../component/tabsCustom";
import IbanAccountTrasnfer from "./ibanAccount";
import MobileAccountTransfer from "./mobileAccount";
import TejaratAccountTransfer from "./tejaratAccount";




const TransferAccount = () => {
    // ___________________________________Hook_______________________
    const step = useSelector((state: any) => state.stepSlice.data)
    // ______________________________________varibles_____________________________

    let dataTab = [
        {
            id: 0,
            title: 'تجارت'
        },
        {
            id: 1,
            title: 'موبایل',
        },
        {
            id: 2,
            title: 'پایا / ساتنا',
        },
    ]

    return (
        <>
            <div className="animate-[fade_0.7s]">
                <div className="animate-[upAnime10_0.5s]">
                    <div>
                        <ActiveAccount />
                        <Box className="mb-7">
                            <TabsCustom dataTab={dataTab} activeTab={step.step1?.data.activeTab}>
                                <TejaratAccountTransfer />
                                <MobileAccountTransfer />
                                <IbanAccountTrasnfer />
                            </TabsCustom>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TransferAccount