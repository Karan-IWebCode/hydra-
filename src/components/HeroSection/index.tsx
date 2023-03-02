import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from 'styled-components'
import HeadImage from '../../assets/HeadImage.png';
import GroupBg from '../../assets/bgHero.png';
import LeftBg from '../../assets/Vector 4.png';
import HeadSectionCpmt from '../HeroSectionCpmt'
import Primarybtn from '../ButtonCmpt';
import { ShortRightArrow } from '../../svg';

const pageStyles = {
  color: "#ffffff",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#302C42"
}

const Heading = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 46px;
line-height: 56px;

background: linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%);

background-clip: text;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color:transparent;
`

const Content = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
padding-top: 2.25rem;
color: #FFFFFF;
`

const SelectedWhite = styled.span`
color: white;
-webkit-text-fill-color:white;
`

const WrapperContainer = styled.div`
  padding-top: 1.5rem;
  /* margin-left: 10rem;
  margin-right: 10rem; */
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightCol = styled.div`
/* position: relative; */
text-align: right;
    /* background: url('../../assets/bgHero.png'); */
    /* position: relative;
    top:-300;
    left:-200; */
`

const HeroSection = () => {
  return (
    
    <>
    <div style={pageStyles}>
      <WrapperContainer className='container'>
        <div className='row  d-flex justify-content-between w-100'  >
            <div className="col-5 p-5 " style={{marginTop:"4rem"}}>
              <img src={LeftBg} style={{position:"absolute",top:120,left:50 }}/>
                <Heading>Dive <SelectedWhite>into the Depths</SelectedWhite></Heading>
                <Heading><SelectedWhite>Of</SelectedWhite> Virtual Reality</Heading>
                <Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae
                </Content>
                <div className='d-flex flex-row' style={{paddingTop:"83px",alignItems:"baseline"}}>
                  <Primarybtn text="Build Your World"/>
                    <div style={{marginLeft:"40px"}}>
                      <ShortRightArrow/>
                    </div>
                  
                </div>
            </div>
            <RightCol>
              {/* <HeadSectionImage /> */}
              <img src={GroupBg} style={{position:'absolute', top:0, right:100}}/>
              <img src={HeadImage} style={{position:'absolute', top:170, right:160}}/>
            </RightCol>
      
      
        </div>
        </WrapperContainer>
        <div className="row mx-0" >
            <HeadSectionCpmt/>
        </div>
    </div>
     </>
  )
}

export default HeroSection