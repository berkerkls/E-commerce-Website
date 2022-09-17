import React from 'react'
import styled from 'styled-components'
import * as IoIcons from "react-icons/io"
import * as FiIcons from "react-icons/fi"

const Container = styled.div`
    width: 100%;
    height:50px;
    background-color: #ffaa00;
    opacity:0.5;
    position: sticky;
    top:0;
    z-index:999;
`
const Wraper = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items:center;   
    padding: 0 20px;
`
const Left = styled.div`
    display: flex;
`

const Logo = styled.span`
    font-weight: 800;
    font-size: 26px;
    color: #444;
    cursor: pointer;
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Icons = styled.div`
    margin:0 10px;
    cursor: pointer;
    
    &:hover {
        opacity:0.8;
    }
`



const Navbar = () => {
  return (
    <Container>
        <Wraper>
            <Left>
                <Logo>berkerkls.Admin</Logo>
            </Left>
            <Right>
                <Icons>
                    < IoIcons.IoMdNotificationsOutline size={30}/>
                </Icons>
                <Icons>
                <FiIcons.FiSettings size={27}/>
                </Icons>
            </Right>
        </Wraper>
    </Container>
  )
}

export default Navbar