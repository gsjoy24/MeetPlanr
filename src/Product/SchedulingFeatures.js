import Image from "next/image";
import img1 from "@/assets/solutions/meetings_save.png";
import Link from "next/link";
import Container from "@/components/container";

const SchedulingFeatures = () => {
   return (
      <div className="text-center pt-12 md:pt-28 bg-[#F7FAFF]">
         <Container>
            <div>
               {/* Section title */}
               <div>
                  <h3 className="text-[#465AF7] font-semibold uppercase">
                     MeetPlanr FEATURES
                  </h3>
                  <h1 className="md:text-5xl lg:text-6xl text-sky-950 my-8 text-4xl font-bold">
                     Offering more{" "}
                     <span className="text-[#465AF7]">scheduling links</span>
                  </h1>
                  <p className="text-[22px] text-[#5A7795] lg:w-[710px] mx-auto mb-10">
                     MeetPlanr is a platform for automating scheduling that
                     offers collaboration scheduling, integrations and solutions
                     for every department, and innovative security features
                  </p>
               </div>

               <div className=" sm:flex-row flex flex-col justify-center gap-3">
                  <Link
                     href="/sign-up"
                     data-testid="UserSignUp"
                     className="btn border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-white rounded-lg font-semibold px-6"
                  >
                     Sign up for free
                  </Link>
                  <Link
                     href="#works"
                     className="btn border border-[#465AF7] text-[#465AF7] bg-white hover:bg-[#e4ecf7] hover:border-[#465AF7] rounded-lg font-semibold px-6"
                  >
                     How it works
                  </Link>
               </div>

               <div
                  className="mt-16 pb-10 flex justify-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
               >
                  <Image
                     src={img1}
                     alt="Scheduling image"
                     className="md:h-[650px]"
                  ></Image>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default SchedulingFeatures;
