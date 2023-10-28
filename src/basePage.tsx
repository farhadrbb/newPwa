import { useSelector } from "react-redux";
import { useRoutes, Navigate } from "react-router-dom";
import Layout from "./component/layout";
import Account from "./pages/account";
import TransferAccount from "./pages/account/transfer";
import Card from "./pages/card";
import { useState } from 'react'
// import DesAccounts from "./pages/account/transfer/desAccounts";
import ConfirmForm from "./component/confirmForm";
import DesAccounts from "./pages/account/transfer/desAccounts";
import Receipt from "./component/receipt";
import Services from "./pages/services";
import ChequeManagement from "./pages/services/cheque";



const BasePage = () => {


    let element = useRoutes([
        {
            path: "/account",
            children: [
                { index: true, element: <Account /> },
                {
                    path: "transfer",
                    element: <TransferAccount />,
                    // children: [
                    //     { index: true, element: <TransferAccount />, },
                    //     { path: "confirmForm", element: <ConfirmForm /> },
                    //    { path: "destAccounts", element: <DesAccounts /> }
                    // ]
                },
                { path: "transfer/confirmForm", element: <ConfirmForm /> },
                { path: "transfer/destAccounts", element: <DesAccounts /> },
                { path: "transfer/receipt", element: <Receipt /> },

            ],
        },
        {
            path: "/card",
            children: [
                { index: true, element: <Card /> },
                { path: "transfer", element: <div>transfer</div> },
                { path: "transfer/test2", element: <div>test2</div> },
            ],
        },
        {
            path: "/services",
            children: [
                { index: true, element: <Services/> },
                { path: "cheque", element: <ChequeManagement/> },
                { path: "transfer/test2", element: <div>test2</div> },
            ],
        },
        {
            path: "/profile",
            children: [
                { index: true, element: <div>test</div> },
                { path: "transfer", element: <div>transfer</div> },
                { path: "transfer/test2", element: <div>test2</div> },
            ],
        },
        {
            path: "*",
            element: <Navigate to="/login" replace={true} />,
        },
    ]);
    return element;
};

export default BasePage;
