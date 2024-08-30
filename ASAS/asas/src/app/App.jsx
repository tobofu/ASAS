"use client"
import React from 'react'
import SearchBar from '@/components/search-bar'
import HeroSection from '@/components/hero-section'
import CardItem from '@/components/card/card'

const App = () => {
  return (
    <div className='flex items-center justify-center h-[50vh] gap-5'>
      
      <CardItem profName={"Ange Delgado"} rating={"5/5"} by={"by Johnny Abesamis"} review={"Sir is nice! 5/5"}/>
      <CardItem profName={"Jonathan Delos Santos"} rating={"1/5"} by={"by Johnny Abesamis"} review={"Doesn't even go to class."}/>
      <CardItem profName={"Kendrick West"} rating={"3/5"} by={"by Johnny Abesamis"} review={"easy B+"}/>
    </div>
  )
}

export default App