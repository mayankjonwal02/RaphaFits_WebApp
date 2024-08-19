import React from 'react'
import Logo from '../app/assets/Logo.png'

const Navbar = () => {
  return (
    <div className='text-black w-full h-fit flex flex-row items-center justify-between '>
      <div>
        <img src={Logo.src} alt="logo" className=' h-[60px]' />
      </div>
      <div className='flex flex-row items-center'>

      <div className='flex flex-row justify-between items-center '>

      <div className='text-customtext p-7 cursor-pointer'>About us</div>
      <div className='text-customtext p-7 cursor-pointer'>Classes</div>
      <div className='text-customtext p-7 cursor-pointer'>FAQ</div>
      <div className='text-customtext p-7 cursor-pointer'>Contact us</div>
      <div className='font-bold text-xl text-black p-3 border border-[#E2F163] border-2 rounded-[80px] h-fit mx-7 cursor-pointer'>Book Class</div>
      </div>
      </div>

    </div>
  )
}

export default Navbar
