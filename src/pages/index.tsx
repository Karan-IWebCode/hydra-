import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from 'styled-components'
import {HydraIcon, Logo} from "../svg";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import CardCmpt from "../components/CardCmpt";
import BannerCmpt from "../components/BannerCmpt";
import FlowDiagram from "../components/FlowDiagram";
import Footer from "../components/Footer";
import ReactForm from "../components/ReactForm";
const pageStyles = {
  color: "#ffffff",

  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#302C42"
}
const main = {
  backgroundColor: "#302C42"
}

const logoname = {
  fontSize:"46px"
}

const primary = {
  width: "155px",
height: "48px",

backgroundLinearGradient: "90deg, #8176AF 0%, #C0B7E8 100%",
borderRadius: "40px"
}

// const HeadingLink = styled.a`
// font-size:12px !important;
// color: white;
// `

const HeaderLink = styled.a`
font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
color:white;
margin: 3rem;

:hover{
  color:white;
}

`


const Button = styled.button`

margin: 2rem;
font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
border: 2px solid #FFFFFF;
color: white;
border-radius: 40px;
width:155px;
height:48px;
`
const Button2 = styled.button`

margin: 2rem;
font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
border: 2px solid #343045;
border-radius: 40px;
background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
color: black;
width:155px;
height:48px;
`
const Navbar = styled.nav`
background-color: #302C42;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection/>
      <Introduction/>
      <CardCmpt/>
      <FlowDiagram/>
      <ReactForm/>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>Home Page</>
