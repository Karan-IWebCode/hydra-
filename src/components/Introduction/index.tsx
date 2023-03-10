import React from 'react'
import styled from 'styled-components'
import { BigRightArrow } from '../../svg';
import Introimg from '../../assets/IntroImage.png'
import ButtonCmpt from '../ButtonCmpt';

const pageStyles = {
    color: "#ffffff",
    backgroundColor: "#302C42",
    paddingTop: "91px"
  };

  const WrapperContainer = styled.div`
  padding-top: 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
`;
export const Head = styled.h1`
font-weight: 700;
font-size: 36px;
line-height: 44px;
@media (max-width:768px) {
    font-weight: 300;
font-size: 26px;
line-height: 32px;
/* identical to box height */

text-align: center;
}
`

export const Head2 = styled.h2`
font-weight: 300;
font-size: 36px;
line-height: 44px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width:768px) {
    font-weight: 300;
font-size: 26px;
line-height: 32px;
/* identical to box height */

text-align: center;
}

`
export const Para = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
`
const  Introduction = () => {
    return(
        <>
        <div style={pageStyles}>
            <WrapperContainer className='container'>
            <div className=' mx-0 d-flex flex-column'>
                <div className='row mx-0 d-flex justify-content-center align-items-baseline'>
                    <div className=' col-sm-5'>
                        <Head>INTRODUCTION</Head>
                        <Head2> TO HYDRA VR<span className="d-none d-sm-block"style ={{marginLeft:"30px"}}> <BigRightArrow/></span></Head2>
                    </div>
                    <div className='d-none d-sm-block col-6'>
                        <Para>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </Para>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between" style={{paddingTop:"104px"}}>
                    <div className='col-10 col-sm-5'>
                        <img className='w-100' src={Introimg} style={{borderRadius: "225px 125px 225px 125px"}}/>
                    </div>
                    <div className='col-10 col-sm-6 d-flex flex-column justify-content-center'>
                        <Head className='d-none d-sm-block'>ABOUT</Head>
                        <Head2 className='d-none d-sm-block'>HYDRA VR <span style ={{marginLeft:"30px", paddingTop:"5px"}}> </span></Head2>
                        <Para style={{paddingTop:"42px",paddingBottom:"28px"}}>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                            dUSED BY HYDRA VR.ictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.
                        </Para>
                        <ButtonCmpt text="LET'S GET IN TOUCH"/>
                    </div>

                    
                </div>

                <div className='row d-flex justify-content-between align-items-baseline' style={{paddingTop:"111px"}}>
                    <div className='d-flex flex-column text-center text-sm-start col-10 col-sm-5'>
                        <Head>WHY BUILD</Head>
                        <Head2 className='justify-content-center justify-content-sm-start'>WHY HYDRA?
                            <span className="d-none d-sm-block" style ={{marginLeft:"30px"}}> <BigRightArrow/></span>
                        </Head2>
                    </div>
                    <div className='d-none d-sm-block col-6'>
                        <Para>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </Para>
                    </div>
                </div>
            </div>    
            </WrapperContainer>
        </div>
        
        </>
    )
}

export default Introduction;
