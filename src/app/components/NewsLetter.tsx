import React from 'react';
import Image from 'next/image';

function NewsLetter() {
  return (
    <>
      <div className="backdrop-blur-[20px] bg-blue-200 self-center flex w-full max-w-[1398px]  grow flex-col mt-14 pt-16 pb-24 px-5 rounded-[60px] max-md:max-w-full max-md:mt-10">
      <Image
                loading="lazy"
                src="/assets/Plane.svg"
                alt="Hero Image"
                width={200}
                height={200}
                // unoptimized={true}
                className="aspect-square object-cover object-center w-[150px] overflow-hidden self-center max-w-full"
         
              />
    
        <div className="items-center self-center flex w-[885px] max-w-full flex-col mt-12 max-md:mt-10">
          <div className="text-zinc-800 text-center text-5xl font-semibold leading-[61.6px] capitalize max-md:max-w-full">
            Subscribe to Our Newsletter & get the Coupon code.
          </div>
          <div className="text-zinc-800 text-xl leading-9 opacity-80 max-w-auto self-center mt-5">
            All your information is completely confidential
          </div>
        </div>
        <div className="self-center flex w-[691px]  max-w-full items-start gap-4 mt-16 max-md:flex-wrap max-md:mt-10">
          <div className="bg-white flex pb-0 flex-col grow shrink-0 basis-auto rounded-xl self-start max-md:max-w-full">
            <div className=" justify-end items-start bg-white z-[1] flex w-[491px] max-w-full flex-col px-5 py-5 rounded-xl self-start">
              <input
                type="text"
                className="text-black text-xl leading-9 opacity-60 max-md:ml-1.5 outline-none  bg-transparent"
                placeholder="Type your email"
              />
            </div>
            <img
              loading="lazy"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
              className="aspect-[1.3] object-cover object-center w-[30px] overflow-hidden z-[1] max-w-full ml-7 -mt-3 self-start max-md:ml-2.5"
            />
          </div>

          <button className="aspect-[2.23] object-cover object-center w-[185px] overflow-hidden max-w-full self-start bg-blue-700 rounded-xl mt-1 text-white font-semibold">Subscribe</button>
       
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
