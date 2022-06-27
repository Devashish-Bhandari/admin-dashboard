import React from 'react'

const ChartsHeader = ({category, title}) => {
  return (
    <div className='mt-16'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl dark:text-gray-200 font-extrabold tracking-tight mb-6'>{title}</p>
    </div>
  )
}

export default ChartsHeader