import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState , useEffect} from 'react'
import './Style.css'

const reselec = [] 
const resmen = []
const reswomen = [] 
const resjew = []

const MyApi = () => {

  const [product, setProduct] = useState([])
    const urlapi = 'https://fakestoreapi.com/products'
  
    useEffect(()=> {
      handlerProduct()
      Category()
    },[])
     
    const handlerProduct = async () =>{
      const response = await fetch(urlapi)
      const data = await response.json()
      setProduct(data)
    }

    const Category = () => {
        product.forEach((products) => {
            if (products.category == "men's clothing"){
                 resmen.push(products)
            }
            if(products.category == "jewelery") {
                 resjew.push(products)
            }
            if(products.category == "electronics") {
                 reselec.push(products)
            }
            if(products.category == "women's clothing") {
                 reswomen.push(products)
            }
        })
    }

 
  return (
    <>
        <div className='row justify-content-evenly mt-12 ' id='men'> 
        <h2 className='title-cat'>Categoría de Hombres</h2>
        {   
            resmen.sort((a,b)=> a.title > b.title ? 1 : -1) 
            .map((products1) =>
            <Card style={{ width: "18rem" }} className='col-sm-6 mb-5 text-center' key={product.id}>
                <Card.Img className='img-card' src={products1.image} width="200" height="200"/>
                <Card.Body>
                    <Card.Title className='tex-title'>{products1.title}</Card.Title>
                    <Card.Text>
                       Cantidad: {products1.rating.count}
                    </Card.Text>
                    <p variant="primary" className='pre'>Valor $ {products1.price}</p>
                    <Button variant='danger'> Comprar </Button>
                </Card.Body>
            </Card>
            ) 
        }
        </div>

        <div className='row justify-content-evenly mt-12' id='women'> 
        <h2 className='title-cat'>Categoría de Mujeres</h2>
        {   
            reswomen.sort((a,b)=> a.title > b.title ? 1 : -1) 
            .map((products2) =>
            <Card style={{ width: "18rem" }} className='col-sm-6 mb-5 text-center' key={product.id}>
                <Card.Img className='img-card' src={products2.image}/>
                <Card.Body>
                    <Card.Title className='tex-title'>{products2.title}</Card.Title>
                    <Card.Text>
                       Cantidad: {products2.rating.count}
                    </Card.Text>
                    <p variant="primary" className='pre'>Valor $ {products2.price}</p>
                    <Button variant='danger'> Comprar </Button>
                </Card.Body> 
            </Card>
            )
        }
        </div>

        <div className='row justify-content-evenly mt-12' id='jew'> 
        <h2 className='title-cat'>Categoría de Joyería</h2>
        {   
            resjew.sort((a,b)=> a.title > b.title ? 1 : -1) 
            .map((products3) =>
            <Card style={{ width: "18rem" }} className='col-sm-6 mb-5 text-center' key={product.id}>
                <Card.Img className='img-card' src={products3.image} width="200" height="200"/>
                <Card.Body>
                    <Card.Title className='tex-title'>{products3.title}</Card.Title>
                    <Card.Text>
                       Cantidad: {products3.rating.count}
                    </Card.Text>
                    <p variant="primary" className='pre'>Valor $ {products3.price}</p>
                    <Button variant='danger'> Comprar </Button>
                </Card.Body>
            </Card>
            )
        }
        </div>

        <div className='row justify-content-evenly mt-12' id='elec'> 
        <h2 className='title-cat'>Categoría de Electrónica</h2>
        {   
            reselec.sort((a,b)=> a.title > b.title ? 1 : -1) 
            .map((products4) =>
            <Card style={{ width: "18rem" }} className='col-sm-6 mb-5 text-center'>
                <Card.Img className='img-card' src={products4.image} width="200" height="200"/>
                <Card.Body >
                    <Card.Title className='tex-title'>{products4.title}</Card.Title>
                    <Card.Text>
                       Cantidad: {products4.rating.count}
                    </Card.Text>
                    <p variant="primary" className='pre'>Valor $ {products4.price}</p>
                    <Button variant='danger'> Comprar </Button>
                </Card.Body>
            </Card>
            )
        }
        </div>  
    </>
  )

}


export default MyApi


