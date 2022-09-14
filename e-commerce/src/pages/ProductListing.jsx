import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import styled from 'styled-components'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin:20px;
`

const FilterText= styled.span`
    margin-right: 5px;
    font-size:18px;
    font-weight:600;
`

const Select = styled.select`
    padding: 5px 10px;
    font-size:14px;
    margin-right: 5px;
    border: 1px solid #f4f4f4;
    cursor: pointer;
`

const Option = styled.option``


const ProductListing = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>To lower price</Option>
                    <Option>To higher price</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductListing