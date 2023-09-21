import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/container";
import { GiCheckMark } from "react-icons/gi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ButtonCheckout from "@/components/PayButton";
import UseLoadPrice from "@/hooks/UseLoadPrice";

const Pricing = async () => {
   const prices = await UseLoadPrice();
   return (
      <div className="py-16 bg-gradient-to-t from-[#f7f9fa] to-[#f5f8fa]">
         <Container>
            <div className="text-center">
               <SectionTitle title={"Pricing Plans"}></SectionTitle>
               <p className="md:w-[600px] lg:w-[563px] mx-auto font-normal Normal text-[20px] text-[#5A7795] -mt-5">
                  When it comes to choosing the right Price, we know how easy it
                  is to get overwhelmed with the number.
               </p>
            </div>

            <div className="grid lg:mt-[50px] gap-5 lg:grid-cols-3 md:grid-cols-2 mt-10">
               {prices?.map((price) => (
                  <div
                     key={price.id}
                     className={`rounded-2xl max-w-[350px] card group w-full bg-white text-[#5A7795] transition-all shadow-sm pb-10 mx-auto border border-[#465bf7a1] hover:shadow-md hover:shadow-[#465bf77e] ${
                        price.nickname === "Standard" &&
                        "bg-white text-[#5A7795]"
                     }`}
                  >
                     <div className="px-5 mt-[30px]">
                        <span className="text-[15px] capitalize font-semibold text-[#0B3558] bg-[#eaf4fc] border border-[#bed7eb] px-2 py-[2px] rounded-full">
                           {price.nickname}
                        </span>
                        {price.nickname === "Standard" && (
                           <span className="bg-[#465AF7] text-white text-[12px] px-2 py-[2px] rounded-full absolute -top-3 right-[20px]">
                              Most Popular
                           </span>
                        )}

                        <div className="flex items-center mt-5 mb-3">
                           <p>
                              <span className="text-4xl text-[#465AF7] lg:text-[40px] uppercase font-bold">
                                 {price.unit_amount / 100}$
                              </span>
                              <span> / month</span>
                           </p>
                        </div>
                     </div>

                     <div className="Normal px-5 font-normal">
                        <p className="mb-2 text-[17px] text-[#0B3558] font-semibold">
                           Basic features
                        </p>

                        <ul>
                           {price?.lookup_key ? (
                              price?.lookup_key
                                 ?.split(",")
                                 .map((feature, index) => (
                                    <li
                                       key={index}
                                       className="flex items-center"
                                    >
                                       <span className="mr-2 text-[14px] text-[#22c55eaf]">
                                          <BsFillCheckCircleFill />
                                       </span>
                                       <span className="text-[15px]">
                                          {feature.trim()}
                                       </span>
                                    </li>
                                 ))
                           ) : (
                              <div className="text-[15px]">
                                 <li className="flex items-center">
                                    <span className="mr-2 text-[14px] text-[#22c55eaf]">
                                       <BsFillCheckCircleFill />
                                    </span>
                                    <span>Create two Events</span>
                                 </li>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-[14px] text-[#22c55eaf]">
                                       <BsFillCheckCircleFill />
                                    </span>
                                    <span>
                                       Reminder email (invitees and host)
                                    </span>
                                 </li>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-[14px] text-[#22c55eaf]">
                                       <BsFillCheckCircleFill />
                                    </span>
                                    <span>Connect to Google Meet</span>
                                 </li>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-[14px] text-[#22c55eaf]">
                                       <BsFillCheckCircleFill />
                                    </span>
                                    <span>Automated event notifications</span>
                                 </li>
                              </div>
                           )}
                        </ul>
                     </div>
                     <hr className="borderBottom" />
                     <div className="px-5 mt-auto">
                        <ButtonCheckout
                           priceName={price.nickname}
                           price={price.unit_amount / 100}
                           priceId={price.id}
                        />
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </div>
   );
};

export default Pricing;
