import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as MdIcons from "react-icons/md"
import { userRequest } from "../redux/requestMethods"



const Container = styled.div`
    flex: 1;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    padding: 20px;
    margin-right: 20px;
`
const Title = styled.h4`
    font-size: 20px;
    font-weight: bold;
`
const WidgetList = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
`
const WidgetListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`
const Image = styled.img`
    width: 40px;
    height:40px;
    border-radius: 50%;
    object-fit: cover;

`
const WidgetSmallUser = styled.div`
    display: flex;
    flex-direction: column;
`
const UserName = styled.span`
    font-weight: 600;
`
const UserTitle = styled.span`
    font-weight: 200;
    margin-top: 5px;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: transparent;
    color: #f6c96d;
    border:1px solid #444;
    border-radius: 5px;
    cursor: pointer;

`


export const WidgetSmall = () => {
    const[users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const res = await userRequest.get("/users?limit=7")
            setUsers(res.data)
        }

        getUsers()
    },[]) 

  return (
    <Container>
        <Title>New Join Member</Title>
        <WidgetList>
            {users.map((user) => ( 
                <WidgetListItem key={user.id}>
                <Image src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="image"/>
                <WidgetSmallUser>
                    <UserName>{user.username}</UserName>
                    <UserTitle>Frontend Developer</UserTitle>
                </WidgetSmallUser>
                <Button>
                    <MdIcons.MdVisibility style={{marginRight: "5px", fontSize: "16px"}} /> Display
                </Button>
            </WidgetListItem>
            ))}
        </WidgetList>
    </Container>
  )
}
