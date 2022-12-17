import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>emet</Navbar.Brand>
          <Nav>
            <Nav.Link>About Me</Nav.Link>
            <Nav.Link>Contact Me</Nav.Link>
            <Nav.Link>My Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
