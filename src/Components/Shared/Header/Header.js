import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"
                        style={{
                            fontWeight: '700',
                            fontSize: '40px',
                            fontStyle: 'italic',
                            color: '#00CED1'

                        }}>Comfort-Zone</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-white' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#departments">Departments</Nav.Link>
                        {
                            user?.email ?
                                <Button onClick={logOut} variant="light">Log out</Button> :
                                <Nav.Link className='text-white' as={HashLink} to="/register">Log in</Nav.Link>
                        }
                        {/* <Nav.Link as={HashLink} to ="/register">Login</Nav.Link> */}
                        <Navbar.Text>
                            <a style={{ textDecoration: 'none', color: 'white' }} href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;