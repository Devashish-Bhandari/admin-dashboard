import React from 'react'
import {PieChart, ChartsHeader} from '../../components'

const Pie = () => {
  return (
    <div className='m-4 md:md-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Chart' title='Pie' />
      <div className='w-full'>
        <PieChart />
      </div>
    </div>
  )
}

export default Pie;