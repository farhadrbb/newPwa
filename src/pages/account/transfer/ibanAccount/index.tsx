import * as React from 'react';
import InputCustom from '../../../../component/inputCustom';



interface IFormValue {
    amount: string,
    price: string
}

const IbanAccountTrasnfer = () => {

    // ___________________________________Hook_______________________

    const [formValue, setFormValue] = React.useState<IFormValue>({} as IFormValue)

    // ______________________________________varibles_____________________________
    const dataFormTejarat = [
        {
            title: 'شماره موبایل مقصد',
            name: 'price',
            type: "number",
            active:true
            // btn: {
            //     title: 'انتخاب',
            //     click: handleClickModal,
            //     icon: showPass ? <FaEye /> : <FaEyeSlash />
            // },
        },
        {
            title: 'مبلغ',
            name: 'amount',
            type: "amount",
            active:true
        },
    ]
    return (
        <>
            <div className='flex flex-col'>
                <InputCustom
                    dataForm={dataFormTejarat}
                    setFormValues={setFormValue}
                    formValues={formValue}
                />
            </div>
        </>
    );
}

export default IbanAccountTrasnfer;