import React from 'react'
import styled from 'styled-components'
import { Chart } from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import {userData} from "../data"

const Container = styled.div`
    flex: 4;
`

const Home = () => {
  return (
    <Container>
        <FeaturedInfo />
        <Chart data={userData} title="User Analysis" grid dataKey="Active User" />
    </Container>
  )
}

export default Home