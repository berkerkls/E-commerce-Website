import React from 'react'
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai"

const Container = styled.div`
    flex: 1;
    min-width: 280px;
    height: 350px;
    margin: 5px;
`
const Circle =styled.div``
const Image =styled.img`
    width:75%;
    height: 100%;
`
const Info =styled.div``
const Icon =styled.div``

const Product = (item) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <AiIcons.AiOutlineSearch />
            </Icon>
            <Icon>
                <AiIcons.AiOutlineShoppingCart />
            </Icon>
            <Icon>
                <AiIcons.AiFillHeart />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product