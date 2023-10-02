import * as React from 'react';
interface IProps {
    logKey: string
}
const ImageBanks = (props: IProps) => {
    const { logKey } = props


    const imgUrl = require(`../../assest/img/banks/${logKey === 'ic_tejarat' ? "tejarat_logo1" : logKey }.png`)
    return (
        <>
            <img src={imgUrl} className='w-[35px] h-[37px]' />
        </>
    );
}

export default ImageBanks;

