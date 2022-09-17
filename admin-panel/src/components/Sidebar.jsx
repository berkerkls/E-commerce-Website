import React from 'react'
import styled from 'styled-components'
import * as FaIcons from "react-icons/fa"
import * as FiIcons from "react-icons/fi"
import * as IoIcons from "react-icons/io"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"


const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: #f4f4f4;
    position: sticky;
    top: 50;
`
const Wraper = styled.div`
    padding: 20px;
    color: #444;

`
const Menu = styled.div`
    margin-bottom: 10px;
`
const Title = styled.h3`
    font-size: 18px;
    color: #555;
`
const DashboardList = styled.ul`
    list-style: none;
    padding: 10px;
`
const DashboardListItem = styled.li`
    padding: 5px;
    margin-top:10px;
    cursor: pointer;
    display: flex;
    border-radius: 10px;
    background-color: #${props => props.type === "active" ? "f7d694" : "f4f4f4"};

    &:hover {
        background-color: #f7d694;
    }
`


const Sidebar = () => {
  return (
    <Container>
        <Wraper>
            <Menu>
                <Title>Dashboard</Title>
                <DashboardList>
                    <DashboardListItem type="active">
                        <FaIcons.FaHome size={20} style={{marginRight:"8px"}}/>Home
                    </DashboardListItem>
                    <DashboardListItem>
                        <IoIcons.IoMdAnalytics size={20} style={{marginRight:"8px"}}/> Analytics
                    </DashboardListItem>
                    <DashboardListItem>
                        <IoIcons.IoMdTrendingUp size={20} style={{marginRight:"8px"}}/> Sales
                    </DashboardListItem>
                </DashboardList>
            </Menu>
            <Menu>
                <Title>Quick Menu</Title>
                <DashboardList>
                    <DashboardListItem type="non-active">
                        <FiIcons.FiUser size={20} style={{marginRight:"8px"}}/>User
                    </DashboardListItem>
                    <DashboardListItem>
                        <AiIcons.AiOutlineShop size={20} style={{marginRight:"8px"}}/> Product
                    </DashboardListItem>
                    <DashboardListItem>
                        <FaIcons.FaMoneyCheck size={20} style={{marginRight:"8px"}}/> Transaction
                    </DashboardListItem>
                    <DashboardListItem>
                        <IoIcons.IoIosStats size={20} style={{marginRight:"8px"}}/> Reports
                    </DashboardListItem>
                </DashboardList>
            </Menu>
            <Menu>
                <Title>Notifications</Title>
                <DashboardList>
                    <DashboardListItem type="non-active">
                        <FiIcons.FiMail size={20} style={{marginRight:"8px"}}/>Mail
                    </DashboardListItem>
                    <DashboardListItem>
                        <MdIcons.MdOutlineDynamicFeed size={20} style={{marginRight:"8px"}}/> Feedback
                    </DashboardListItem>
                    <DashboardListItem>
                        <AiIcons.AiOutlineMessage size={20} style={{marginRight:"8px"}}/> Message
                    </DashboardListItem>
                </DashboardList>
            </Menu>
            <Menu>
                <Title>Staff</Title>
                <DashboardList>
                    <DashboardListItem type="non-active">
                        <IoIcons.IoIosBriefcase size={20} style={{marginRight:"8px"}}/>Manage
                    </DashboardListItem>
                    <DashboardListItem>
                        <IoIcons.IoMdAnalytics size={20} style={{marginRight:"8px"}}/> Analytics
                    </DashboardListItem>
                    <DashboardListItem>
                        <MdIcons.MdOutlineReportGmailerrorred size={20} style={{marginRight:"8px"}}/> Reports
                    </DashboardListItem>
                </DashboardList>
            </Menu>
        </Wraper>
    </Container>
  )
}

export default Sidebar