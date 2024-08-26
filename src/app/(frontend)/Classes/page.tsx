import React from 'react'
import Classelement from '@/components/Classelement'
import img1 from "../../assets/Classes_img_1.jpg"
import img2 from "../../assets/Classes_img_2.jpg"
import img3 from "../../assets/Classes_img_3.jpg"
import img4 from "../../assets/Classes_img_4.jpg"

const {Classelement_default,Classelement_type1} = Classelement
const Classes = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full relative flex flex-col justify-center items-center'>
        <img src={img1.src} alt="img1" className="w-full" />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-extrabold'>Classes</div>
      </div>
      <div className='flex flex-col justify-center items-center w-full h-fit mt-[100px] px-4 lg:px-0'>
  <div className='text-[#524FF5] font-mono text-2xl'>PILATES</div>
  <div className='text-3xl font-bold text-center lg:text-left'>We Train You to Gain</div>
  <div className='max-w-[900px] text-center'>
    Explore our range of Pilates class types designed to cater to your unique needs and preferences...
  </div>
  <div className='text-center'>
    We offer Group Sessions, Private Sessions, Private Duo at our Studios.
  </div>
  <div className='w-full flex flex-col lg:flex-row mt-9 space-y-6 lg:space-y-0 lg:space-x-6'>
    <div className='w-full lg:w-1/3 flex flex-col items-center gap-4'>
      <img src={img2.src} alt="img2" className="w-full" />
      <div className='text-start font-bold text-2xl w-full'>Foundation Classes</div>
      <div className='w-full'>
        This is a wonderful class for beginners to briefly understand Pilates principle...
      </div>
      <div className='flex justify-end items-end w-full'>
        <div className='font-semibold text-md text-black border p-2 border-[#E2F163] rounded-[80px] h-fit cursor-pointer bg-[#E2F163] w-fit'>Book A Trial</div>
      </div>
    </div>

    <div className='w-full lg:w-1/3 flex flex-col items-center gap-4'>
      <img src={img3.src} alt="img3" className="w-full" />
      <div className='text-start font-bold text-2xl w-full'>SIGNATURE FULL BODY REFORMER</div>
      <div className='w-full'>
        Designed for all, this strengthen and lengthen workout session will help you to build stamina...
      </div>
      <div className='flex justify-end items-end w-full'>
        <div className='font-semibold text-md text-black border p-2 border-[#E2F163] rounded-[80px] h-fit cursor-pointer bg-[#E2F163] w-fit'>Book A Trial</div>
      </div>
    </div>

    <div className='w-full lg:w-1/3 flex flex-col items-center gap-4'>
      <img src={img4.src} alt="img4" className="w-full" />
      <div className='text-start font-bold text-2xl w-full'>CHAIR BALANCE + REFORMER</div>
      <div className='w-full'>
        Great core stability workout routines performed on Wunda chairs to achieve maximum core strength...
      </div>
      <div className='flex justify-end items-end w-full'>
        <div className='font-semibold text-md text-black border p-2 border-[#E2F163] rounded-[80px] h-fit cursor-pointer bg-[#E2F163] w-fit'>Book A Trial</div>
      </div>
    </div>
  </div>
</div>




      <div className='w-full lg:w-1/2 h-fit flex flex-col justify-center items-center mt-[150px] gap-[100px]'>
          <Classelement_default heading='CARDIO INTERVAL PILATES' description='A high-intensity, calorie-blasting cardio workout with a combination of Jumpboard Reformer based strength training is what makes up this energetic class. This high­impact, interval training workout session is dynamic and fast-paced. A solid Pilates foundation is required to join this class, minimum 5 to 6 prior pi late sessions would be ideal.' intensity='Intensity: INTERMEDIATE TO ADVANCE LEVEL'/>
          <Classelement_default heading='TRX FUNCTIONAL & REFORMER' description='A Reformer based Pilates workout is combined with the incredibly effective TRX® suspension training system. Efficient and precise routines are performed to enhance strength, coordination, mobility and balance. An excellent choice for sports lovers who want to challenge their limits and enjoy muscle building exercises in quick transitions.' intensity='Intensity: INTERMEDIATE TO ADVANCE LEVEL'/>
          <Classelement_default heading='BURNOUT' description='A high-intensity endurance class aimed to burn maximum body fat working on bigger muscle groups. Expect squats, planks, challenging arm work, and compound exercises throughout this routine to keep your heart racing. The best workout to get toned and sculpted with long & lean muscles.' intensity='Intensity: INTERMEDIATE TO ADVANCE LEVEL'/>
          <Classelement_default heading='ENERGETIC CARDIO PILATES' description='A fun workout routine which requires quick transitions between the jumpboard and reformer exercises. This class incorporates multiple fitness modalities to take your practice to a new level. Be ready to sweat and pump up your heart rate in this super engaging full-body Pilates workout. This high-energy, low-impact class is the perfect solution for all your cardio needs and will also help to increase your bone density.' intensity='Intensity: INTERMEDIATE TO ADVANCED LEVEL'/>
          <Classelement_default heading='SIGNATURE PILATES FOR MEN' description='This Pilates reformer class is specially designed for men who are ready to challenge their strength, core, control and balance. This is a total body workout where you perform complex Pilates moves at a vigorous pace. Prepare to burn, sweat, repeat and be ready for a transformation of the body while you achieve real deep core strength and a super toned look.' intensity='Intensity: OPEN TO ALL LEVELS'/>
          <Classelement_default heading="BEGINNER'S BLISS" description='A high-intensity, calorie-blasting cardio workout with a combination of Jumpboard Reformer based strength training is what makes up this energetic class. This high­impact, interval training workout session is dynamic and fast-paced. A solid Pilates foundation is required to join this class, minimum 5 to 6 prior pi late sessions would be ideal.' intensity='Intensity: OPEN TO ALL LEVELS'/>
          <Classelement_default heading='BOSU BALANCE AND REFORMER' description='Strengthening the Stabilizer Muscles. Try this class if you want an exercise routine to be more challenging and fun. Bosu trainers are versatile enough to use for stretching, balance-training, rehabilitat­-ion and even strength-training and plyometric training. Bosu trainer in combination with Functional training, TRX training and Free weights force your core to work constantly throughout the entire motion. This is an excellent way to make easy exercises more challenging.' intensity='Intensity: INTERMEDIATE LEVEL'/>
          <Classelement_default heading='STRONGER AT 50' description="This Pilates routine is aimed at 50's and over age group to target core strength, balance, flexibility and postural correction. It is a small group session to ensure personalized attention and detailed coaching including helping those with challenging back aches and other aches to build supporting muscles around their pain areas. Gradually restore your age and strength and revive your flexibility and alignment session after session." intensity='Intensity: OPEN TO ALL LEVELS'/>
          <Classelement_default heading='UPPER BODY BLAST' description='This reformer workout targets the entire upper body with a mix of fun and challenging exercises. This class focuses on building strength in the entire upper body including the arms, shoulders, chest, triceps, and more.Different props are used in various ways to encourage proper form,engagement, and add a great spin to any movement.' intensity='Intensity: OPEN TO ALL LEVELS'/>
          <Classelement_default heading='CORETASTIC CRUNCH' description='This reformer workout targets the deep muscles of the abdomen back and pelvis. This class focuses on maintaining proper form and alignment using your breath to support movements, and engaging your deep core muscles, including your obliques and transverse abs. Building strength in the core, from top to bottom + front to back, will provide you with better posture, strong breathing pattern, and an increase in balance+ stability. Plus, everyone loves working their abs. Right?' intensity='Intensity: INTERMEDIATE LEVEL'/>
          <Classelement_default heading='MAT PILATES' description='A full-body workout that harnesses the power of controlled movements and breath synchronization. This class aims to improve flexibility, build strength, and develop control and endurance in the entire body. It places a special emphasis on alignment, breathing, and enhancing core stability and balance. Good for beginners and advanced practitioners.' intensity='Intensity: OPEN TO ALL LEVELS'/>
      </div>

    <div className='w-full bg-[#7E6D5B] mt-[150px] flex justify-center items-center'>
    <div className='w-full lg:w-1/2 h-fit flex flex-col justify-center items-center mt-[150px] gap-[100px] p-5'>
    <div className='flex justify-center items-center flex-col'>
    <div className='text-4xl font-bold text-center'>YOGA</div>
      <div className='w-[200px] h-[5px] bg-black'></div>
      <div className='text-center mt-[50px] text-white'>This 21st century Yoga is built on western scientific foundations combined with the wisdom of Ayurveda. In every single session, experience better health and satisfaction as you enjoy the benefits of a youthful, well-toned body to be able to live life to your fullest.</div>
      
    </div>
        <Classelement_type1 heading='ENERGY & BALANCE' type='SUN VINYASA' description='wakening and balancing your solar power, this Solar series is a great way to be fit and healthy and is suitable for athletes, students, working professionals, and seniors alike! This class benefits all systems of the body i.e. cardiovascular, muscular, skeletal and nervous systems.' intensity='Intensity: OPEN TO ALL LEVELS'/>
        <Classelement_type1 heading='MAT PILATES' type='YOGA CORE' description='These postures help reduce back pain, strengthen the core muscles that support the back, hips, and stomach. Having strong abdominal muscles and back muscles is the key to prevent back pain. Strong core helps advancing and deepening in various yoga postures and other spiritual practices.' intensity='Intensity: OPEN TO ALL LEVELS'/>
        <Classelement_type1 heading='ASANA BASED CARDIO' type='CARDIO YOGA' description='Stop running or cycling and try our cardio yoga that delivers maximum benefits from burning fats for 24 to 48 hrs after you complete your exercise along with toning and firming your body that you usually can’t get from running. There is no better exercise that incorporates complete body training that works your core, upper body and lower body strength versus just working your legs alone. Strengthen your heart, burn fats and boost metabolism in this amazing class.' intensity='Intensity: OPEN TO ALL LEVELS'/>
        <Classelement_type1 heading='REJUVENATE' type='ASANA PRANA' description='Use of specific postures and breathing techniques to help relieve stress and tension instantly. This class helps align the body, increase blood circulation, improve the endocrine activity and correct body metabolism along with physiological functions.' intensity='Intensity: OPEN TO ALL LEVELS'/>
        <Classelement_type1 heading='DETOX & TONE' type='HOT DHARA' description='Performed in Hot infra-red light and not traditional heaters. A flowing series of 31 postures helps burn fats fast along with making your body lean and toned. It helps relieve health problems like migraine, back pain, neck pain, numbness, respiratory issues, menstrual issues and sleeping disorders.' intensity='Intensity: OPEN TO ALL LEVELS'/>
        <Classelement_type1 heading='POWER FLOW' type='YOGA SHAKTI' description='This class covers all aspects of classical Yoga practice in a systematic way. Specific Pranayama (breathing), Asana (postures), Dharana (concentration), Bandha (locks) and Nidra (blissful sleep) awaken dormant powers. This systematic approach will give you the foundation to reach greater heights as you achieve better health both physically and mentally.' intensity='Intensity: OPEN TO ALL LEVELS'/>
      </div>
    </div>
      


    </div>
  )
}

export default Classes
