import styled from 'styled-components'
import React from 'react';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -webkit-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    -moz-box-shadow: 6px 3px 10px 1px rgba(247,186,25,0.75);
    width: 1000px;
    height: 300px;
`

const ChartTitle = styled.div`
    font-weight: bold;
    margin-bottom: 20px;
`


export const Chart = ({title, data, dataKey, grid}) => {
   

  return (
    <Container>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4 / 1} >
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#ffaa00'/>
                <Line type="monotone" dataKey={dataKey} stroke='#ffaa00' />
                <Tooltip />
                {grid && <CartesianGrid stroke='#f4f4f4'/>}
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}
