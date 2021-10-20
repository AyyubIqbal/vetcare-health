import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, error, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src="https://i.ibb.co/vw5x2rf/vetcare-logo-color.png" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" >
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#team">Team</Nav.Link>

                        {user?.email ?
                            (<Button onClick={logOut} className='btn btn-primary'>Logout</Button>) :
                            (<Nav.Link as={Link} to="/login">Login</Nav.Link>)}

                        <Navbar.Text>
                            <small className='ms-2'>{user.displayName}</small>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;