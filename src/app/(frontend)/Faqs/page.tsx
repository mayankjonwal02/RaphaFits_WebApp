import React from 'react'
import img1 from "../../assets/Faq_img_1.jpg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const accordionData = [
  {
    id: "item-1",
    question: "1. What is Pilates?",
    answer: "Pilates is a full-body exercise system that uses a series of machines and exercises to target the deep muscles supporting the spine and major joints. It improves flexibility, strength, balance, and body awareness."
  },
  {
    id: "item-2",
    question: "2. Why should I do Pilates?",
    answer: "Pilates conditions the smaller muscles throughout the body so you can improve your balance, posture, coordination, strength, flexibility, and breathing. It’s ideal for injury rehabilitation and overall body conditioning."
  },
  {
    id: "item-3",
    question: "3. Is Pilates hard?",
    answer: "Pilates can be challenging but it is designed to be adaptable to different fitness levels. Whether you're a beginner or advanced, you can adjust the intensity and difficulty of the exercises."
  },
  {
    id: "item-4",
    question: "4. What should I expect when I walk into a Pilates class?",
    answer: "Expect a warm-up followed by a series of exercises targeting different areas of the body. You'll use specialized equipment or a mat, and the instructor will guide you through each movement with proper form and breathing techniques."
  },
  {
    id: "item-5",
    question: "5. How often should I do Pilates?",
    answer: "For best results, it's recommended to do Pilates 2-3 times a week. However, you can do it more frequently if desired. Consistency is key to seeing improvements in strength, flexibility, and overall fitness."
  },
  {
    id: "item-6",
    question: "6. Will Pilates help my back pain?",
    answer: "Yes, Pilates is often recommended for those with back pain. It strengthens the core muscles that support the spine and improves posture, which can alleviate and prevent back pain. Always consult with your doctor before starting any new exercise routine."
  },
  {
    id: "item-7",
    question: "7. Can Pilates help me lose weight?",
    answer: "Pilates can be part of a weight loss plan as it helps build lean muscle, which increases metabolism. Combined with a healthy diet and cardio exercises, Pilates can help you achieve weight loss goals."
  },
  {
    id: "item-8",
    question: "8. Do men do Pilates?",
    answer: "Yes, Pilates is not just for women. Many men do Pilates to improve their flexibility, strength, and performance in other sports. It is also excellent for injury prevention and rehabilitation."
  },
  {
    id: "item-9",
    question: "9. What do I need to do Pilates?",
    answer: "You don't need much to start Pilates. Comfortable clothing that allows movement, a mat, and a water bottle are the basics. For certain exercises, props like resistance bands, balls, or specialized Pilates equipment might be used."
  },
  {
    id: "item-10",
    question: "10. How is Pilates different from yoga?",
    answer: "While both Pilates and yoga focus on mind-body connection, Pilates is more about core strength and alignment using controlled movements, often with equipment. Yoga focuses on flexibility, balance, and meditation through various postures."
  },
  {
    id: "item-11",
    question: "11. What are the principles of Pilates?",
    answer: "The principles of Pilates include concentration, control, centering, flow, precision, and breathing. These principles guide each movement to ensure effective and safe exercise, helping to build a strong and balanced body."
  },
  {
    id: "item-12",
    question: "12. Can I do Pilates at home?",
    answer: "Yes, you can do Pilates at home with minimal equipment. Many mat exercises can be done with just a mat and a few props like resistance bands or a small ball. Online classes and tutorials can also guide your practice."
  }
];

const Faqs = () => {
  return (
    <div>
      <div className='relative w-full'>
        <img src={img1.src} alt="img1" className="w-full" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-extrabold'>FAQs</div>
      </div>

      <div className='bg-[#7E6D5B] w-full p-[50px] flex flex-col justify-center items-center mt-[50px]'>

        <div className='text-[#524FF5] font-mono  text-2xl'>FAQ</div>
        <div className=' text-3xl font-bold'>Frequently Asked Questions</div>
        <div className="w-3/4 lg:w-1/2 mt-[30px] mb-[50px]">
          {accordionData.map((item) => (
            <Accordion type="single" collapsible key={item.id}>
              <AccordionItem value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className='text-white'>{item.answer}</AccordionContent>
              </AccordionItem>

            </Accordion>
          ))}
        </div>


      </div>
    </div>
  )
}

export default Faqs
