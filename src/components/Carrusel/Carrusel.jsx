import { useState , useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Style.css'


const Carrusel = () => {
    const [product, setProduct] = useState([])
    const urlapi = 'https://fakestoreapi.com/products'
  
    useEffect(()=> {
      handlerProduct()
    },[])
  
    const handlerProduct = async () =>{
      const response = await fetch(urlapi)
      const data = await response.json()
      setProduct(data)
    }
  
    return (
      <>
        <Carousel className='principal' id='carrusel'>
        {
          product.map((products) =>
            <Carousel.Item className='row h-50 justify-content-center aling-item-center' key={product.id}> 
            <img className='img-carrusel' src={products.image} alt={products.category}/>
            <Carousel.Caption>
              <p className='text-princ'>{products.title}</p>
            </Carousel.Caption>
            </Carousel.Item>
          )
        }
        </Carousel>
        <h1 className='title'> La Mejor Tienda "My Shopping" </h1>
        <p className='sub1'>Aquí encontras los mejores productos que podrás escojer simple y rápido con un solo click</p>
        <p className='sub2'>Te invitamos a navegar en nuestra web para que puedas seleccionar lo que necesites</p>
      </>
    )   
};

export default Carrusel;
