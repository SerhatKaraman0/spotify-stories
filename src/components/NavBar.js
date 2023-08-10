import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar(){
    return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Spotify Stories</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Account</Nav.Link>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><a href="https://www.instagram.com/serhat___krmn/" target="_blank">Instagram</a></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                <a href="https://www.reddit.com/user/s3rh4tk" target="_blank">Reddit</a>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><a href='https://github.com/SerhatKaraman0' target="_blank">Github</a></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <a href='https://open.spotify.com/user/dpvyxnuzhnpxyj6p79tgalghn?si=3d15185bdd704e0a' target="_blank">Spotify</a>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavBar;