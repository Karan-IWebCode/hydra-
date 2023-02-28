import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from 'styled-components'
import HeadImage from '../../assets/HeadImage.png';
import HeadSectionCpmt from '../HeadSectionCpmt'

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
padding-top: 36px;
color: #FFFFFF;

`

const SelectedWhite = styled.span`
color: white;
`



const HeroSection = () => {
  return (
    <>
      <div className='row p-5 d-flex justify-content-between' style={pageStyles} >
          <div className="col-5 p-5 d-flex flex-column">
              <Heading>Dive <SelectedWhite>into the Depths</SelectedWhite></Heading>
              <Heading><SelectedWhite>Of</SelectedWhite> Virtual Reality</Heading>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae
              </Content>
          </div>
          <div className="col-4 p-5">
            {/* <HeadSectionImage /> */}
            <img src={HeadImage} />
          </div>

      </div>
      <div className="row">
        <HeadSectionCpmt/>
      </div>
    </>
  )
}

export default HeroSection