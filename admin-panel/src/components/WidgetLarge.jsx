import { red } from '@mui/material/colors'
import { display } from '@mui/system'
import React from 'react'
import styled from 'styled-components'



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
    const Button = ({type}) => {
        return <button style={{
            padding:"5px 7px", 
            border:"none", 
            borderRadius:"10px"
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
            <WidgetTr>
                <WidgetUser>
                    <Image src="https://images.pexels.com/photos/8969690/pexels-photo-8969690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Username>Susan Carol</Username>
                </WidgetUser>
                <WidgetDate>17 Sep 2022</WidgetDate>
                <WidgetAmount>$200</WidgetAmount>
                <Button type="Approved"></Button>
            </WidgetTr>
            <WidgetTr>
                <WidgetUser>
                    <Image src="https://images.pexels.com/photos/8969690/pexels-photo-8969690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Username>Susan Carol</Username>
                </WidgetUser>
                <WidgetDate>17 Sep 2022</WidgetDate>
                <WidgetAmount>$200</WidgetAmount>
                <Button type="Declined"></Button>
            </WidgetTr>
            <WidgetTr>
                <WidgetUser>
                    <Image src="https://images.pexels.com/photos/8969690/pexels-photo-8969690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Username>Susan Carol</Username>
                </WidgetUser>
                <WidgetDate>17 Sep 2022</WidgetDate>
                <WidgetAmount>$200</WidgetAmount>
                <Button type="pending"></Button>
            </WidgetTr>
            <WidgetTr>
                <WidgetUser>
                    <Image src="https://images.pexels.com/photos/8969690/pexels-photo-8969690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Username>Susan Carol</Username>
                </WidgetUser>
                <WidgetDate>17 Sep 2022</WidgetDate>
                <WidgetAmount>$200</WidgetAmount>
                <Button type="approved"></Button>
            </WidgetTr>
        </WidgetTable>
    </Container>
  )
}
