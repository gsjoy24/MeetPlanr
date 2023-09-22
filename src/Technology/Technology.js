import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/container';
import img1 from '@/assets/solutions/competitive.png';
import img2 from '@/assets/solutions/img13.png';
import img3 from '@/assets/solutions/Chorus.jpg';
import img4 from '@/assets/solutions/meetings.png';
import img5 from '@/assets/solutions/follow-up.png';

const TechnologyPage = () => {
	return (
      <div>
         <Container>
            <section className="mt-16">
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
            {/* Section title */}
                  <div>
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        MeetPlanr FOR TECH Industry
                     </h3>
                     <p className="text-4xl lg:text-5xl text-[#0B3558] md:w-[600px] my-6 font-bold leading-10">
                        The competitive advantage of scheduling for tech
                        businesses
                     </p>
                     <p className="text-[19px] text-[#5A7795] md:w-[465px] mb-10">
                        With scheduling speed and personalisation, you can
                        generate new revenue opportunities, close more
                        transactions, increase ARR more quickly, and meet team
                        milestones.
                     </p>
                     <div className="sm:flex-row flex flex-col justify-center md:justify-start gap-3">
                        <Link
                           href="/my-account"
                           data-testid="createEvent"
                           className="border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-[16px] font-semibold flex justify-center text-white rounded-lg py-3 px-6"
                        >
                           Create event
                        </Link>
                        <Link
                           href="/sign-up"
                           data-testid="UserSignUp"
                           className="border border-[#465AF7] text-[16px] font-semibold text-[#465AF7] bg-white hover:bg-[#e4ecf7] flex justify-center hover:border-[#465AF7] rounded-lg py-3 px-6"
                        >
                           Sign up for free
                        </Link>
                     </div>
                  </div>

                  <div>
                     <Image
                        src={img1}
                        alt="Marketing Image 1"
                        data-testid="image1"
                     />
                  </div>
               </div>
            </section>

            <section className="mt-28">
               <div className="pb-14 text-center">
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     MeetPlanr OVERVIEW
                  </h3>
                  <h1 className="text-3xl lg:text-[41px] text-[#0B3558] lg:w-[840px] mx-auto my-6 font-bold">
                     Create the proper connections out in the appropriate ways
                  </h1>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div className="md:mt-14">
                     <p className="text-2xl lg:text-3xl text-[#0B3558] md:w-[590px] my-6 font-bold leading-10">
                        With MeetPlanr, CallRail boosted meeting conversions and
                        increased contract closings
                     </p>

                     <div className="md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-12 mx-auto mt-12 text-center">
                        <div className="mx-auto">
                           <p className="text-5xl text-[#465AF7] font-bold">
                              3x
                           </p>
                           <p className="text-lg text-[#5A7795] mt-5">
                              Sales conversion rate
                           </p>
                        </div>
                        <div className="mx-auto">
                           <p className="text-5xl text-[#465AF7] font-bold">
                              165k
                           </p>
                           <p className="text-lg text-[#5A7795] mt-5">
                              Cost savings
                           </p>
                        </div>
                        <div className="mx-auto">
                           <p className="text-5xl text-[#465AF7] font-bold">
                              4,510
                           </p>
                           <p className="text-lg text-[#5A7795] mt-5">
                              Hours reclaimed
                           </p>
                        </div>
                     </div>
                  </div>

                  <div>
                     <Image
                        src={img2}
                        alt="Marketing Image 2"
                        data-testid="image2"
                     />
                  </div>
               </div>
            </section>

            <section className="py-20">
               <div className="pb-14 text-center">
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     Why MeetPlanr
                  </h3>
                  <h1 className="text-3xl lg:text-[41px] text-[#0B3558] lg:w-[840px] mx-auto my-6 font-bold">
                     A more effective way to attract clients, win over
                     customers, and select top talent
                  </h1>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div
                     data-aos="fade-up"
                     data-aos-duration="900"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image
                        src={img3}
                        alt="Calendar1"
                        data-testid="calendarImg1"
                     />
                  </div>

                  <div data-aos="fade-up" data-aos-duration="600">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        Don't MISS AN OPPORTUNITY FOR REVENUE
                     </h3>
                     <p className="text-3xl lg:text-[30px] text-[#0B3558] md:w-[650px] lg:w-[420px] my-6 font-semibold leading-8">
                        Create a competitive advantage to land more business
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
                        To fill your pipeline with high-value prospects,
                        schedule meetings immediately from your outreach email,
                        LinkedIn message, or website. To advance prospects, then
                        make every encounter and follow-up simpler. Set up
                        meetings with decision-makers to demonstrate how you can
                        satisfy their needs, introduce prospects to your first
                        available SDR or AE, and gather your specialists to
                        co-host product demonstrations.
                     </p>
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-24">
                  <div data-aos="fade-up" data-aos-duration="600">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        EXPANSION AND RETENTION OF DRIVERS
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[520px] lg:w-[420px] my-6 font-semibold leading-8">
                        Increase the client experience to raise ARR
                        and retention.
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-10 leading-8">
                        Showcase your products value through winning over
                        devoted customers. Allow customers to self-serve and
                        schedule calls for support and training. Get your
                        customer and account team scheduled for significant
                        occasions like QBRs and renewals with just one email.
                     </p>
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="900"
                     className="md:order-last"
                  >
                     <Image
                        src={img4}
                        alt="Calendar2"
                        data-testid="calendarImg2"
                        className="lg:-mt-12"
                     />
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-24">
                  <div
                     data-aos="fade-up"
                     data-aos-duration="900"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image
                        src={img5}
                        alt="Calendar3"
                        data-testid="calendarImg3"
                     />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-12"
                  >
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        Simplify the selection procedure
                     </h3>
                     <p className="text-3xl lg:text-[30px] text-[#0B3558] md:w-[650px] lg:w-[420px] my-6 font-semibold leading-8">
                        To attract the best IT talent, develop the best hiring
                        procedures.
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
                        More effectively screen and interview candidates,
                        combining personalisation and automation where it
                        matters. Make it such that top applicants accept your
                        offers and tell their network of connections about your
                        business.
                     </p>
                  </div>
               </div>
            </section>
         </Container>
      </div>
   );
};

export default TechnologyPage;
