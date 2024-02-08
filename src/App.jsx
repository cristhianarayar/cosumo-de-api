import MyApi from './components/MyApi/MyApi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu/Menu'
import Carrusel from './components/Carrusel/Carrusel'
import Buscador from './components/Buscador/Buscador'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


const App = () => {
  
  return(
    <>
      <BrowserRouter>
        <Menu />  

        <Routes>
            <Route path='/' element={<Carrusel />} />
            <Route path='/Categoria' element={<MyApi />} />
            <Route path='/Buscador' element={<Buscador />} />
        </Routes>


      </BrowserRouter>

    </>
  )
}
export default App
