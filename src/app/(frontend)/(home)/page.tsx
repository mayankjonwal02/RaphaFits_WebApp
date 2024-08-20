import Image from "next/image";
import Navbar from "../../../components/Navbar"
import img1 from "../../assets/Homepage_img_1.jpg"
import img2 from "../../assets/Homepage_img_2.jpg"
import img3 from "../../assets/Homepage_img_3.jpg"
import img4 from "../../assets/Homepage_img_4.jpg"
import img5 from "../../assets/Homepage_img_5.jpg"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className=" w-full">
        <img src={img1.src} alt="img1" className="w-full" />
      </div>
      <div className="text-[7vh] font-extrabold text-customtext mt-[40px]  drop-shadow-xl">
        Keep Your Body
      </div>
      <div className="text-[7vh] font-extrabold text-customtext mt-[-30px] drop-shadow-xl">
        Fit & Strong
      </div>
      <div className="flex flex-row items-center my-3">
        <div className='font-bold text-xl text-black py-3 px-6 border border-[#E2F163] border-2 rounded-[50px] h-fit mx-7 cursor-pointer bg-[#E2F163] text-customtext'>Book Class</div>
        <div className='font-bold text-xl text-black py-3 px-6 border border-customtext border-4 rounded-[50px] h-fit mx-7 cursor-pointer bg-white text-customtext'>Book Class</div>

      </div>
      <div className="flex flex-row w-full mt-[200px]">
        <div className="flex flex-col w-1/2 p-[40px]">
          <div className="text-[30px]  text-[#524FF5] font-mono">WELCOME</div>
          <div className="text-[50px] font-bold text-black ">To Rapha-Fit Pilates</div>
          <div className="text-[20px] max-w-[697px] text-[#6A6A6A] mt-[20px]">Discover the power of Pilates, a holistic fitness practice that focuses on core strength, flexibility, and mind-body connection. Pilates can help improve posture, increase energy, and enhance overall well-being</div>
          <div className="bg-[#958574] text-white p-[50px] mt-[70px] gap-[36.73px] flex flex-col">
            <div className="text-4xl font-bold">Story</div>
            <div className="text-xl">The Rapha-fit Studio opened its doors in January 2017, is the first studio in the world to offer Pilates and a simulated altitude training room under one roof. In a short span of time the studio gained popularity amongst people from various backgrounds.</div>
            <div><img src={img2.src} alt="img2" className="w-full" /></div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 p-[40px] gap-[10%]">
          <div className="relative h-[60%]">
            <img src={img3.src} alt="img3" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end items-start p-[50px] gap-4">

              <div className=" flex items-end justify-start text-white text-4xl font-bold">
                PILATES
              </div>
              <div className=" flex items-end justify-start text-white text-2xl w-[90%]">Pilates was started by a man, Joseph Pilates, for men at war and then it was transformed for ballet and contemporary dancers. So simply put Pilates will help you get the strength and agility of a warrior and also a lean, long, flexible body of a ballet dancer!</div>

            </div>
          </div>
          <div className="h-[30%] bg-[#7E6D5B] text-white p-[50px]  gap-[20px] flex flex-col">
            <div className="text-4xl font-bold">Our studio</div>
            <div className="text-xl">The Pilates Studio is a fully equipped studio with the V2 max Reformers, Cadillac, Stability Chair as well as the ladder barrel. Book a trial now</div>

          </div>
        </div>
      </div>

      <div className="flex flex-row w-full mt-[200px]">
        <div className="flex flex-col w-1/2 p-[40px] gap-[10%]">
          <div className="w-full flex justify-center items-center">


          <div
  className="relative h-[800px] w-[800px] rounded-full flex justify-center items-center"
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


        <div className="flex flex-col w-1/2 p-[40px]">
          <div className="text-[30px]  text-[#524FF5] font-mono">ABOUT</div>
          <div className="text-[50px] font-bold text-black ">Why Join Our Studio</div>
          <div className="text-[20px] max-w-[697px] text-[#6A6A6A] mt-[20px]">The studio ensures that there is a constant upgradation of services in line with the newest research in the fitness industry as well as ensuring the best quality in equipment and training.</div>
          <div className="bg-[#F0F0F0]  p-[50px] mt-[70px] gap-[36.73px] flex flex-col">
            <div className="text-4xl font-bold">Story</div>
            <div className="text-xl  text-[#6A6A6A]">Our mission is to redefine fitness as a wellness journey of the mind, body, and spirit. We are committed to cultivating an inclusive, empowering environment that promotes overall wellness beyond the physical realm. we can support our members in achieving not only their physical fitness goals but also in nurturing their emotional and mental well-being.</div>

          </div>
          <div className="bg-[#F0F0F0] w-full p-[50px] mt-[70px] gap-[36.73px] flex flex-row justify-center items-center">
            <div className="w-[40%] bg-red-300"><img src={img4.src} alt="img4" className="w-full" /></div>
            <div className="w-[50%] flex flex-col gap-3">

              <div className="text-4xl font-bold">Vision</div>
              <div className="text-2xl  text-[#6A6A6A]"> We aim to inspire positive change, one mindful movement at a time.</div>
            </div>

          </div>
        </div>

      </div>


    </main>
  );
}
