import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import styled from "styled-components";
import {Head, Head2, Para} from '../../components/Introduction'
import { BigRightArrow, XSmallArrow } from '../../svg';
import Threade from '../../assets/Thread.png'
import { circleData} from './data';
import grp1 from '../../assets/Group1.png'
import grp2 from '../../assets/Group2.png'
import grp3 from '../../assets/Group3.png'
import grp4 from '../../assets/Group4.png'


const pageStyles = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    color: "#ffffff",
    backgroundColor: "#302C42"
 }

 const Head3 = styled.h3`
 font-weight: 700;
font-size: 24px;
line-height: 29px;
 `
const Circle = styled.div`
background-image: url(${Threade});
background-repeat: no-repeat;
`
const Img = styled.img`
width:200px;
height:200px;
`
    


const FlowDiagram = () => {
    return(
        <div style={pageStyles}>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-baseline' style={{paddingTop:"61px"}}>
                    <div className='col-5'>
                        <Head>WHY BUILD</Head>
                        <Head2>WHY HYDRA<span style ={{marginLeft:"30px"}}> <BigRightArrow/></span></Head2>
                    </div>
                    <div className='col-6'>
                        <Para>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </Para>
                    </div>
                </div>

                <Circle className='row d-flex justify-content-around' style={{position:"relative",marginTop:"119px",marginBottom:"25px"}}>
                    <Img src={grp1}/>
                    <Img src={grp2}/>
                    <Img src={grp3}/>
                    <Img src={grp4}/>
                </Circle>
                

                <div className=' d-flex flex-row justify-content-around'>
                    
                        {
                            circleData.map((item, index) => {
                                return (
                                    <div className="d-flex" >
                                    <XSmallArrow/>
                                    <div className='d-flex flex-column' style={{paddingLeft:"16px"}}>
                                    <Head3>{item.title1}</Head3>
                                    <Head3>{item.title2}</Head3>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    
                </div>
            </div>
        </div>
    )
}

export default FlowDiagram;