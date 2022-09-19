import React,{useState} from 'react'
import styled from 'styled-components'
import { devices } from '../responsive'


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
    @media ${devices.mobileM},${devices.mobileL}{
    width: 75%;
  }
    
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

const SubmitInput = styled.input`
    padding: 10px 20px;
    background-color: #ffaa00;
    border: 1px solid #f4f4f4;
    color: #f4f4f4;
    margin-top: 10px;
    cursor: pointer;


    &:hover,
    &:disabled {
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

const Login = ({AuthLogin}) => {

    const [details,setDetails] = useState({username: "", password: ""})


    const handleLogin = (e) => {
        e.preventDefault()

        AuthLogin(details)
    }

  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form onSubmit={handleLogin}>
                <Input placeholder="username"  onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                <Input type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                <Link>Forgot your password?</Link>
                <SubmitInput type="submit" name='submit' onClick={handleLogin} />
            </Form>
        </Wrapper>      
    </Container>
  )
}

export default Login