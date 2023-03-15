import React from 'react'
import styled from 'styled-components'
import {Line, Location, Mail, PhoneCall} from '../../svg/index'





export const InfoLogo = styled.div`
/* margin-right: 20px; */
`

export const Overlay = styled.div`
background: radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 0px 4px 4px rgba(192, 183, 232, 0.01);
border-radius: 90px;
padding: 49px 39px;
z-index:22;

`

export const InfoHeading = styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
`

export const InfoContent = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
margin-top:9px;
`

export const WrapperContainer = styled.div`
  padding-top: 1.5rem;

  /* margin-left: 10rem;
  margin-right: 10rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const pageStyles = {
  color: "#ffffff",
  backgroundColor: "#302C42",
};

const HeroSection = () => {
  return (
    <>
      <div style={pageStyles} >
          <WrapperContainer className="container" >
            <Overlay className="col d-flex flex-row justify-content-between" style={{zIndex:24}}>
              <div className='d-flex flex-col align-items-center'>
                <InfoLogo>
                  <Location/>
                </InfoLogo>
                <div style={{marginRight:"20px"}}>
                  <InfoHeading>Pay Us a Visit</InfoHeading>
                  <InfoContent>Union st, Seattle, WA 98101,United States</InfoContent>            
                </div>
              </div>

              <Line/>

              <div className='d-flex flex-col align-items-center'> 
                <InfoLogo>
                  <PhoneCall/>
                </InfoLogo>
                <div style={{marginRight:"20px"}}>
                  <InfoHeading>Give Us a Call</InfoHeading>
                  <InfoContent>(110) 1111-1010</InfoContent>            
                </div>
              </div>
              
              <Line/>

              <div className='d-flex flex-col align-items-center'> 
                <InfoLogo>
                  <Mail/>
                </InfoLogo>
                <div style={{marginRight:"20px"}}>
                  <InfoHeading>Send Us a Message</InfoHeading>
                  <InfoContent>Contact@HydraVTech.com</InfoContent>            
                </div>
              </div>

            </Overlay>
          </WrapperContainer>
        
      </div>
      
      
    </>
  )
}

export default HeroSection