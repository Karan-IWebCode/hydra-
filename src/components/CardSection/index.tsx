import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from "styled-components";
import CardCmpt from '../CardCmpt';
import MobileCardCmpt from '../MobileCmpt/MobileCardCmpt';

const CardSection = () => {
    return(
        <>
            {/* <CardCmpt/> */}
            <MobileCardCmpt/>
        </>
    )
}

export default CardSection;

