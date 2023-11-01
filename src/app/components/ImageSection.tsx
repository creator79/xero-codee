import React from "react";
import Image from "next/image";

const ImageSection: React.FC = () => {
  return (
    <div className="self-center w-full max-w-[1113px] mt-24 px-5 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col max-md:mt-10">
            <Image
              loading="lazy"
              src="/assets/GreenHouse.png"
              alt="Hero Image"
              width={200}
              height={200}
              unoptimized={true}
              className="aspect-[4.1] object-cover object-center w-full overflow-hidden self-stretch"
            />
            <Image
              loading="lazy"
              src="/assets/GreenHouse.png"
              alt="Hero Image"
              width={200}
              height={200}
              unoptimized={true}
              className="aspect-[4.1] object-cover object-center w-full overflow-hidden self-stretch grow mt-12 max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto max-md:mt-10">
            <Image
              loading="lazy"
              src="/assets/BRSR.png"
              alt="Hero Image"
              width={200}
              height={200}
              // unoptimized={true}
              className="aspect-[3.95] object-cover object-center w-full overflow-hidden self-stretch"
            />
            <Image
              loading="lazy"
              src="/assets/BRSR.png"
              alt="Hero Image"
              width={200}
              height={200}
              // unoptimized={true}
              className="aspect-[3.95] object-cover object-center w-full overflow-hidden self-stretch grow mt-14 max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col max-md:mt-10">
            <Image
              loading="lazy"
              src="/assets/CDP.png"
              alt="Hero Image"
              width={200}
              height={200}
              className="aspect-[2.7] object-cover object-center w-full overflow-hidden self-stretch"
            />

            <Image
              loading="lazy"
              src="/assets/CDP.png"
              alt="Hero Image"
              width={200}
              height={200}
              className="aspect-[2.7] object-cover object-center w-full overflow-hidden self-stretch grow mt-10 max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[13%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col max-md:mt-10">
            <Image
              loading="lazy"
              src="/assets/IPCC.png"
              alt="Hero Image"
              width={200}
              height={200}
              className="aspect-[1.92] object-cover object-center w-full overflow-hidden self-stretch"
            />
            <Image
              loading="lazy"
              src="/assets/IPCC.png"
              alt="Hero Image"
              width={200}
              height={200}
              className="aspect-[1.92] object-cover object-center w-full overflow-hidden self-stretch grow mt-11 max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
