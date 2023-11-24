"use client"
import Chart from '@/components/Chart';
import Hero from '@/components/Hero'
import Results from '@/components/Results';
import Image from 'next/image'
import { Result } from 'postcss';
import Frame from 'react-frame-component';


export default function Home() {
  
  return (
    <main className=" flex bg-[#fafafa]">
      
      
        <Hero />
        <div className='flex flex-col'>
          <Results />
          <Results />
        </div>
        <Hero />
      
    </main>
  )
}
