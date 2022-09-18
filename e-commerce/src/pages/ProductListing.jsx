import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import styled from 'styled-components'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'


const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;
`



const ProductListing = () => {
    const location= useLocation();
    console.log(location)
    const cat = location.pathname.split("/")[2]
    
    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters = (e) => {
        const value= e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

  console.log(filters)
  
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Products</Title>
        <Products cat={cat} filters={filters} sort={sort}/>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductListing