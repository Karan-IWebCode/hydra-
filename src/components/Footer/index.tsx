import React from 'react'


import styled from "styled-components";
import { Logo, MobileFooterVerticalLine } from "../../svg";
import { list1, list2 } from './data'
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Pinterest, Footerline, FooterVerticalLine } from '../../svg/index'
import Primarybtn from '../ButtonCmpt';
import Logo2 from '../../assets/Vector.png';


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
  line-height: 32px;
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

const Footer = () => {
  return (
    <div style={pageStyles}>

      <div className='container d-flex flex-column flex-md-row  w-100 justify-content-between' >
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


      </div>
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