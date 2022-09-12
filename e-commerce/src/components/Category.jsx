import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItems from './CategoryItems'

const Container = styled.div`
    display: flex;
    padding: 20px;
`


const Category = () => {
  return (
    <Container>
        {categories.map((item, key) => (
            <CategoryItems item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Category