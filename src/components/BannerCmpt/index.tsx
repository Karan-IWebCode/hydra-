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


const pageStyles = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    paddingTop:"114px",
    paddingBottom:"114px",
    color: "#ffffff",
    backgroundColor: "#302C42"
}


  
const WrapperContainer = styled.div`
  /* margin-left: 10rem;
  margin-right: 10rem; */
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
 background-image: url(${BannerGroup});
 /* height: 60vh; */
height:630px;
 margin-left: 10rem;
 margin-right: 10rem;
 margin-bottom: 100px;
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
`;

const CircularBtn = styled.button`
height: 70px;
width: 70px;
border-radius: 300px;
background: linear-gradient(267.61deg, #C0B7E8 -0.6%, #8176AF 98.31%);
`

const BannerCmpt = () => {
    return(
        <>
            <div style={pageStyles}>
                <WrapperContainer className='container'>
                    <img className='w-100' src={Bannerimg} style={{borderRadius: "350px",position:"relative"}}>

                    </img>
                    <div style={{position:"absolute",display: "flex", flexDirection:"column",alignItems:"center",borderRadius: "300px" }}>
                        <Head>TECHNOLOGIES & HARDWARE </Head>
                        <Head2>USED BY HYDRA VR.</Head2>
                        <CircularBtn type="button" className='btn btn-circle' style={{bottom:0}}><DownArrow/></CircularBtn>
                    </div>
                    
                    
                </WrapperContainer>
                <Banner >
                    <Head>TECHNOLOGIES & HARDWARE </Head>
                    <Head2>USED BY HYDRA VR.</Head2>
                    <CircularBtn type="button" className='btn btn-circle'><DownArrow/></CircularBtn>
                </Banner>
                
            </div>
         </>
    )
}

export default BannerCmpt;