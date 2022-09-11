import * as React from 'react'
import styled from "styled-components"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"


const Container = styled.div`
    height: 70px;
`
const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left:25px;
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
           <Center><Logo>Berkerkls.</Logo></Center>
           <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <MdIcons.MdShoppingCart size={25}/>
                </MenuItem>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar