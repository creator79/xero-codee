// components/Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
return (
  <>
    <div className="self-stretch flex flex-col mt-4 max-md:max-w-full max-md:mr-1">


    <div className="items-center border shadow-[10px_10px_15px_0px_rgba(0,0,0,0.10)] bg-white self-center flex w-full max-w-[1398px] flex-row px-[5rem] rounded-xl border-solid border-neutral-200 border-opacity-50 max-md:max-w-full flex-wrap  overflow-hidden">
      
<nav className="bg-white border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href="/#" passHref>
              <Image
                loading="lazy"
                src="/assets/XeroLogo.jpg"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className=" mb-2 cursor-pointer aspect-[4.13] object-cover object-center w-[165px] overflow-hidden self-stretch max-w-full"
              />
</Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto mr-16" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border text-black border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white text-xl ml-[15rem]">
      <Link href="/home" passHref>            

        <li>
          <a  className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        </Link>

        <Link href="/team" passHref>  
        <li>
          <a  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</a>
        </li>
        </Link>

        <Link href="/contact" passHref>  
        <li>
          <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
       </Link>

       <Link href="/carrers" passHref>  
        <li>
          <a href="#" className="  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Carrers</a>
        </li>
        </Link>
        <Link href="/singIn" passHref>
              <div className="cursor-pointer hover:bg-blue-300 justify-end text-blue-700 text-center text-lg font-medium leading-7 capitalize items-center self-stretch w-[113px] max-w-full rounded-md border-2 border-solid border-blue-700 py-1 ml-[15rem] mb-2">
                Sign In
              </div>
               </Link>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>

  </>
)










};

export default Navbar;
