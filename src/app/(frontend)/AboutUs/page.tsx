import React from 'react'
import img1 from "../../assets/About_img_1.jpg"
import img2 from "../../assets/About_img_2.jpg"
import img3 from "../../assets/About_img_3.jpg"
import img4 from "../../assets/About_img_4.jpg"
import img5 from "../../assets/About_img_5.jpg"
import img6 from "../../assets/About_img_6.jpg"

const AboutUs = () => {
  return (
    <div>
      <div className='w-screen relative'>
        <img src={img1.src} alt="img1" className="w-screen" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:-translate-y-1/2 text-white text-xl lg:text-5xl text-center font-extrabold">Start with us the body and</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[50%]  md:translate-y-[80%] lg:translate-y-[60%] text-white text-xl lg:text-5xl text-center font-extrabold">mind clensing</div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[18%] md:translate-y-[20%] lg:translate-y-[25%] text-white text-2xl lg:text-5xl text-center font-extrabold bg-white flex flex-row gap-4 p-7 w-3/4 lg:w-1/2 justify-center '>
          <img src={img2.src} alt="img2" className="w-1/3 " />
          <img src={img3.src} alt="img3" className="w-2/3 " />
        </div>
      </div>

      <div className='w-full h-fit flex flex-col mt-[60%] lg:mt-[30%] justify-start'>

        <div className="text-5xl font-semibold text-black mb-[1px] px-[40px]">About Us</div>
        <div className='w-full h-fit flex flex-col lg:flex-row '>
          <div className="-full lg:w-1/2 p-[40px]  flex flex-col justify-center items-center">

            <div className='text-[#BCBCBC] mb-[30px]'>The Pilates and Altitude Training studio started in January 2011, is the first studio in the world to offer Pilates and a simulated altitude training room under one roof. In a short span of time the studio gained popularity amongst people from various backgrounds. Catering to clients from all fields, the studio is popular amongst Bollywood celebrities, sports personalities, businessmen and women as well as and most importantly fitness enthusiasts. .</div>
            <div className='text-[#BCBCBC]'>Being extremely client oriented, the studio ensures everyone achieves his or her goals. All the workouts are customized to the needs of the clients. Once you are part of the studio family, you will constantly learn something new, be regularly challenged, and encouraged and pushed to achieve your goals. At the studio we believe there is no limit to how fit you can get, and hence no limit to the goals you achieve. There is always a new goal to achieve and new target to reach. Almost every workout is different making sure you never get bored and ensuring that your body has to constantly learn something new and exciting.</div>

          </div>
          <div className="w-full lg:w-1/2 h-full p-[40px] ">
            <img src={img4.src} alt="img4" className="w-full" />
          </div>

        </div>
      </div>

      <div className='w-full h-fit flex flex-col mt-[10%] justify-end  items-center lg:items-end'>

        <div className="text-3xl lg:text-5xl font-semibold text-black mb-[1px] px-[40px]">TEAM OF FITNESS</div>

        <div className='w-full h-fit flex flex-col lg:flex-row '>
          <div className="w-full lg:w-1/2 h-full p-[40px] ">
            <img src={img5.src} alt="img5" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 p-[40px]  flex flex-col justify-start items-center">

            <div className='text-[#BCBCBC] mb-[30px] mt-[20px]'>The studio has a dedicated team of fitness professionals and trainers who strive to achieve their client’s goals and ensure all the clients reach their maximum potential. The entire team is extremely dedicated and passionate about fitness. This sheer love for fitness makes them highly motivated, positive and enthusiastic, making sure each client achieves not only their fitness goals but goes beyond their capabilities, while ensuring an extremely enjoyable fitness journey.</div>
            <div className='text-[#BCBCBC]'> The studio ensures that there is a constant upgradation of services in line with the newest research in the fitness industry as well as ensuring the best quality in equipment and training.</div>

          </div>


        </div>
      </div>


      <div className='w-full h-fit flex flex-col mt-[20%] bg-[#7E6D5B]'>
        <img src={img6.src} alt="img6" className="w-full" />
        <div className='flex justify-center items-center flex-col gap-9 py-12'>
          <div className='w-full h-fit flex flex-col lg:flex-row justify-around items-center gap-4 '>
            <div className='flex flex-col justify-center items-center lg:items-start'>
              <div className="text-[#A1F65E]">VALUES</div>
              <div className='text-white text-2xl font-semibold'>Our core work values</div>
            </div>
            <div className='flex flex-col justify-center items-center '>                 
              <div className='font-semibold text-md text-black  border p-2 border-[#E2F163] border-2 rounded-[80px] h-fit cursor-pointer bg-[#E2F163] '>Book A Trial</div>
            </div>
          </div>
          <div className='w-full lg:w-[75%] h-fit flex flex-col lg:flex-row justify-around items-center '>
            <div className='bg-[#2C323A]  text-white w-[200px] p-[20px]'>
                <div className='font-bold mb-2'>Certified Trainer</div>
                <div className='text-[#BCBCBC] text-sm'>Bring to the table win survival strategies ensure proactive new domination.</div>
            </div>
            <div className='bg-[#2C323A]  text-white w-[200px] p-[20px]'>
                <div className='font-bold mb-2'>Nutrition & diet</div>
                <div className='text-[#BCBCBC] text-sm'>Bring to the table win survival strategies ensure proactive new domination.</div>
            </div>
            <div className='bg-[#2C323A]  text-white w-[200px] p-[20px]'>
                <div className='font-bold mb-2'>Years of experience</div>
                <div className='text-[#BCBCBC] text-sm'>Bring to the table win survival strategies ensure proactive new domination.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
