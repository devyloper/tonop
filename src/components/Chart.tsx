'use client'
import React from 'react'
import electiondata from '../app/electiondata'
import { PieChart } from '@mui/x-charts/PieChart';
type Props = {}
const data = electiondata.map((item) => {
  return {
    id: item.id,
    name: item.name,
    value: item.seats,
    color: item.color
  }
})
function Chart({}: Props) {
  return (
    <PieChart
  series={[
    {
      data,  
      innerRadius: 0,
      outerRadius: 150,
      paddingAngle: 0,
      cornerRadius: 0,
      startAngle: -90,
      endAngle: 90,
      cx: 195,
      cy: 150,
    },
  ]}
  width={400}
  height={200}
/>
  )
}

export default Chart





