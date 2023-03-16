
import styled from 'styled-components'
import React, { useRef, useState } from "react";
import { HorizontalLine } from '../../../svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'gatsby';

import "../MobileFlowDiagram/styles.css";

// import required modules
import {  Navigation } from "swiper";
import { cardData } from './data';
import ButtonCmpt from '../../ButtonCmpt';


const pageStyles = {
    color: "#ffffff",
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    backgroundColor: "#302C42",
    
  }

const WrapperContainer = styled.div`
  padding-top: 80px;
  /* padding-top: 1.5rem; */
  /* margin-left: 10rem;
  margin-right: 10rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width:768px) {
  padding-top: 26px;
}
`;
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

<div style={pageStyles} className='d-block d-md-none'>

{/* <div className='container'>
        

    </div> */}
  
    <WrapperContainer className="w-100 col d-flex flex-row justify-content-between">
      <Swiper
      navigation={true}
      modules={[ Navigation]}
      className="mySwiper"
      
      slidesPerView={1}
    
    > 
      {
        cardData.map((item,index) => {
          return(
            <SwiperSlide style={{background:"transparent"}}>
            <div className=''>
              <Card>
              
              {/* Line */}
              <Img style={{height:"219px",width:"219px"}} src={item.image}/>
              <Head> {item.title}</Head>
              <HorizontalLine/>
              <Para>{item.content}</Para>
              <Link to={item.link}>
                  <ButtonCmpt text="TRY IT NOW"  />
              </Link>
              </Card>
            </div>
            </SwiperSlide>
          )
        })
      

      }

    </Swiper>
    
    </WrapperContainer>
 
</div>
        </>
    )
}

export default MobileCardCmpt;

