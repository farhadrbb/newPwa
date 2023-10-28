import { useTranslation } from "react-i18next"
import Box from "../../../component/box"
import TabsCustom from "../../../component/tabsCustom"


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

  
    return (
        <div>
                <Box className="mb-7">
                    <TabsCustom dataTab={dataTab} >
                        <div>
                            1

                        </div>
                        <div>
                            2

                        </div>
                        {/* <TejaratAccountTransfer />
                        <MobileAccountTransfer />
                        <IbanAccountTrasnfer /> */}
                    </TabsCustom>
                </Box>
            </div>
    )
}
export default ChequeManagement