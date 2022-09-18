import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 4;
`
const Title = styled.h1`
    margin-left: 20px;
    margin-top:20px;
`
const NewProductForm = styled.div`
    margin-top: 10px;
    margin-left: 20px;
`
const AddItem = styled.div`
    width:250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
const Label = styled.label`
    color: #777;
    margin-bottom: 10px;
`
const Input = styled.input`
    padding: 10px;
`
const Select = styled.select`
    padding: 10px;
`
const Option = styled.option``
const Button = styled.button`
    margin-top: 10px;
    padding: 8px 10px;
    border: none;
    background-color: #ffaa00;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
`



const NewProduct = () => {
  return (
    <Container>
        <Title>New Product</Title>
        <NewProductForm>
            <AddItem>
                <Label>Image</Label>
                <Input type="file" id="file" />
            </AddItem>
            <AddItem>
                <Label>Name</Label>
                <Input type="text" />
            </AddItem>
            <AddItem>
                <Label>Stock</Label>
                <Input type="text" />
            </AddItem>
            <AddItem>
                <Label>Active</Label>
                <Select name="active" id="active">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </AddItem>
            <Button>Create</Button>
        </NewProductForm>
        
    </Container>
  )
}

export default NewProduct