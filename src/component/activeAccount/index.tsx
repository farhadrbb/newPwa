import * as React from 'react';
import { useTranslation } from 'react-i18next';
// import logo_img from '../../assest/img/logo_full.png'
import logo_img from '../../assest/img/tejarat_logo1.png'
import { sepreteNumber3 } from '../../common/utils';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiTwotoneStar } from 'react-icons/ai';
import { SlRefresh } from 'react-icons/sl';
import { useSelector } from 'react-redux';



const ActiveAccount = () => {
    // __________________________________varibles______________________

    let parentClass = `w-full h-[105px]  bg-white border-gray-300  dark:text-darkMode-graylight dark:bg-darkMode-grayDark rounded-xl px-5 mb-4  flex flex-col p-2 border dark:border-0  border-gray-300`
    // __________________________________hook______________________
    const { t } = useTranslation()

    const active = useSelector((state: any) => state.activeCardOrAccount.activeAccount)






    return (
        <div className={parentClass}  >
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <img src={logo_img} className="w-[35px] h-[37px]" />
                        <div className='mr-2 text-sm font-bold'>{active.accountNumber}</div>
                        <div >
                            <MdOutlineKeyboardArrowDown className='text-xl mr-2' />
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
                <div className='flex text-sm  py-1 px-3 rounded-lg bg-gray-100 dark:bg-darkMode-graylight shadow-md'>
                    <div className='ml-1 text-cyan-50 font-bold '>
                        {sepreteNumber3(active?.balance?.amount)}
                    </div>
                    <div className='text-xs mt-[2px] text-black '>ریال</div>
                </div>
            </div>

        </div>
    );
}

export default ActiveAccount;