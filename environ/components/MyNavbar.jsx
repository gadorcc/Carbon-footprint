"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const MyNavbar = () => {
  return (
  <>
      <Navbar className='mynav' >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/calculator">Calculator</Nav.Link>
            <Nav.Link href="/facts">Facts</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  );
}


export default MyNavbar;
