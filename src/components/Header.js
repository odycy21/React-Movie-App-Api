import React from 'react';

import { Button, Container , Form , Nav , Navbar } from 'react-bootstrap';

function Header({searchValue, setSearchValue}) {

  return (
    <>
    <Navbar bg="black" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MOVIE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Type to search..."
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange = {(event) => setSearchValue(event.target.value)}
            />
            <Button variant="warning" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

    </Navbar>


    </>
  );
}

export default Header;