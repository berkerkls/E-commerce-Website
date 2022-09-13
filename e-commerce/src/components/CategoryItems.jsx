import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 70vh;
    margin: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    position: relative;
`

const Image= styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
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
    color: #fff;
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
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItems