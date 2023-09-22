import React from "react";
import Image from "next/image";
import Container from "@/components/container";
import img1 from "@/assets/time-saving/Calendar_connectionss.png";
import img2 from "@/assets/time-saving/confirmations.png";
import img3 from "@/assets/time-saving/Schedule-date.png";
import img4 from "@/assets/time-saving/Calender-time.png";
import img5 from "@/assets/time-saving/scheduled.png";

const TimeSaving = () => {
   return (
      <div className="bg-[#F8F8F8] pt-12 pb-16">
         <Container>
            {/*Section title */}
            <div className="text-center mb-14">
               <h1 className="md:text-4xl lg:text-5xl text-[#0B3558] lg:w-[760px] mx-auto my-8 text-3xl font-bold">
                  Discover time-saving solutions to boost team output
               </h1>
               <p className="text-[18px] text-[#5A7795]">
                  Select your team to customize your experience.
               </p>
            </div>

            {/* Time saving solutions cards */}
            <div>
               <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-5">
                  <div>
                     <div className="h-4 bg-[#66DC90] rounded-t-3xl border-0"></div>
                     <div className="border border-t-0 hover:border-[#a5aef5] rounded-b-3xl shadow-lg">
                        <div className="p-6 pb-6">
                           <p className="text-2xl text-[#0B3558] font-semibold">
                              Offer available in real-time
                           </p>
                           <p className="text-[15px] text-[#5A7795] mt-2">
                              Connect up to six calendars so you never have to
                              worry about getting double booked.
                           </p>
                        </div>
                        <div className="rounded-md">
                           <Image
                              src={img1}
                              alt=""
                              className="px-4 pb-6 pt-0 h-64"
                           />
                        </div>
                     </div>
                  </div>

                  <div>
                     <div className="h-4 bg-[#9460e7] rounded-t-3xl border-0"></div>
                     <div className="border border-t-0 hover:border-[#c4a5f7] rounded-b-3xl shadow-lg">
                        <div className="p-6 pb-6">
                           <p className="text-2xl text-[#0B3558] font-semibold">
                              Automate communications
                           </p>
                           <p className="text-[15px] text-[#5A7795] mt-2">
                              Automate meeting communications for better
                              attendance and efficiency.
                           </p>
                        </div>
                        <div className="rounded-xl">
                           <Image
                              src={img2}
                              alt=""
                              className="px-4 py-3 pt-0 h-64"
                           />
                        </div>
                     </div>
                  </div>

                  <div>
                     <div className="h-4 bg-[#2b5e99] rounded-t-3xl border-0"></div>
                     <div className="border border-t-0 hover:border-[#a4caf5] rounded-b-3xl shadow-lg">
                        <div className="p-6 pb-6">
                           <p className="text-2xl text-[#0B3558] font-semibold">
                              Instant meeting planning
                           </p>
                           <p className="text-[15px] text-[#5A7795] mt-2">
                              Qualify, route, and schedule meetings with the
                              right person or resource using MeetPlanr.
                           </p>
                        </div>
                        <div>
                           <Image src={img3} alt="" className="p-6 pt-0 h-64" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-14">
               <div className="md:grid-cols-2 lg:grid-cols-2 grid gap-5">
                  <div>
                     <div className="h-4 bg-[#56A1EA] rounded-t-3xl border-0"></div>
                     <div className="border border-t-0 hover:border-[#9fd5f7] rounded-b-3xl shadow-lg">
                        <div className="p-6 pb-6">
                           <p className="text-2xl text-[#0B3558] font-semibold">
                              Simplify appointment scheduling with us
                           </p>
                           <p className="text-[15px] text-[#5A7795] mt-2">
                              Book more meetings with less effort by embedding
                              MeetPlanr anywhere on your website and adding
                              available time to emails.
                           </p>
                        </div>
                        <div className="rounded-md">
                           <Image
                              src={img4}
                              alt=""
                              className="p-6 pt-0 lg:h-96"
                           />
                        </div>
                     </div>
                  </div>

                  <div>
                     <div className="h-4 bg-[#BFB0FF] rounded-t-3xl border-0"></div>
                     <div className="border border-t-0 hover:border-[#c4b8fc] rounded-b-3xl shadow-lg">
                        <div className="p-6 pb-6">
                           <p className="text-2xl text-[#0B3558] font-semibold">
                              Customize exactly how you booked
                           </p>
                           <p className="text-[15px] text-[#5A7795] mt-2">
                              Stay in control of your MeetPlanr with granular
                              availability tools, scheduling rules, buffers, and
                              more.
                           </p>
                        </div>
                        <div className="rounded-xl">
                           <Image
                              src={img5}
                              alt=""
                              className="p-6 pt-0 lg:h-96"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default TimeSaving;
