import * as React from 'react'
import styled from "styled-components"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'


const Container = styled.div`
    height: 70px;
    ${mobile({height:"50px"})};
`
const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding:"10px 10px"})};
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})};
`

const SearchContainer = styled.div`
    border: 1px solid #d2d0d0;
    display: flex;
    align-items:center;
    margin-left: 20px;
`

const Input = styled.input`
    border:none;
    padding:10px 20px;
    ${mobile({width:"50px"})};

    &:focus {
        outline: 0;
    }
`

const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align:center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})};
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ flex: 2,justifyContent: "center" })};
`

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left:25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})};
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <AiIcons.AiOutlineSearch style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
           </Left>
           <Center>
            <Link to={"/"} style={{textDecoration:"none", color:"inherit"}} >
                <Logo>Berkerkls.</Logo>
            </Link>
            </Center>
           <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
            <Link to="/cart" >
                <MenuItem>
                    <MdIcons.MdShoppingCart size={25} />
                </MenuItem>
            </Link>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar