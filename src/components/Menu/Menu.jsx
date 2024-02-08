import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import './Style.css'

const Menu = () => {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark" id="nav">
        <Container>
          <Link className="my" to="/">My Shopping</Link>
          <Nav className="me-auto menu">
            <Link className="hom" to="/">Home</Link>
            <Link className="cat" to="/Categoria">Categoria</Link>
            <Link className="bus" to="/Buscador">Buscar</Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Menu
