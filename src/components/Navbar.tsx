"use client"
import React from 'react'
import Logo from '../app/assets/Logo.png'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter()
  return (
    <div className='text-black w-full h-fit flex flex-row items-center justify-between  '>
      <div onClick={() => router.push('/')}>
        <img src={Logo.src} alt="logo" className='h-[30px] md:h-[70px]' />
      </div>
      <div className='hidden lg:flex flex-row items-center '>

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


      <DropdownMenu >
        <DropdownMenuTrigger className='lg:hidden'>
          <div className='flex lg:hidden pe-5 lg:pe-0'>
            <FaBars />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
            onClick={() => router.push('/AboutUs')}
          >
            About us
          </DropdownMenuItem>
          <DropdownMenuItem
            className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
            onClick={() => router.push('/Classes')}
          >
            Classes
          </DropdownMenuItem>
          <DropdownMenuItem
            className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
            onClick={() => router.push('/Faqs')}
          >
            FAQ
          </DropdownMenuItem>
          <DropdownMenuItem
            className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
            onClick={() => router.push('/ContactUs')}
          >
            Contact us
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className='text-customtext p-7 cursor-pointer font-semibold hover:underline'
            onClick={() => router.push('/BookClass')}
          >
            Book Class
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>



    </div>
  )
}

export default Navbar
