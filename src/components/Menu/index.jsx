import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary "
      fixed="top">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
              <Button variant="primary">Primary</Button>
              <Button variant="primary">Primary</Button>
          </Navbar.Brand>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;