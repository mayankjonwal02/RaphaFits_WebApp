import React from 'react';

interface ItemsProps {
  heading: string;
  description: string;
  intensity: string;
  type?: string;
}

const Classelement_default: React.FC<ItemsProps> = ({ heading, description, intensity }) => {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-7'>
      <div className='text-4xl font-bold text-start md:text-center w-full'>{heading}</div>
      <div className='w-full h-[3px] bg-black'></div>
      <div className='text-start'>{description}</div>
      <div>{intensity}</div>
      <div className='font-semibold text-sm text-black border p-2 border-[#E2F163] border-2 rounded-[80px] h-fit cursor-pointer bg-[#E2F163] w-fit'>
        Book A Trial
      </div>
    </div>
  );
}


const Classelement_type1: React.FC<ItemsProps> = ({ heading, type,description, intensity }) => {
    return (
      <div className='flex flex-col w-full justify-center items-center gap-7'>
        <div className='text-4xl font-bold'>{heading}</div>
        <div className='w-full h-[3px] bg-black'></div>
        <div className='text-center text-white'>{type}</div>
        <div className='text-center text-white'>{description}</div>
        <div className='text-[#C4C2FF]'>{intensity}</div>
        <div className='font-semibold text-sm text-black border p-2 border-[#E2F163] border-2 rounded-[80px] h-fit cursor-pointer bg-[#E2F163] w-fit'>
          Book A Trial
        </div>
      </div>
    );
  }

export default {Classelement_default , Classelement_type1};
