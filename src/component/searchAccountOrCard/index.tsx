import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../common/url';
import { sepreteNumber3 } from '../../common/utils';
import { setAccountActive } from '../../redux/slice/activeAccountAndCard';
import { setStepsSlice } from '../../redux/slice/step';
import Box from '../box';
import ImageBanks from '../imageBank';
import InputCustom from '../inputCustom';



interface IFormValue {
    text: string,
}

const SearchAccountOrCard = () => {
    // __________________________________________hook______________________________

    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)
    const step = useSelector((state: any) => state.stepSlice.data.step1)
    const accounts = useSelector((state: any) => state.activeCardOrAccount?.[step.data.type])
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // __________________________________________varibles______________________________

    const dataForm = [
        {
            title: '',
            name: 'text',
            type: "number",
            placeholder: "جست و جو",
            active: true,
        },

    ]

    // __________________________________________functions______________________________
    const handleClickItem = (itm: any) => {
        dispatch(setAccountActive(itm))
        dispatch(setStepsSlice({
            step1: {
                pathname: URLS.account.search,
                title: 'انتقال وجه',
                backUrl1: URLS.account.index,
                backToHome: '/account',
                data: {
                    ...step.data,
                },
            }
        }))
        navigate(URLS.account.transfer)
    }




    return (
        <>
            <Box >
                <div className='flex flex-col'>
                    <div className="mb-3">
                        <InputCustom
                            dataForm={dataForm}
                            formValues={formValue}
                            setFormValues={setFormValue}
                        />
                    </div>
                    <div className="">
                        {accounts?.map((itm: any, ind: any) => (
                            <div className="boxItem-global cursor-pointer" onClick={() => handleClickItem(itm)}>
                                <div className="flex justify-between items-center">
                                    <div className="flex text-xs font-bold items-center">
                                        <ImageBanks logKey={itm.bank?.logoKey} />
                                        <div className="mr-2 text-black text-sm dark:text-gray-100">{step.data.type === "accounts" ? itm?.accountNumber : itm?.cardNumber}</div>
                                    </div>
                                    {/* <GiClick className="text-xl text-cyan-50  rotate-[30deg]" /> */}
                                </div>
                                <div className="mt-1 text-xs text-gray-500 dark:text-gray-200 font-bold flex justify-end w-full ">
                                    <div className='text-cyan-50 ml-1'>{sepreteNumber3(itm?.balance?.amount)}</div>
                                    <div>{t("IRR")}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
        </>
    );
}

export default SearchAccountOrCard;