import * as React from 'react';
interface IProps {
    logKey: string
    bill?:boolean
}
const ImageBanks = (props: IProps) => {
    const { logKey,bill } = props


    const imgUrl = require(`../../assest/img/banks/${logKey === 'ic_tejarat' ? "tejarat_logo1" : logKey }.png`)
    return (
        <>
            <img src={imgUrl} className={`${bill ? 'w-[25px] h-[27px]' : 'w-[35px] h-[37px]'}`} />
        </>
    );
}

export default ImageBanks;

