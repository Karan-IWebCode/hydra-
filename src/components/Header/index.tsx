import * as React from "react";


import styled from "styled-components";
import { Hamburger, HeaderGroup, Logo } from "../../svg";
import { HydraGroup } from "../../svg";

const pageStyles = {
  color: "#ffffff",

  backgroundColor: "#302C42",
};
const main = {
  backgroundColor: "#302C42",
};

const logoname = {
  fontSize: "46px",
};

const primary = {
  width: "155px",
  height: "48px",
  backgroundLinearGradient: "90deg, #8176AF 0%, #C0B7E8 100%",
  borderRadius: "40px",
};

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
  color: white;
  margin: 3rem;

  :hover {
    color: white;
  }
`;

const Button = styled.button`
  margin: 0.5rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  border: 2px solid #ffffff;
  color: white;
  border-radius: 40px;
  width: 155px;
  height: 48px;
  :hover {
  border: 2px solid #ffffff;
}
`;
const Button2 = styled.button`
  /* margin: 0.5rem; */
  /* margin-left:40px; */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  border: 2px solid #343045;
  border-radius: 40px;
  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  color: black;
  width: 155px;
  height: 48px;
  :hover {
    border: 2px solid #343045;
    color: black;
  }
`;
const Navbar = styled.nav`
  background-color: #302c42;
`;

export const WrapperContainer = styled.div`
  padding-top: 1.5rem;
  /* margin-left: 10rem;
  margin-right: 10rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const background = {
  backgroundColor: "#302C42",
};

const Acc = styled.a`
color:white !important ;
:active {
  
}
`

const Dive = styled.div`
margin-left:'150px';
@media (max-width:768px) {
  margin-left:'0px';
}
`
const Live = styled.li`
margin-right:'100px';
@media (max-width:768px) {
  margin-left:'0px';
}
`
const Header = () => {
  return (
    <>


      <div style={pageStyles}>
        <WrapperContainer className="container" style={{position:'relative',zIndex:100}}>

          {/* <div>
          <HeaderGroup />
        </div>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
  <div className="container p-0 d-flex justify-content-end" style={{zIndex:"22"}} >
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
       
        
      </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0" style={{fontFamily: "Montserrat", fontStyle: "normal",fontWeight: "700",fontSize: "12px"}}>
       
        <li className="nav-item " style={{marginLeft:"42px"}}>
          <Acc className="nav-link " aria-current="page" href="#">ABOUT</Acc>
        </li>
        <li className="nav-item" style={{marginLeft:"42px"}}>
          <Acc className="nav-link" href="#">SERVICES</Acc>
        </li>
        <li className="nav-item" style={{marginLeft:"42px"}}>
          <Acc className="nav-link" href="#">TECHNOLOGIES</Acc>
        </li>
        <li className="nav-item" style={{marginLeft:"42px"}}>
          <Acc className="nav-link" href="#">HOW TO</Acc>
        </li>
        
      </ul>
    </div>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
       
        <li className="nav-item ps-0 ps-sm-4" style={{}}>
          <Button className="btn " type="submit">
            CONTACT US
          </Button>
        </li>
        <li className="nav-item " >
          <Button2 className="btn " type="submit">
                  JOIN HYDRA
          </Button2> 
        </li>
       
      
      </ul>
      
    </div>
  </div>
        </nav> */}

          <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
            <div className="container p-0" style={{zIndex:23}}>
              <a className="navbar-brand me-md-5" href="#"><HeaderGroup /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{color:"transparent",backgroundImage:"none"}}><Hamburger/></span>
              </button>
              <Dive className="collapse navbar-collapse" style={{position:'relative', zIndex:23,  }} id="navbarText">
                <ul className="navbar-nav me-auto ms-md-5 mb-2 mb-lg-0 align-items-center w-100 justify-content-between">
                  <li className="nav-item">
                    <Acc className="nav-link " aria-current="page" href="#">ABOUT</Acc>
                  </li>
                  <li className="nav-item">
                    <Acc className="nav-link" href="#">SERVICES</Acc>
                  </li>
                  <li className="nav-item">
                    <Acc className="nav-link" href="#">TECHNOLOGIES</Acc>
                  </li>
                  <Live className="nav-item" >
                    <Acc className="nav-link" href="#">HOW TO</Acc>
                  </Live>
                  <li className="nav-item ">
                    <Button className="btn " type="submit">
                      CONTACT US
                    </Button>
                  </li>
                  <li className="nav-item ">
                    <Button2 className="btn " type="submit">
                      JOIN HYDRA
                    </Button2>
                  </li>
                </ul>
                <span className="navbar-text">

                </span>
              </Dive>
            </div>
          </nav>
        </WrapperContainer>
      </div>

    </>
  );
};

export default Header;
