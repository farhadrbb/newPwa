import * as React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';


interface IProps {
    title1: string,
    title2: string,
    click: ()=> void
}
const BoxAdd = (props: IProps) => {
    // _________________________________varibels________________________
    const { title1, title2,click } = props
    return (
        <>
            <div className='boxItem-global' onClick={()=>click()}>
                <div className='flex items-center h-full '>
                    <div className='flex'>
                        <BsPlusCircleFill className='text-cyan-50 text-[40px]' />
                        <div className='flex flex-col mr-2'>
                            <div className='text-xs font-bold mb-2'>{title1}</div>
                            <div className='text-[10px] text-gray-600'>{title2}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoxAdd;