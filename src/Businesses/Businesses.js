import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/container';
import img1 from '@/assets/solutions/attendance.png';
import img2 from '@/assets/solutions/admin-coaching.png';
import img3 from '@/assets/solutions/reporting.png';
import img4 from '@/assets/solutions/simplify-image.jpg';
import img5 from '@/assets/solutions/dashboard.png';
import img6 from '@/assets/solutions/PWIT_Inpage.png';
import { BiRightArrowAlt } from 'react-icons/bi';

const Businesses = () => {
	return (
      <div>
         {/* Section start */}
         <section className="pt-16 pb-8 bg-[#F7FAFF]">
            <Container>
               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div className="lg:mt-10">
                     <div>
                        <h3 className="text-[#465AF7] font-semibold uppercase">
                           MEETPLANR FOR TEAMS & INDUSTRIES
                        </h3>
                        <p className="text-4xl lg:text-5xl text-[#0B3558] md:w-[550px] my-6 font-semibold leading-10">
                           Enhanced planning for the entire team
                        </p>
                        <p className="text-[18px] text-[#5A7795] md:w-[550px] mb-10 leading-8">
                           Scheduling automation enables everyone to achieve
                           team goals more quickly, whether they are related to
                           sales income, the hiring pipeline, or customer
                           retention.
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
                        alt="Business_img1"
                        data-testid="image1"
                        className="lg:-mt-16"
                     />
                  </div>
               </div>
            </Container>
         </section>

         <Container>
            {/* Section start */}
            <section className="py-12">
               <div
                  className="pb-14 text-center"
                  data-aos="fade-up"
                  data-aos-duration="300"
               >
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     HOW MeetPlanr WORKS FOR TEAMS
                  </h3>
                  <h1 className="text-4xl lg:text-5xl text-[#0B3558] lg:w-[700px] mx-auto my-6 font-semibold">
                     The innovator in group scheduling
                  </h1>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-20">
                  <div
                     data-aos="zoom-in"
                     data-aos-duration="900"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image
                        src={img2}
                        alt="Business_img2"
                        data-testid="image2"
                        className="lg:mt-10"
                     />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-8"
                  >
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[650px] lg:w-[420px] my-6 font-semibold leading-8">
                        As a group schedule meetings
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
                        Involving collaborative scheduling, you may schedule
                        meetings with the entire team, a single team member, or
                        based on more intricate routing logic, ensuring that the
                        appropriate team members are always available.
                     </p>
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-20">
                  <div data-aos="fade-up" data-aos-duration="600">
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[500px] lg:w-[540px] my-6 font-semibold leading-8">
                        Set up scheduling to raise team output
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-10 leading-8">
                        Automated scheduling removes time-consuming tasks,
                        allowing your team to concentrate on more important
                        responsibilities. You may enable your team to operate
                        more effectively by providing them with useful
                        information into their scheduled activities and
                        integrations with their preferred tools.
                     </p>
                  </div>

                  <div
                     data-aos="zoom-in"
                     data-aos-duration="900"
                     className="md:order-last"
                  >
                     <Image
                        src={img3}
                        alt="Business_img3"
                        data-testid="image3"
                        className="lg:-mt-8"
                     />
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-24">
                  <div
                     data-aos="zoom-in"
                     data-aos-duration="900"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image
                        src={img4}
                        alt="Business_img4"
                        data-testid="image4"
                        className="w-[520px]"
                     />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-5"
                  >
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[650px] lg:w-[540px] my-6 font-semibold leading-8">
                        To achieve the optimum client experience, establish
                        consistency
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
                        Meeting best practices may be automatically implemented
                        across your team, from pre-call email questions to
                        established Event Type information. These templates and
                        procedures promote interaction and guarantee regular,
                        expert communications with your clients and candidates.
                     </p>
                  </div>
               </div>
            </section>
         </Container>

         {/* Section start */}
         <section className="py-12 bg-[#f8f8f8]">
            <Container>
               <div
                  className="pb-14 text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
               >
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     FOR ENTERPRISE MEETING PLAN
                  </h3>
                  <p className="text-4xl lg:text-5xl text-[#0B3558] lg:w-[890px] mx-auto my-6 font-semibold">
                     Most Fortune 325 companies use MeetPlanr for scheduling
                  </p>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-5 mb-28">
                  <div data-aos="fade-up" data-aos-duration="600">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        A UNIQUE CENTRAL PLACE
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[500px] lg:w-[540px] my-6 font-bold leading-8">
                        Admin Management
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-8 leading-8">
                        From a single location, you can easily manage users and
                        scheduling processes for your firm.
                     </p>
                     <Link
                        href="/dashboard"
                        className="text-[#465AF7] hover:text-[#0B3558] font-semibold flex items-center group"
                     >
                        <span className="text-xl">Learn more</span>
                        <span className="group-hover:ml-2 mt-2 ml-1 text-2xl duration-200">
                           <BiRightArrowAlt />
                        </span>
                     </Link>
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="800"
                     className="md:order-last"
                  >
                     <Image
                        src={img5}
                        alt="Business_img5"
                        data-testid="image5"
                        className="md:-mt-3"
                     />
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 my-10">
                  <div data-aos="fade-up" data-aos-duration="800">
                     <Image
                        src={img6}
                        alt="Business_img6"
                        data-testid="image6"
                     />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-20"
                  >
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        PER USER, Create 10 Events
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[500px] lg:w-[540px] my-6 font-bold leading-8">
                        MeetPlanr for Business
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-8 leading-8">
                        Connect up to 10 events for each user to monitor
                        availability in real-time.
                     </p>
                     <Link
                        href="/pricing"
                        data-testid="learnMore"
                        className="text-[#465AF7] hover:text-[#0B3558] font-semibold flex items-center group"
                     >
                        <span className="text-xl">Learn more</span>
                        <span className="group-hover:ml-2 mt-2 ml-1 text-2xl duration-200">
                           <BiRightArrowAlt />
                        </span>
                     </Link>
                  </div>
               </div>
            </Container>
         </section>
      </div>
   );
};

export default Businesses;
