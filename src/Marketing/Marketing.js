import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import img1 from "@/assets/solutions/img11.png";
import img2 from "@/assets/solutions/Doordash.png";
import img3 from "@/assets/solutions/Twilio.png";
import img4 from "@/assets/solutions/Virtu.png";
import img5 from "@/assets/solutions/img6.png";
import img6 from "@/assets/solutions/img2.png";

const Marketing = () => {
   return (
      <div>
         <Container>
            <section className="mt-24">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        MARKETING TEAMS
                     </h3>
                     <h1 className="text-4xl lg:text-5xl text-[#0B3558] md:w-[420px] my-6 font-semibold">
                        Convert leads to meetings – faster
                     </h1>
                     <p className="text-[18px] text-[#5A7795] md:w-[465px] mb-10">
                        Create a better experience for high-value prospects,
                        automate the handoff to Sales, and fill your pipeline
                        with quality leads.
                     </p>
                     <div>
                        <button className="border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-white rounded-lg font-semibold mr-5 py-3 px-6">
                           Create event
                        </button>
                        <Link href="/sign-up" className="border border-[#465AF7] text-[#465AF7] bg-white hover:bg-[#e4ecf7] hover:border-[#465AF7] rounded-lg font-semibold py-3 px-6">
                           Sign up for free
                        </Link>
                     </div>
                  </div>

                  <div>
                     <Image src={img1} alt="Marketing Image" />
                  </div>
               </div>
            </section>

            <section className="my-40">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-center lg:text-start">
                  <div className="pb-16 border-b-2 lg:pb-0 lg:border-r-2 lg:border-b-transparent">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">50</span>
                        <span className="text-[#0B3558]">%</span>
                     </p>
                     <p className="text-[21px] text-[#5A7795] lg:w-[260px] pt-3 pb-8">
                        Increase in sales-qualified opportunities through
                        website
                     </p>
                     <div className="flex justify-center lg:justify-normal">
                        <Image src={img2} alt="Doordash" className="w-44" />
                     </div>
                  </div>

                  <div className="pb-16 border-b-2 lg:pb-0 lg:border-r-2 lg:border-b-transparent">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">3-4</span>
                        <span className="text-[#0B3558]">X</span>
                     </p>
                     <p className="text-[21px] text-[#5A7795] lg:w-[260px] pt-3 pb-8 lg:pb-[92px]">
                        Higher lead conversion
                     </p>
                     <div className="flex justify-center lg:justify-normal">
                        <Image src={img3} alt="Twilio" className="w-24" />
                     </div>
                  </div>

                  <div className="">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">67</span>
                        <span className="text-[#0B3558]">%</span>
                     </p>
                     <p className="text-[21px] text-[#5A7795] lg:w-[260px] pt-3 pb-8">
                        Conversion from demo requested to demo scheduled
                     </p>
                     <div className="flex justify-center lg:justify-normal">
                        <Image
                           src={img4}
                           alt="Marketing Image"
                           className="w-20"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </Container>

         <section className="bg-[#F7FAFF] py-20">
            <Container>
               <div className="text-center pb-14">
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     EASY SCHEDULING AHEAD
                  </h3>
                  <h1 className="text-4xl lg:text-5xl text-[#0B3558] lg:w-[840px] mx-auto my-6 font-semibold">
                     Calendly’s features for Marketing teams
                  </h1>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div data-aos="fade-up" data-aos-duration="800">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        IMPROVE CONVERSION RATES
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[520px] lg:w-[420px] my-6 font-semibold leading-8">
                        Schedule prospects directly from your marketing
                        campaigns
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[480px] mb-10 leading-8">
                        Instead of “contact us” or “learn more” as the
                        call-to-action in your marketing campaigns, why not
                        “book a meeting now?” Convert prospects at the height of
                        their interest and hand leads off to your sales team
                        automatically.
                     </p>
                  </div>

                  <div data-aos="fade-up" data-aos-duration="1000">
                     <Image src={img5} alt="Calender" />
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-32">
                  <div
                     data-aos="fade-up"
                     data-aos-duration="1000"
                     className="order-last md:order-last lg:order-first"
                  >
                     <Image src={img6} alt="Calender" />
                  </div>

                  <div data-aos="fade-up" data-aos-duration="800">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        EMBED CALENDLY ANYWHERE
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[520px] lg:w-[420px] my-6 font-semibold leading-8">
                        Create a frictionless customer journey
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[480px] mb-10 leading-8">
                        Embed your sales reps’ individual Calendly links into
                        any email marketing campaign, display ad, QR code, or
                        landing page, and skip the back and forth by offering
                        prospects the ability to book a meeting instantly.
                     </p>
                  </div>
               </div>
            </Container>
         </section>

         <section></section>
      </div>
   );
};

export default Marketing;
