//  const BASE_URL = "http://192.168.100.102:8083/api/";
// const BASE_URL = "http://192.168.100.52:8083/api/";
// const BASE_URL = "http://46.209.152.169:8090/api/";


// const BASE_URL = "http://82.99.206.151:8090/api/";
//asli
const BASE_URL = "https://mbt.tejaratbank.ir/api/";
// const BASE_URL = "https://mhb.tejaratbank.ir/api/";

// const BASE_URL = UiConfigs["BASE_URL"];


export const API_CALL_CONSTANTS:any = {
    login: BASE_URL + "authentication/login",
    logout: `${BASE_URL}authentication/logout`,
    changePassword: BASE_URL + "authentication/change-password",
    sendComment: `${BASE_URL}customer/comment`,
    ReCaptcha: `${BASE_URL}authentication/captcha`,


    accountSourceBalance: BASE_URL + 'account/source-balance',
    accountDestination: BASE_URL + `account/destination`,
    accountDestinationCreateUpdate: BASE_URL + `account/destination-create-or-update`,
    accountTransaction: BASE_URL + `transaction/account`,
    accountTransctionEmail: BASE_URL + `transaction/account-mail`,
    accountSourceBlock: BASE_URL + `account/source-block`,
    accountSeourceUpdate: BASE_URL + `account/source-create-or-update`,
    accountSourceBlockInquery: BASE_URL + `account/source-block-inquiry`,
    accountTransferToAccount: BASE_URL + `transfer/account`,
    accountDestinationInquery: BASE_URL + `account/destination-inquiry`,
    accountTransferVerifyAccount: BASE_URL + `transfer/verify-account`,
    accountTransferStatus: BASE_URL + `transfer/get-account-transfer-status`,
    accountIbanDestination: BASE_URL + `iban/destination`,
    accountVerifyIban: BASE_URL + `transfer/verify-iban`,
    accountTransferToIban: BASE_URL + `transfer/iban`,
    accountTopupDirectPayment: BASE_URL + `top-up/account-direct-payment`,
    accountTopupPinPayemnt: BASE_URL + `top-up/account-pin-payment`,
    accountPayCharity: BASE_URL + `charity/account-payment`,
    accountBillVerify: BASE_URL + `bill/verify-account-payment`,
    accountPayBill: BASE_URL + `bill/account-payment`,
    accountTwoIdBillVerify: BASE_URL + `two-id-bill/verify-account-payment`,
    accountTwoIdPayBill: BASE_URL + `two-id-bill/account-payment`,
    accountPayInternetPack: BASE_URL + `internet-pack/account-payment`,
    accountIMInquery: BASE_URL + `instant-messaging/inquiry`,
    accountActivateIM: BASE_URL + `instant-messaging/active`,
    accountDeactivateIM: BASE_URL + `instant-messaging/delete`,
    accountTransferMobileVerify: BASE_URL + `transfer/verify-phone-number`,
    accountTransferMobile: BASE_URL + `transfer/phone-number`,
    accountTransferMobileStatusInquery: BASE_URL + `transfer/get-account-phone-number-transfer-status`,
    accountDestinationDelete: BASE_URL + `account/destination-delete`,
    accountIbanDestinationDelete: BASE_URL + `iban/destination-delete`,
    accountCreateUpdateIbanDestination: BASE_URL + `iban/destination-create-or-update`,
    accountSendOpt: `${BASE_URL}account-otp-registration/otp-send`,
    accountPlateLetter: `${BASE_URL}plate-letter/get-all`,
    savePlateInfo: `${BASE_URL}plate-info/save`,
    accountPlateInfoList: `${BASE_URL}plate-info/get-all`,
    accountPlateInfoDelete: `${BASE_URL}plate-info/delete`,
    accountPlateUpdate: `${BASE_URL}plate-info/update`,
    accountPlateAirPullotionSeasons: `${BASE_URL}air-pollution/list`,
    accountTrafficPlanList: `${BASE_URL}traffic-plan/list`,
    accountTrafficPlanPay: `${BASE_URL}traffic-plan/pay`,
    plateAnnualTollList: `${BASE_URL}annual-toll/list`,
    accountAnnualTollPay: `${BASE_URL}annual-toll/pay`,
    plateFreeWayTollList: `${BASE_URL}freeway-toll/list`,
    accountFreeWayTollPay: `${BASE_URL}freeway-toll/pay`,

    allRequesterMoney: `${BASE_URL}request-money/all-requester`,
    allReceiverMoney: `${BASE_URL}request-money/all-receiver`,
    createRequestMoney: ` ${BASE_URL}request-money/create`,
    updateRequestMoney: `${BASE_URL}request-money/update`,
    deleteRequestMoney: `${BASE_URL}request-money/delete`,
    createGroupRequestMoney: `${BASE_URL}request-money/create-group`,
    createSingleRequestMoney: `${BASE_URL}request-money/create-single`,
    createMultiRequestMoney: `${BASE_URL}request-money/create-multiple`,

    verifyRequestMoney: `${BASE_URL}request-money/verify`,
    getAllGroups: `${BASE_URL}group/all`,
    createGroup: `${BASE_URL}group/create`,
    updateGroup: `${BASE_URL}group/update`,
    deleteGroup: `${BASE_URL}group/delete`,



    refreshCardBalance: BASE_URL + `card/source-balance`,

    cardSendOtp: BASE_URL + `card/send-otp`,
    cardSourceCreate: BASE_URL + `card/source-create-or-update`,
    cardDestinationInquery: BASE_URL + `card/destination-inquiry`,
    cardDestination: BASE_URL + `card/destination`,
    cardCardBanks: BASE_URL + `transfer/card-card-banks`,
    cardVerifyCard: BASE_URL + `transfer/verify-card`,
    cardToCarTransfer: BASE_URL + `transfer/card`,
    cardTransferStatus: BASE_URL + 'transfer/get-card-transfer-status',
    cardGetSource: BASE_URL + `card/source-card`,
    cardUpdateSource: BASE_URL + `card/source-create-or-update`,
    cardDestinationCreateUpdate: BASE_URL + `card/destination-create-or-update`,
    cardTopupDirectPayment: BASE_URL + `top-up/card-direct-payment`,
    cardTopupPinPayemnt: BASE_URL + `top-up/card-pin-payment`,
    cardPayCharity: BASE_URL + `charity/card-payment`,
    cardBillVerify: BASE_URL + `billverify/bill-verify`,
    cardPayBill: BASE_URL + `bill/card-payment`,
    cardTwoIdBillVerify: BASE_URL + `two-id-bill/verify-card-payment`,
    cardTwoIdPayBill: BASE_URL + `two-id-bill/card-payment`,
    cardPayInternetPack: BASE_URL + `internet-pack/card-payment`,
    cardSourceblock: BASE_URL + `card/source-block`,
    cardSourceDelete: BASE_URL + `card/source-delete`,
    cardTransferMobileVerify: BASE_URL + `transfer/verify-card-phone-number`,
    cardTansferToMobile: BASE_URL + `transfer/card-phone-number`,
    cardTransferMobileStatusInquery: BASE_URL + 'transfer/get-card-phone-number-transfer-status',
    cardDestinationDelete: BASE_URL + `card/destination-delete`,
    getCardLessList: `${BASE_URL}cardless/inquiry`,
    CardLessGenerateToken: `${BASE_URL}cardless/generate-token`,
    CardRegisterCardLess: `${BASE_URL}cardless/register`,
    ValidateCardLess: `${BASE_URL}cardless/validate`,
    ConfirmCardLess: `${BASE_URL}cardless/confirm`,
    CardLessList: `${BASE_URL}cardless/list`,
    CardLessCancel: `${BASE_URL}cardless/cancel`,
    CardLessRegisterUsingPOST: `${BASE_URL}cardless/register`,
    CardLessConfirm: `${BASE_URL}cardless/confirm`,

    servicesTransactionReport: BASE_URL + `report`,
    servicesTransactionReportLatest: BASE_URL + `report/latest`,
    servicesTransactionReportDelete: BASE_URL + `report/delete`,
    serviceSmartConvert: `${BASE_URL}bank-account-conversion/smartConvert`,
    serviceGetBankList: `${BASE_URL}bank-account-conversion`,
    serviceDeActive: `${BASE_URL}account-otp-registration/otp-deactivate`,
    serviceAccountNumberList: `${BASE_URL}account-otp-registration/phonenumber-list`,
    serviceCardNumberList: `${BASE_URL}card-otp-registration/phonenumber-list`,
    serviceAccountVerifyNumber: `${BASE_URL}account-otp-registration/phonenumber-verification`,
    servicePhoneNumberConfirm: `${BASE_URL}account-otp-registration/otp-activate`,
    serviceCardVerifyNumber: `${BASE_URL}card-otp-registration/phonenumber-verification`,


    serviceCardPhoneNumberConfirm: `${BASE_URL}card-otp-registration/otp-activate`,
    serviceCardDeActiveDynamicPass: `${BASE_URL}card-otp-registration/otp-deactivate`,
    serviceCardDisableDynamicPass: `${BASE_URL}card-otp-registration/otp-disable`,
    // serviceBranchNearMe: `${BASE_URL}branch/near-me`,
    serviceBranchNearMe: `${BASE_URL}branch-info`,

    serviceGetBillList: `${BASE_URL}bill-inquiry/get-all`,
    serviceUpdateBill: `${BASE_URL}bill-inquiry/update-bill`,
    serviceDeleteBill: `${BASE_URL}bill-inquiry/delete-bill`,
    servicesSaveBill: `${BASE_URL}bill-inquiry/save-bill`,
    servicesDeleteBill: `${BASE_URL}bill-inquiry/delete-bill`,



    sayadDrawChequeList: `${BASE_URL}pichak/v2/internal/base/cheque/getDrawChequeByIdentifier?userIdentifierNumber=`,
    sayadInquiry: `${BASE_URL}pichak/v2/cheque/cheque-inquiry`,
    syadAdd: `${BASE_URL}pichak/v2/internal/base/beneficiary/add`,
    getSayadReasons: `${BASE_URL}pichak/v2/internal/base/data?typeID=`,
    sayadGetName: `${BASE_URL}pichak/v2/internal/base/person/getName`,
    sayadRegister: `${BASE_URL}pichak/v2/cheque/register`,
    sayadPhoneList: `${BASE_URL}pichak/v2/internal/base/getAllMobile`,
    sayadSendOTP: `${BASE_URL}pichak/v2/internal/base/cheque/sendOTPRequestNew`,
    sayadVerifyPhoneNumber: `${BASE_URL}pichak/v2/cheque/send-central-bank`,
    sayadOperationInquiry: `${BASE_URL}pichak/v2/internal/base/operation-inquiry`,
    sayadGetAccount: `${BASE_URL}pichak/v2/internal/base/nac/getAccountList?userIdentifierNumber=`,
    sayadInquiryCentralBank: `${BASE_URL}pichak/v2/cheque/inquiry-central-bank`,
    sayadRecievedChequeConfirm: `${BASE_URL}pichak/v2/cheque/confirm`,
    sayadTransferCheque: `${BASE_URL}pichak/v2/cheque/transfer`,
    sayadDeleteCheque: `${BASE_URL}pichak/v2/cheque/delete`,
    sayadInternalInquiry: `${BASE_URL}pichak/v2/cheque/inquiry`,
    sayadOwnerInquiry: `${BASE_URL}pichak/v2/cheque/owner-inquiry`,
    sayadChainInqury: `${BASE_URL}chekad/cheque/chain-inquiry`,
    sayadCommonInquiry: `${BASE_URL}pichak/v2/cheque/common-inquiry`,
    sayadCheckBookInquiry: `${BASE_URL}pichak/checkbook/inquiry`,
    sayadCheckBookList: `${BASE_URL}pichak/checkbook/list`,
    sayadCheckBookSendOTP: `${BASE_URL}pichak/checkbook/send-otp-request`,
    sayadCheckBookRequest: `${BASE_URL}pichak/checkbook/request`,
    sayadCheckBookRgistered: `${BASE_URL}pichak/v2/cheque/cheque-registered`,


    sayadGiveBack: `${BASE_URL}pichak/v2/cheque/giveBack`,



    chekadTokenCentersInquiry: `${BASE_URL}chekad/sign/token-centers-inquiry`,
    chekadReciveRandomCode: `${BASE_URL}chekad/sign/receive-random-code`,
    chekadGetMessage: `${BASE_URL}chekad/data/get-message?type=`,
    chekadSendOTP: `${BASE_URL}chekad/sms/send-otp-request`,
    chekadActivation: `${BASE_URL}chekad/sign/activation`,
    chekadDeactivation: `${BASE_URL}chekad/sign/deactivation`,
    chekadGetInquiry: `${BASE_URL}chekad/sign/inquiry?inquiryType=`,
    chekadGetByTypeName: `${BASE_URL}chekad/data/get-by-type-name?type=`,

    chekadGetChechBookList: `${BASE_URL}chekad/checkbook/list`,
    chekadCheckBookInquiry: `${BASE_URL}chekad/checkbook/inquiry`,
    chekadCheckBookRequest: `${BASE_URL}chekad/checkbook/request`,
    chekadChequeRegistered: `${BASE_URL}chekad/cheque/cheque-registered`,
    chekadChequeInquiry: `${BASE_URL}chekad/cheque/inquiry`,
    chekadGuaranteeInquiry: `${BASE_URL}chekad/cheque/guarantee-status`,
    chekadCancellation: `${BASE_URL}chekad/cheque/revoke`,
    chekadBlock: `${BASE_URL}chekad/cheque/block`,
    chekadUnblock: `${BASE_URL}chekad/cheque/unblock`,
    chekadGiveBack: `${BASE_URL}chekad/cheque/give-back`,
    chekadTransferCheck: `${BASE_URL}chekad/cheque/transfer`,

    chekadListInternal: `${BASE_URL}chekad/cheque/list-internal`,
    chekadRawPages: `${BASE_URL}chekad/checkbook/raw-pages`,
    chekadShahabInquiry: `${BASE_URL}chekad/shahab/inquiry`,
    chekadCheckRegister: `${BASE_URL}chekad/cheque/register`,
    chekadSendToCentralBank: `${BASE_URL}chekad/cheque/send-to-central-bank`,
    chekadUpdateCheck: `${BASE_URL}chekad/cheque/update`,
    chekadDeleteCheck: `${BASE_URL}chekad/cheque/delete`,

    chekadCartableRequest: `${BASE_URL}chekad/cheque/cartable-request`,
    chekadCartableList: `${BASE_URL}chekad/cheque/cartable-list`,
    chekadRealize: `${BASE_URL}chekad/cheque/realize`,
    chekadInquiryCheckbook: `${BASE_URL}chekad/checkbook/inquiry-checkbook`,
    chekadCheckbookPages: `${BASE_URL}chekad/checkbook/inquiry-pages`,
    chekadGuaranteeRequest: `${BASE_URL}chekad/guarantee/request`,
    chekadGuaranteeEnding: `${BASE_URL}chekad/guarantee/ending`,
    chekadGuarantorInquiry: `${BASE_URL}chekad/cheque/inquiry-by-`,









    // POST /api/pichak/v2/cheque/inquiry-central-bank
    getOrgansList: BASE_URL + `organization-payment`,
    getCharityOrgans: BASE_URL + `charity/organizations`,
    getBillTypes: BASE_URL + `bill/types`,
    billInquiry: BASE_URL + `bill-inquiry/decode`,
    generalBillInquiry: BASE_URL + `bill-inquiry/general-bill-inquiry`,
    getTopupPacks: BASE_URL + `top-up/packs`,
    getInternetPacks: BASE_URL + `internet-pack/packs`,
    billInqueryByBillId: BASE_URL + `bill-inquiry/get-by-bill-id`,
    billInqueryDetailsByBillId: BASE_URL + `bill-inquiry/get-details-by-bill-id`,

    keyExchange: BASE_URL + "authentication/key/exchange",

}