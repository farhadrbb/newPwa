import React, { useState, useEffect } from "react";

import Box from "../../../../component/box";
import InputCustom from "../../../../component/inputCustom";
import TabsCustom from "../../../../component/tabsCustom";
import { useLazyGetAllDataQuery } from "../../../../redux/api/allApi";
import { GiClick } from 'react-icons/gi'
import logo_img from '../../../../assest/img/tejarat_logo1.png'
import AccountsDestination from "./accountsDestination";
import { useSelector } from "react-redux";





const DesAccounts = () => {

    // ______________________________________varibles_____________________________

    const step = useSelector((state: any) => state.stepSlice.data)
    let dataTab = [
        {
            id: 0,
            title: 'حساب های مقصد'
        },
        {
            id: 1,
            title: 'حساب های خودم',
        },

    ]
    // _____________________________________________________useEffect_____________________________

    return (
        <>

            <Box className="mb-7">
                {step.step1.data.apiKey === "accountDestination" && (
                    <TabsCustom dataTab={dataTab} notAnime>
                        <AccountsDestination />
                        <div></div>
                    </TabsCustom>
                )}
                {step.step1.data.apiKey === "accountIbanDestination" && (
                    <AccountsDestination />
                )}
            </Box>

        </>
    )
}


export default DesAccounts