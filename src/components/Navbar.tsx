import React from 'react'
import Logo from '../app/assets/Logo.png'

const Navbar = () => {
  return (
    <div className='text-black w-full h-fit flex flex-row items-center justify-between my-4  '>
      <div>
        <img src={Logo.src} alt="logo" className=' h-[70px]' />
      </div>
      <div className='flex flex-row items-center'>

      <div className='flex flex-row justify-between items-center '>

      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'>About us</div>
      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'>Classes</div>
      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'>FAQ</div>
      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'>Contact us</div>
      <div className='font-bold text-xl text-black p-3 border border-[#E2F163] border-2 rounded-[80px] h-fit mx-7 cursor-pointer hover:bg-[#E2F163]'>Book Class</div>
      </div>
      </div>

    </div>
  )
}

export default Navbar
