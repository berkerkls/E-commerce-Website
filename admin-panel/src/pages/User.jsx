import React from 'react'
import styled from 'styled-components'
import * as IoIcons from "react-icons/io"
import { Link } from 'react-router-dom'


const Container = styled.div`
    flex: 4;
    margin: 5px;
    padding: 5px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const EditUser = styled.h2``
const Button = styled.button`
    width: 80px;
    padding: 5px;
    border: none;
    background-color: darkblue;
    color: #fff;
    border-radius:5px;
    cursor: pointer;
    font-size: 15px;
`

const UserContainer = styled.div`
    display: flex;
`
const UserShow = styled.div`
    flex: 1;
    padding: 25px;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    margin-top: 20px;
`
const UserUpdate = styled.div`
    flex:2;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    margin-top: 20px;
`

const UserShowTop = styled.div`
    display: flex;
    align-items: center;

`

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const UserShowTopWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const ShowTopUsername = styled.span`
    font-weight: 800;
`
const ShowTopTitle = styled.span`
    font-weight: 100;
`
const UserShowBottom = styled.div`
    margin-top: 20px;
`
const UserShowTitle = styled.span`
    font-size: 14px;
    font-weight: 600;

`
const UserShowInfoTitle = styled.span`
    margin-left: 10px;
`
const UserShowInfo = styled.div`
    display:flex;
    align-items: center;
    margin: 20px 0px;
    color: #333;
`

const UpdateTitle = styled.h3`
    font-size: 24px;
    margin-left: 20px;
    margin-top: 10px;
`

const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 20px;
`

const UpdateLeft = styled.div`
`
const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
`
const Label = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
`
const Input = styled.input`
    border:0;
    background-color: transparent;
    padding: 8px 12px;
    border-bottom: 2px solid #f4f4f4;
    width: 100%;
`


const UpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const UpdateUpload = styled.div`
    display: flex;
    align-items: center;
`
const ImageUpload = styled.img`
    width: 100px;
    height: 100px;
    border-radius:10px;
    object-fit: cover;
    margin-right:20px;
`
const LabelFile = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
    `
const InputFile = styled.input``

const UpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    background-color: #ffaa00;
    margin-bottom: 10px;
    margin-right: 10px;
`




const User = () => {
  return (
    <Container>
        <TitleContainer>
            <EditUser>Edit User</EditUser>
            <Link to="/newUser">
            <Button>Create</Button>
            </Link>
        </TitleContainer>
        <UserContainer>
            <UserShow>
                <UserShowTop>
                    <Image src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762080.jpg&fm=jpg" />
                    <UserShowTopWrap>
                        <ShowTopUsername>Eva Becker</ShowTopUsername>
                        <ShowTopTitle>Frontend Developer</ShowTopTitle>
                    </UserShowTopWrap>
                </UserShowTop>
                <UserShowBottom>
                    <UserShowTitle>Account Details</UserShowTitle>
                    <UserShowInfo>
                        <IoIcons.IoMdPerson style={{fontSize: "16px"}}/>
                        <UserShowInfoTitle>evabecker16</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                        <IoIcons.IoMdCalendar style={{fontSize: "16px"}}/>
                        <UserShowInfoTitle>12.12.1997</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                        <IoIcons.IoIosPhonePortrait style={{fontSize: "16px"}}/>
                        <UserShowInfoTitle>+11234345</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                        <IoIcons.IoMdMail style={{fontSize: "16px"}}/>
                        <UserShowInfoTitle>eva@gmail.com</UserShowInfoTitle>
                    </UserShowInfo>
                </UserShowBottom>
            </UserShow>
            <UserUpdate>
                <UpdateTitle>Edit</UpdateTitle>
                <UpdateForm>
                    <UpdateLeft>
                        <UpdateItem>
                            <Label>Username</Label>
                            <Input type="text" placeholder="evabecker16" />
                        </UpdateItem>
                        <UpdateItem>
                            <Label>Full Name</Label>
                            <Input type="text" placeholder="Fullname" />
                        </UpdateItem>
                        <UpdateItem>
                            <Label>Phone</Label>
                            <Input type="text" placeholder="Phone" />
                        </UpdateItem>
                        <UpdateItem>
                            <Label>Email</Label>
                            <Input type="text" placeholder="Email" />
                        </UpdateItem>
                    </UpdateLeft>
                    <UpdateRight>
                        <UpdateUpload>
                            <ImageUpload src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762080.jpg&fm=jpg"/>
                            <LabelFile htmlFor='file'><IoIcons.IoMdCloudUpload size={25} style={{cursor:"pointer"}}/></LabelFile>
                            <InputFile type="file" id="file" style={{display:"none"}} />
                        </UpdateUpload>
                        <UpdateButton>Update</UpdateButton>
                    </UpdateRight>
                </UpdateForm>
            </UserUpdate>
        </UserContainer>
    </Container>
  )
}

export default User