import React, { useState, useEffect, useTransition } from 'react';
import { Carousel } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import AccountBoxList from './accountBox';
import CardBox from './cardBox';
import { setAccountActive, setAccounts, setCardActive, setCards } from '../../../redux/slice/activeAccountAndCard';


// 

const List: React.FC = () => {
    // ________________________________varibales_____________________
    let classParent = `h-[255px] flex items-center   relative overflow-hidden transition-all duration-500`
    let classBoxImg = `w-full h-[175px] absolute top-8 left-0 px-10 sm:px-20 `
    const settings = {
        // centerPadding: "50px",
        slidesToShow: 1,
        speed: 500
    };


    // _________________________________HooK_______________________________

    const [select, setselect] = useState<any>(0);
    const location = useLocation()

    const user = useSelector((state: any) => state.user.user)
    const active = useSelector((state: any) => state.activeCardOrAccount)
    const dispatch = useDispatch()

    
    


    // _________________________________FUNCTIONS___________________________

    const handleCardOrAccount = (path: any) => {
        let loc = path === "/card" ? active.cards : active.accounts
        return loc
    }
    const onChange = (currentSlide: number) => {
        setselect(currentSlide)
        let data = handleCardOrAccount(location.pathname)
        if (location.pathname === '/card') {
            dispatch(setCardActive(data[currentSlide]))
        }
        if (location.pathname === '/account') {
            dispatch(setAccountActive(data[currentSlide]))
        }
    };




    const handleData = (itm: any, ind: any) => {
        let path = location.pathname
        return (
            <div className={`${ind === select && 'scale-110'}  ${classParent}`} style={{ fontFamily: 'TidFont' }}>
                <div className={`${classBoxImg}`}>
                    <div className={`${path === "/card" ? 'animate-[downAnime10_1s] visible h-full ' : 'w-0 h-0 invisible opacity-0 '}`}>
                        <CardBox itm={itm} />
                    </div>
                    <div className={`${path === "/account" ? 'animate-[downAnime10_1s] visible h-full ' : 'w-0 h-0 invisible opacity-0 '}`}>
                        <AccountBoxList itm={itm} />
                    </div>
                </div>
            </div >
        )
    }

    // _________________________________useEffect___________________________




    useEffect(() => {
        if (user) {
            
            dispatch(setCards(user.cards))
            dispatch(setAccounts(user.accounts))

        }
    }, [location.pathname, user.accounts, user.cards]);

    useEffect(() => {
        if (user) {
            dispatch(setCardActive(user.cards?.[0]))
            dispatch(setAccountActive(user.accounts?.[0]))
        }
    }, [user]);




    return (
        <Carousel afterChange={onChange} {...settings} initialSlide={select}>
            {handleCardOrAccount(location.pathname)?.map((itm: any, ind: any) => (
                handleData(itm, ind)
            ))}
        </Carousel>
    );
};

export default List





   //   <Slider {...settings} centerMode dots>
        //     <div className='h-[230px] flex items-center  relative overflow-hidden scale-110'>
        //         <div className='w-full h-[180px] absolute top-5 left-0 px-4'>
        //             <img src={card_img} className={"w-full h-full rounded-lg "} style={{boxShadow:'0 0 20px black'}}/>
        //         </div>
        //     </div >
        //     <div className='h-[230px] flex items-center  relative overflow-hidden '>
        //         <div className='w-full h-[180px] absolute top-5 left-0 px-4'>
        //             <img src={card_img} className={"w-full h-full rounded-lg "} style={{boxShadow:'0 0 20px black'}}/>
        //         </div>
        //     </div >
        //     <div className='h-[230px] flex items-center  relative overflow-hidden '>
        //         <div className='w-full h-[180px] absolute top-5 left-0 px-4'>
        //             <img src={card_img} className={"w-full h-full rounded-lg "} style={{boxShadow:'0 0 20px black'}}/>
        //         </div>
        //     </div >


        // </Slider>

