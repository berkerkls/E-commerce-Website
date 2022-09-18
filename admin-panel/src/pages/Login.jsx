import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'

const Container = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input= styled.input`
    width: 100%;
    border: 1px solid #ffaa00;
    background-color: #f4f4f4;
    border-radius: 5px;
    padding: 8px 12px;
`

const Button = styled.button`
    padding: 10px 15px;
    background-color: #ffaa00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }

  return (
    <Container>
        <Input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleClick}>Login</Button>
    </Container>
  )
}

export default Login