import React from 'react'
import logo from "../assets/Taycanblack.jpg"


function Logo() {
  return (
    <h1 className='flex items-center justify-center '>
      <img src={logo} alt="" width={200} className='mb-3 md:w-72 md:mb-0'/>
    </h1>
  )
}

export default Logo
