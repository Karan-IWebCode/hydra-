
import styled from 'styled-components'
import { pageStyles, WrapperContainer } from '../../Layout/style'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import grp1 from '../../../assets/Group1.png'
import grp2 from '../../../assets/Group2.png'
import grp3 from '../../../assets/Group3.png'
import grp4 from '../../../assets/Group4.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {  Navigation } from "swiper";
const OverlayData = {
// background: "radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)" /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
// boxShadow: "0px 4px 4px rgba(192, 183, 232, 0.01)",
// borderRadius: "90px",
// padding: "22px 16px",
// zIndex:"22"
};


const InfoContent = styled.div`
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`

const Img = styled.img`
width:200px;
height:200px;
`
const Head3 = styled.h3`
font-weight: 700;
font-size: 24px;
line-height: 29px;
`


const Overlay = styled.div``

export const MobileFlowDiagram = () => {
    return(
        <>
        <div style={pageStyles} className='d-block d-sm-none'>

        {/* <div className='container'>
                

            </div> */}
          
            <WrapperContainer className="w-100 col d-flex flex-row justify-content-between">
              <Swiper
              navigation={true}
              modules={[ Navigation]}
              className="mySwiper"
              style={OverlayData}
              slidesPerView={1}
            
            >
              <SwiperSlide style={{background:"transparent"}}>
                <div className=''>
                    <Img src={grp1}/>
                    <div className='d-flex flex-column' style={{paddingLeft:"16px",paddingTop:"37px"}}>
                        <Head3>3D Conception</Head3>
                        <Head3>& Design</Head3>
                    </div>
                    
                </div>

              </SwiperSlide>
               
              <SwiperSlide style={{backgroundColor:"transparent"}}>
                 <div className=''>
                    <Img src={grp2}/>
                    <div className='d-flex flex-column' style={{paddingLeft:"16px",paddingTop:"37px"}}>
                        <Head3>3D Conception</Head3>
                        <Head3>& Design</Head3>
                    </div>
                    
                </div>    
              </SwiperSlide>
                
              <SwiperSlide style={{background:"transparent"}}>
                <div className=''>
                    <Img src={grp3}/>
                    <div className='d-flex flex-column' style={{paddingLeft:"16px",paddingTop:"37px"}}>
                        <Head3>3D Conception</Head3>
                        <Head3>& Design</Head3>
                    </div>
                    
                </div>
              </SwiperSlide>

              <SwiperSlide style={{background:"transparent"}}>
                <div className=''>
                    <Img src={grp4}/>
                    <div className='d-flex flex-column' style={{paddingLeft:"16px",paddingTop:"37px"}}>
                        <Head3>3D Conception</Head3>
                        <Head3>& Design</Head3>
                    </div>
                    
                </div>
              </SwiperSlide>

            </Swiper>
            
            </WrapperContainer>
         
        </div>
        </>
    )
}