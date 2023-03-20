import React from 'react'


import styled from "styled-components";
import { Logo, MobileFooterVerticalLine, BackImage } from "../../svg";
import { list1, list2 } from './data'
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Pinterest, Footerline, FooterVerticalLine } from '../../svg/index'
import Primarybtn from '../ButtonCmpt';
import Logo2 from '../../assets/Vector.png';
import Bg from '../../assets/Backimg.png';

// import Bg from '../../assets/BannerImage.png';

const pageStyles = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  color: "#ffffff",
  backgroundColor: "#302C42",
  paddingTop: "127px"
}

const Head4 = styled.h4`
font-weight: 700;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.13em;
`
const Head5 = styled.h5`
font-weight: 700;
font-size: 14px;
line-height: 17px;
/* identical to box height */
letter-spacing: 0.13em;
@media (max-width:768px) {
  line-height: 32px;BackImage
  margin: 0px 10px;
}
`

const Logo3 = styled.img`
width:185px;
height:185px;
@media (max-width:768px) {
  margin-bottom: 56px;
}
`

const SvgWrap = styled.div`
svg{
  margin-right:10px;
}
@media (max-width:768px) {
  flex-direction: column;
}
`
const BackgroundImg = styled.div`
  /* background-image: url(${Bg});
  background-repeat: no-repeat; */
`;

// const BackgroundImg = styled.div`

/* background-image:url('https://scontent.fdel1-1.fna.fbcdn.net/v/t39.30808-6/263023151_4951274888224890_9008792270402632605_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IqpXDukssxgAX-nUKRe&_nc_ht=scontent.fdel1-1.fna&oh=00_AfA2EjY9bp2vfRo0T5Q5791PTsaHqw-ppcX4_bSxZWce8Q&oe=6419DA29'); */
// `

const BgImage = styled.img`
  position: absolute;
  top: -22%;
    /* right: 131% !important; */
    left: 5%;
    bottom: 0;
    /* margin: 0 auto; */
    right: 400px !important;
`

const Footer = () => {
  return (
    <div style={pageStyles} className="position-relative">
      <BgImage src={Bg} className="w-75"/>

      <BackgroundImg className='container  d-flex flex-column flex-md-row  w-100 justify-content-between'>
        <div className='col-md-2 text-center text-md-left'>
          {/* <Logo/> */}
          <Logo3 src={Logo2}></Logo3>
        </div>

        <div className='d-none d-md-block'><FooterVerticalLine /></div>

        <div className='d-none d-md-flex flex-column col-md-2'>
          {
            list1.map((item, index) => {
              return (
                <Head4 style={{ marginBottom: "20px" }}>{item.values}</Head4>
              )
            })
          }
        </div>

        <div className='d-none d-md-block'><FooterVerticalLine /></div>

        <div className='d-none d-md-flex flex-column  col-md-2' style={{ paddingBottom: "79px" }}>
          {
            list2.map((item, index) => {
              return (
                <Head4 style={{ marginBottom: "20px" }}>{item.values}</Head4>
              )
            })
          }
        </div>

        <div className='d-none d-md-block'><FooterVerticalLine /></div>

        <div className='d-flex px-2 col-12 col-md-2 flex-column'>
          <Head4 className='d-flex justify-content-center justify-content-md-initial'>SOCIALIZE WITH HYDRA</Head4>
          <SvgWrap className="d-flex flex-row justify-content-between" style={{ marginTop: "29px", marginBottom: "39px" }}>
            <Facebook />
            <Twitter />
            <Linkedin />
            <Youtube />
            <Instagram />
            <Pinterest />
          </SvgWrap>
          <Primarybtn text="Build Your World" />
        </div>


      </BackgroundImg>
      <div className='container'>
        <div className='mt-4 d-block d-md-none text-center'>
          <MobileFooterVerticalLine/>
        </div>
        <div className='d-none d-md-block'>
          <Footerline />
        </div>
        <Head5 className="d-flex justify-content-center text-center text-md-start" style={{ marginTop: "49px", paddingBottom: "59px" }}>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</Head5>
      </div>

    </div>
  )
}

export default Footer