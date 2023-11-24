'use client'
import React from 'react'
import Hero from './Hero'

type Props = {}

function Frame({}: Props) {
  return (
    <div className="frame">
      <Hero />
    </div>
  )
}

export default Frame