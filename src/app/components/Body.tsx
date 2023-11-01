import React from "react";
import Image from "next/image";

function Body() {
  return (
    <>
      <div className="self-stretch flex w-full flex-col mt-40 max-md:max-w-full max-md:mt-10">
        <div className="bg-blue-700 self-center flex w-full max-w-[1398px] flex-col px-5 py-28 rounded-[35px] max-md:max-w-full">
          <div className="justify-center text-white text-center text-5xl font-semibold leading-[61.6px] capitalize self-center max-w-[1113px] max-md:max-w-full ">
            Modernize apps, infrastructure with cloud native tech for
            resilience, scalability.
          </div>
          <div className="items-start self-center flex w-full max-w-[1108px] justify-between gap-5 mt-44 py-px max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="mt-[-20rem]  flex flex-col  self-end max-md:max-w-full">
              <Image
                loading="lazy"
                src="/assets/cards-screen.png"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className="aspect-[1.66] object-cover object-center w-[2000px]  stroke-[3px] stroke-white stroke-opacity-10 overflow-hidden max-w-full self-end "
              />
            </div>
            <div className="justify-end items-start flex flex-col self-end">
              <div className="text-white text-5xl font-semibold leading-[61.6px] capitalize self-stretch max-w-[375px]">
                Real-time risk monitoring
              </div>
              <div className="text-white text-xl leading-9 self-stretch mt-16 max-md:mt-10">
                Real-time risk monitoring across your infrastructure and
                application ecosystem will help you maintain ongoing compliance
                with more than 05+ different regulatory standards.
              </div>
            </div>
          </div>
          <div className="self-center mb-0 w-full max-w-[1113px] mt-28 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-white text-5xl font-semibold leading-[61.6px] capitalize max-w-[437px] self-start max-md:max-w-full">
                    Collaborative workflows
                  </div>
                  <div className="text-white text-xl leading-9 self-start max-md:max-w-full">
                    Share artefacts easily and collaborate with team members,
                    auditors, and pen testers via automated procedures. To
                    manage daily compliance with automatic notifications and
                    reminders, create, assign, and track tasks.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                <Image
                  loading="lazy"
                  src="/assets/cards-screen1.png"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  unoptimized={true}
                  className="aspect-[1.09] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-white self-center flex w-full max-w-[1398px] flex-col mt-20 pt-32 pb-32 px-5 rounded-[35px] border-solid border-white max-md:max-w-full max-md:mt-10">
          <div className="self-center flex w-full max-w-[1107px] flex-col -mb-6 max-md:max-w-full max-md:mb-2.5">
            <div className="self-center flex w-[508px] max-w-full items-start justify-between gap-5 ml-11 max-md:flex-wrap">
              <div className="justify-center text-zinc-800 text-center text-5xl font-semibold leading-[55px] grow shrink-0 basis-auto self-start max-md:max-w-full">
                The Xerocodee way{" "}
              </div>
              <Image
                loading="lazy"
                src="/assets/Rocket.svg"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className="aspect-square object-cover object-center w-[50px] overflow-hidden max-w-full self-start"
              />
            </div>
            <div className="self-center flex w-[84px] max-w-full flex-col mt-32 max-md:mt-10">
              <div className="justify-center text-zinc-800 text-center text-4xl font-semibold leading-10 self-center">
                01
              </div>
              <Image
                loading="lazy"
                src="/assets/line-38.svg"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className="aspect-[8.4] object-cover object-center w-full stroke-[2px] stroke-blue-700 overflow-hidden self-stretch grow mt-2.5"
              />
            </div>
            <div className="self-stretch flex flex-col mt-24 max-md:max-w-full max-md:mr-2 max-md:mt-10">
              <div className="text-slate-700 text-center text-2xl font-semibold leading-10 capitalize self-center max-w-[507px] ml-2.5">
                Self serve Infrastructure
              </div>
              <div className="text-slate-600 text-center text-base leading-7 self-center max-w-[831px] ml-3 mt-4 max-md:max-w-full">
                {" "}
                Accelerate by self-serving production-ready infrastructure and
                customize as you scale.
              </div>
              <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                      <div className="flex w-[404px] max-w-full items-start justify-between gap-5 self-start max-md:justify-center">
                        <div className="flex flex-col flex-1 mt-2.5">
                          <div className="justify-center text-slate-600 text-center text-xs font-bold leading-5 capitalize hover:underline decoration-blue-700 decoration-4 cursor-pointer">
                            Your Cloud
                          </div>
                          <div className="self-stretch flex w-full h-[5px] flex-col mt-3 rounded" />
                        </div>
                        <div className="justify-center text-slate-600 text-center text-xs font-bold leading-5 capitalize border bg-white flex-1 p-3 rounded border-solid border-gray-200 border-opacity-50 hover:underline decoration-blue-700 decoration-4 cursor-pointer">
                          Infra components
                        </div>
                        <div className="justify-center text-slate-600 text-center text-xs font-bold leading-5 capitalize border bg-white flex-1 pl-3 pr-2.5 py-3 rounded border-solid border-gray-200 border-opacity-50 hover:underline decoration-blue-700 decoration-4 cursor-pointer ">
                          Self-hosted Apps
                        </div>
                      </div>
                      <Image
                        loading="lazy"
                        src="/assets/AWS.png"
                        alt="Hero Image"
                        width={200}
                        height={200}
                        unoptimized={true}
                        className="aspect-[1.33] mr-20 object-cover object-center w-[400px] overflow-hidden max-w-full grow self-end"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                      <div className="text-slate-700 text-xl font-semibold leading-8 capitalize max-w-[360px] self-start">
                        In Your Cloud
                      </div>
                      <div className="text-slate-600 text-base leading-7 mt-5 self-start max-md:max-w-full">
                        Your infrastructure runs on your AWS or GCP account.
                        Never get locked in. Infinitely scalable.Azure support
                        coming soon)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center flex w-[84px] max-w-full flex-col ml-3.5 mt-28 max-md:mt-10">
              <div className="justify-center text-zinc-800 text-center text-4xl font-semibold leading-10 self-center">
                02
              </div>
              <Image
                loading="lazy"
                src="/assets/line-38.svg"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className="aspect-[8.4] object-cover object-center w-full stroke-[2px] stroke-blue-700 overflow-hidden self-stretch grow mt-2.5"
              />
            </div>
            <div className="self-stretch flex flex-col mt-24 max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-center text-2xl font-semibold leading-10 self-center max-w-[507px] ml-3.5">
                Deploy applications, fast!
              </div>
              <div className="text-slate-600 text-center text-base leading-7 self-center max-w-[831px] ml-3.5 mt-2.5 max-md:max-w-full">
                Set up automated deployments of your application in 5 minutes
                and get back to building stuff that matters.
              </div>
              <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col mt-4 max-md:mt-10">
                      <Image
                        loading="lazy"
                        src="/assets/BaseLayer.png"
                        alt="Hero Image"
                        width={200}
                        height={200}
                        unoptimized={true}
                        className="aspect-[1.36] object-cover object-center w-[57px] -rotate-90 fill-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] overflow-hidden self-center z-[1] max-w-full ml-6 mb-2"
                      />

                      <div className="self-stretch flex items-start justify-between gap-0 max-md:justify-center">
                        <Image
                          loading="lazy"
                          src="/assets/DeployCone.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className="aspect-[1.17] object-cover object-center w-[109px] fill-black fill-opacity-10 overflow-hidden self-stretch max-w-full"
                        />
                        <Image
                          loading="lazy"
                          src="/assets/Arrow.svg"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className="aspect-[2.44] object-cover object-center w-[39px]  fill-blue-200 overflow-hidden self-center max-w-full my-auto"
                        />
                        <Image
                          loading="lazy"
                          src="/assets/DeployCone.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className="aspect-[1.16] object-cover object-center w-[108px] fill-black fill-opacity-10 overflow-hidden self-stretch max-w-full"
                        />

                        <Image
                          loading="lazy"
                          src="/assets/Arrow.svg"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          className="aspect-[2.5] object-cover object-center w-10 fill-blue-400 overflow-hidden self-center max-w-full my-auto"
                        />
                        <Image
                          loading="lazy"
                          src="/assets/DeployCone.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          className="aspect-[1.17] object-cover object-center w-[109px] fill-black fill-opacity-10 overflow-hidden self-stretch max-w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                      <div className="text-slate-700 text-xl font-semibold leading-8 capitalize max-w-[477px] self-start">
                        Configurable Build and Deploy pipelines
                      </div>
                      <div className="text-slate-600 text-base leading-7 mt-3.5 self-start max-md:max-w-full">
                        Portable builds powered by Dagger and continuous
                        deployments powered by ArgoCD - you gain more control of
                        your pipelines with composable custom, build, and deploy
                        stages.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                      <div className="text-slate-700 text-xl font-semibold leading-8 capitalize max-w-[477px] self-start">
                        Push to Deploy
                      </div>
                      <div className="text-slate-600 text-base leading-7 mt-3.5 self-start max-md:max-w-full">
                        Just connect your repo with one click and push.
                        Argonaut’s deep integration with GitHub Actions and
                        GitLab pipelines build and deploy your code on every
                        push.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
                    <Image
                      loading="lazy"
                      src="/assets/GitFlow.svg"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      className="aspect-[2.76] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch mt-24 max-md:max-w-full max-md:mr-px max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                    <Image
                      loading="lazy"
                      src="/assets/GitLogo.png"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      unoptimized={true}
                      className="aspect-[2.71] object-cover object-center w-full overflow-hidden grow max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                      <div className="text-slate-700 text-xl font-semibold leading-8 capitalize max-w-[477px] self-start">
                        Multiple runtimes
                      </div>
                      <div className="text-slate-600 text-base leading-7 mt-3.5 self-start max-md:max-w-full">
                        Quickly deploy apps to containerized or serverless
                        runtimes on your cloud and customize architectures to
                        cost and performance constraints. Deploy on Kubernetes
                        using dockerfiles or buildpacks, AWS Lambda, or GCP
                        Cloud Functions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch mt-32 max-md:max-w-full max-md:mr-1.5 max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                  <div className="flex flex-col max-md:max-w-full max-md:mt-3.5">
                    <div className="text-slate-700 text-xl font-semibold leading-8 capitalize max-w-[477px] self-start">
                      Scale infinitely
                    </div>
                    <div className="text-slate-600 text-base leading-7 mt-3.5 self-start max-md:max-w-full">
                      Every deployment is a zero-downtime deployment without you
                      needing to choose custom configurations. You can easily
                      configure auto-scaling, resource limits, and health-check
                      URL to further optimize application uptime.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                  <Image
                    loading="lazy"
                    src="/assets/Meter.png"
                    alt="Hero Image"
                    width={200}
                    height={200}
                    // unoptimized={true}
                    className="aspect-[2.29] object-cover object-center w-[300px] overflow-hidden max-w-full my-auto max-md:mt-5"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col mt-2 max-md:mt-5">
                    <div className="flex w-[156px] max-w-full items-start gap-3 self-start">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.0434782608695652] flex-1 pt-1.5 pb-11 px-5">
                        <Image
                          loading="lazy"
                          src="/assets/Box.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className=" h-full object-cover object-center w-full overflow-hidden self-center"
                        />
                      </div>
                      <div className="flex-col overflow-hidden relative flex aspect-[1.0434782608695652] flex-1 pt-1.5 pb-11 px-5">
                        <Image
                          loading="lazy"
                          src="/assets/Box.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className=" h-full object-cover object-center w-full overflow-hidden self-center"
                        />
                      </div>
                    </div>
                    <div className="flex w-[154px] max-w-full items-start gap-2.5 self-end">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.0434782608695652] flex-1 pt-1.5 pb-11 px-5">
                        <Image
                          loading="lazy"
                          src="/assets/Box.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className=" h-full object-cover object-center w-full overflow-hidden self-center"
                        />
                        <Image
                          loading="lazy"
                          src="/assets/Box.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className=" h-full object-cover object-center w-full overflow-hidden self-center"
                        />
                      </div>
                      <div className="flex-col overflow-hidden relative flex aspect-[1.0434782608695652] flex-1 pt-1 pb-11 px-5">
                        <Image
                          loading="lazy"
                          src="/assets/Box.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className=" h-full object-cover object-center w-full overflow-hidden self-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center flex w-[84px] max-w-full flex-col mt-56 max-md:mt-10">
              <div className="justify-center text-zinc-800 text-center text-4xl font-semibold leading-10 self-center">
                03
              </div>
              <Image
                loading="lazy"
                src="/assets/line-38.svg"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className="aspect-[8.4] object-cover object-center w-full stroke-[2px] stroke-blue-700 overflow-hidden self-stretch grow mt-2.5"
              />
            </div>
            <div className="self-center flex w-full max-w-[969px] flex-col mt-24 max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-center text-2xl font-semibold leading-10 capitalize self-center max-w-[507px] -ml-11">
                Visibility into costs and metrics
              </div>
              <div className="text-slate-600 text-center text-base leading-7 mt-2 self-start max-md:max-w-full">
                Automatically track resource costs, across clouds, on every
                change. Visualize k8s pod metrics - CPU, Network, and Memory.
              </div>
              <div className="flex w-[945px] max-w-full items-start justify-between gap-[15rem] mt-16 self-end max-md:flex-wrap max-md:mt-10">
                <div className="self-stretch flex flex-col">
                  <div className="justify-center text-blue-500 text-center text-xs font-bold leading-5 capitalize bg-violet-100 w-[54px] max-w-full pl-3.5 pr-3 py-1.5 rounded-2xl border-[0.5px] border-solid border-blue-500 self-end whitespace-nowrap">
                    -23%
                  </div>
                  <Image
                    loading="lazy"
                    src="/assets/Grow.png"
                    alt="Hero Image"
                    width={200}
                    height={200}
                    // unoptimized={true}
                    className="aspect-[0.95] object-cover object-center w-full overflow-hidden self-stretch mr-[2rem]"
                  />

                  <div className="z-[1] flex w-[121px] max-w-full items-start gap-2 self-start max-md:ml-2.5">
                    <Image
                      loading="lazy"
                      src="/assets/CloudAws.svg"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      // unoptimized={true}
                      className="aspect-square object-cover object-center w-[25px] overflow-hidden self-stretch max-w-full"
                    />

                    <div className="text-slate-700 text-right text-sm font-semibold leading-6 capitalize my-auto">
                      Total - $1272
                    </div>
                  </div>
                </div>
                <div className="self-center flex flex-col my-auto max-md:max-w-full">
                  <div className="text-slate-700 text-xl font-semibold leading-8 capitalize max-w-[515px] self-start max-md:max-w-full">
                    Customizable cost dashboards and reports
                  </div>
                  <div className="text-slate-600 text-base leading-7 mt-3.5 self-start max-md:max-w-full">
                    Stay on top of your cloud spending with custom cost
                    dashboards and reports — sort, filter, and group by your
                    various accounts, resources, and cloud regions.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex grow flex-col mr-3.5 mt-24 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
              <div className="w-[897px] max-w-full self-start">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col mt-3 max-md:max-w-full max-md:mt-10">
                      <div className="text-slate-700 text-xl font-semibold leading-8 capitalize max-w-[477px] self-start">
                        Preview infra costs
                      </div>
                      <div className="text-slate-600 text-base leading-7 mt-5 self-start max-md:max-w-full">
                        See the cost of a specific resource while choosing it
                        (before provisioning). It saves you the hassle of
                        searching through the complex pricing pages of your
                        cloud provider or tools.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                    <Image
                      loading="lazy"
                      src="/assets/Eye.svg"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      // unoptimized={true}
                      className="aspect-[1.2] ml-10 object-cover object-center w-full overflow-hidden grow max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
              <div className="text-slate-700 text-xl font-semibold leading-8 capitalize self-center max-w-[477px] ml-[23rem] mt-14 max-md:mt-10">
                Observability from day one
              </div>
              <div className="self-stretch max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
                    <Image
                      loading="lazy"
                      src="/assets/Bar.png"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      // unoptimized={true}
                      className="aspect-[1.42] object-cover object-center w-full overflow-hidden grow max-md:mt-1.5"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <Image
                      loading="lazy"
                      src="/assets/People.svg"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      // unoptimized={true}
                      className="aspect-[1.88] object-cover object-center w-[203px] overflow-hidden max-w-full mt-7 max-md:mt-8"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="text-slate-600 text-base leading-7 max-w-[550px] my-auto max-md:max-w-full max-md:mt-8">
                      Comes with built-in Kubernetes pod metrics. Easily plug in
                      monitoring and observability tools of your choice, such as
                      Grafana/Loki, DataDog, Prometheus, and more. Stay on top
                      of your application metrics from day 1.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-[20px] self-stretch flex w-full flex-col pt-32 pb-12 px-5 max-md:max-w-full">
          <div className="text-slate-700 text-center text-5xl font-semibold leading-[61.6px] capitalize self-center max-w-[562px] max-md:max-w-full">
            See our success stories
          </div>
          <div className="self-center w-full max-w-[1320px] mt-24 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[4%] max-md:w-full max-md:ml-0">
                <Image
                  loading="lazy"
                  src="/assets/LeftArrow.svg"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  // unoptimized={true}
                  className="aspect-square object-cover object-center w-[46px] overflow-hidden max-w-full my-auto max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[92%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[14%] max-md:w-full max-md:ml-0">
                        <Image
                          loading="lazy"
                          src="/assets/Quote.png"
                          alt="Hero Image"
                          width={200}
                          height={200}
                          // unoptimized={true}
                          className="aspect-[0.67] object-cover object-center w-full fill-blue-700 overflow-hidden grow"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[86%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="bg-white bg-opacity-10 flex grow flex-col w-full mx-auto pb-5 px-5 rounded-none max-md:max-w-full">
                          <div className="self-center w-[877px] max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                              <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col mt-8 max-md:max-w-full max-md:mt-10">
                                  <div className="text-zinc-800 text-lg leading-7 max-md:max-w-full">
                                    There are many variations of passages of
                                    Lorem Ipsum available
                                    <br />
                                    but the majority have sufferg alteration in
                                    some form, by injected humour, or randomised
                                    words which don't look even slightly
                                    believable. If you are going to use a
                                    passage.
                                  </div>{" "}
                                  <div className="text-zinc-800 text-right text-xl font-semibold leading-8 mt-2 max-md:max-w-full">
                                    <span className="">-</span>
                                    <span className="font-semibold">
                                      Abcdefgh Ijklmnop
                                      <br />
                                    </span>
                                    <span className="">Frontend Engineer</span>
                                  </div>
                                </div>
                              </div>{" "}
                              <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                                <Image
                                  loading="lazy"
                                  src="/assets/Circle.png"
                                  alt="Hero Image"
                                  width={200}
                                  height={200}
                                  // unoptimized={true}
                                  className="aspect-[0.77] object-cover object-center w-[140px] overflow-hidden max-w-full max-md:mt-10"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <Image
                    loading="lazy"
                    src="/assets/Pagination.svg"
                    alt="Hero Image"
                    width={200}
                    height={200}
                    // unoptimized={true}
                    className="aspect-square object-cover object-center w-[60px] justify-center items-center overflow-hidden self-center max-w-full grow mt-2.5 "
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[4%] ml-5 max-md:w-full max-md:ml-0">
                <Image
                  loading="lazy"
                  src="/assets/LeftArrow.svg"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  // unoptimized={true}
                  className="aspect-square object-cover object-center w-[46px] rotate-180 overflow-hidden max-w-full my-auto max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
