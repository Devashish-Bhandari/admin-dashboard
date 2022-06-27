import React from 'react'
import { BarChart } from '../../components'
import { ChartsHeader  } from '../../components'

const Bar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Chart' title="Bar Graph" />  
      <div className='w-full'>
      <BarChart />
      </div>


    </div>
  )
}

export default Bar