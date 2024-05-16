import React from 'react';
import './NavigationBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Icons/airplane.svg';

function NavigationBar() {
    return (
        <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <Navbar.Brand className='text-light'>
                    <Link to='/' className='text-decoration-none text-light d-flex'>
                        <img className='me-2' src={AirplaneLogo} alt="logo" />
                        React Travel
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 justify-content-center'>
                        <Nav.Link href='/' className='text-light'>Home</Nav.Link>
                        <Nav.Link href='/holidays' className='text-light'>Holidays</Nav.Link>
                        <Nav.Link href='/city-breaks' className='text-light text-capitalize'>City breaks</Nav.Link>
                        <Nav.Link href='/destinations' className='text-light'>Destinations</Nav.Link>
                    </Nav>
                    <Button variant='light'>
                        <Link to='/' className='text-decoration-none text-capitalize text-dark text-nowrap'>Sign in</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;