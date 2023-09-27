import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux/es/exports';
import { store } from './redux/store'
import { ConfigProvider } from 'antd';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from './i18n';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
