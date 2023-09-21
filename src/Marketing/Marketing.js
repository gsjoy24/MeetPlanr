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
            <section className="mt-16">
               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div>
                     {/* Section title */}
                     <div>
                        <h3 className="text-[#465AF7] font-semibold uppercase">
                           MARKETING TEAMS
                        </h3>
                        <h1 className="text-4xl lg:text-5xl text-[#0B3558] md:w-[520px] my-6 font-bold leading-10">
                           Faster changing leads into meetings
                        </h1>
                        <p className="text-[18px] text-[#5A7795] md:w-[465px] mb-10">
                           Improve the experience for high-value customers,
                           automate the transfer of the lead to sales, and
                           increase the quantity of high-quality leads in your
                           pipeline
                        </p>
                     </div>

                     {/* Action buttons */}
                     <div className="sm:flex-row sm:justify-start flex flex-col justify-center gap-3">
                        <Link
                           href="/my-account"
                           data-testid="createEvent"
                           className="border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-white flex justify-center rounded-lg font-semibold py-3 px-6"
                        >
                           Create event
                        </Link>
                        <Link
                           href="/sign-up"
                           data-testid="UserSignUp"
                           className="border border-[#465AF7] text-[#465AF7] bg-white hover:bg-[#e4ecf7] hover:border-[#465AF7] flex justify-center rounded-lg font-semibold py-3 px-6"
                        >
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
               <div className="lg:grid-cols-3 lg:text-start grid grid-cols-1 gap-16 text-center">
                  <div className="lg:pb-0 lg:border-r-2 lg:border-b-transparent pb-16 border-b-2">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">50</span>
                        <span className="text-[#0B3558]">%</span>
                     </p>
                     <p className="text-[21px] text-[#5A7795] lg:w-[260px] pt-3 pb-[50px]">
                        A boost in online sales-qualified opportunities
                     </p>
                     <div className="lg:justify-normal flex justify-center">
                        <Image src={img2} alt="Doordash" className="w-44" />
                     </div>
                  </div>

                  <div className="lg:pb-0 lg:border-r-2 lg:border-b-transparent pb-16 border-b-2">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">3-4</span>
                        <span className="text-[#0B3558]">X</span>
                     </p>
                     <p className="text-[21px] text-[#5A7795] lg:w-[260px] pt-3 pb-12">
                        Increased conversion of leads
                     </p>
                     <div className="lg:justify-normal flex justify-center">
                        <Image src={img3} alt="Twilio" className="w-24" />
                     </div>
                  </div>

                  <div className="">
                     <p className="text-5xl font-semibold">
                        <span className="text-[#465AF7]">67</span>
                        <span className="text-[#0B3558]">%</span>
                     </p>
                     <p className="text-[21px] text-[#5A7795] lg:w-[260px] pt-3 pb-5">
                        Compared to requested demo to planned demo conversion
                     </p>
                     <div className="lg:justify-normal flex justify-center">
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
       
         {/* Features of marketing teams */}
         <section className="bg-[#F7FAFF] py-20">
            <Container>
               <div className="pb-14 text-center">
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     ADVANCED EASY SCHEDULING
                  </h3>
                  <h1 className="text-4xl lg:text-5xl text-[#0B3558] lg:w-[840px] mx-auto my-6 font-semibold">
                     Features of MeetPlanr for Marketing Teams
                  </h1>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
                  <div data-aos="fade-up" data-aos-duration="700">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        MAKE CONVERSION RATES BETTER
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[570px] lg:w-[420px] my-6 font-semibold leading-10">
                        Directly from your marketing efforts, schedule prospects
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[520px] mb-10 leading-8">
                        The virtual receptionists at Smith.ai may easily
                        schedule meetings on the calendars of their clients
                        using MeetPlanr. The Smith.ai team employs the same
                        technique to set up calls with their own prospective and
                        current clients. According to Maddy, MeetPlanr gives our
                        agents a simple and equitable approach to schedule leads
                        with our sales team.
                     </p>
                  </div>

                  <div data-aos="fade-up" data-aos-duration="900">
                     <Image src={img5} alt="Calender" />
                  </div>
               </div>

               <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-32">
                  <div
                     data-aos="fade-up"
                     data-aos-duration="900"
                     className="md:order-last lg:order-first order-last"
                  >
                     <Image src={img6} alt="Calender" />
                  </div>

                  <div data-aos="fade-up" data-aos-duration="700">
                     <h3 className="text-[#465AF7] font-semibold uppercase">
                        EMBED MeetPlanr ANYWHERE
                     </h3>
                     <p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[520px] lg:w-[420px] my-6 font-semibold leading-8">
                        Create a seamless customer experience
                     </p>
                     <p className="text-[18px] text-[#5A7795] md:w-[500px] mb-10 leading-8">
                        Include the unique MeetPlanr links for each of your
                        sales representatives in any email marketing campaign,
                        display advertisement, QR code, or landing page to let
                        prospects schedule a meeting right away and cut down on
                        back-and-forth communication.
                     </p>
                  </div>
               </div>
            </Container>
         </section>
      </div>
   );
};

export default Marketing;
