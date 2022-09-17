import React from 'react'
import styled from 'styled-components'
import * as MdIcons from "react-icons/md"



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
  return (
    <Container>
        <Title>New Join Member</Title>
        <WidgetList>
            <WidgetListItem>
                <Image src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg" alt="image"/>
                <WidgetSmallUser>
                    <UserName>JohnDoe</UserName>
                    <UserTitle>Frontend Developer</UserTitle>
                </WidgetSmallUser>
                <Button>
                    <MdIcons.MdVisibility style={{marginRight: "5px", fontSize: "16px"}} /> Display
                </Button>
            </WidgetListItem>
            <WidgetListItem>
                <Image src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg" alt="image"/>
                <WidgetSmallUser>
                    <UserName>JohnDoe</UserName>
                    <UserTitle>Frontend Developer</UserTitle>
                </WidgetSmallUser>
                <Button>
                    <MdIcons.MdVisibility style={{marginRight: "5px", fontSize: "16px"}} /> Display
                </Button>
            </WidgetListItem>
            <WidgetListItem>
                <Image src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg" alt="image"/>
                <WidgetSmallUser>
                    <UserName>JohnDoe</UserName>
                    <UserTitle>Frontend Developer</UserTitle>
                </WidgetSmallUser>
                <Button>
                    <MdIcons.MdVisibility style={{marginRight: "5px", fontSize: "16px"}} /> Display
                </Button>
            </WidgetListItem>
            <WidgetListItem>
                <Image src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg" alt="image"/>
                <WidgetSmallUser>
                    <UserName>JohnDoe</UserName>
                    <UserTitle>Frontend Developer</UserTitle>
                </WidgetSmallUser>
                <Button>
                    <MdIcons.MdVisibility style={{marginRight: "5px", fontSize: "16px"}} /> Display
                </Button>
            </WidgetListItem>
            <WidgetListItem>
                <Image src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg" alt="image"/>
                <WidgetSmallUser>
                    <UserName>JohnDoe</UserName>
                    <UserTitle>Frontend Developer</UserTitle>
                </WidgetSmallUser>
                <Button>
                    <MdIcons.MdVisibility style={{marginRight: "5px", fontSize: "16px"}} /> Display
                </Button>
            </WidgetListItem>
        </WidgetList>
    </Container>
  )
}
