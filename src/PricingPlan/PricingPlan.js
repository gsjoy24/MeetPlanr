
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/container";
import Link from "next/link";

const PricingPlan = () => {
   return (
      <section className="pb-20">
         <Container>
            <SectionTitle title={"Pricing Plan"}></SectionTitle>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

               <div className="border shadow-md rounded-md p-5 text-center grid">
                  <h2 className="text-2xl font-medium mt-2">Basic</h2>
                  <h3 className="text-3xl font-bold mt-2">Free</h3>
                  <Link href="/" className="btn bg-[#465af7] hover:bg-sky-950 mt-10 text-white text-[17px] px-9" >
                           Sign Up
                  </Link>
               </div>
               <div className="border shadow-md rounded-md p-5 text-center grid">
                  <h2 className="text-2xl font-medium mt-2">Plus</h2>
                  <h3 className=" mt-2"><span className="text-3xl font-bold">$8</span>/per month</h3>
                  <Link href="/" className="btn bg-[#465af7] hover:bg-sky-950 mt-10 text-white text-[17px] px-9" >
                           Sign Up
                  </Link>
               </div>
               <div className="border shadow-md rounded-md p-5 text-center grid">
                  <h2 className="text-2xl font-medium mt-2">Essentials</h2>
                  <h3 className=" mt-2"><span className="text-3xl font-bold">$12</span>/per month</h3>
                  <Link href="/" className="btn bg-[#465af7] hover:bg-sky-950 mt-10 text-white text-[17px] px-9" >
                           Sign Up
                  </Link>
               </div>
               <div className="border shadow-md rounded-md p-5 text-center grid">
                  <h2 className="text-2xl font-medium mt-2">Professional</h2>
                  <h3 className=" mt-2"><span className="text-3xl font-bold">$16</span>/per month</h3>
                  <Link href="/" className="btn bg-[#465af7] hover:bg-sky-950 mt-10 text-white text-[17px] px-9" >
                           Sign Up
                  </Link>
               </div>
               <div className="border shadow-md rounded-md p-5 text-center grid">
                  <h2 className="text-2xl font-medium mt-2">Teams</h2>
                  <h3 className=" mt-2"><span className="text-3xl font-bold">$20</span>/per month</h3>
                  <Link href="/" className="btn bg-[#465af7] hover:bg-sky-950 mt-10 text-white text-[17px] px-9" >
                           Sign Up
                  </Link>
               </div>

            </div>
         </Container>
      </section>
   );
};

export default PricingPlan;
