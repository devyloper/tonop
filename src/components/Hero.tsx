import React from 'react'
import Total from './Total'
import Results from './Results'
import Chart from './Chart'

type Props = {}

function Hero({}: Props) {
  var target = 92
  return (
    <div className='h-[100%] w-[450px] m-2 p-2 border border-md border-gray-300 flex flex-col justify-center items-center rounded-md'>
        
        
        <div className='flex items-center justify-center '><Total /></div>
        <div className='flex items-center justify-center '><h1>Target: {target}</h1></div>
        <div className='flex items-center justify-center '>
          <Chart />
        </div>
        <h1 className='uppercase font-semibold inline-block mx-2 px-4'>Madhya Pradesh</h1>
        <div>
          <Results />
        </div>
    </div>
  )
}

export default Hero