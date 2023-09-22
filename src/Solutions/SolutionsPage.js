import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/solutions/image5.png";
import img2 from "@/assets/solutions/image6.png";

const SolutionsPage = () => {
   return (
      <div>
         <section>
            <div className="mt-16 text-center w-full">
               <h3 className="text-[#465AF7] font-semibold uppercase">
                  SOLUTIONS
               </h3>
               <h1 className="lg:text-5xl text-sky-950 my-8 text-2xl font-bold md:w-[650px] lg:w-[900px] mx-auto">
                  Every team can use an{" "}
                  <span className="text-[#465AF7]">automation solution</span>{" "}
                  for scheduling
               </h1>
               <p className="text-[21px] text-[#5A7795] md:w-[650px] lg:w-[730px] mx-auto mb-10">
                  Promote progress, one meeting at a time. Teams may concentrate
                  on producing results by using MeetPlanrs automated scheduling.
               </p>

               <Link
                  href="/my-account"
                  data-testid="createEvent"
                  className="btn bg-[#465AF7] hover:bg-sky-950 text-[16px] text-white rounded-lg mr-5 px-6 capitalize tracking-widest"
               >
                  Create Event
               </Link>
            </div>
         </section>

         {/* Solutions by role */}
         <section className="bg-[#F7FAFF] rounded-2xl p-5 lg:p-16 mt-16">
            <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
               <div>
                  <div className="text-center mb-10">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        SOLUTIONS BY ROLE
                     </h3>
                     <h1 className="lg:text-3xl text-[#0B3558] my-6 text-3xl font-bold">
                        Multiple options for each role
                     </h1>
                  </div>

                  {/* Sales collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Sales
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           By maximizing outbound sales efforts and encouraging
                           customers to make reservations using your website or
                           team scheduling page to promote inbound sales, you
                           can set up more revenue-generating meetings and
                           establish connections with prospects before a rival
                           does.
                        </p>
                     </div>
                  </div>

                  {/* Customer Success collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Customer Success
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Improve the customer experience to increase growth
                           and retention. The process in MeetPlanr can automate,
                           standardize, and manage pre- and post-meeting
                           communications. Additionally, you can use our CRM
                           connectors to automatically update customer
                           information if a meeting is scheduled.
                        </p>
                        <p>
                           <Link
                              href="/solutions/customer-success"
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </Link>
                        </p>
                     </div>
                  </div>

                  {/* Marketing collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Marketing
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Improve your lead generation to increase conversions
                           and generate more pipeline. For instant campaign
                           reporting and a smooth prospect experience, integrate
                           with your marketing automation platforms.
                        </p>
                        <p>
                           <Link
                              href="/solutions/marketing"
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </Link>
                        </p>
                     </div>
                  </div>

                  {/* Businesses collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Businesses
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Scheduling automation enables everyone to achieve
                           team goals more quickly, whether they are related to
                           sales income, the hiring pipeline, or customer
                           retention.
                        </p>
                        <p>
                           <Link
                              href="/solutions/businesses"
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </Link>
                        </p>
                     </div>
                  </div>

                  {/* Information Technology collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Information Technology
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Your IT staff can support scheduling automation
                           across your organization with MeetPlanr for
                           Enterprise while upholding governance and adhering to
                           security standards.
                        </p>
                        <p>
                           <Link
                              href="/solutions/technology"
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>

               <div data-aos="fade-up" data-aos-duration="700">
                  <Image
                     src={img1}
                     alt="Solutions image 1"
                     data-testid="image1"
                  />
               </div>
            </div>
         </section>

         {/* Solutions by industry */}
         <section className="bg-[#F7FAFF] rounded-2xl p-5 lg:p-16 mt-20">
            <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
               <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="md:order-last lg:order-first order-last"
               >
                  <Image
                     src={img2}
                     alt="Solutions image 2"
                     data-testid="image2"
                  />
               </div>

               <div>
                  <div className="text-center text-[#0B3558] mb-10">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        SOLUTIONS BY INDUSTRY
                     </h3>
                     <h1 className="lg:text-3xl text-sky-950 my-6 text-3xl font-bold">
                        Versatile Industry Solutions
                     </h1>
                  </div>

                  {/* Financial Services collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Financial Services
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Take it simple for clients to self-book appointments
                           so they may discuss market movements, evaluate their
                           portfolios, or make modifications as their lives
                           change.
                        </p>
                     </div>
                  </div>

                  {/* Education collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Education
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           Making scheduling advising sessions quick and simple
                           for students while yet allowing teachers and
                           professors to maintain control over their calendars.
                           Simplified scheduling will increase student
                           performance by increasing their access to resources
                           and services. Give students the option of choosing a
                           convenient time for an in-person or online meeting.
                        </p>
                     </div>
                  </div>

                  {/* Professional Services collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Professional Services
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           By providing a personalized link to your company's
                           booking website and establishing a streamlined and
                           consistent scheduling process, you can make yourself
                           more available to customers.
                        </p>
                        <p>
                           <Link
                              href="/solutions/professional-services"
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </Link>
                        </p>
                     </div>
                  </div>

                  {/* Technology collapse */}
                  <div className="collapse collapse-plus border-base-300 mt-2 bg-white border rounded-md">
                     <input type="checkbox" className="peer" />
                     <div className="collapse-title text-[15px] text-slate-600 font-semibold">
                        Technology
                     </div>
                     <div className="collapse-content">
                        <p className="text-[#5A7795]">
                           To fill the pipeline with high-value prospects,
                           schedule meetings immediately from your outreach
                           email, LinkedIn message, or website. To advance
                           prospects, then make every encounter and follow-up
                           simpler.
                        </p>
                        <p>
                           <Link
                              href="/solutions/technology"
                              className="flex items-center text-[#465AF7] hover:text-sky-950 mt-2 group"
                           >
                              <span>Learn more</span>
                              <span>
                                 <BsArrowRightShort className=" text-[22px] group-hover:ml-1 duration-200" />
                              </span>
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="text-white bg-[#0B3558] rounded-3xl mb-20">
               <div className="mt-20 text-center sm:w-[500px] md:w-[600px] lg:w-[800px] mx-auto py-14">
                  <p className="lg:text-3xl my-8 text-3xl font-bold tracking-widest">
                     Scheduling is simple
                  </p>
                  <p className="text-[17px] px-5 mb-10">
                     Achieve Better Team Outcomes through Enhanced Scheduling,
                     Integration, and Automated Communication. By doing so, you
                     will empower your team to efficiently connect with the
                     right individuals, fostering quicker decision-making,
                     smoother collaborations, and ultimately, more substantial
                     achievements.
                  </p>

                  <Link
                     href="/my-account"
                     className="btn bg-[#006BFF] hover:bg-sky-800 text-white border-none rounded-lg mr-5 px-6 capitalize tracking-widest"
                  >
                     Create Event
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
};

export default SolutionsPage;
