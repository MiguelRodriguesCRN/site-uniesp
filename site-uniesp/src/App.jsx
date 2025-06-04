import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicial  from './pages/Inicial'
import CustomNavbar from './components/CustomNavbar'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'
import Admin from './pages/Admin'
import Footer from './components/Footer'



const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Container className='my-4'>
        <Routes>
          <Route path='/' element={<Inicial />} />
          <Route path='/a-faculdade' element={<Faculdade />} />
          <Route path='/dpo-lgpd' element={<DpoLgpd />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/vizualiza-noticia/:id' element={<VisualizaNoticia />} />
          <Route path='/admin_noticias' element={<Admin />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App