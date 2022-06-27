import React from 'react'
import { LineChart } from '../../components'
import { ChartsHeader  } from '../../components'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Chart' title="Line Chart" />  
      <div className='w-full'>
      <LineChart />
      </div>


    </div>
  )
}

export default Line