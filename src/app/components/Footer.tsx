import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="items-start backdrop-blur-[20px] bg-blue-200 bg-opacity-10 self-stretch flex w-full flex-col mt-96 mb-24 pt-20 pb-16 px-5 max-md:max-w-full max-md:my-10 cursor-pointer hover:text-blue-700">
        <div className="self-center w-full max-w-[1098px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col mt-16 max-md:mt-10">
                <div className=" text-slate-600 text-base leading-7 self-start">
                  You get just what you need to run your cloud
                  <br />
                  workloads--no more, no less. <br />
                  Deploy from our single pane of glass, <br />
                  manage them with ease and scale <br />
                  up as fast as your workload grows
                </div>{" "}
          
                <div className="relative w-[208px] h-[41px] mt-10">
                  <div className="absolute w-[163px] h-[41px] top-0 left-0">
                    <div className="left-0 absolute w-[41px] h-[41px] top-0 bg-[#c6deff] rounded-[20.5px]" />
                    <div className="left-[61px] opacity-20 absolute w-[41px] h-[41px] top-0 bg-[#c6deff] rounded-[20.5px]" />
                    <div className="left-[122px] opacity-20 absolute w-[41px] h-[41px] top-0 bg-[#c6deff] rounded-[20.5px]" />
                  </div>

                  <Image
                    loading="lazy"
                    className="absolute w-[22px] h-[22px] top-[10px] left-[186px]"
                    alt="Mail"
                    src="/assets/Mail.png"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
              <div className="max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                    <div className="items-start flex grow flex-col max-md:mt-10">
                      <div className="items-start flex w-[111px] max-w-full flex-col self-start">
                        <div className=" text-slate-700 text-2xl font-semibold leading-10 capitalize self-start whitespace-nowrap">
                          Our links
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-10 self-start">
                          Home
                        </div>
                      </div>{" "}
                      <div className="items-start flex w-[88px] max-w-full flex-col mt-3 self-start">
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 self-start">
                          About us
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base  leading-7 mt-3 self-start">
                          Integrations
                        </div>
                      </div>{" "}
                      <div className="items-start flex w-10 max-w-full grow flex-col mt-3 self-start">
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 self-start">
                          Team
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-3 self-start">
                          Blog
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex grow flex-col max-md:mt-10">
                      <div className="items-start flex w-[189px] max-w-full flex-col self-start">
                        <div className="text-slate-700 text-2xl font-semibold leading-10 capitalize self-start whitespace-nowrap">
                          Our Services
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-10">
                          <a
                            href="https://www.hashicorp.com/solutions/infrastructure-provisioning"
                            target="_blank"
                          >
                            Infrastructure provisioning
                          </a>
                        </div>
                      </div>{" "}
                      <div className="items-start flex w-[248px] max-w-full flex-col mt-3 self-start">
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 self-start">
                          Network infrastructure automation
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-3">
                          Cost optimization
                        </div>
                      </div>{" "}
                      <div className="items-start flex w-[141px] max-w-full grow flex-col mt-3 self-start">
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7">
                          Cloud migration
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-3">
                          Kubernetes at scale
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex grow flex-col max-md:mt-10">
                      <div className="items-start flex w-[148px] max-w-full flex-col self-start">
                        <div className="text-slate-700 text-2xl font-semibold leading-10 capitalize self-start whitespace-nowrap">
                          Others links
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-10 self-start">
                          FAQ
                        </div>
                      </div>{" "}
                      <div className="items-start flex w-[99px] max-w-full flex-col mt-3 self-start">
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 self-start">
                          Careers
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-3 self-start">
                          Privacy Policy
                        </div>
                      </div>{" "}
                      <div className="items-start flex w-[132px] max-w-full grow flex-col mt-3 self-start">
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7">
                          Terms & Conditions
                        </div>{" "}
                        <div className="hover:text-blue-700 text-slate-600 text-base leading-7 mt-3 self-start">
                          Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="items-start self-center flex w-full max-w-[1114px] justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className=" text-slate-600 text-lg leading-8 self-stretch max-w-[342px] grow shrink-0 basis-auto">
            Terms & Conditions | Privacy Policy{" "}
          </div>{" "}
          <div className=" text-slate-600 text-lg font-bold leading-8 self-stretch whitespace-nowrap max-md:max-w-full">
            <span className="">Copyright © 2023 </span>
            <span className="font-bold">EXOCODE TECHNOLOGIES | </span>
            <span className="">All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
