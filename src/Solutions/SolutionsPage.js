import React from "react";
import Container from "@/components/container";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/solutions/img1.png";
import img2 from "@/assets/solutions/img3.png";

const SolutionsPage = () => {
   return (
      <div>
         <section>
            <div className="mt-16 text-center md:w-[650px] lg:w-[800px] w-full mx-auto">
               <h3 className="text-[#465AF7] font-semibold uppercase">
                  SOLUTIONS
               </h3>
               <h1 className="text-4xl lg:text-5xl text-sky-950 my-8 font-bold">
                  A scheduling automation solution for{" "}
                  <span className="text-[#465AF7]">every team</span>
               </h1>
               <p className="text-[21px] text-[#5A7795] mb-10">
                  Drive results, meeting by meeting. Calendly automates
                  scheduling so teams can focus on delivering results.
               </p>

               <button className="btn bg-[#465AF7] hover:bg-sky-950 text-white rounded-lg mr-5 px-6 capitalize tracking-widest">
                  Create Event
               </button>
            </div>
         </section>

         {/* Solutions by role */}
         <section className="bg-[#F7FAFF] rounded-2xl p-16 mt-16">
            <div>
               <h3 className="text-[#465AF7] font-semibold uppercase">
                  SOLUTIONS BY ROLE
               </h3>
               <h1 className="text-3xl lg:text-3xl text-sky-950 my-6 font-bold">
                  Solutions for every role
               </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div>
                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Sales
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Accelerate success at every stage of your sales cycle
                           and drive more revenue.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Recruiting
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Increase candidate pipeline and hire faster with
                           easier scheduling.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Customer Success
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Deliver better customer experience to improve
                           retention and growth.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Marketing
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Supercharge your lead gen to boost conversion rates
                           and drive more pipeline.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Revenue Operations
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Integrate best-in-class scheduling to keep every team
                           and opportunity connected.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Information Technology
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Centralize teams and reduce risk with
                           enterprise-grade security.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>
               </div>

               <div data-aos="fade-up" data-aos-duration="1000">
                  <Image src={img1} alt="Solutions image" />
               </div>
            </div>
         </section>

         {/* Solutions by industry */}
         <section className="bg-[#F7FAFF] rounded-2xl p-16 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div data-aos="fade-up" data-aos-duration="1000" className="md:order-last lg:order-first">
                  <Image src={img2} alt="Solutions image" />
               </div>

               <div>
                  <div>
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        SOLUTIONS BY INDUSTRY
                     </h3>
                     <h1 className="text-3xl lg:text-3xl text-sky-950 my-6 font-bold">
                        Solutions for any industry
                     </h1>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Financial Services
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Modernize your client experience, boost client
                           engagement, and improve productivity to grow your
                           business.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Education
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Boost student engagement, increase accessibility to
                           resources, and accelerate the admissions cycle.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Professional Services
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Provide an exceptional client experience, improve
                           team efficiency, and increase project profitability.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>

                  <div
                     tabIndex={0}
                     className="collapse collapse-plus rounded-md border border-base-300 bg-white mt-2"
                  >
                     <div className="collapse-title text-[14px] text-slate-600 font-semibold">
                        Technology
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Win more deals, increase retention, recruit top
                           talent, and connect your tech stack to reach your
                           full potential.
                        </p>
                        <p>
                           <a
                              href=""
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="text-white bg-[#0B3558] rounded-3xl mb-20">
               <div className="mt-20 text-center sm:w-[500px] md:w-[600px] lg:w-[800px] mx-auto py-14">
                  <p className="text-3xl lg:text-3xl my-8 font-bold tracking-widest">
                     Scheduling made easy
                  </p>
                  <p className="text-[17px] px-5 mb-10">
                     Drive more results for your team by optimizing your
                     scheduling processes, integrating with key tools, and
                     automating communications so you can connect with the right
                     people, faster.
                  </p>

                  <button className="btn bg-[#006BFF] hover:bg-sky-800 text-white border-none rounded-lg mr-5 px-6 capitalize tracking-widest">
                     Create Event
                  </button>
               </div>
            </div>

            <div>
               <p className="text-4xl font-extrabold">
                  <span className="text-[#0B3558]">Easy</span>
                  <span className="text-[#465AF7] ml-3">ahead</span>
               </p>
               <p className="text-[17px] text-[#5A7795] w-full md:w-[420px] mt-5 mb-16">
                  We take the work out of connecting with others so you can
                  accomplish more.
               </p>
            </div>
         </section>
      </div>
   );
};

export default SolutionsPage;
