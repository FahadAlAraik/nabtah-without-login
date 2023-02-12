import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './icons/logo-eng.png'



function NavigationBar() {

   
    

    

   
        return (
            <Navbar className=' p-1' expand="xl" >
            <Container fluid>
            <Navbar.Brand href="/" ><img src={logo} className='logo-image' alt='nabtah-logo'  /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                    <Nav className=" text-capatalize ">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/docs">Documentation</Nav.Link>
            </Nav>
            <Nav>
                        
            </Nav>
            </Navbar.Collapse>
            
            </Container>
        </Navbar>
        );

    

}

export default NavigationBar;