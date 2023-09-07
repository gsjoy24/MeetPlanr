import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import img1 from "@/assets/solutions/attendance.png";
import img2 from "@/assets/solutions/admin-coaching.png";
import img3 from "@/assets/solutions/reporting.png";
import img4 from "@/assets/solutions/simplify-image.jpg";
import img5 from "@/assets/solutions/manage-users.png";
import img6 from "@/assets/solutions/PWIT_Inpage.png";
import { BiRightArrowAlt } from "react-icons/bi";

const Businesses = () => {
   return (
      <div>
         <section className="pt-28 pb-8 bg-[#F7FAFF]">
            <Container>
               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div className="lg:mt-10">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        MeetPlanr FOR TEAMS & COMPANIES
                     </h3>
                     <p className="text-4xl lg:text-5xl text-[#0B3558] md:w-[550px] my-6 font-bold leading-10">
                        Enhanced planning for the entire team
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[550px] mb-10 leading-8">
                        Scheduling automation enables everyone to achieve team
                        goals more quickly, whether they are related to sales
                        income, the hiring pipeline, or customer retention.
                     </p>
                     <Link
                        href="/my-account"
                        className="border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-[16px] font-semibold text-white rounded-lg mr-5 py-3 px-6"
                     >
                        Create event
                     </Link>
                  </div>

                  <div>
                     <Image
                        src={img1}
                        alt="virtual meeting"
                        className="lg:-mt-16"
                     />
                  </div>
               </div>
            </Container>
         </section>

         <Container>
            <section className="pt-14 pb-16">
               <div
                  className="pb-14 text-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
               >
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     HOW MeetPlanr WORKS FOR TEAMS
                  </h3>
                  <h1 className="text-4xl lg:text-5xl text-[#0B3558] lg:w-[700px] mx-auto my-6 font-bold">
                     The leader in collaborative scheduling
                  </h1>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-20">
                  <div
                     data-aos="zoom-in"
                     data-aos-duration="900"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image src={img2} alt="Calender" className="lg:mt-10" />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-8"
                  >
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[650px] lg:w-[420px] my-6 font-semibold leading-8">
                        Schedule meetings as a team
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
                        Collaborative scheduling means you can book meetings
                        with the whole team, any member of the team, or based on
                        more complex routing logic - so the right members of
                        your team are always ready to meet.
                     </p>
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-36">
                  <div data-aos="fade-up" data-aos-duration="600">
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[500px] lg:w-[540px] my-6 font-semibold leading-8">
                        Automate scheduling, improve team performance
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-10 leading-8">
                        Scheduling automation eliminates time-consuming tasks so
                        your team can focus on higher priorities. With
                        actionable insights into your teams scheduling
                        activities and integrations with your teams favorite
                        tools, you can empower your team to work more
                        efficiently.
                     </p>
                  </div>

                  <div
                     data-aos="zoom-in"
                     data-aos-duration="900"
                     className="md:order-last"
                  >
                     <Image src={img3} alt="Calender" className="lg:-mt-8" />
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-24">
                  <div
                     data-aos="zoom-in"
                     data-aos-duration="900"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image src={img4} alt="Calender" className="w-[520px]" />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-5"
                  >
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[650px] lg:w-[540px] my-6 font-semibold leading-8">
                        Create consistency for the ideal customer experience
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
                        From pre-call email questionnaires to defined Event Type
                        details, meeting best practices can be automatically
                        applied across your team. These templates and workflows
                        increase engagement and ensure consistent, professional
                        communications with your customers and candidates.
                     </p>
                  </div>
               </div>
            </section>
         </Container>

         <section className="py-14 bg-[#f8f8f8]">
            <Container>
               <div
                  className="pb-14 text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
               >
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     MeetPlanr FOR ENTERPRISE
                  </h3>
                  <p className="text-4xl lg:text-5xl text-[#0B3558] lg:w-[700px] mx-auto my-6 font-bold">
                     Most Fortune 325 companies use MeetPlanr for scheduling
                  </p>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 my-10">
                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-20"
                  >
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        A SINGLE CENTRAL LOCATION
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[500px] lg:w-[540px] my-6 font-bold leading-8">
                        Admin Management
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-8 leading-8">
                        Manage users and scheduling procedures for your company
                        with ease from one central location.
                     </p>
                     <Link
                        href=""
                        className="text-[#465AF7] hover:text-[#0B3558] font-semibold flex items-center group"
                     >
                        <span className="text-xl">Learn more</span>
                        <span className="text-2xl mt-2 ml-1 group-hover:ml-2 duration-200">
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
                        alt="Calender"
                        className="lg:-mt-8 md:w-[550px]"
                     />
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 my-10">
                  <div data-aos="fade-up" data-aos-duration="800">
                     <Image src={img6} alt="Calender" />
                  </div>

                  <div
                     data-aos="fade-up"
                     data-aos-duration="600"
                     className="lg:mt-20"
                  >
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        PER USER, 6 CALENDAR the condition
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[500px] lg:w-[540px] my-6 font-bold leading-8">
                        MeetPlanr for Business
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-8 leading-8">
                        For each user, connect up to six calendars to check
                        availability in real time.
                     </p>
                     <Link
                        href="/pricing"
                        className="text-[#465AF7] hover:text-[#0B3558] font-semibold flex items-center group"
                     >
                        <span className="text-xl">Learn more</span>
                        <span className="text-2xl mt-2 ml-1 group-hover:ml-2 duration-200">
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
