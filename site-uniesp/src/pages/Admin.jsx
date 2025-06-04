import React from 'react'
import { Container, Row, Col, Card, Button, ListGroup, Nav } from 'react-bootstrap'

const Admin = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>

      {/* Sidebar */}
      <Nav
        className="flex-column bg-dark text-white p-3"
        style={{ width: '250px', minHeight: '100vh' }}
      >
        <h3 className="mb-4">Admin Painel</h3>
        <Nav.Link href="#" className="text-white mb-2">Dashboard</Nav.Link>
        <Nav.Link href="#" className="text-white mb-2">Usuários</Nav.Link>
        <Nav.Link href="#" className="text-white mb-2">Configurações</Nav.Link>
        <Nav.Link href="#" className="text-white mb-2">Relatórios</Nav.Link>
        <Nav.Link href="#" className="text-white">Sair</Nav.Link>
      </Nav>

      {/* Main content */}
      <Container fluid className="p-4">
        <h1 className="mb-4">Bem-vindo ao Painel Administrativo</h1>

        <Row>
          <Col md={8}>
            {/* Biografia */}
            <Card className="mb-4 shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h4>Sobre Mim</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Olá! Me chamo <strong>Miguel Rodrigues</strong>, tenho 20 anos e atualmente trabalho na Vsoft como analista de suporte.
                </Card.Text>
                <Card.Text>
                  Tenho grande interesse na área de dados e estou em constante evolução para migrar minha carreira para esse setor. Estudo temas como SQL, análise de dados, visualização de dados e ferramentas como Power BI e Python.
                </Card.Text>
                <Card.Text>
                  Meu objetivo é crescer profissionalmente como analista de dados, unindo minha experiência prática em suporte com conhecimentos técnicos para gerar insights e contribuir com decisões estratégicas.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/MiguelRodriguesCRN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meu GitHub
                </Button>
              </Card.Body>
            </Card>

            {/* Notificações */}
            <Card className="shadow-sm">
              <Card.Header>
                <h5>Notificações Recentes</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Nova atualização disponível para o sistema</ListGroup.Item>
                <ListGroup.Item>Usuário João solicitou acesso</ListGroup.Item>
                <ListGroup.Item>Backup diário concluído com sucesso</ListGroup.Item>
                <ListGroup.Item>Relatório mensal gerado</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col md={4}>
            {/* Estatísticas */}
            <Card className="mb-4 shadow-sm text-center">
              <Card.Header className="bg-info text-white">
                <h5>Estatísticas do Sistema</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <h3>1.240</h3>
                    <p>Alunos Cadastrados</p>
                  </Col>
                  <Col>
                    <h3>35</h3>
                    <p>Cursos Ativos</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <h3>7.8</h3>
                    <p>Média Geral de Notas</p>
                  </Col>
                  <Col>
                    <h3>128</h3>
                    <p>Projetos Entregues</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Ações rápidas */}
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Button variant="danger" className="w-100">
                  Sair do Sistema
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Admin
