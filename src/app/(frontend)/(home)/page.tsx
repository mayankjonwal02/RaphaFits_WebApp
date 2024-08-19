import Image from "next/image";
import Navbar from "../../../components/Navbar"
import img1 from "../../assets/Homepage_img_1.jpg"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className=" w-full">
        <img src={img1.src} alt="img1" className="w-full"/>
      </div>
      <div className="text-[7vh] font-extrabold text-customtext mt-[40px]  drop-shadow-xl">
        Keep Your Body
      </div>
      <div className="text-[7vh] font-extrabold text-customtext mt-[-10px] drop-shadow-xl">
        Fit & Strong
      </div>
      <div className="flex flex-row items-center">
      <div className='font-bold text-xl text-black py-3 px-6 border border-[#E2F163] border-2 rounded-[50px] h-fit mx-7 cursor-pointer bg-[#E2F163] text-customtext'>Book Class</div>
      <div className='font-bold text-xl text-black py-3 px-6 border border-customtext border-4 rounded-[50px] h-fit mx-7 cursor-pointer bg-white text-customtext'>Book Class</div>

      </div>
    
      
    </main>
  );
}
