import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { urlBase } from '../config'

const Noticias = () => {
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        axios.get(`${urlBase}/noticias`)
            .then(response => setNoticias(response.data))
            .catch(error => console.error("Erro ao carregar lista de notícias: ", error))
    }, [])

    return (
        <Container className='py-4'>
            <h2 className='mb-4'>Notícias</h2>

            <Row className='g-4'>
                {noticias.map(noticia => (
                    <Col xs={12} sm={6} md={4} key={noticia.id}>
                        <Card className='h-100 shadow-sm'>
                            <Card.Img
                                variant='top'
                                src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                                alt='Imagem da notícia'
                                style={{ objectFit: 'cover', height: '140px' }}
                            />
                            <Card.Body>
                                <Card.Title>{noticia.titulo}</Card.Title>
                                <Link
                                    to={`/vizualiza-noticia/${noticia.id}`}
                                    className='text-decoration-none text-primary'
                                >
                                    <small>Ler mais</small>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Noticias
