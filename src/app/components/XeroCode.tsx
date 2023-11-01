import React from 'react'
import Image from 'next/image'

function SelfServe() {
  return (
      <div className="self-stretch flex w-full flex-col mt-32 max-md:max-w-full max-md:mt-10">
        <div className="self-center flex w-full max-w-[1002px] items-start justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-800 text-center text-3xl font-bold leading-8 self-stretch max-w-[372px] grow shrink-0 basis-auto">
            Without Xerocodee
          </div>
          <div className="text-zinc-800 ml-5 text-center text-3xl font-bold leading-8 self-stretch max-w-[372px] grow shrink-2 basis-auto">
            With Xerocodee
          </div>
        </div>
        <div className="self-center w-full max-w-[1104px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
            <Image
                  loading="lazy"
                  src="/assets/WithoutXero.svg"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  className="aspect-[0.96] ml-10 object-cover object-center w-[372px] overflow-hidden max-w-full mt-10 max-md:mt-10"
                    />
             
            </div>
            <div className="flex flex-col items-stretch w-[52%]  max-md:w-full max-md:ml-0">
            <Image
                  loading="lazy"
                  src="/assets/WithXero.png"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  unoptimized={true}
                className="mr-4 aspect-[1.16] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" 
                    />
             
            </div>
          </div>
        </div>
      
      </div> 
      
  )
}

export default SelfServe