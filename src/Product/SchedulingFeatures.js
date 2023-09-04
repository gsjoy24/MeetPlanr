import Image from "next/image";
import img1 from "@/assets/product-image/features.png";
import Link from "next/link";

const SchedulingFeatures = () => {
   return (
      <div className="text-center">
         <div className="mt-16">
            <h3 className="text-[#465AF7] font-semibold uppercase">
               MeetPlanr FEATURES
            </h3>
            <h1 className="md:text-5xl lg:text-6xl text-sky-950 my-8 text-4xl font-bold">
               More than a{" "}
               <span className="text-[#465AF7]">scheduling link</span>
            </h1>
            <p className="text-[22px] text-[#5A7795] lg:w-[710px] mx-auto mb-10">
            MeetPlanr is the scheduling automation platform with team-based scheduling, solutions and integrations for every department, and advanced security features
            </p>

            <div>
               <button className="btn border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-white rounded-lg font-semibold mr-5 px-6">
                  Sign up for free
               </button>
               <button className="btn border border-[#465AF7] text-[#465AF7] bg-white hover:bg-[#e4ecf7] hover:border-[#465AF7] rounded-lg font-semibold px-6">
                  How it works
               </button>
            </div>

            <div
               className="mt-16 mb-20"
               data-aos="fade-up"
               data-aos-duration="800"
            >
               <Image src={img1} alt="Scheduling image"></Image>
            </div>
         </div>
      </div>
   );
};

export default SchedulingFeatures;
