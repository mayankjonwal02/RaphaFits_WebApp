import Image from "next/image";
import Navbar from "../../../components/Navbar"
import img1 from "../../assets/Homepage_img_1.jpg"
import img2 from "../../assets/Homepage_img_2.jpg"
import img3 from "../../assets/Homepage_img_3.jpg"
import img4 from "../../assets/Homepage_img_4.jpg"
import img5 from "../../assets/Homepage_img_5.jpg"
import img6 from "../../assets/Homepage_img_6.jpg"
import img7 from "../../assets/Homepage_img_7.jpg"
import img8 from "../../assets/Homepage_img_8.jpg"
import img9 from "../../assets/Homepage_img_9.jpg"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-screen">
      <div className=" w-full">
        <img src={img1.src} alt="img1" className="w-full" />
      </div>
      <div className="text-[5vh] lg:text-[7vh] font-extrabold text-customtext mt-[40px]  drop-shadow-xl">
        Keep Your Body
      </div>
      <div className="text-[5vh] lg:text-[7vh] font-extrabold text-customtext mt-[-20px] drop-shadow-xl">
        Fit & Strong
      </div>
      <div className="flex flex-row items-center my-3">
        <div className='font-bold text-lg md:text-xl text-black py-1 md:py-3 px-4 md:px-6 border border-[#E2F163] border-2 rounded-[50px] h-fit mx-7 cursor-pointer bg-[#E2F163] text-customtext'>Book Class</div>
        <div className='font-bold text-lg md:text-xl text-black py-1 md:py-3 px-4 md:px-6 border border-customtext border-4 rounded-[50px] h-fit mx-7 cursor-pointer bg-white text-customtext'>Book Class</div>

      </div>
      <div className="flex flex-col lg:flex-row w-full mt-[50px]">
        <div className="flex flex-col -full lg:w-1/2 p-[40px]">
          <div className="text-[20px]  text-[#524FF5] font-mono">WELCOME</div>
          <div className="text-[30px] font-bold text-black ">To Rapha-Fit Pilates</div>
          <div className="text-[17px] max-w-[697px] text-[#6A6A6A] mt-[20px]">Discover the power of Pilates, a holistic fitness practice that focuses on core strength, flexibility, and mind-body connection. Pilates can help improve posture, increase energy, and enhance overall well-being</div>
          <div className="bg-[#958574] text-white p-[50px] mt-[70px] gap-[36.73px] flex flex-col">
            <div className="text-2xl font-bold">Story</div>
            <div className="text-md">The Rapha-fit Studio opened its doors in January 2017, is the first studio in the world to offer Pilates and a simulated altitude training room under one roof. In a short span of time the studio gained popularity amongst people from various backgrounds.</div>
            <div><img src={img2.src} alt="img2" className="w-full" /></div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 p-[40px] gap-[10%]">
          <div className="relative h-[60%]">
            <img src={img3.src} alt="img3" className="h-full w-full object-cover" />
            <div className="absolute -inset-10 flex flex-col justify-center md:justify-end items-start p-[60px] lg:p-[50px] gap-4">

              <div className=" flex items-end justify-start text-white text-2xl font-bold">
                PILATES
              </div>
              <div className=" flex items-end justify-start text-white text-md w-[100%]">Pilates was started by a man, Joseph Pilates, for men at war and then it was transformed for ballet and contemporary dancers. So simply put Pilates will help you get the strength and agility of a warrior and also a lean, long, flexible body of a ballet dancer!</div>

            </div>
          </div>
          <div className="h-[30%] bg-[#7E6D5B] text-white p-[50px]  gap-[20px] flex flex-col">
            <div className="text-2xl font-bold">Our studio</div>
            <div className="text-md">The Pilates Studio is a fully equipped studio with the V2 max Reformers, Cadillac, Stability Chair as well as the ladder barrel. Book a trial now</div>

          </div>
        </div>
      </div>

      <div className="flex flex-row w-full mt-[100px]">
        <div className="hidden lg:flex flex-col w-1/2 p-[40px] gap-[10%]">
          <div className="w-full flex justify-center items-center">


            <div
              className="relative h-[600px] w-[600px] rounded-full flex justify-center items-center"
              style={{
                backgroundImage: 'linear-gradient(#7E6B5B 0%, #E1D3C7 100%)',
              }}
            >
              <div className="">
                <img
                  src={img5.src}
                  alt="img5"
                  className="absolute top-1/2 transform -translate-x-1/2 -translate-y-[150px] w-2/3"
                />
              </div>
              <div className="absolute bottom-[-190px] right-[150px] bg-white text-customtext py-[20px] px-[40px] rounded-3xl font-bold text-xl cursor-pointer">
                Book A Trial Now
              </div>
            </div>




          </div>

        </div>


        <div className="flex flex-col w-full lg:w-1/2 p-[40px]">
          <div className="text-[30px]  text-[#524FF5] font-mono">ABOUT</div>
          <div className="text-[40px] font-bold text-black ">Why Join Our Studio</div>
          <div className="text-[15px] max-w-[697px] text-[#6A6A6A] mt-[20px]">The studio ensures that there is a constant upgradation of services in line with the newest research in the fitness industry as well as ensuring the best quality in equipment and training.</div>
          <div className="bg-[#F0F0F0]  p-[30px] mt-[40px] gap-[20px] flex flex-col">
            <div className="text-3xl font-bold">Mission</div>
            <div className="text-[15px]  text-[#6A6A6A]">Our mission is to redefine fitness as a wellness journey of the mind, body, and spirit. We are committed to cultivating an inclusive, empowering environment that promotes overall wellness beyond the physical realm. we can support our members in achieving not only their physical fitness goals but also in nurturing their emotional and mental well-being.</div>

          </div>
          <div className="bg-[#F0F0F0] w-full p-[30px] mt-[70px] gap-[36.73px] flex flex-row justify-center items-center">
            <div className="w-[40%] bg-red-300"><img src={img4.src} alt="img4" className="w-full" /></div>
            <div className="w-[50%] flex flex-col gap-3">

              <div className="text-3xl font-bold">Vision</div>
              <div className="text-[15px]  text-[#6A6A6A]"> We aim to inspire positive change, one mindful movement at a time.</div>
            </div>

          </div>
        </div>

      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#D2D2D2' }} />
      <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center w-full p-4 gap-4 md:gap-0">
              <div className="flex flex-row bg-[#F3F3F3] justify-center items-center gap-3 px-3 py-2">
                <div className="bg-black text-white p-3">01</div>
                <div>Personal Attention</div>
              </div>

              <div className="flex flex-row bg-[#F3F3F3] justify-center items-center gap-3 px-3 py-2">
                <div className="bg-black text-white p-3">02</div>
                <div>Diverse Class Selection</div>
              </div>

              <div className="flex flex-row bg-[#F3F3F3] justify-center items-center gap-3 px-3 py-2">
                <div className="bg-black text-white p-3">03</div>
                <div>Flexible Booking App</div>
              </div>

              <div className="flex flex-row bg-[#F3F3F3] justify-center items-center gap-3 px-3 py-2">
                <div className="bg-black text-white p-3">04</div>
                <div>Multiple Categories</div>
              </div>
      </div>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#D2D2D2' }} />

      <div className="flex flex-col w-full lg:w-5/6 p-[40px] mt-[100px]">
          <div className="text-[20px]  text-[#524FF5] font-mono">OUR FITNESS TRAINING</div>
          <div className="text-[30px] font-bold text-black ">Discover the power of Rapha-fit Pilates</div>
          <div className="flex flex-col lg:flex-row gap-10 mt-[30px]">

          <div className=" text-black    flex flex-col w-full lg:w-2/5">
            <div><img src={img6.src} alt="img6" className="" /></div>
            <div className="text-2xl font-bold mt-[10px]">The Workout</div>
            <div className="text-md">we offer a diverse range of Pilates classes designed to cater to your individual fitness needs and goals. Whether you're a beginner or an experienced practitioner, our classes are tailored towards every fitness level, age and goal.Using specialized equipment, you'll experience a full-body workout that targets specific muscle groups.</div>
          </div>

          <div className=" text-black    flex flex-col w-full lg:w-2/5">
            <div><img src={img7.src} alt="img7" className="" /></div>
            <div className="text-2xl font-bold mt-[10px]">Our Studio</div>
            <div className="text-md">Step into our inviting studio, thoughtfully designed to inspire your practice. You'll find state-of-the-art Pilates equipment, a tranquil ambiance, and a supportive community of fellow fitness enthusiasts. Here, you can escape the stresses of daily life and focus on nurturing your body and mind.</div>
          </div>

          <div className=" text-black    flex flex-col w-full lg:w-2/5">
            <div><img src={img8.src} alt="img8" className="" /></div>
            <div className="text-2xl font-bold mt-[10px]">The Community</div>
            <div className="text-md">Each instructor at Corefit Plus believes that wellness is not just about losing weight or achieving physical fitness - it's a holistic journey that encompasses emotional health, mental well-being, and more.</div>
          </div>
          </div>
        </div>


        <div className="flex flex-col mt-4 lg:mt-10 justify-center items-center w-full">
              <div className="text-[30px] font-bold text-black ">Turn your passion into</div>
              <div className="text-[30px] font-bold text-black ">your Carrer!</div>
              <div className="text-center text-md max-w-[750px] my-4">Our comprehensive Pilates instructor training programs includes both mat and reformer Pilates. You will be trained by the best instructor who will mentor you on your education path. Join us and let your love for Pilates become the foundation of your career journey.</div>
              <div className="bg-[#7E6D5B] w-full h-[500px] mt-[100px] md:mt-[250px] flex flex-column justify-center items-center">
                <div className="w-2/3 transform  -translate-y-[150px] flex flex-col justify-center items-center">
                <img src = {img9.src} alt="img9" className="w-full " />
                <div className='font-bold text-xl text-black p-3 border border-[#E2F163] border-2 rounded-[80px] h-fit w-fit mx-7 mt-[80px] cursor-pointer bg-[#E2F163]'>Enquire Now</div>

                </div>

              </div>
        </div>

        



    </main>
  );
}
