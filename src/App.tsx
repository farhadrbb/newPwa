import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/login';
import BasePage from './basePage';
import Layout from './component/layout';
import Loading from './component/loading';
import NotifyCustom from './component/notifyCustom';
import i18n from './i18n';
import { setDarkModeSlice, setNotifySlice } from './redux/slice/tool';
import Draggable from 'react-draggable';
import { RiSettings5Fill } from 'react-icons/ri'
import { Tooltip } from 'antd';
import ModalCustom from './component/modalCustom';





function PrivateRoute({ children }: any) {
  const user = useSelector((state: any) => state.user.user)

  if (!user) {
    return <Navigate to="/login" />
  }

  return children;
}



function App() {

  // _____________________________________hook________________________

  const darkmode = useSelector((state: any) => state.toolsSlice.dark)
  
  const step = useSelector((state: any) => state.stepSlice.data)
  console.log("step", step);
 

  const dispatch = useDispatch()

  // _____________________________________varibles________________________
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)")
  const element = document.documentElement
  // ___________________________________functions_____________________



  const onWidownsMatch = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
    } else {

      element.classList.remove("dark")
    }
  }

  onWidownsMatch()

  const handleRemoveNotif = () => {
    dispatch(setNotifySlice(
      {
        title: '',
        type: null
      }
    ))
  }

  // _____________________________useEffect__________________________
  useEffect(() => {
    
    if (darkmode === "light") {
      element.classList.remove("dark")
      localStorage.setItem('theme', "light")
    }
    if (darkmode === "dark") {
      element.classList.add("dark")
      localStorage.setItem('theme', "dark")
    }
  }, [darkmode])


  

  // i18n.changeLanguage('en_US');
  i18n.changeLanguage('fa_IR');

  return (
    <div className="w-full h-full relative " onClick={() => handleRemoveNotif()}>

      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="*" element={<PrivateRoute><Layout><BasePage /></Layout></PrivateRoute>} />
          </Routes>
        </Suspense>
        <NotifyCustom />

        {/* <Tooltip title="prompt text" showArrow>
          <Draggable>
            <div className='bg-white absolute rounded-lg p-2 cursor-pointer shadow-2xl flex justify-center items-center top-20 left-0 z-[1000] ' onClick={()=>setstate(true)}>
              <RiSettings5Fill className='text-2xl' />
            </div>
          </Draggable>
        </Tooltip>

        <ModalCustom setShow={setstate} show={state}>
          <div>
            <div>sgsswg</div>
          </div>
        </ModalCustom> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
