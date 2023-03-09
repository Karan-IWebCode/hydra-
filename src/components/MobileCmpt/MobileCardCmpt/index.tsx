import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';  

import ButtonCmpt from '../../ButtonCmpt';
import { cardData } from './data';
import { Link } from 'gatsby';
import {WrapperContainer} from '../../Header'
import { HorizontalLine } from '../../../svg';
import BannerCmpt from '../../BannerCmpt';

const pageStyles = {
    color: "#ffffff",
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    backgroundColor: "#302C42",
    paddingTop:"80px"
  }

const Card = styled.div`
background: radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%);
border-radius: 40px;
width: 310px;
height: 511px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Img = styled.img`
border-radius: 200px;
height: 219px;
width: 219px;
margin-bottom: 21px;
justify-content: center;
align-content: center;
border: 14px solid rgba(14, 14, 14, 0.32);
`

const Head = styled.h1`
font-weight: 700;
font-size: 24px;
line-height: 29px;
text-align: center;
margin-bottom: 17px;
`
const Para = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 15px;
padding-left: 25px;
padding-right: 35px;
margin-top: 21px;
`

const MobileCardCmpt = () => {
    return (
        <>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div style={pageStyles}>
            <WrapperContainer className='container 
            '
            >
                 <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        
      </Swiper>
                
            </WrapperContainer>
        </div>
        <BannerCmpt/>
        </Swiper>
        </>
    )
}

export default MobileCardCmpt;

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
                
                
