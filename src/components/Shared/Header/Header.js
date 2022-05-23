import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Processor Builder</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {!user?.uid ?
                            <Nav.Link as={Link} to="/login">login</Nav.Link>
                            :
                            <button onClick={() => signOut(auth)} className='btn btn-danger'>Log out</button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;