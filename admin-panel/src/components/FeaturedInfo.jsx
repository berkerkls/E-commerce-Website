import React from 'react'
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
const Item = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
`
const Title = styled.h3`
    font-size: 18px;
`
const MoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`
const Money = styled.span`
    font-size: 30px;
    font-weight: 800;
`
const MoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin: 12px;
`
const SubTitle = styled.span`
    font-size: 15px;
    color: #777;
`



const FeaturedInfo = () => {
  return (
    <Container>
        <Item>
            <Title>Income</Title>
            <MoneyContainer>
                <Money>$1,907</Money>
                <MoneyRate>
                    -10.2
                    <AiIcons.AiOutlineArrowDown style={{fontSize:"16px", marginLeft: "5px", color:"red"}} />  
                </MoneyRate>
            </MoneyContainer>
            <SubTitle>Balance</SubTitle>
        </Item>
        <Item>
            <Title>Sale</Title>
            <MoneyContainer>
                <Money>$3,907</Money>
                <MoneyRate>
                    -1.2
                    <AiIcons.AiOutlineArrowDown style={{fontSize:"16px", marginLeft: "5px", color:"green"}} />  
                </MoneyRate>
            </MoneyContainer>
            <SubTitle>Balance</SubTitle>
        </Item>
        <Item>
            <Title>Cost</Title>
            <MoneyContainer>
                <Money>$1,907</Money>
                <MoneyRate>
                    7.2
                    <AiIcons.AiOutlineArrowUp style={{fontSize:"16px", marginLeft: "5px", color:"green"}} />  
                </MoneyRate>
            </MoneyContainer>
            <SubTitle>Balance</SubTitle>
        </Item>
    </Container>
  )
}

export default FeaturedInfo