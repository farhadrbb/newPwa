import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLS from '../../../common/url';
import { sepreteNumber3 } from '../../../common/utils';
import { setAccountActive } from '../../../redux/slice/activeAccountAndCard';
import { setStepsSlice, setStepsSliceEmptyTheStep } from '../../../redux/slice/step';
import Box from '../../box';
import ImageBanks from '../../imageBank';
import InputCustom from '../../inputCustom';



interface IFormValue {
    text: string,
}

const SearchAccountOrCard = () => {
    // __________________________________________hook______________________________

    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)
    const step = useSelector((state: any) => state.stepSlice.data)
    const accounts = useSelector((state: any) => state.activeCardOrAccount?.accounts)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const whenBack = useSelector((state: any) => state.stepSlice.backClick)


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
        dispatch(setStepsSliceEmptyTheStep(step.step2 ? "step2" : step.step1 ? 'step1' : ''))

        // dispatch(setStepsSlice({
        //     step1: {
        //         pathname: step.step0?.pathname,
        //         title: 'انتقال وجه',
        //         backUrl1: URLS.account.index,
        //         backToHome: '/account',
        //         data: {
        //             ...step?.step1?.data,
        //         },
        //     }
        // }))
        navigate(step.step2?.backUrl1 || step.step1?.backUrl1)
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
                                        <div className="mr-2 text-black text-sm dark:text-gray-100">{itm?.accountNumber}</div>
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