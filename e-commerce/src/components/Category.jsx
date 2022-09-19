import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItems from './CategoryItems'
import { devices } from "../responsive"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    @media ${devices.mobileM},${devices.mobileL},${devices.tablet}{
    padding: 0px;
    flex-direction: column;
    margin-left:-20px;
  }
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