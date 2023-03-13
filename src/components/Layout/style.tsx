
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')
  html, body {
    font-family: 'Montserrat', sans-serif;
  }
`

export const WrapperContainer = styled.div`
  padding-top: 1.5rem;
  /* margin-left: 10rem;
  margin-right: 10rem; */
  //margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const pageStyles = {
  color: "#ffffff",
  backgroundColor: "#302C42",
};