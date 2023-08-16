import Image from "next/image";
import img1 from "@/assets/product-image/features.png"

const SchedulingFeatures = () => {
  return (
     <div className="text-center">
        <div className="mt-24">
           <h3 className="text-[#465AF7] font-semibold uppercase">
              CALENDLY FEATURES
           </h3>
           <h1 className="text-6xl text-sky-950 font-bold my-8">
              More than a{" "}
              <span className="text-[#465AF7]">scheduling link</span>
           </h1>
           <p className="text-[22px] text-[#5A7795] lg:w-[710px] mx-auto">
              Calendly is the scheduling automation platform with team-based
              scheduling, solutions and integrations for every department, and
              advanced security features
           </p>
           <div className="">
              <button className="border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-white px-8 py-3 rounded-lg font-semibold mr-5">
                 Sign up for free
              </button>
              <button className="border border-[#465AF7] text-[#465AF7] hover:bg-sky-950 hover:text-white hover:border-sky-950 px-8 py-3 rounded-lg mt-6 font-semibold">
                 Talk to sales
              </button>
           </div>

           <div className="mt-16 mb-20">
              <Image src={img1} alt="Scheduling image"></Image>
           </div>
        </div>
     </div>
  );
};

export default SchedulingFeatures;
