import React from 'react'
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as FaIcons from "react-icons/fa"
import { devices } from "../responsive"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${devices.mobileM},${devices.mobileL},${devices.tablet}{
    flex-direction: column;
  }
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

const Center = styled.div`
    flex:1;
    padding: 20px;
    margin-left:3rem;
    @media ${devices.mobileM},${devices.mobileL},${devices.tablet}{
    display: none;
  }
`

const Title = styled.h3`
    margin-bottom: 20px;
`

const List = styled.ul`
    width: 50%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    @media ${devices.mobileM},${devices.mobileL},${devices.tablet}{
    background-color: #fee9bf;
    margin-top: 10px;
  }
`

const ContactItem = styled.div`
    margin-bottom: 20px;
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
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact Us!</Title>
            <ContactItem><FaIcons.FaMapMarkerAlt/>123 Some Neighborhood, Some Street, City 12345</ContactItem>
            <ContactItem><AiIcons.AiFillPhone/>+9 876 543 321</ContactItem>
            <ContactItem><AiIcons.AiFillMail/>contact@berkerkls.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer