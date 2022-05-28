import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaSignOutAlt } from "react-icons/fa";

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar expand="lg" sticky='top' className='navigation-bar shadow-sm' variant="light">
            <Container>
                <Navbar.Brand className='text-primary text-uppercase fs-4 fw-bold' as={Link} to='/'>Processor Builder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {!user?.uid ?
                            <Nav.Link as={Link} to="/login">login</Nav.Link>
                            :
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <button onClick={() => signOut(auth)} className='btn btn-sm btn-danger'><FaSignOutAlt className='me-2' />Log out</button>
                                <Nav.Link as={Link} to="#">{user?.displayName}</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;