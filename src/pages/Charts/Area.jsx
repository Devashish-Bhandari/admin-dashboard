import React from 'react'
import {AreaChart} from '../../components'
import { ChartsHeader  } from '../../components'


const Area = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Chart' title="Area Chart" />  
      <div className='w-full'>
        <AreaChart />
      </div>    
    </div>
  )
}

export default Area