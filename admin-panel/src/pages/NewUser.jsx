import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 4;
`

const UserTitle= styled.h2`
  margin-left: 20px;
  margin-top: 20px;
`
const UserForm= styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
`
const UserFormItem = styled.div`
    width:500px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
`
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #777;
`
const Input = styled.input`
  height: 20px;
  padding: 10px;
  border-radius:10px;
  border: 1px solid #777;
`
const UserGender = styled.div``
const GenderInput = styled.input`
  margin-top: 15px;
`
const GenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`
const UserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`
const SelectOption = styled.option``

const Button = styled.button`
  width: 400px;
  border: none;
  background-color: #ffaa00;
  color: #777;
  padding: 7px 10px;
  border-radius: 10px;
  margin-top: 20px;
  cursor:pointer;

  &:hover {
    opacity: 0.8;
  }
`



const NewUser = () => {
  return (
    <Container>
        <UserTitle>New User</UserTitle>
        <UserForm>
          <UserFormItem>
            <Label>Username</Label>
            <Input type="text" placeholder="Brad" />
          </UserFormItem>
          <UserFormItem>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Brad Smith" />
          </UserFormItem>
          <UserFormItem>
            <Label>Email</Label>
            <Input type="email" placeholder="brad@gmail.com" />
          </UserFormItem>
          <UserFormItem>
            <Label>Password</Label>
            <Input type="password" placeholder="password" />
          </UserFormItem>
          <UserFormItem>
            <Label>Phone</Label>
            <Input type="number" placeholder="+1 23345345" />
          </UserFormItem>
          <UserFormItem>
            <Label>Gender</Label>
            <UserGender>
            <GenderInput type="radio" id='man' value="man" name='gender' />
            <GenderLabel htmlFor='male'>Male</GenderLabel>
            <GenderInput type="radio" id='woman' value="woman" name='gender' />
            <GenderLabel htmlFor='woman'>Woman</GenderLabel>
            <GenderInput type="radio" id='other' value="other" name='gender' />
            <GenderLabel htmlFor='other'>Other</GenderLabel>
            </UserGender>
          </UserFormItem>
          <UserFormItem>
            <Label>Active:</Label>
            <UserSelect name="active" id="active">
              <SelectOption value="yes">Yes</SelectOption>
              <SelectOption value="no">No</SelectOption>
            </UserSelect>
          </UserFormItem>
          <Button>Create</Button>
        </UserForm>
    </Container>
  )
}

export default NewUser