import React from 'react'
import logo from '../assets/logo.png'
import { format } from 'date-fns'

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
        <img src={logo} alt="" className='w-[400]'/>
        <p className='text-accent'>The Bangladesi News</p>
        <p className='text-semibold text-accent'>{format(new Date(), "EEEE , MMMM dd, yyyy")}</p>
    </div>
  )
}

export default Header