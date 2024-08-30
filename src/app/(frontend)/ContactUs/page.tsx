import React from 'react'
import img1 from "../../assets/ContactUs_img_1.jpg"
import img2 from "../../assets/ContactUs_img_2.jpg"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ContactUs = () => {
  return (
    <div>
      <div className='relative w-full'>
        <img src={img1.src} alt="img1" className="w-full" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-5xl font-extrabold'>Contact Us</div>
      </div>


      <div className='w-full flex flex-col lg:flex-row justify-evenly items-center mt-[150px] mt-[50px]'>

        <div className='w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start'>
          <div className='text-[#524FF5] font-mono  text-2xl'>WELCOME TO STRENGTHY</div>
          <div className='text-3xl font-bold mb-6'>Get In Touch With Us</div>
          <div className='w-5/6'>If you have any feedback or questions about our clubs, our website or our services in general, please contact us by filling out the form.</div>
          <div className='text-xl font-semibold mb-3 mt-7'>Open Hours</div>
          <div className='w-1/2 h-[1px] bg-[#D3D3D3] mb-3'></div>

          <div className='mb-5'><b>Mon-Fri:</b>08:00 AM To 09:00 PM</div>
          <div className='mb-5'><b>Sat:</b>09:00 AM To 06:00 PM</div>
          <div className='mb-5'><b>Sun:</b>09:00 AM To 02:00 PM</div>


        </div>

        <div className='w-full lg:w-1/3 flex flex-col justify-center items-start bg-[#F9F9F9] p-[50px]'>
          <div className='text-3xl font-bold '>Send Us a Message</div>
          <div className='text-[#524FF5] mb-7  text-md'>Your email address will not be published *</div>
          <Input className='w-full mb-5' type="text" placeholder="Your Full Name" />
          <Input className='w-full mb-5' type="email" placeholder="Email Address" />
          <Input className='w-full mb-5' type="text" placeholder="Subject" />
          <Input className='w-full mb-5 min-h-[100px] overflow-auto resize-y' type="text" placeholder="Message" />

          <Button className='w-fit mb-5 bg-black text-white'>Send Now</Button>
        </div>
      </div>


      <div className='relative w-full'>
        <img src={img2.src} alt="img2" className="w-full" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black bg-[#7E6D5B] flex flex-row justify-center items-start w-5/6 lg:w-3/5 h-[150px] lg:h-[250px] p-6 gap-3'>
          <div className='w-1/3 flex flex-col justify-center items-center gap-3 lg:gap-5 '>
            <div className='text-md lg:text-2xl font-semibold text-white'>Phone</div>
            <div className='hidden lg:flex w-1/2 h-[1px] bg-black'></div>
            <div className='text-[10px] lg:text-md text-center'>Capitalized on hanging fruit to identify with additional</div>
            <div className='font-bold text-[8px] lg:text-md'>+91234567890</div>
          </div>

          <div className='w-[1px] bg-black h-full'></div>

          <div className='w-1/3 flex flex-col justify-center items-center gap-3 lg:gap-5 '>
            <div className='text-md lg:text-2xl font-semibold text-white'>Mail</div>
            <div className='hidden lg:flex w-1/2 h-[1px] bg-black'></div>
            <div className='text-[10px] lg:text-md text-center'>Capitalized on hanging fruit to identify with additional</div>
            <div className='font-bold text-[8px] lg:text-md'>hello@strengthy.com</div>
          </div>

          <div className='w-[1px] bg-black h-full' ></div>

          <div className='w-1/3 flex flex-col justify-center items-center gap-3 lg:gap-5 '>
            <div className='text-md lg:text-2xl font-semibold text-white'>Location</div>
            <div className='hidden lg:flex w-1/2 h-[1px] bg-black'></div>
            <div className='text-[10px] lg:text-md text-center'>Capitalized on hanging fruit to identify with additional</div>
            <div className='font-bold text-[8px] lg:text-md text-center'>123 King Dr.Oswego6</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactUs
