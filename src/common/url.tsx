const URLS = {
    account: {
        index: "/account",
        transfer: "/account/transfer",
        add: "/account/add",
        log: "/account/log",
        search: "/account/search",
        destAccounts: "/account/trasnfer/destAccounts",
        addDestAccounts: "/account/addDestAccounts",
        logResult: '/account/log/result',
        logEmail: '/account/log/email',
        info: '/account/info',
        confirmTransfer: "/account/transfer/confirmForm",
        receiptTransfer: "/account/transferMoney/receiptTransfer",
        bill: "/account/bill",
        topup: "/account/topup",
        internet: "/account/internet",
        charity: "/account/charity",
        organPayment: "/account/organPayment",
        ibanDestinations: "/account/ibanDestinations",
        confirmIbanTransfer: "/account/transferMoney/confirmIbanForm",
        instantMessaging: "/account/messaging",
        instantMessagingInquery: "/account/messaging/inquery",
        instantMessagingConfirm: "/account/messaging/confirm",
        plateInfo: "/account/plateInfo",
        addPlateInfo: "/account/addPlate",
        UpdatePlate: "/acount/updatePlate",
        inquiryPlate: "/account/inquiry",
        airPollutionList: "/account/inquiry/airPollution",
        annualTollList: "/account/inquiry/annualToll",
        freeWayTollList: "/account/inquiry/freeWayToll",
        airPollutionPay: "/acount/inquiry/airPollutionPay",
        PlatePayConfirmForm: "/account/inquiry/payToll",
        RequestMoney: "/account/requestMoney",
        deleteRequestMoney: "/request-money/delete",
        AddRequestMoney: "/request-money/add",
        RequestMoneyAddPerson: "/request-money/add/addPerson",
        RequestMoneyRequesterList: "/request-money/requesterList",



    },
    profile: {
        index: "/profile",
        settings: "/profile/settings",
        aboutUs: "/profile/aboutUs",
        CommentSend: "/profile/comment"
    },
    card: {
        index: "/card",
        add: '/card/add',
        topup: '/card/topup',
        search: "/card/search",
        bill: "/card/bill",
        transfer: "/card/transfer",
        destCardsSearch: "/card/destCards",
        internet: "/card/internet",
        charity: "/card/charity",
        organPayment: "/card/organPayment",
        confirmTransfer: "/card/transfer/confirmForm",
        receiptTransfer: "/card/transfer/receiptTransfer",
        cardLess: "/cardless",
        addCardLess: "/cardless/addForm",
        validateCardLess: "/cardless/validateForm",
        confirmCardLess: "/cardless/confirmForm",
        receipt: "/cardless/receipt",
        cardLessCancel: "/cardless/Cancel",
        cardLessShareCardDetail: "/cardless/ShareCardDetail",
        cardLessConfirmCardDetail: "/cardless/ConfirmCardDetail",
        calculator: "/calculator"

    },
    services: {
        index: "/services",
        destinations: "/services/destinations",
        transactionsLog: "/services/transactionsLog",
        transactionsReport: "/services/trnasctionsLog/report",
        conversion: "/services/conversion",
        dynamicPass: "/services/dynamicPass",
        dynamicPassCard: "/services/dynamicPass/card",
        dynamicPassAccount: "/services/dynamicPass/account",
        accountActivate: "/services/DynamicPass/AccountActivate",
        dynamicPassActivate: "/shared/dynamicPass/dynamicPassActivate",
        serialActivate: "/services/DynamicPass/SerialActivate",
        branches: "/services/branches",




        sayadCheckBooks: "/services/sayadCheque/sayadCheckBooks",
        checkBookRegister: "/services/sayadCheque/checkBookRegister",
        checkBookGetMethod: "/services/sayadCheque/checkBookGetMethod",
        sayadCheckBookReceiver: "/services/sayadCheque/checkBookReceiver",
        sayadCheckBookSendRequest: "/services/sayadCheque/checkBookSendRequest",
        sayadCheckBookConfirmOTP: "/services/sayadCheque/checkBookConfirmOTP",

        sayadIssuedInquiry: "/services/sayadCheque/sayadIssuedInquiry",
        sayadIssuedInquiryReceipt: "/services/sayadCheque/sayadIssuedInquiryReceipt",
        sayadOperationLog: "/services/sayadCheque/sayadOperationLog",
        sayadOperationRecords: "/services/sayadCheque/operationRecords",


        ChequeServices: "/services/chequeServices",
        chekadActivateMessage: "/services/chequeServices/chekadActivateMessage",
        chekadSendOTP: "/services/chequeServices/ChekadSendOTP",
        chekadCheckBookList: "/services/chequeServices/CheckadCheckbookList",
        chekadAddElectronicCheck: "/services/chequeServices/chekadAddElectronicCheck",
        chekadReceiptInquiry: "/services/chequeServices/chekadReceiptInquiry",
        chekadChequeRegistered: "/services/chequeServices/chekadChequeRegistered",
        chekadChequeRecords: "/services/chequeServices/chekadChequeRecords",
        chekadGuaranteeStatusInquiry: "/services/chequeServices/chekadGuaranteeStatusInquiry",
        chekadGlobalChequeInquiry: "/services/chequeServices/chekadGlobalChequeInquiry",
        chekadBlockUnblock: "/services/chequeServices/chekadBlockUnblock",
        chekadTransferReturn: "/services/chequeServices/TransferReturn",
        ChekadChequeDetail: "/services/chequeServices/TransferReturn/ChekadChequeDetail",
        chekadBeneficiaries: "/services/chequeServices/TransferReturn/chekadBeneficiaries",
        chekadIssuance: "/services/chequeServices/Issuance",
        AddChekadList: "/services/chequeServices/Issuance/addChekadList",
        chekadAllRawPages: "/services/chequeServices/Issuance/chekadRawPages",
        chequeInformationDetails: "/services/chequeServices/Issuance/chequeInformationDetails",
        ChekadAddPersons: "/services/chequeServices/Issuance/ChekadAddPersons",
        ChekadFinalSubmit: "/services/chequeServices/Issuance/ChekadFinalSubmit",
        ChekadCartableList: "/services/chequeServices/ChekadCartableList",
        ChekadAddPerson: "/services/chequeServices/ChekadAddPerson",
        ChequeRealize: "/services/chequeServices/ChequeRealize",
        ChekadCheckbookInquiry: "/services/chequeServices/CheckbookInquiry",
        ChekadCheckbookInquiryList: "/services/chequeServices/CheckbookInquiryList",



        ChekadCheckPagesInquiry: "/services/chequeServices/CheckPagesInquiry",
        ChekadGuaranteeRequests: "/services/chequeServices/GuaranteeRequests",
        ChekadGuarantorInquiry: "/services/chequeServices/GuarantorInquiry",
        GuarantorCheckInformation: "/services/chequeServices/GuarantorCheckInformation",



        chequeManagement: "/services/chequeManagement",
        sayadCheque: "/services/sayadCheque",
        sayadDrawerOperation: "/services/sayadCheque/drawerOperation",
        ChequeInquiry: "/services/sayadCheque/ChequeInquiry",
        SayadPublicInquiry: "services/sayadCheque/PublicInquiry",
        ChequeAddForm: "/services/sayadCheque/ChequeAddForm",
        ChequeRegister: "/services/sayadCheque/ChequeRegister",
        sayadCommonInquiry: "/services/commonInquiry",      // POST /api/pichak/v2/cheque/common-inquiry
        sayadCommonInquiryInfo: "/services/commonInquiry/Info",




        AddBeneficiaries: "/services/sayadCheque/AddBeneficiaries",
        addPerson: "/services/sayadCheque/AddPerson",
        ChainInquiry: "/services/sayadCheque/ChainInquiry",
        SayadChainInquiryReceipt: "/services/sayadCheque/ChainInquiry/SayadChainInquiryReceipt",


        bill: "/services/bill",
        addBill: "/services/bill/addBill",
        editBill: "/services/bill/editBill",

        Groups: "/services/groups",
        EditGroup: "/services/editGroup",
        GroupMember: "/services/groupMember",
        AddGroupMember: "/services/groups/AddMember",
        AddGroup: "/services/addGroup",



        chequeOTP: "/services/sayadCheque/ChequeSendOTP",
        sayadConfirmPhone: "/services/sayadCheque/ConfirmPhone",
        sayadBeneficiafryOperation: "/services/sayadCheque/BeneficiafryOperation",
        beneficiariesChequeInformation: "/services/sayadCheque/BeneficiariesChequeInformation",
        RecievedChequeConfirm: "/services/sayadCheque/RecievedChequeConfirm",
        SayadGiveBack: "/services/sayadCheque/SayadGiveBack",
        SayadTransferCheque: "/services/sayadCheque/TransferCheque",
        SayadSharedConfirmOTP: "/services/sayadCheque/ConfirmOTP",




    },
    shared: {
        organList: "/shared/organList",
        topupConfirm: "/shared/chargeForms/confirmForm",
        topupReceipt: "/shared/chargeForms/receipt",
        charityList: "/shared/charityList",
        charityPayConfirm: "/shared/charity/confirmForm",
        charityReceipt: "/shared/charity/receipt",
        organPayConfirm: "/shared/organForms/confirmForm",
        billPaymentConfirm: "/shared/billForms/confirmForm",
        billReceipt: "/shared/billFoems/receipt",
        internetPacks: "/shared/internetForms/packs",
        internetPackConfirm: "/shared/internetForms/confirmForm",
        internetPackReceipt: "/shared/internetForms/receipt",
        MobileContacts: "/shared/MobileContacts",
        SayadCameraPage: "/services/CameraPage",

    }

}
export default URLS;