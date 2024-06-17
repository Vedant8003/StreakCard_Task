import React from 'react'
import Header from '../Header/Header'
import Sentiment from '../Boxes/Sentiment'
import SectorPerformance from '../Boxes/SectorPerformance'
import Chart from '../Boxes/Chart'
import './Home.css'
const Home = () => {
  return (
    <div className='mainouterBox w-full justify-center p-[25px] flex flex-col gap-[45px] max-md:w-[unset] max-sm:w-[113%]'>
        <Header/>
        <div className='flex gap-[25px] flex-wrap justify-center items-center'>
            <Sentiment/>
            <SectorPerformance/>
            <Chart/>
        </div>
    </div>
  )
}

export default Home
