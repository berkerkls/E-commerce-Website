import React from 'react'
import * as RiIcons from "react-icons/ri"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    background-color: #f4f4f4;
`

const Title = styled.h1`
    margin-bottom:5px;
    font-size:3rem;
    color: #ffb732;
`

const Desc = styled.p`
    text-align:center;
    font-weight: 400;
    margin-bottom:15px;
    font-size: 1.5rem;
    color: #777;
`

const InputContainer = styled.div`
    width: 350px;
    display: flex;
    justify-content:center;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    border: 1px solid #999;
    padding:10px 20px;
    margin-right:5px;

    &:focus {
        outline: 0;
    }
`

const Button = styled.button`
    background-color: transparent;
    color: #ffb732;
    border: 0;
    cursor: pointer;
`
const NewsLetter = () => {
  return (
    <Container>
        <Title>Keep yourself updated!</Title>
        <Desc>Get timely updates from your favourite products!</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <RiIcons.RiSendPlaneFill size={40} />
            </Button>
        </InputContainer>  
    </Container>
  )
}

export default NewsLetter