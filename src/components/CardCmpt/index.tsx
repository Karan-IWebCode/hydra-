import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from 'styled-components'
import ButtonCmpt from '../ButtonCmpt';
import { cardData } from './data';
import { Link } from 'gatsby';
import {WrapperContainer} from '../Header'

const pageStyles = {
    color: "#ffffff",
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    backgroundColor: "#302C42"
  }

const Card = styled.div`
background: radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%);
border-radius: 40px;
width: 310px;
height: 511px;
display: flex;
flex-direction: column;
justify-content: center;
`
const Head = styled.h1`
font-weight: 700;
font-size: 24px;
line-height: 29px;
`
const Para = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 15px;
`

const CardCmpt = () => {
    return (
        <div style={pageStyles}>
            <WrapperContainer>
                
                {
                    cardData.map((item, index) => {
                        return (
                            
                            <div>
                                <Card>
                                <Head> {item.title}</Head>
                                {/* Line */}
                                <img src={item.image}/>
                                <Para>{item.content}</Para>
                                <Link to={item.link}>
                                    <ButtonCmpt text="TRY IT NOW" />
                                </Link>
                                </Card>
                            </div>
                        )
                    })
                }
                
            </WrapperContainer>
        </div>
    )
}

export default CardCmpt;