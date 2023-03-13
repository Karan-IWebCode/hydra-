import * as React from "react";


import styled from "styled-components";
import { HeaderGroup, Logo } from "../../svg";
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
  margin: 0.5rem;
  margin-left:40px;
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
color:white;
`

const Header = () => {
  return (
    <>
      {/* <header className="  " style={pageStyles}>
        <div className="container d-flex p-3 justify-content-between">
          <div className="m-3">
            <Logo />

            <span className="m-2"></span>
            <HydraGroup />
          </div>
          <div className="d-flex align-items-center">
            <Navbar className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo03"
                >
                  <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <HeaderLink
                          className="nav-link"
                          aria-current="page"
                          href="#"
                        >
                          ABOUT
                        </HeaderLink>
                      </li>
                      <li className="nav-item">
                        <HeaderLink
                          className="nav-link "
                          aria-current="page"
                          href="#"
                        >
                          SERVICES
                        </HeaderLink>
                      </li>
                      <li className="nav-item">
                        <HeaderLink
                          className="nav-link"
                          aria-current="page"
                          href="#"
                        >
                          TECHNOLOGIES
                        </HeaderLink>
                      </li>
                      <li className="nav-item">
                        <HeaderLink
                          className=" nav-link"
                          aria-current="page"
                          href="#"
                        >
                          HOW TO
                        </HeaderLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Navbar>
          </div>
          <div className="d-flex align-items-center"></div>
        </div>
      </header> */}

      {/* New Header */}

      {/* <div style={pageStyles}>
        <WrapperContainer className="container">
          <div>
            <div className="m-3">
              <Logo />

              <span className="m-2"></span>
              <HydraGroup />
            </div>
          </div>
          <div>
           
              <ul className="navbar-nav d-flex flex-row" style={{fontFamily: "Montserrat", fontStyle: "normal",fontWeight: "700",fontSize: "12px"}}>
                <li className="nav-item" style={{marginLeft:"42px"}}>
                  <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                </li>
                <li className="nav-item" style={{marginLeft:"42px"}}>
                  <a className="nav-link" href="#">SERVICES</a>
                </li>
                <li className="nav-item" style={{marginLeft:"42px"}}>
                  <a className="nav-link" href="#">TECHNOLOGIES</a>
                </li>
                <li className="nav-item" style={{marginLeft:"42px"}}>
                  <a className="nav-link disabled" href="#">HOW TO</a>
                </li>
              </ul>
           
          </div>
          <div>
            <h1>
              <form className="d-flex">
                <Button className="btn " type="submit">
                  CONTACT US
                </Button>
                <Button2 className="btn " type="submit">
                  JOIN HYDRA
                </Button2>
              </form>
            </h1>
          </div>
        </WrapperContainer>
      </div> */}

      <div style={pageStyles}>
        <WrapperContainer className="container">
        
        <div>
          <HeaderGroup />
        </div>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
  <div className="container p-0" >
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
       
        
        
      </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0" style={{fontFamily: "Montserrat", fontStyle: "normal",fontWeight: "700",fontSize: "12px"}}>
       
        <li className="nav-item" style={{marginLeft:"42px"}}>
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
       
        <li className="nav-item" style={{marginLeft:"42px"}}>
          <Button className="btn " type="submit">
            CONTACT US
          </Button>
        </li>
        <li className="nav-item" style={{marginLeft:"42px"}}>
          <Button2 className="btn " type="submit">
                  JOIN HYDRA
          </Button2> 
        </li>
       
      
      </ul>
      
    </div>
  </div>
</nav>
        </WrapperContainer>
      </div>

    </>
  );
};

export default Header;
