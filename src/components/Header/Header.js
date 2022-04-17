import { signOut } from 'firebase/auth';
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/">
                <img height={35} width={150} src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#experts">Experts</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="about">About Me</Nav.Link>
                    {
                        user ?
                            <button className='btn btn-danger text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                        :
                        <Nav.Link as={Link} to="login">
                        Login
                    </Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</>
  )
}

export default Header;