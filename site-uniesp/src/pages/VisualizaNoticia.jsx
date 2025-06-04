import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Container } from 'react-bootstrap'
import { urlBase } from '../config'

const VisualizaNoticia = () => {
    const { id } = useParams()
    const [noticia, setNoticia] = useState({})

    useEffect(() => {
        axios.get(`${urlBase}/noticias/${id}`)
            .then(response => setNoticia(response.data))
            .catch(error => console.error("Erro ao obter notícia específica", error))
    }, [id])

    return (
        <Container className='py-4'>
            <Card className='shadow-sm'>
                <Card.Body>
                    <Card.Title>{noticia.titulo}</Card.Title>
                    <Card.Text>{noticia.texto}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default VisualizaNoticia
