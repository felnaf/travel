import React from 'react';
// importing react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutAction } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const { userLoggedIn } = useSelector((state) => state.postReducer);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="ml-4">
          <Navbar.Brand as={Link} to="/" className="travel">
            <img
              src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg"
              height="50px"
            />
            Travel & Tourism
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/packages">
                Packages
              </Nav.Link>
              <Nav.Link as={Link} to="/offers">
                Offers
              </Nav.Link>
            </Nav>
            <Nav>
              {userLoggedIn ? (
                <Nav.Link to="/" onClick={() => dispatch(logOutAction())}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav>
                  <Nav.Link as={Link} to="/signup">
                    SignUp
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
