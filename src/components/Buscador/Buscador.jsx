import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button' 
import './Style.css'

const Buscador = () => {
  const [product, setProduct] = useState([])
  const [search,  setSearch] = useState('')
  const urlapi = 'https://fakestoreapi.com/products'

  useEffect(()=> {
    getData()
  },[])

  const getData = async () =>{
    const response = await fetch(urlapi)
    const data = await response.json()
    setProduct(data)
  }

  const handleBuscar = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let results = [];
  if (!search) {
    results = product;
  } else {
    results = product.filter((products) =>
      products.title.toLowerCase().includes(search.toLowerCase())
    );
  }


    return (
      <>
        <div className="inpt">
          <input type="text" placeholder="search" className="form-control text-input" value={search} onChange={handleBuscar}/>
        </div>  
        <div className='row justify-content-evenly mt-12' id="busca">
        {   
            results.map((products) =>
            <Card style={{ width: "18rem" }} className='col-sm-6 mb-5 text-center' key={product.id}> 
                <Card.Img variant="top" src={products.image} width="200" height="200"/>
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                       Cantidad: {products.rating.count}
                    </Card.Text>
                    <p>{products.category}</p>
                    <p variant="primary" className="pre">Valor: $ {products.price}</p>
                    <Button variant='danger'> Comprar </Button>
                </Card.Body>
            </Card>
            )
        }
        </div>

      </>     
    )
  }
  
  export default Buscador