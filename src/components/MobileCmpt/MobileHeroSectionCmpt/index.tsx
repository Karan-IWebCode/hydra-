
import styled from 'styled-components'
import { pageStyles, WrapperContainer } from '../../Layout/style'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {  Navigation } from "swiper";
import { Line, PhoneCall, Mail, Location } from '../../../svg';
import { InfoLogo,  } from '../../HeroSectionCpmt';

const OverlayData = {
background: "radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)" /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
boxShadow: "0px 4px 4px rgba(192, 183, 232, 0.01)",
borderRadius: "90px",
padding: "22px 16px",
zIndex:"22"
};


const InfoContent = styled.div`

font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`

const Overlay = styled.div``

export const MobileHeroSectionCmpt = () => {
    return(
        <>
        <div style={pageStyles}>
          
            <WrapperContainer className="w-100 col d-flex flex-row justify-content-between">
              <Swiper
              navigation={true}
              modules={[ Navigation]}
              className="mySwiper"
              style={OverlayData}
              slidesPerView={1}
            
            >
              <SwiperSlide style={{background:"transparent"}}>
                <div className='d-flex align-items-center  justify-content-around' >
                  <InfoLogo className='ps-2 ms-2'>
                    <Location/>
                  </InfoLogo>
                  <div style={{fontSize:"14px"}} className='w-75 pe-4 me-2'>
                    
                    <InfoContent>Union st, Seattle, WA 98101,United States</InfoContent>            
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{backgroundColor:"transparent"}}>
                <div className='d-flex flex-col align-items-center'> 
                  <InfoLogo>
                    <PhoneCall/>
                  </InfoLogo>
                  <div style={{fontSize:"14px"}}>
                   
                    <InfoContent>(110) 1111-1010</InfoContent>            
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{background:"transparent"}}>
                <div className='d-flex flex-col align-items-center'> 
                  <InfoLogo>
                    <Mail/>
                  </InfoLogo>
                  <div style={{fontSize:"14px"}}>
                    
                    <InfoContent>Contact@HydraVTech.com</InfoContent>            
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
            
            </WrapperContainer>
         
        </div>
        </>
    )
}