import * as React from 'react';
import { useTranslation } from 'react-i18next';
// import logo_img from '../../assest/img/logo_full.png'
import logo_img from '../../assest/img/tejarat_logo1.png'
import { sepreteNumber3 } from '../../common/utils';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiTwotoneStar } from 'react-icons/ai';
import { SlRefresh } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import BtnCustom from '../btnCustom';
import { useNavigate } from 'react-router-dom';
import { setStepsSlice } from '../../redux/slice/step';
import URLS from '../../common/url';



const ActiveAccount = () => {
    // __________________________________varibles______________________

    let parentClass = `w-full h-[105px]  bg-white border-gray-300 shadow-lg dark:text-darkMode-graylight dark:bg-darkMode-grayDark rounded-[15px] px-5 mb-4  flex flex-col p-2 border dark:border-0  border-gray-300`
    // __________________________________hook______________________
    const { t } = useTranslation()
    const active = useSelector((state: any) => state.activeCardOrAccount.activeAccount)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const step = useSelector((state: any) => state.stepSlice.data)

    // _____________________________________functions___________________

    const handleClick = ()=>{
        dispatch(setStepsSlice({
            step1: {
                pathname: URLS.account.search,
                title: 'انتخاب حساب مبدا',
                backUrl1: URLS.account.transfer,
                backToHome: '/account',
                data: {
                    ...step?.step1?.data,
                    type: 'accounts',
                },
            }
        }))
        navigate(URLS.account.search)
    }

    return (
        <div className={parentClass}  onClick={()=>handleClick()}>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <img src={logo_img} className="w-[35px] h-[37px]"/>
                        <div className='mr-2 text-sm font-bold'>{active.accountNumber}</div>
                        <MdOutlineKeyboardArrowDown className='text-xl mr-2' />
                        <div className='mr-2'>
                            {/* <BtnCustom error classNameBtn='!p-1 !text-[10px] border-0 text-gray-500 dark:text-gray-200 !bg-transparent' title='تغییر حساب' /> */}
                        </div>
                    </div>
                    <div>
                        <AiTwotoneStar className='text-yellow-500' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex'>
                    <div className='text-xs'>{t('ACCOUNT_BALANCE')}</div>
                    <SlRefresh className='mr-1 fill-cyan-50' />
                </div>
                <div className='flex text-sm  py-1  rounded-lg items-center  dark:bg-darkMode-graylight px-2'>
                    <div className='ml-1 text-cyan-50 font-bold '>
                        {sepreteNumber3(active?.balance?.amount)}
                    </div>
                    <div className='text-xs  text-black '>ریال</div>
                </div>
            </div>

        </div>
    );
}

export default ActiveAccount;