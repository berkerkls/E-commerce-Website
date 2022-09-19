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

const SubInput = styled.input`
    padding: 10px 15px;
    background-color: #ffaa00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const Form = styled.form`
`

const Login = ({AuthLogin}) => {
    
const [details,setDetails] = useState({username: "", password: ""})


const handleLogin = (e) => {
    e.preventDefault()

    AuthLogin(details)
}
    

  return (
    <Container>
        <Form onSubmit={handleLogin}>
        <Input type="text" placeholder="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
        <Input type="password" placeholder="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
        <SubInput type="submit" onClick={handleLogin}/>
        </Form>
    </Container>
  )
}

export default Login