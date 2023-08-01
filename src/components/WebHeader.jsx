import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function WebHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><strong>FreeToPlay</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Games</Nav.Link>
            <Nav.Link href="#">Library</Nav.Link> */}

            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/Games'}>Games</Link>
            <Link className='nav-link' to={'/Library'}>Library</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebHeader;