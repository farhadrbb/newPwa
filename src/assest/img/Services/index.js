import ic_balance_service from "./ic_balance_service.svg";
import ic_transfer_service from "./ic_transfer_service.svg";
import ic_internet_service from "./ic_internet_service.svg";
import ic_topup_service from "./ic_topup_service.svg";
import ic_charity_service from "./ic_charity_service.svg";
import ic_account_log_service from "./ic_account_log_service.svg";
import ic_bill_service from "./ic_bill_service.svg";
import ic_org_payment_service from "./ic_org_payment_service.svg";
import ic_detail_service from "./ic_detail_service.svg";
import ic_about_user_menu from "./ic_about_user_menu.svg";
import ic_feedback_user_menu from "./ic_feedback_user_menu.svg";
import ic_guide_user_menu from "./ic_guide_user_menu.svg";
import ic_request_money from "./ic_request_money.svg";
import ic_account_car from "./ic_account_car.svg";
import ic_settings_service from "./ic_settings_service.svg";

import ic_branches_service from "./ic_branches_service.svg";
import ic_cheques_management_service from "./ic_cheques_management_service.svg";
import ic_checkadDeactive from "./ic_checkadDeactive.svg";
import ic_chekadActive from "./ic_chekadActive.svg";
import ic_chekadProfileInquiry from "./ic_chekadProfileInquiry.svg";
import ic_chekadRequest from "./ic_chekad_cheque_request.svg";
import ic_checkadIssuing from "./ic_checkadIssuing.svg";
import ic_chekadCartableIncomingCheque from "./ic_chekad_CartableIncomingCheque.svg";
import ic_chekad_CreditCardBlocked from "./ic_chekad_CreditCardBlocked.svg";
import ic_chekad_cancellation from "./ic_chekad_cancellation.svg"
import ic_chekad_Banned from "./ic_chekad_Banned.svg";
import ic_chekad_history from "./ic_chekad_history.svg"





import ic_sayadInquiry from "./ic_sayadInquiry.svg"
import ic_sayadConfirm from './ic_sayadConfirm.svg'
import ic_sayadStatus from "./ic_sayadStatus.svg"
import ic_sayadTransfer from "./ic_sayadTransfer.svg"
import ic_sayadAsk from "./ic_sayadAsk.svg"
import ic_sayadChain from "./ic_sayadChain.svg"
import ic_sayadChequeStatus from "./ic_sayadChequeStatus.svg"
import ic_sayadGiveback from "./ic_sayadGiveback.svg"
import ic_sayadOperation from "./ic_sayadOperation.svg"
import ic_sayadReminder from "./ic_sayadReminder.svg"




import ic_destination_management_service from "./ic_destination_management_service.svg";
import ic_installation_management_service from "./ic_installation_management_service.svg";
import ic_transactions_log_service from "./ic_transactions_log_service.svg";

import ic_canceled from "../ic_canceled.svg"
import ACTIVE from "../ic_accepted.svg"
import EXPIRED from "../ic_rejected.svg"




export function getServiceIcon(name) {
    switch (name) {
        case "balance":
            return ic_balance_service;
        case "settings":
            return ic_settings_service;
        case "transfer":
            return ic_transfer_service;
        case "internet":
            return ic_internet_service;
        case "topup":
            return ic_topup_service;
        case "charity":
            return ic_charity_service;
        case "account_log":
            return ic_account_log_service;
        case "bill":
            return ic_bill_service;
        case "payment":
            return ic_org_payment_service;
        case "detail":
            return ic_detail_service;
        case "help":
            return ic_guide_user_menu;
        case "aboutus":
            return ic_about_user_menu;
        case "comment":
            return ic_feedback_user_menu;
        case "carServices":
            return ic_bill_service;
        case "branches":
            return ic_branches_service;
        case "cheque":
            return ic_cheques_management_service;
        case "destination":
            return ic_destination_management_service;
        case "installment":
            return ic_installation_management_service;
        case "transactions":
            return ic_transactions_log_service;
        case "car":
            return ic_account_car;
        case "requestMoney":
            return ic_request_money;

        case "ic_canceled":
            return ic_canceled
        case "ACTIVE":
            return ACTIVE
        case "EXPIRED":
            return EXPIRED













        case "checkadDeactive":
            return ic_checkadDeactive;
        case "chekadActive":
            return ic_chekadActive;
        case "chekadProfileInquiry":
            return ic_chekadProfileInquiry;
        case "checkadRequest":
            return ic_chekadRequest;
        case "chekadCartableIncomingCheque":
            return ic_chekadCartableIncomingCheque;
        case "chekadCreditCardBlocked":
            return ic_chekad_CreditCardBlocked;
        case "chekadCancellation":
            return ic_chekad_cancellation;
        case "chekadBanned":
            return ic_chekad_Banned;
        case "chekadHistory":
            return ic_chekad_history;
        case "checkadIssuing":
            return ic_checkadIssuing;
        case "sayadTransfer":
            return ic_sayadTransfer
  



            case "sayadInquiry":
                return ic_sayadInquiry
            case "sayadConfirm":
                return ic_sayadConfirm
            case "sayadStatus":
                return ic_sayadStatus
            case "sayadAsk":
                return ic_sayadAsk
            case "sayadChain":
                return ic_sayadChain
            case "sayadChequeStatus":
                return ic_sayadChequeStatus
            case "sayadGiveback":
                return ic_sayadGiveback
            case "sayadOperation":
                return ic_sayadOperation
            case "sayadReminder":
                return ic_sayadReminder

    }
}
