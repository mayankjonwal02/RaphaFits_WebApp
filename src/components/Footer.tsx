import React from 'react'
import instafooter from "../app/assets/InstaFooter.jpg"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input"
const Footer = () => {
  return (
    <div className="w-full h-fit mt-[50px] md:mt-[200px]  bg-[#1C2229]">
              <div><img src={instafooter.src} alt="instafooter" className="w-screen" /></div> 
              <div className="flex flex-col lg:flex-row w-full p-[40px] justify-around items-center md:items-start">
                <div className="text-white w-full lg:w-1/4">
                 <div className="text-xl font-bold">Rapha-fit Pilates</div>
                 <div>It is a long established fact that a reader will be distracted by the readable.</div>
                 <div className="bg-[#485059] p-[20px] mt-[30px]">
                    <div className="text-[#A1F65E]">Call:</div>
                    <div className="text-[#BCBCBC]">9625412345</div>
                    <div className="text-[#BCBCBC]">9039201234</div>

                    <div className="text-[#A1F65E] mt-[20px]">Mail:</div>
                    <div className="text-[#BCBCBC]">contact@gmail.com</div>
                    
                 </div>
                </div>

                <div className="text-white w-full mt-5 lg:mt-0 lg:w-1/4 ">
                 <div className="text-xl font-bold text-center ">Menu</div>
                 
                 <div className=" flex flex-col justify-center items-center mt-[30px] ">
                   
                    <div className="text-[#BCBCBC]">Home</div>
                    <div className="text-[#BCBCBC]">About Us</div>

                    
                    <div className="text-[#BCBCBC]">Contact Us</div>
                    <div className="text-[#BCBCBC]">Classes</div>
                    <div className="text-[#BCBCBC]">Faq's</div>
                    
                 </div>
                </div>
              
                <div className="text-white w-full mt-6 lg:mt-0 lg:w-1/4 flex flex-col justify-center items-center ">
                 <div className="text-xl font-bold text-center">Newsletter</div>
                 <Input placeholder="Enter your email" className=" border border-1 border-black placeholder:text-[#BCBCBC] bg-[#485059] mt-[20px]" />

                 <div className="  mt-[30px] justify-center items-center lg:justify-start lg:items-start flex flex-col w-full ">
                 <div className='font-semibold  text-md text-white  border p-2 border-[#E2F163] border-2 rounded-[80px] h-fit cursor-pointer hover:bg-[#E2F163] hover:text-black'>Subscribe</div>
                 <div className='font-semibold text-md text-black  border p-2 border-[#E2F163] border-2 rounded-[80px] h-fit cursor-pointer bg-[#E2F163] mt-5'>Book A Trial Now</div>


                    
                 </div>
                </div>


                
              </div>
        </div>
  )
}

export default Footer
