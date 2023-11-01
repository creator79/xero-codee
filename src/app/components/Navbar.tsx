// components/Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="self-stretch flex flex-col mt-4 max-md:max-w-full max-md:mr-1">
        <div className="items-center border shadow-[10px_10px_15px_0px_rgba(0,0,0,0.10)] bg-white self-center flex w-full max-w-[1398px] flex-row px-5 py-5 rounded-xl border-solid border-neutral-200 border-opacity-50 max-md:max-w-full flex-wrap">
          <div className="self-center flex w-full max-w-[1162px] items-start justify-between gap-5 max-md:max-w-full  max-md:flex-wrap max-md:justify-center ">
            <div className="  items-start self-stretch flex w-[485px] max-w-full justify-between gap-5 max-md:flex-wrap">
            <Link href="/#" passHref>
              <Image
                loading="lazy"
                src="/assets/XeroLogo.jpg"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className=" cursor-pointer aspect-[4.13] object-cover object-center w-[165px] overflow-hidden self-stretch max-w-full"
              />
</Link>
 <Link href="/home" passHref>
              <div className="cursor-pointer hover:text-blue-700 justify-center text-zinc-800 text-lg leading-8 self-center my-auto whitespace-nowrap sm:flex-col gap-2 m">
                Home
              </div>
              </Link>
            </div>

            <div className="items-start self-center flex w-[152px] max-w-full justify-between gap-5 my-auto">
            <Link href="/team" passHref>
              <div className="cursor-pointer hover:text-blue-700 justify-center text-zinc-800 text-lg leading-8 self-stretch">
                Team
              </div>
              </Link>
              <div>
              <Link href="/contact" passHref>
              <div className="cursor-pointer hover:text-blue-700 justify-center text-zinc-800 text-lg leading-8 self-stretch whitespace-nowrap mb-2">
                Contact
              </div>
              </Link>
              </div>
            </div>

            <div className="items-start self-stretch  flex w-[458px] max-w-full justify-between gap-5 max-md:flex-wrap">
            <Link href="/carrers" passHref>
              <div className="cursor-pointer hover:text-blue-700 justify-center text-zinc-800 text-lg leading-8 self-center my-auto">
                Careers
              </div>
              </Link>
              <Link href="/singIn" passHref>
              <div className="cursor-pointer hover:bg-blue-300 justify-end text-blue-700 text-center text-lg font-medium leading-7 capitalize items-center self-stretch w-[113px] max-w-full rounded-md border-2 border-solid border-blue-700 py-1 ">
                Sign In
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
