import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mt-16'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-tight mb-6'>{title}</p>
    </div>
  )
}

export default Header