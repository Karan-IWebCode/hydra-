import React from 'react'
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
  width: 100%;
//   width: 155px;
//   height: 48px;
  :hover {
    border: 2px solid #343045;
    color: black;
  }
`;
interface IProps{
  text:string;
}
const Primarybtn = ({ text }:IProps) => { // Add type for props
    return(
        <div>
             <Button2 className="btn " type="button">
                  {text}
            </Button2>
        </div>
    )
}


export default Primarybtn;