import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function WebHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><strong>FreeToPlay</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/games'}>Games</Link>
            <Link className='nav-link' to={'/library'}>Library</Link>
          </Nav>
          <Nav>
            <Link className='nav-link' to={'/login'}>Login</Link>
            <Link className='nav-link' to={'/signup'}>Signup</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebHeader;