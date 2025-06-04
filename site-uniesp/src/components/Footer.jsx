import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Faculdade Fictícia. Todos os direitos reservados.</p>
        <small>Desenvolvido por Miguel Rodrigues</small>
      </Container>
    </footer>
  )
}

export default Footer
