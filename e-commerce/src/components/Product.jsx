import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import * as AiIcons from "react-icons/ai"



const Info =styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.3);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Container = styled.div`
    flex:1;
    margin: 5px;
    display:flex;
    min-width:280px;
    height:350px;
    justify-content:center;
    align-items: center;
    background-color: #fcf1e5;
    position: relative;
    cursor: pointer;

    &:hover ${Info} {
        opacity:1;
        transition: all 1s ease;
    }
`
const Circle =styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color: #fff;
    position: absolute;
`

const Image =styled.img`
    height: 75%;
    z-index: 2;
    width: 100px;
    height: 100px;
`

const Icon =styled.div`
    width: 40px;
    height: 40px;
    background-color: #f4f4f4;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    transition: all 0.5s ease;

    &:hover {
        background-color:#e0e0e0;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {

  return (
    <Container>
        <Circle />
        <Image src={item.image}/>
        <Info>
            <Icon>
                <Link to={`/product/${item.id}`}>
                    <AiIcons.AiOutlineSearch />
                </Link>
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