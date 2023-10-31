import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ActiveAccount from '../../../component/activeAccount';
import Box from '../../../component/box';
import TabsCustom from '../../../component/tabsCustom';
import BillGeneral from './billGeneral';
import BillInquery from './billInquery';
import BillTwoIdBill from './twoIdBill';




interface IFormValue {
    billIdentifier?: number,
    paymentIdentifier?: number,
    textSelect: string
}
const AccountBill = () => {
    const step = useSelector((state: any) => state.stepSlice.data)
    const { t } = useTranslation()

    let dataTab = [
        {
            id: 0,
            title: t('BILL_GENERAL')
        },
        {
            id: 1,
            title: t('INQUERY'),
        },
        {
            id: 2,
            title: t('TWO_ID_BILL'),
        },

    ]


    return (
        <>
            <ActiveAccount />
            <Box>
                <TabsCustom dataTab={dataTab} activeTab={step.step0?.data?.activeTab}>
                    <BillGeneral />
                    <BillInquery />
                    <BillTwoIdBill />
                </TabsCustom>
            </Box>
        </>
    );
}

export default AccountBill;