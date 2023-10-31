

import { useTranslation } from "react-i18next"



export interface VItem {
    title: string,
    icon: any,
    onClick: () => void
}



function VerticalItems(props: any) {
    let items: VItem[] = props.items
    // ___________________________________Hook_______________________




    return (
                < >
            {items.map((cheque: { title: string, icon: any ,onClick:any}, index: number) => (<>
                <div className="flex mb-1 shadow md:shadow-sm !text-xs items-center p-2 text-base" key={index} onClick={cheque.onClick}>
                    <div className="grow-1  mx-2 ">

                        <cheque.icon />
                    </div>
                    <div className="grow-2 ">
                        {cheque.title}
                    </div>
                </div>
                <br/>
            </>))}
        </>
    )
}
export default VerticalItems