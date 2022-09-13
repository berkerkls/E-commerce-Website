import React from 'react'
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai"

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const Logo= styled.h2`
    margin: 20px 0px;
    font-size: 2rem;
`
const Desc = styled.p`
    margin-bottom: 10px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    margin-right: 10px;
    height:40px;
    width: 40px;
    border-radius: 50%;
    color:${props => props.color};
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
`


const Right = styled.div`
    flex:1;
`

const Center = styled.div`
    flex:1;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BerkerKls</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nesciunt ex provident esse, cumque nihil ab delectus. Maiores perferendis sequi, error, obcaecati reiciendis hic laborum facere soluta officiis aliquam suscipit repellat corporis alias ipsum eligendi quaerat vero voluptatem molestiae. Reprehenderit?</Desc>
            <SocialContainer>
                <SocialIcon color='#4267B2'>
                    <AiIcons.AiFillFacebook size={30} />
                </SocialIcon>
                <SocialIcon color='#cd486b'>
                    <AiIcons.AiFillInstagram size={30} />
                </SocialIcon>
                <SocialIcon color='#00acee'>
                    <AiIcons.AiFillTwitterSquare size={30} />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer