// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image'

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-50 self-stretch flex pt-0 pb-0 flex-col mt-1 px-5 max-md:max-w-full">
      <div className="flex-col justify-center items-center overflow-hidden self-center relative z-[1] flex min-h-[1021px] w-full max-w-[1465px] pt-20 pb-[604px] px-5 max-md:max-w-full">
        <Image
          loading="lazy"
          src="/assets/Hero.svg"
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          alt="Hero Image"
          width={200}
          height={200}
       
        />
        <div className="relative justify-center text-zinc-800 text-center text-6xl font-bold leading-[70px] self-center max-w-[1114px] max-md:max-w-full max-md:text-4xl">
          Build your audience and grow your brand
        </div>
        <div className="relative self-center text-neutral-500 text-center text-2xl leading-10 w-[1114px] max-w-[1114px] mt-8 max-md:max-w-full">
          no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.
        </div>
        <button className="relative justify-end text-white text-center text-xl font-bold leading-8 capitalize self-center items-center bg-blue-700 mb-0 w-[300px] h-15 py-4   max-w-full mt-9 rounded-md border-2 border-solid border-blue-700 max-md:mb-2.5 hover:bg-blue-500">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
