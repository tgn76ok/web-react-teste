import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar  expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="">Calculadora de Notas</Nav.Link>
                  <Nav.Link href="#action2">Provas Antigas</Nav.Link>
                  <Nav.Link href="#cronometro">Cronometro</Nav.Link>

                  <NavDropdown title="Redação" id={`offcanvasNavbarDropdown-expand-${expand}`}>
      <NavDropdown.Item href="">Dicas</NavDropdown.Item>
      <NavDropdown.Item href="#opcao2">Nota Mil</NavDropdown.Item>
      <NavDropdown.Item href="#opcao3">Folha em PDF</NavDropdown.Item>
    </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
