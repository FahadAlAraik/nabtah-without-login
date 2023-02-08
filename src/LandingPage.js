import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {BsUpload} from 'react-icons/bs';
import happy_plant from './icons/happy-plant.png'
import axios from 'axios';




function LandingPage() {

    function handleUpload() {
        
        window.location.href = '/image'
       

    }


    return (
        <Container style={{marginTop:'125px'}} data-aos="fade-right"  data-aos-duration='1500'>

            <Row>

                <Col className='align-self-center align-items-center justify-content-end m-4' >
                    <p className='landing-page-content' >Detecting Plant<br /> diseases have <br /> never been  <br /> <span style={{color:'#FF8888'}}>easier</span>
                    <br />
                    <span onClick={handleUpload} className='mt-3 p-3 span-hover'>
                        <BsUpload /> Upload Image
                    </span>
                    </p>
                
                </Col>
                
                <Col className='text-center'  >
                    <img  src={happy_plant}  className='landing-page-image'  />
                </Col>

            </Row>


        </Container>
    );
}

export default LandingPage;