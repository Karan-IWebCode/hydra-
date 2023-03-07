import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from 'styled-components'
import ButtonCmpt from '../ButtonCmpt';
import { cardData } from './data';
import { Link } from 'gatsby';
import {WrapperContainer} from '../Header'
import { HorizontalLine } from '../../svg';
import BannerCmpt from '../BannerCmpt';

const pageStyles = {
    color: "#ffffff",
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    backgroundColor: "#302C42",
    paddingTop:"80px"
  }

const Card = styled.div`
background: radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%);
border-radius: 40px;
width: 310px;
height: 511px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Img = styled.img`
border-radius: 200px;
height: 219px;
width: 219px;
margin-bottom: 21px;
justify-content: center;
align-content: center;
border: 14px solid rgba(14, 14, 14, 0.32);
`

const Head = styled.h1`
font-weight: 700;
font-size: 24px;
line-height: 29px;
text-align: center;
margin-bottom: 17px;
`
const Para = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 15px;
padding-left: 25px;
padding-right: 35px;
margin-top: 21px;
`

const CardCmpt = () => {
    return (
        <>
        <div style={pageStyles}>
            <WrapperContainer className='container 
            '
            >
                
                {
                    cardData.map((item, index) => {
                        return (
                            
                            <div className='col-md-4'>
                                <Card>
                                
                                {/* Line */}
                                <Img src={item.image}/>
                                <Head> {item.title}</Head>
                                <HorizontalLine/>
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
        <BannerCmpt/>
        </>
    )
}

export default CardCmpt;