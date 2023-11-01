"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubscribe = () => {
    if (isValidEmail && email) {
      alert(`Subscribed with email: ${email}`);
      setEmail(''); // Clear the input
    } else {
      alert('Please enter a valid email address before subscribing.');
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  return (
    <>
      <div className="backdrop-blur-[20px] bg-blue-200 self-center flex w-full max-w-[1398px]  grow flex-col mt-14 pt-16 pb-24 px-5 rounded-[60px] max-md:max-w-full max-md:mt-10">
        <Image
          loading="lazy"
          src="/assets/Plane.svg"
          alt="Hero Image"
          width={200}
          height={200}
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
        <div className="self-center flex w-[691px] max-w-full items-start gap-4 mt-16 max-md:flex-wrap max-md:mt-10">
          <div className="bg-white flex pb-0 flex-col grow shrink-0 basis-auto rounded-xl self-start max-md:max-w-full">
            <div className="justify-end items-start bg-white z-[1] flex  max-w-full flex-col px-5 py-5 rounded-xl self-start">
              <input
                type="text"
                className={`text-black text-xl leading-9 opacity-60 max-md:ml-1.5 outline-none bg-transparent ${
                  isValidEmail ? '' : 'border-red-500'
                }`}
                placeholder="Type your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          
          </div>

          <button
            className="aspect-[2.23] object-cover object-center w-[150px] overflow-hidden max-w-full self-start bg-blue-700 rounded-xl mt-1 text-white font-semibold"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
