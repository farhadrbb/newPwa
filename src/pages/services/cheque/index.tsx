import { useTranslation } from "react-i18next"
import Box from "../../../component/box"
import TabsCustom from "../../../component/tabsCustom"
import Sayad from "./sayad"
import Digital from "./digital"


function ChequeManagement() {
    const { t } = useTranslation()


     // ______________________________________varibles_____________________________

     let dataTab = [
        {
            id: 0,
            title: t("PAPER_CHEQUE")
        },
        {
            id: 1,
            title: t("ELECTRONIC_CHEQUE"),
        },
       
    ]

    // const SItems:SMenu[] = [
    //     {
    //         title: t("CHEQUE_MANAGEMENT"),
    //         icon: IcChequeManagment,
    //         color: 'bg-itemSelect-cyan',
    //         fill: 'fill-itemSelect-grayDark dark:fill-itemSelect-graylight',
    //         route: '/services/cheque',
    //         onclick: (item: IMenu) => handleOnclickItem(item)
    //     }
    // ]
  
    return (
        <div>
                <Box className="mb-7">
                    <TabsCustom dataTab={dataTab} >
                        <Sayad />
                        <Digital />
                        {/* <TejaratAccountTransfer />
                        <MobileAccountTransfer />
                        <IbanAccountTrasnfer /> */}
                    </TabsCustom>
                </Box>
            </div>
    )
}
export default ChequeManagement