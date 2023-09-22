import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import img1 from "@/assets/solutions/customer.png";
import img2 from "@/assets/solutions/Culture-Amp.png";
import img3 from "@/assets/solutions/new_relic.png";
import img4 from "@/assets/solutions/stuart.png";
import img5 from "@/assets/solutions/video-meeting.gif";
import img6 from "@/assets/solutions/messaki_preview.png";
import img7 from "@/assets/solutions/reminders.png";
import img8 from "@/assets/solutions/meetings-video.png";
import { PiSealCheck } from "react-icons/pi";

const CustomerSuccess = () => {
   return (
      <div>
         <Container>
            {/* Section start */}
            <section className="mt-28">
               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div className="lg:mt-10">
                     <div>
                        <h3 className="text-[#465AF7] font-semibold uppercase">
                           CUSTOMER SUCCESS STORIES
                        </h3>
                        <p className="text-4xl lg:text-[39px] text-[#0B3558] md:w-[550px] my-6 font-bold leading-10">
                           Customer success is our success
                        </p>
                        <p className="text-[18px] text-[#5A7795] md:w-[550px] mb-10">
                           Discover how businesses like yours use Intercom to
                           acquire, engage, and support customers. Ensure
                           customers can reach you and stay connected at every
                           stage of their journey to improve their experience
                           and increase satisfaction.
                        </p>
                     </div>
                     <Link
                        href="/my-account"
                        data-testid="createEvent"
                        className="border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-[16px] font-semibold text-white rounded-lg mr-5 py-3 px-6"
                     >
                        Create event
                     </Link>
                  </div>

                  <div>
                     <Image
                        src={img1}
                        alt="SuccessImg1"
                        data-testid="Image1"
                        className="lg:w-[550px] lg:-mt-16"
                     />
                  </div>
               </div>
            </section>

            {/* Section start */}
            <section className="mt-40 mb-16">
               <div className="lg:grid-cols-3 lg:text-start grid grid-cols-1 gap-16 text-center">
                  <div className="lg:pb-0 lg:border-r-2 lg:border-b-transparent pb-16 border-b-2">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">436</span>
                        <span className="text-[#0B3558]">%</span>
                     </p>
                     <p className="text-[18px] text-[#5A7795] lg:w-[310px] pt-3 pb-2">
                        Return using MeetPlanr, which includes administrative
                        savings
                     </p>
                     <div className="lg:justify-normal flex justify-center">
                        <Image
                           src={img2}
                           alt="Doordash"
                           data-testid="company1"
                           className="w-44"
                        />
                     </div>
                  </div>

                  <div className="lg:pb-0 lg:border-r-2 lg:border-b-transparent pb-16 border-b-2">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">45</span>
                        <span className="text-[#0B3558]">%</span>
                     </p>
                     <p className="text-[18px] text-[#5A7795] lg:w-[260px] pt-3 pb-8 lg:pb-9">
                        Improved client loyalty
                     </p>
                     <div className="lg:justify-normal flex justify-center">
                        <Image
                           src={img3}
                           alt="Twilio"
                           data-testid="company2"
                           className="w-40"
                        />
                     </div>
                  </div>

                  <div>
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">57</span>
                        <span className="text-[#0B3558]">%</span>
                     </p>
                     <p className="text-[18px] text-[#5A7795] lg:w-[260px] pt-3 pb-3">
                        Less emails are required for scheduling project start
                     </p>
                     <div className="lg:justify-normal flex justify-center">
                        <Image
                           src={img4}
                           alt="Stuart"
                           data-testid="company3"
                           className="w-28"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </Container>

         {/* Section start */}
         <section className="py-16 mt-24 bg-[#FBFBFB]">
            <Container>
               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div data-aos="fade-up" data-aos-duration="600">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        KEPT AND GROWN
                     </h3>
                     <p className="text-4xl lg:text-[35px] text-[#0B3558] md:w-[500px] mt-6 mb-7 font-bold leading-10">
                        For long-lasting relationships, provide value
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[550px] mb-10 leading-8">
                        It matters how you two initially connect. Utilize
                        meeting time to discuss and meet your clients' needs,
                        and encourage communication and trust-building with
                        them.
                     </p>
                  </div>

                  <div>
                     <Image
                        src={img5}
                        alt="SuccessImg2"
                        data-testid="Image2"
                        className="lg:w-[580px]"
                     />
                  </div>
               </div>
            </Container>
         </section>

         {/* Section start */}
         <section className="bg-[#F7FAFF] py-20">
            <Container>
               <div
                  className="pb-14 text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
               >
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     EASY SCHEDULING AHEAD
                  </h3>
                  <h1 className="text-4xl lg:text-5xl text-[#0B3558] lg:w-[840px] mx-auto my-6 font-semibold">
                     Features of MeetPlanr for client success
                  </h1>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-10"
                  >
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        ACCESS A COMPETITIVE EDGE
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[520px] lg:w-[420px] my-6 font-semibold leading-8">
                        Deliver exemplary customer service
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[480px] mb-10 leading-8">
                        One-on-one check-ins are a great way to strengthen ties.
                        You should also collect your team for a team-wide
                        onboarding, invite a few clients over for training and
                        networking, set aside special time for a big renewal,
                        and distribute requests among the team members.
                     </p>
                  </div>

                  <div data-aos="zoom-in" data-aos-duration="800">
                     <Image
                        src={img6}
                        alt="SuccessImg3"
                        data-testid="Image3"
                        className="md:w-[500px] lg:-mt-20"
                     />
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-32">
                  <div
                     data-aos="zoom-in"
                     data-aos-duration="800"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image src={img7} alt="SuccessImg4" data-testid="Image4" />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-20"
                  >
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        EMBED MeetPlanr ANYWHERE
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[520px] lg:w-[420px] my-6 font-semibold leading-8">
                        Create a frictionless customer journey
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[480px] mb-10 leading-8">
                        Embed your sales reps’ individual MeetPlanr links into
                        any email marketing campaign, display ad, QR code, or
                        landing page, and skip the back and forth by offering
                        prospects the ability to book a meeting instantly.
                     </p>
                  </div>
               </div>

               <div className="lg:grid-cols-2 mt-28 grid grid-cols-1 gap-16">
                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-10"
                  >
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        GET INVOLVED AT EVERY STAGE OF THEIR Career
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[520px] lg:w-[420px] my-6 font-semibold leading-8">
                        Helping clients reach their objectives
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[480px] mb-10 leading-8">
                        Give customers the option to pick how they want to
                        communicate with your team using team pages, whether
                        they need technical help, have a question about pricing,
                        or need to schedule for users.
                     </p>
                  </div>

                  <div data-aos="zoom-in" data-aos-duration="800">
                     <Image
                        src={img8}
                        alt="SuccessImg5"
                        data-testid="Image5"
                        className="md:w-[500px] lg:-mt-10"
                     />
                  </div>
               </div>
            </Container>
         </section>

         {/* Section start */}
         <section className="my-10">
            <Container>
               <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
               >
                  <p className="text-[#465AF7] font-semibold uppercase">
                     FIND YOUR OWN WAY
                  </p>
                  <p className="md:text-4xl lg:text-5xl text-sky-950 my-8 text-4xl font-bold">
                     That’s not all
                  </p>
                  <p className="text-[18px] text-[#5A7795] lg:w-[710px] mx-auto mb-10">
                     Your day is now free for achievement because scheduling
                     issues and interruptions are not anymore an issue.
                  </p>
               </div>

               <div className="mt-20 mb-20">
                  <div className="md:grid-cols-3 grid grid-cols-1 gap-16">
                     <div
                        className="border rounded-tr-3xl rounded-bl-3xl p-5 space-y-4 shadow-md shadow-[#cacffc]"
                        data-aos="fade-up"
                        data-aos-duration="700"
                     >
                        <PiSealCheck className="text-4xl text-[#465AF7]" />
                        <p className="text-xl text-[#0B3558] font-semibold">
                           Taking charge of your accessibility
                        </p>
                        <p className="text-[#5A7795]">
                           Use buffers before and after meetings and daily
                           limitations to restrict the number of meetings you
                           attend
                        </p>
                     </div>

                     <div
                        className="border rounded-tr-3xl rounded-bl-3xl p-5 space-y-4 shadow-md shadow-[#cacffc]"
                        data-aos="fade-up"
                        data-aos-duration="900"
                     >
                        <PiSealCheck className="text-4xl text-[#465AF7]" />
                        <p className="text-xl text-[#0B3558] font-semibold">
                           Use custom scheduling
                        </p>
                        <p className="text-[#5A7795]">
                           For a more personalized experience, remove the
                           MeetPlanr branding and add your branding to your
                           schedule pages
                        </p>
                     </div>

                     <div
                        className="border rounded-tr-3xl rounded-bl-3xl p-5 space-y-4 shadow-md shadow-[#cacffc]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                     >
                        <PiSealCheck className="text-4xl text-[#465AF7]" />
                        <p className="text-xl text-[#0B3558] font-semibold">
                           Teams base meeting
                        </p>
                        <p className="text-[#5A7795]">
                           Allow your invitees to choose from a variety of
                           meeting possibilities by presenting them with the
                           options
                        </p>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
      </div>
   );
};

export default CustomerSuccess;
