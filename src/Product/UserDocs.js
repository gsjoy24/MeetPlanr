"use client";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { useEffect } from "react";
import img1 from "@/assets/product-image/event.png";
import img2 from "@/assets/product-image/Note-Software.png";
import img3 from "@/assets/product-image/open-notification.png";
import img4 from "@/assets/product-image/image3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from "@/components/container";

const UserDocs = () => {
   useEffect(() => {
      Aos.init({
         offset: 200,
         duration: 300,
         easing: "linear",
         delay: 100,
      });
   }, []);

   return (
      <section id="works" className="py-20 bg-[#FBFBFB]">
         <Container>
            <h3 className="text-[#00a4f8] font-semibold uppercase text-center mb-6">
               AN OVERVIEW OF MEETPLANR
            </h3>
            <SectionTitle title={"How MeetPlanr Works"}></SectionTitle>
            <div className="">
               <div className="md:grid-cols-2 grid items-center gap-10">
                  <div className="md:pr-8">
                     <h3 className="text-[#00a4f8] font-semibold uppercase">
                        STEP ONE
                     </h3>
                     <h2 className="my-6 text-4xl text-[#0B3558] font-bold">
                        Make a Scheduling Link
                     </h2>
                     <p className="leading-relaxed text-[18px] text-[#5A7795] lg:w-[470px]">
                        Sync your calendar, and MeetPlanr will try to help you
                        develop scheduling pages and schedule links depending on
                        your available times. Share the word about your
                        MeetPlanr link so that people may easily schedule time
                        with you.
                     </p>
                  </div>
                  <div data-aos="zoom-in" data-aos-duration="800" className="">
                     <Image src={img1} alt="docs image"></Image>
                  </div>
               </div>

               <div className="md:grid-cols-2 grid items-center gap-16 my-10">
                  <div className=" md:order-2">
                     <h3 className="text-[#00a4f8] font-semibold uppercase">
                        STEP TWO
                     </h3>
                     <h2 className="my-6 text-4xl text-[#0B3558] font-bold">
                        Use a team schedule
                     </h2>
                     <p className="leading-relaxed text-[18px] text-[#5A7795] lg:w-[470px]">
                        Scheduling links can be based on various event types and
                        regulations, such as 15-minute Google Meet calls or
                        30-minute in-person meetings. Include other team
                        members, assign the appropriate team members to the
                        meeting, and coordinate schedule needs.
                     </p>
                  </div>
                  <div
                     className="md:order-1"
                     data-aos="zoom-in"
                     data-aos-duration="800"
                  >
                     <Image src={img2} alt="docs image"></Image>
                  </div>
               </div>

               <div className="md:grid-cols-2 grid items-center gap-10 my-10">
                  <div className="md:pr-8">
                     <h3 className="text-[#00a4f8] font-semibold uppercase">
                        STEP THREE
                     </h3>
                     <h2 className="my-6 text-4xl text-[#0B3558] font-bold">
                        Meeting confirmation email
                     </h2>
                     <p className="leading-relaxed text-[18px] text-[#5A7795] lg:w-[470px]">
                        When creating a meeting, hosts and invitees are emailed
                        from MeetPlanr. Plus, send reminders, follow-up, and
                        connect your CRM, video conferencing, and even billing
                        platforms.
                     </p>
                  </div>
                  <div className="" data-aos="zoom-in" data-aos-duration="800">
                     <Image
                        src={img3}
                        alt="docs image"
                        className="md:mt-10"
                     ></Image>
                  </div>
               </div>

               <div className="md:grid-cols-2 grid items-center gap-16 my-10">
                  <div className="md:order-2">
                     <h3 className="text-[#00a4f8] font-semibold">STEP FOUR</h3>
                     <h2 className="my-6 text-4xl text-[#0B3558] font-bold">
                        Boost to the entire business
                     </h2>
                     <p className="leading-relaxed text-[18px] text-[#5A7795] lg:w-[470px]">
                        MeetPlanr is frequently used to schedule meetings with
                        clients, customers, recruiters, and more. With meeting
                        analytics, as well as enterprise-ready admin, security,
                        and IT-focused features, it is excellent to schedule
                        meetings for your entire company.
                     </p>
                  </div>
                  <div
                     className="md:order-1"
                     data-aos="zoom-in"
                     data-aos-duration="800"
                  >
                     <Image
                        src={img4}
                        alt="docs image"
                        className="md:h-[500px]"
                     ></Image>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default UserDocs;
