import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from "styled-components";

const Button2 = styled.button`
  
  padding: 17px 38px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  border: 2px solid #343045;
  border-radius: 40px;
  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  color: black;
//   width: 155px;
//   height: 48px;
  :hover {
    border: 2px solid #343045;
    color: black;
  }
`;

const Primarybtn = ({ text }) => {
    return(
        <div>
             <Button2 className="btn " type="button">
                  {text}
            </Button2>
        </div>
    )
}

export default Primarybtn;