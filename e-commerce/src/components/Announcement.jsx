import React from 'react'
import styled from 'styled-components'
import { devices } from '../responsive'


const Container = styled.div`
    background-color: #FFAA00;
    height:35px;
    color: #fff;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:18px;
    font-weight: 500;
    @media ${devices.mobileM},${devices.mobileL},${devices.tablet}{
      text-align: center;
      padding: 8px;
  }
`
const Announcement = () => {
  return (
    <Container>Until end of this month, Free Shipping for Orders over 50$</Container>
  )
}

export default Announcement