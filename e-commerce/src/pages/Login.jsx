import React from 'react'
import styled from 'styled-components'

const Container  = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?cs=srgb&dl=pexels-godisable-jacob-1394882.jpg&fm=jpg") center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
    
`

const Title= styled.h1`
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 20px;
    color: #777;
`

const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Input = styled.input`
    width: 80%;
    margin-bottom: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #ffaa00;

    &:focus {
        outline: 0;
    }
`

const Button = styled.button`
    padding: 10px 20px;
    background-color: #ffaa00;
    border: 1px solid #f4f4f4;
    color: #f4f4f4;
    margin-top: 10px;
    cursor: pointer;


    &:hover {
        opacity: 0.8;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #444;
    font-size: 14px;
    cursor: pointer;
    
    &:hover {
        color: #ffaa00;
    }
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Link>Forgot your password?</Link>
                <Button>Login</Button>
            </Form>
        </Wrapper>      
    </Container>
  )
}

export default Login