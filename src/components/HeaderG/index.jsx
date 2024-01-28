import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles.css';

function OffcanvasExample() {
  return (
    <header className='Header-global'>
      <Navbar key={'xxl'} expand={'xxl'} fixed="top" className="NavBar-menu">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Brand href="#" className="Canvas-menu"></Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            className="offcanvas-right" // Adicionando a classe personalizada
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/ProvasAntigas">Provas Antigas</Nav.Link>
                <Nav.Link href="/Calculadora">Calculadora de Notas</Nav.Link>
                <Nav.Link href="/Cronometro">Cronometro</Nav.Link>
                <Nav.Item  href="#action2">
                </Nav.Item >
                <NavDropdown
                  title="Redação"
                  id={`offcanvasNavbarDropdown-expand-xxl`}
                >
                  <NavDropdown.Item href="/Dicas">Dicas</NavDropdown.Item>
                  <NavDropdown.Item href="/NotaMil">
                    Nota Mil
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Folha em PDF
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default OffcanvasExample;
