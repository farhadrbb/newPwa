import * as React from 'react';
import { MdKey } from 'react-icons/md';
import { useSelector } from 'react-redux';
import useConfirmFormModel from '../../customHook/useConfirmModel';
import { usePostAllDataMutation } from '../../redux/api/allApi';
import BtnCustom from '../btnCustom';



interface IProps {
    mode?: number,
    blank?: boolean,
    amount?: string
}

const OtpPassBtn = (props: IProps) => {
    const { mode, blank, amount } = props

    const activeAccount = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const [postData, resultPostData] = usePostAllDataMutation()
    const [infoData,infoTitle] = useConfirmFormModel()



    // ____________________________________functions_________________________
    function prepareAccountData() {
        let accountData = {}

        if (mode === 4) {
            accountData = {
                accountOperation: "ACCOUNT_BLOCK",
                sourceAccountNumber: activeAccount.accountNumber
            }
        } else if (blank) {
            accountData = {
                accountOperation: "BLANK",
                sourceAccountNumber: activeAccount.accountNumber,
            };
        } else {
            accountData = {
                amount: infoData?.amount ? {amount:infoData?.amount?.replace(/\,/g, ""),type: "IRR"} : {},
                accountOperation: "TRANSFER",
                sourceAccountNumber: activeAccount.accountNumber,
            };
        }
        return accountData;
    }

    const sendOtp = () => {
        let body = prepareAccountData()
        postData({ url: 'accountSendOpt', body })
    }
    return (
        <>
            <BtnCustom
                title='پیامکی'
                classNameBtn='bg-yellow-500'
                click={sendOtp}
                icon={<div className='ml-1 text-lg'><MdKey /></div>}
            />
        </>
    );
}

export default OtpPassBtn;