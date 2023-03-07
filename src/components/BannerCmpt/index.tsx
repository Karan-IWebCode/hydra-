import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from "styled-components";
import Bannerimg from "../../assets/BannerImage.png"
import BannerGroup from '../../assets/Maskgroup.png'
import { Head, Head2 } from '../Introduction';
import { DownArrow } from '../../svg';
import { relative } from 'path';
// import "../../../public/static/"
import logo1 from "../../assets/Hydra-Tech1 1.png"
import logo2 from "../../assets/Hydra-Tech2 1.png"
import logo3 from "../../assets/Hydra-Tech3 1.png"
import logo4 from "../../assets/Hydra-Tech4 1.png"

const pageStyles = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    paddingTop:"114px",
    // paddingBottom:"114px",
    color: "#ffffff",
    backgroundColor: "#302C42"
}


  
const WrapperContainer = styled.div`
  /* margin-left: 10rem;
  margin-right: 10rem; */
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
 background-image: url(${BannerGroup});
 /* height: 60vh; */
height:310px;
 /* margin-left: 10rem;
 margin-right: 10rem; */
 margin-bottom: 50px;
 background-repeat: no-repeat;
 background-position: center;
  width: 100%;
 -webkit-border-radius: 215px;
    -moz-border-radius: 215px;
    border-radius: 215px;
    display:flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items:center;
    position: relative;
`;

const CircularBtn = styled.button`
height: 70px;
width: 70px;
/* border: 15px solid rgba(14, 14, 14, 0.32); */
outline: 15px solid rgba(14, 14, 14, 0.32);
border-radius: 300px;
background: linear-gradient(267.61deg, #C0B7E8 -0.6%, #8176AF 98.31%);
position: absolute;
bottom: -10%;
/* margin-bottom:100px; */
`

const BannerCmpt = () => {
    return(
        <>
            <div style={pageStyles}>
                {/* <WrapperContainer className='container'>
                    <img className='w-100' src={Bannerimg} style={{borderRadius: "350px",position:"relative"}}>

                    </img>
                    <div style={{position:"absolute",display: "flex", flexDirection:"column",alignItems:"center",borderRadius: "300px" }}>
                        <Head>TECHNOLOGIES & HARDWARE </Head>
                        <Head2>USED BY HYDRA VR.</Head2>
                        <CircularBtn type="button" className='btn btn-circle' style={{bottom:0, borderRadius:"15px solid 14px solid rgba(14,14,14,0.32)"}}><DownArrow/></CircularBtn>
                    </div>
                    
                    
                </WrapperContainer> */}
                <Banner >
                    <Head>TECHNOLOGIES & HARDWARE </Head>
                    <Head2>USED BY HYDRA VR.</Head2>
                    <CircularBtn type="button" className='btn btn-circle'><DownArrow/></CircularBtn>
                </Banner>
                <div className='container'>
                    <div className='d-flex justify-content-around'>
                        <img src={logo1} style={{objectFit:"contain"}}/>
                        <img src={logo2} style={{objectFit:"contain"}}/>
                        <img src={logo3} style={{objectFit:"contain"}}/>
                        <img src={logo4} style={{objectFit:"contain"}}/>
                    </div>


                </div>


                
            </div>
         </>
    )
}

export default BannerCmpt;