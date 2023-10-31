import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { LoadingOutlined } from '@ant-design/icons';



const Loading = () => {
    const loading = useSelector((state: any) => state.toolsSlice.loading)
    const antIcon = <LoadingOutlined className="fill-gray-200 text-white font-extrabold" style={{ fontSize: 40 }} spin />
    let classLoading = ` absolute top-0 left-0 right-0 z-[1000] bottom-0 w-full h-full bg-gray-800 dark:bg-gray-900 flex justify-center transition-all duration-500  items-center `

    return (
        <>

            <div className={`${loading ? 'visible opacity-70 w-full h-full' : 'w-0 h-0 invisible opacity-0'} ${classLoading}`}>
                {/* <Spin indicator={antIcon} className="fill-gray-900 text-white" /> */}
            <div className="absolute  z-[1000] !opacity-100 border-[2px] animate-spin border-soli border-white  border-r-transparent border-t-transparent w-10 h-10 bg-transparent rounded-full"></div>

                {/* <div className="preloader">
                    <div className="preloader-box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                     
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Loading