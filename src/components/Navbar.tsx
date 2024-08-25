"use client"
import React from 'react'
import Logo from '../app/assets/Logo.png'
import {useRouter} from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  return (
    <div className='text-black w-full h-fit flex flex-row items-center justify-between my-4  '>
      <div onClick={() => router.push('/')}>
        <img src={Logo.src} alt="logo" className=' h-[70px]' />
      </div>
      <div className='flex flex-row items-center'>

      <div className='flex flex-row justify-between items-center '>

      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
      onClick={() => router.push('/AboutUs')}>About us</div>
      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
      onClick={() => router.push('/Classes')}>Classes</div>
      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
      onClick={() => router.push('/Faqs')}>FAQ</div>
      <div className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
      onClick={() => router.push('/ContactUs')}>Contact us</div>
      <div className='font-bold text-xl text-black p-3 border border-[#E2F163] border-2 rounded-[80px] h-fit mx-7 cursor-pointer hover:bg-[#E2F163]'>Book Class</div>
      </div>
      </div>

    </div>
  )
}

export default Navbar
