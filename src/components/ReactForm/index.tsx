import * as React from 'react'
import Headers from './Header';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import { Head,Head2 } from '../Introduction'; //CREAT GLOBAL COMPONENT TO USE IN DIFFERENT COMPONENTS
import { FormVector } from '../../svg';
import Primarybtn from '../ButtonCmpt';

const pageStyles = {
    color: "#ffffff",
    backgroundColor: "#302C42",
    paddingTop: "91px",
    display: "flex",
    alignItems: "center",
    fontFamily: 'Montserrat',
    fontStyle: "normal"
  };

const Space = {
    marginLeft:"12px",
    // @media (max-width:425px) {
    //     font-size: 24px;
    //     line-height: 29px;  
    //     text-align: center;
    //   }
}
const FormStyle = styled.div`
    background: radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    z-index: 25;
    @media (max-width:425px) {
        border-radius: 40px;
      }

` 

const Input =  styled.input`
background: transparent;
padding: 21px 31px;
border: 2px solid #ffffff;
border-radius:40px;
margin-bottom: 39px;
color:white;
`

const Textarea = styled.textarea`
background: transparent;
padding: 21px 31px;
border: 2px solid #ffffff;
border-radius:40px;
margin-bottom: 39px;
color:white;
`
const ReactForm = () => {

    const { register, handleSubmit } = useForm();
    return(
        <>
        <div style={pageStyles}>
            <div className='container'>

            <FormStyle >
                <Head style={{paddingTop:"90px",paddingBottom:"30px"}}>
                    JOIN HYDRA
                </Head>
                    <div className='d-none d-sm-flex'>
                     <FormVector/>
                    </div>
                <Head2 style={{paddingTop:"21px",paddingBottom:"65px"}}> 
                    Let's Build Your VR Experience
                </Head2>

                <form className='w-100 px-3 px-sm-5' onSubmit={handleSubmit((data)=> {
                console.log(data);
            })}>
                <div className="d-flex flex-column flex-sm-row ">
                    <Input {...register("firstName",{ required: true})} placeholder="First Name" className='w-100 w-sm-50'  />
                    <Input {...register("lastName",{required: true})} placeholder="Last Name" className='w-100 w-sm-50 ms-sm-3'  />
                </div>
                <div className='d-flex flex-column flex-sm-row'>
                    <Input {...register("email",{ required: true})} placeholder="Email" className='w-100 w-sm-50' />
                    <Input {...register("phone ",{required: true})} placeholder="Phone Number" className='w-100 w-sm-50 ms-sm-3' />
                </div>
                <Input {...register("subject",{ required: true})} placeholder="Subject" className='w-100' />
                <Textarea {...register("subject",{ required: true})} placeholder="Tell Us Something" rows={10} className='w-100' />
                
                <div className='d-flex justify-content-center'style={{marginBottom:"80px"}}>
                    <Primarybtn text="SEND TO HYDRA"/>
                </div>
                
            </form> 
            </FormStyle>
            
            

            </div>
        </div>
        </>
    )
}

export default ReactForm;