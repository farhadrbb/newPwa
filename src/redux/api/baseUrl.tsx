import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import type { RootState } from '../store'
import { setLoadingSlice, setNotifySlice } from "../slice/tool";
import { store } from "../store";
// import { setError, setToast } from "./slices/buyBox";


//  const BASE_URL = "http://192.168.100.102:8083/api/";
// const BASE_URL = "http://192.168.100.52:8083/api/";
// const BASE_URL = "http://46.209.152.169:8090/api/";


// const BASE_URL = "http://82.99.206.151:8090/api/";
//asli
const BASE_URL = "https://mbt.tejaratbank.ir/api/";
// const BASE_URL = "https://mhb.tejaratbank.ir/api/";

// const BASE_URL = UiConfigs["BASE_URL"];

const baseUtils = fetchBaseQuery({
  baseUrl: ``,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ' *',
    DeviceType: "Simulator",
    Signature:
      "PWA",
    CommunicationChannel: "REST",
    Agent: "PWA",
    AppVer: "1.3.3",
    OSVer: '',
    // DeviceId: "84B5A23B-DA55-4B59-9C94-6AE5A0BC7069",
    DeviceId: "62B21B4A-CE46-49FF-A51E-1DF382099ABC"
  },
  mode: 'cors',
  timeout: 80000,


  

  prepareHeaders: (headers, { getState }) => {
    // const token = localStorage.getItem("auth");

    let token = (getState() as RootState)
   

    

  
    

    


    if (token?.user?.user?.token) {
      headers.set(
        "Authorization",
        `Basic ${token?.user?.user?.token}`
      );
    }

    // headers.set("Access-Control-Allow-Origin", "*")
    // headers.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    // headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")



    return headers;
  },
});












export const baseQuery = async (args: any, api: any, extraOptions: any) => {

  api.dispatch(setLoadingSlice(true))
  let result: any = await baseUtils(args, api, extraOptions);
  if (result.meta?.response?.status === 200) {
    setTimeout(() => {
      api.dispatch(setLoadingSlice(false))
    }, 1000);
  }
  if (result.error) {
    setTimeout(() => {
      api.dispatch(setLoadingSlice(false))
    }, 1000);
  }

  if (result.data?.messages?.[0]) {
    setTimeout(() => {
      api.dispatch(setNotifySlice({ title: result.data?.messages?.[0].text, type: 'success' }))
    }, 1000);
  }
  if (result.error?.data.messages?.[0]) {
    setTimeout(() => {
      api.dispatch(setNotifySlice({ title: result.error?.data?.messages?.[0].text, type: 'error' }))
    }, 1000);
  }




  if (result.error && result.error.status === 401) {
    // alert('دوباره لاگین کنید')
    // api.dispatch(setToast({title:'دوباره لاگین کنید',type:'error'}))
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  return result;
};
