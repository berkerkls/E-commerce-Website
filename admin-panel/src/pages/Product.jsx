import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Chart } from '../components/Chart'
import { productData } from "../data"
import * as AiIcons from "react-icons/ai"

const Container = styled.div`
    flex:4;
    padding: 20px;
`
const ProductTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h3`
`
const Button = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: darkblue;
    color: #fff;
    border-radius:5px;
    font-size: 16px;
`

const ProductTop = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductTopLeft = styled.div`
    flex: 1;
`
const ProductTopRight = styled.div`
    flex: 1;
    padding:20px;
    margin: 20px;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
`
const ProductName= styled.span`
    font-weight: 800;
    margin-left: 20px;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius:50%;
    object-fit: cover;
`
const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
`
const ProductInfoBottom = styled.div`
    margin-top: 10px;
`
const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`
const ProductKey = styled.span`
    font-weight: 300;
    margin-right: 20px;
`
const ProductKeyValue = styled.span``

const ProductBottom = styled.div`
    padding:20px;
    margin: 20px;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
`

const ProductForm= styled.form`
    display: flex;
    justify-content: space-between;
`
const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
`
const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Label = styled.label`
    margin-bottom: 10px;
    color: #777;
`
const Input = styled.input`
    margin-bottom: 10px;
    border: 1px solid #777;
    padding: 10px;
    border-radius: 5px;
`
const StockSelect = styled.select`
    margin-bottom: 10px;
`
const Option = styled.option``
const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`
const ImageUpload = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`
const ButtonUpload = styled.button`
    border:none;
    padding: 5px;
    border-radius: 5px;
    background-color: #ffaa00;
    border: none;
    color: #fff;
`
export const Product = () => {
  return (
    <Container>
        <ProductTitle>
            <Title>Product</Title>
            <Link to="/newproduct">
                <Button>Create</Button>
            </Link>
        </ProductTitle>
        <ProductTop>
            <ProductTopLeft>
                <Chart data={productData} dataKey="Sales" title="Sales analysis"/>
            </ProductTopLeft>
            <ProductTopRight>
                <ProductInfoTop>
                    <Image src="https://i.ytimg.com/vi/eECNpQ67JRo/maxresdefault.jpg"/>
                    <ProductName>Playstation5</ProductName>
                </ProductInfoTop>
                <ProductInfoBottom>
                    <ProductInfoItem>
                        <ProductKey>id:</ProductKey>
                        <ProductKeyValue>8899</ProductKeyValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductKey>sales:</ProductKey>
                        <ProductKeyValue>9123</ProductKeyValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductKey>active:</ProductKey>
                        <ProductKeyValue>yes</ProductKeyValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductKey>stock:</ProductKey>
                        <ProductKeyValue>no</ProductKeyValue>
                    </ProductInfoItem>
                </ProductInfoBottom>
            </ProductTopRight>
        </ProductTop>
        <ProductBottom>
            <ProductForm>
                <FormLeft>
                    <Label>Product Name</Label>
                    <Input type="text" placeholder="Playstation 5" />
                    <Label>Stock</Label>
                    <StockSelect name="inStock" id="idStock">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </StockSelect>
                    <Label>Active</Label>
                    <StockSelect name="active" id="active">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </StockSelect>
                </FormLeft>
                <FormRight>
                    <ProductUpload>
                        <ImageUpload src="https://www.gannett-cdn.com/presto/2022/03/04/USAT/7a26a49a-a891-4e21-b14e-72a203a0a3dc-hsnps5.png?width=660&height=372&fit=crop&format=pjpg&auto=webp"/>
                        <Label htmlFor="file">
                            <AiIcons.AiOutlineUpload />
                        </Label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </ProductUpload>
                    <ButtonUpload>Update</ButtonUpload>
                </FormRight>
            </ProductForm>
        </ProductBottom>
    </Container>
  )
}
