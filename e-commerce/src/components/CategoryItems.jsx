import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { devices } from '../responsive'

const Container = styled.div`
    height: 70vh;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
`

const Image= styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
    margin-left: 30px;
    @media ${devices.mobileM},${devices.mobileL},${devices.tablet}{
    height: 65vh;
  }
`

const Info= styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
`

const Title= styled.h1`
    margin-bottom: 10px;
    color: #f4f4f4;
`

const Button= styled.button`
    padding: 10px 20px;
    border: none;
    background-color:#fcf1e5;
    color: #777;
    cursor: pointer;
    font-weight:600;
`



const CategoryItems = ({item}) => {
  return (
    <Link to={`/products/${item.cat}`}>
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    </Link>
  )
}

export default CategoryItems