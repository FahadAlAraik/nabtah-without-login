import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import logo from './icons/logo-eng.png'
import { Link } from 'react-router-dom';


function NavigationBar() {

   
    

    

   
        return (
            <Navbar className=' p-1' expand="xl" >
            <Container fluid>
            <Navbar.Brand href="/" ><img src={logo} className='logo-image'   /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                    <Nav className=" text-capatalize ">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/#objectives">Objectives</Nav.Link>
                    <Nav.Link href="/#plants">Plants</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
                        
            </Nav>
            </Navbar.Collapse>
            
            </Container>
        </Navbar>
        );

    

}

export default NavigationBar;