import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu  from '../../components/Menu';
import Button from 'react-bootstrap/Button';

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse href="#home">      <Menu/>
</Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
              <Button variant="primary">Primary</Button>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default TextLinkExample;