import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Chart } from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import { WidgetLarge } from '../components/WidgetLarge'
import { WidgetSmall } from '../components/WidgetSmall'
import {userData} from "../data"
import { userRequest } from '../redux/requestMethods'

const Container = styled.div`
    flex: 4;
`
const HomeWidget = styled.div`
  display: flex;
  margin: 20px;
`

const Home = () => {

  const [userStats, setUserStats] = useState([]) 

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )

  useEffect(()=> {
    const getStats = async () => {
      try {
        const res = await userRequest.get(`/carts?sort=desc`)
        res.data.map((item) => 
        setUserStats(prev => [
        ...prev,
        {name:MONTHS[item.id - 1], "Active User": item.id}
          ])
        )
      } catch (err) {

      }
    }
      getStats()
    },[MONTHS])
 


  return (
    <Container>
        <FeaturedInfo />
        <Chart data={userStats} title="User Analysis" grid dataKey="Active User" />
        <HomeWidget>
          <WidgetSmall />
          <WidgetLarge />
        </HomeWidget>
    </Container>
  )
}

export default Home