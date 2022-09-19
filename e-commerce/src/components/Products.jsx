import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
`

const Products = ({cat,filters,sort}) => {
  const location= useLocation();
  const [products,setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
        setProducts(res.data)
        console.log(res.data)
      } catch(err) {

      }
    }
    getProducts()
  },[cat])

  // useEffect(() => {
  //   cat && setFilteredProducts(
  //     products.filter((item) => Object.entries(filters).every(([id,value]) => 
  //       item[id].includes(value)
  //       )  
  //     )
  //   )
  // },[products,cat,filters]);


  return (
    <Container>
        {products.map((item) => (
            <Product item={item}  key={item.id}/>
        ))}
    </Container>
  )
}

export default Products