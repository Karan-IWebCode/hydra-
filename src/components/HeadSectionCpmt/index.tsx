import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from 'styled-components'
import HeadSectionCpmt from '../HeadSectionCpmt';


const InfoLogo = styled.div`

`

const InfoHeading = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

color: #FFFFFF;
`

const InfoContent = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;


color: #FFFFFF;
`



const HeroSection = () => {
  return (
    <>
      <div className='row' >
          <div className="col">
            <InfoLogo>Logo</InfoLogo>
            <div>
            <InfoHeading>Pay Us a Visit</InfoHeading>
            <InfoContent>Union st, Seattle, WA 98101,United States</InfoContent>            
            </div>

          <div className="col"></div>
          <div className='col'></div>
            
          </div>
        <HeadSectionCpmt/>
      </div>
      
      
    </>
  )
}

export default HeroSection