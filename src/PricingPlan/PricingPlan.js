import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const PricingPlan = () => {
   return (
      <section className="pb-20">
         <Container>
            <SectionTitle title={"Pricing Plan"}></SectionTitle>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
               <div className="card w-56 bg-base-100 shadow-md border rounded-md mx-auto">
                  <div className="card-body items-center text-center">
                     <h2 className="text-2xl font-semibold">Basic</h2>
                     <h3 className="text-3xl font-bold">Free</h3>
                     <div className="card-actions mt-5">
                        <Link
                           href="/"
                           className="btn bg-[#465af7] hover:bg-sky-950 text-white text-[17px] px-9"
                        >
                           Sign Up
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="card w-56 bg-base-100 shadow-md border rounded-md mx-auto">
                  <div className="card-body items-center text-center">
                     <h2 className="text-2xl font-semibold">Plus</h2>
                     <div>
                        <span className="text-3xl font-bold">$8</span>
                        <span>/per month</span>
                     </div>
                     <div className="card-actions mt-5">
                        <Link
                           href="/"
                           className="btn bg-[#465af7] hover:bg-sky-950 text-white text-[17px] px-9"
                        >
                           Sign Up
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="card w-56 bg-base-100 shadow-md border rounded-md mx-auto">
                  <div className="card-body items-center text-center">
                     <h2 className="text-2xl font-semibold">Essentials</h2>
                     <div>
                        <span className="text-3xl font-bold">$12</span>
                        <span>/per month</span>
                     </div>
                     <div className="card-actions mt-5">
                        <Link
                           href="/"
                           className="btn bg-[#465af7] hover:bg-sky-950 text-white text-[17px] px-9"
                        >
                           Sign Up
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="card w-56 bg-base-100 shadow-md border rounded-md mx-auto">
                  <div className="card-body items-center text-center">
                     <h2 className="text-2xl font-semibold">Professional</h2>
                     <div>
                        <span className="text-3xl font-bold">$16</span>
                        <span>/per month</span>
                     </div>
                     <div className="card-actions mt-5">
                        <Link
                           href="/"
                           className="btn bg-[#465af7] hover:bg-sky-950 text-white text-[17px] px-9"
                        >
                           Sign Up
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="card w-56 bg-base-100 shadow-md border rounded-md mx-auto">
                  <div className="card-body items-center text-center">
                     <h2 className="text-2xl font-semibold">Teams</h2>
                     <div>
                        <span className="text-3xl font-bold">$20</span>
                        <span>/per month</span>
                     </div>
                     <div className="card-actions mt-5">
                        <Link
                           href="/"
                           className="btn bg-[#465af7] hover:bg-sky-950 text-white text-[17px] px-9"
                        >
                           Sign Up
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default PricingPlan;
