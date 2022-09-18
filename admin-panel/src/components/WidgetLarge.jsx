import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../redux/requestMethods'



const Container = styled.div`
    flex: 2;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    padding: 20px;
`
const Title = styled.h3`
    font-size: 25px;
    font-weight: 800;
`
const WidgetTable = styled.table`
    width: 100%;
    border-spacing:20px;
`
const WidgetTr = styled.tr``
const WidgeTh = styled.th`
    text-align: left;
`
const WidgetUser = styled.td`
    display: flex;
    align-items: center;
`
const WidgetDate = styled.td`
`
const WidgetAmount = styled.td`
`
const Username = styled.span``
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`


export const WidgetLarge = () => {
    const[ orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            const res = await userRequest.get("/users?limit=5")
            setOrders(res.data)
        }

        getOrders()
    },[]) 


    const Button = ({type}) => {
        return <button style={{
            padding:"5px 7px", 
            border:"none", 
            borderRadius:"10px",
            backgroundColor: "green",
            color:"#f4f4f4"
        }}>{type}</button>
    }
  return (
    <Container>
        <Title>Latest Transactions</Title>
        <WidgetTable>
            <WidgetTr>
                <WidgeTh>Customer</WidgeTh>
                <WidgeTh>Date</WidgeTh>
                <WidgeTh>Amount</WidgeTh>
                <WidgeTh>Status</WidgeTh>
            </WidgetTr>
            {orders.map((order) => (
            <WidgetTr>
                <WidgetUser>
                    <Image src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg "/>
                    <Username>{order.username}</Username>
                </WidgetUser>
                <WidgetDate>17 Sep 2022</WidgetDate>
                <WidgetAmount>${order.address.number}</WidgetAmount>
                <Button type="Approved"></Button>
            </WidgetTr>
            ))}
        </WidgetTable>
    </Container>
  )
}
