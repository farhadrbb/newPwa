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
import SearchAccountOrCard from "./component/searchAccountOrCard";
import AccountLog from "./pages/account/accountLog";
import AccountLogResult from "./pages/account/accountLog/accountLogResult";



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
                { path: "search", element: <SearchAccountOrCard /> },
                { path: "log", element: <AccountLog /> },
                { path: "log/result", element: <AccountLogResult /> },
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
                { index: true, element: <div>test</div> },
                { path: "transfer", element: <div>transfer</div> },
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
