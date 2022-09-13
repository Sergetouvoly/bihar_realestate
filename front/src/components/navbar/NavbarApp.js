import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import './NavbarApp.css'


const NavbarApp = () => {

    return(
        <div className="navbar-app-container">
            <Navbar  expand='lg' className="navbar-app py-3">
                <Container>
                    <Navbar.Brand className="fw-bolder" href="/">Restate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            Restate
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="navbar-app-nav justify-content-between  flex-grow-1 pe-3 " >
                                        <Link className="ms-0" to="/">Accueil</Link>
                                        <Link to="/housing">Logments</Link>
                                        <Link to="/login">Connexion</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
        )
}

export default NavbarApp;