import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='light' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >STRUCK</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link >
                  <i className='fas fa-shopping-cart'></i> CART
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link >
                  <i className='fas fa-user'></i> SIGN IN
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
