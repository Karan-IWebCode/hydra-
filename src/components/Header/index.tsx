import * as React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

import styled from 'styled-components'
import { HydraIcon, Logo } from "../../svg";
const pageStyles = {
  color: "#ffffff",

  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#302C42"
}
const main = {
  backgroundColor: "#302C42"
}

const logoname = {
  fontSize: "46px"
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

const background = {
backgroundColor: "#302C42"
}
const Header = () => {
  return (
    <>

      <header className="d-flex justify-content-between" style={pageStyles}>

        <div className="m-3">
          <Logo />
          <span className="m-2"><HydraIcon /></span>

        </div>
        <div className="d-flex align-items-center">
          <Navbar className="navbar navbar-expand-lg navbar-light">

            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <div className="d-flex">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <HeaderLink className="nav-link" aria-current="page" href="#">ABOUT</HeaderLink>
                    </li>
                    <li className="nav-item">
                      <HeaderLink className="nav-link " aria-current="page" href="#">SERVICES</HeaderLink>
                    </li>
                    <li className="nav-item">
                      <HeaderLink className="nav-link" aria-current="page" href="#">TECHNOLOGIES</HeaderLink>
                    </li>
                    <li className="nav-item">
                      <HeaderLink className=" nav-link" aria-current="page" href="#">HOW TO</HeaderLink>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </Navbar>
        </div>
        <div className="d-flex align-items-center">
          <form className="d-flex justify-content-around">
            <Button className="btn " type="submit">CONTACT US</Button>
            <Button2 className="btn " type="submit">JOIN HYDRA</Button2>
          </form>
        </div>
      </header>
    </>
  )
}

export default Header