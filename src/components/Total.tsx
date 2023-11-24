import React from 'react'

type Props = {}

function Total({}: Props) {
    var totalSeats = 182;
    var seatsCounted = 30;
  return (
    <div>
        <h1 className='bg-gray-200 inline-flex px-3 py-2 rounded-lg'>
            {seatsCounted}/{totalSeats}
        </h1>
    </div>
  )
}

export default Total
