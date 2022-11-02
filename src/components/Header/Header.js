import { logDOM } from '@testing-library/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

let Logo = require('../../Img/global.png');
const Header = () => {
    const userInfo = useSelector(state => state.user.userInfo);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    console.log(userInfo);

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }
    const handleSignUp = () => {
        navigate('/register')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img style={{ height: 50 }} src={Logo} alt="React Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link'>Users</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                        <NavLink to="/community" className='nav-link'>Community</NavLink>
                        <NavLink to="/about" className='nav-link'>About</NavLink>
                    </Nav>
                    <Nav>
                        {
                            isAuthenticated === false
                                ?
                                <>
                                    <button
                                        className='btn-login'
                                        onClick={() => handleLogin()}
                                    >
                                        Log In
                                    </button>
                                    <button
                                        className='btn-signup'
                                        onClick={() => handleSignUp()}

                                    >
                                        Sign Up
                                    </button>
                                </>
                                :
                                <>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontStyle: 'italic'
                                    }}>Hello {userInfo.username}</div>
                                    <div>
                                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                                            <NavDropdown.Item onClick={() => navigate("/login")}>Log out</NavDropdown.Item>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;