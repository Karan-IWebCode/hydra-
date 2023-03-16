import React from 'react'
import styled from 'styled-components'
import HeadImage from '../../assets/HeadImage.png';
import HeadImage2 from '../../assets/HeadImage2.png'
import GroupBg from '../../assets/bgHero.png';
import LeftBg from '../../assets/Vector 4.png';
import HeadSectionCpmt from '../HeroSectionCpmt'
import Primarybtn from '../ButtonCmpt';
import { ShortRightArrow } from '../../svg';
import { MobileHeroSectionCmpt } from '../MobileCmpt/MobileHeroSectionCmpt';

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
@media (max-width:425px) {
  font-size: 24px;
  line-height: 29px;  
  text-align: center;
  position: relative;
  z-index: 23;
}
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
  padding-top: 83px;
  @media (max-width:768px) {
    margin-bottom: 50px;

}
`;

const RightCol = styled.div`
/* position: relative; */
text-align: right;
    /* background: url('../../assets/bgHero.png'); */
    /* position: relative;
    top:-300;
    left:-200; */
`
const Backg = styled.div`
/* background: url(${GroupBg}); */
z-index: 12;
@media (max-width:768px) {
  width:100%;
  img{
    width: 100%;
  }
}
`
const Componentpad = styled.div`
  padding-top: 83px;
  @media (max-width:768px) {
    padding-top: 26px;
}
`

const HeroSection = () => {
  return (

    <>
      <div style={pageStyles}>
        <WrapperContainer className='container'>
          <div className='row  d-flex  flex-row-reverse flex-md-row justify-content-between w-100' style={{zIndex:23}}>
            <div className="col-md-5 order-2 order-md-1 " style={{ marginTop: "4rem",zIndex:"23" }}>
              <img className='d-none d-md-block'src={LeftBg} style={{ position: "absolute", top: 180, left: 150 }} />
              <Heading className=''>Dive <SelectedWhite>into the Depths</SelectedWhite></Heading>
              <Heading><SelectedWhite>Of</SelectedWhite> Virtual Reality</Heading>
              <Content className='d-none d-md-block'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae
              </Content>
              <Componentpad className='d-flex flex-row justify-content-center justify-content-md-start' style={{ alignItems: "baseline" }}>
                <Primarybtn text="Build Your World" />
                <div className="d-none d-md-block" style={{ marginLeft: "40px" }}>
                  <ShortRightArrow />
                </div>

              </Componentpad>
            </div>




            <Backg className="d-none d-md-block col-12 col-md-5 order-1 order-md-2">
              <img src={GroupBg} style={{ position: 'absolute', top: '4%', right: '14%', zIndex: -1 }} />
              <img className='' src={HeadImage} />
            </Backg>

            <Backg className="d-block d-md-none col-12 col-md-5 order-1 order-md-2 text-center" style={{position:'relative'}}>
              <img src={GroupBg} style={{ position: 'absolute', top: '-22%', right: '-3%', zIndex: -1 }} />
              <img className='' style={{width:"90%"}} src={HeadImage2} />
            </Backg>

          </div>
          
        </WrapperContainer>
      
        <div className='row mx-0 bg-danger d-none d-md-block'>
          <HeadSectionCpmt/> 
        </div>
        <div className="row mx-0 d-md-none" >
            
            <MobileHeroSectionCmpt/>
        </div>
        
      </div>
    </>
  )
}

export default HeroSection