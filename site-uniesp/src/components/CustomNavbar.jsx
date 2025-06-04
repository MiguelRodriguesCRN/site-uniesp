import React from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {

    
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
        <Navbar expand='md'style={{ backgroundColor: '#002F6C' }} variant='dark' className="px-3 shadow-sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src="/uniesp.jpg" alt="Uniesp Logoo" width={60} height={60} className='me-2 rounded' />
                </Navbar.Brand>

                {/* Botão Hamburguer para Mobile :)*/}
                <Navbar.Toggle onClick={handleShow} />
                    <Navbar.Collapse className='justify-content-end d-none d-md-flex'>
                        <Nav>
                            <Nav.Link as={Link} to="/a-faculdade" className='px-3'>A Faculdade</Nav.Link>
                            <Nav.Link as={Link} to="/dpo-lgpd" className='px-3'>DPO LGPD</Nav.Link>
                            <Nav.Link as={Link} to="/noticias" className='px-3'>Notícias</Nav.Link>
                            <Nav.Link as={Link} to="/admin_noticias" className='px-3'>Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>


        {/* Menu Lateral para quando clicar no X Burguer kkkkk*/}

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className='flex-column'>
                    {/* Cada item de menu fecha o off canvas ao ser clicado por causa responsividade e orientação de acessar a pagina a pagina*/}
                            <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose}>A Faculdade</Nav.Link>
                            <Nav.Link as={Link} to="/dpo-lgpd" onClick={handleClose}>DPO LGPD</Nav.Link>
                            <Nav.Link as={Link} to="/noticias" onClick={handleClose}>Notícias</Nav.Link>
                            <Nav.Link as={Link} to="/admin_noticias" onClick={handleClose}>Admin</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default CustomNavbar