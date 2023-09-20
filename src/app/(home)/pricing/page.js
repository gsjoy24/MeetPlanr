import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/container";
import { GiCheckMark } from "react-icons/gi";
import ButtonCheckout from "@/components/PayButton";
import UseLoadPrice from "@/hooks/UseLoadPrice";

const Pricing = async () => {
   const prices = await UseLoadPrice();
   return (
      <div className="py-16 bg-gradient-to-t from-[#F3FAFF] to-[#F3FAFF]">
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
                     className={`rounded-2xl max-w-[350px] card group w-full bg-[#4a617a] text-[#ebecec] transition-all shadow-sm pb-10 duration-700 mx-auto ${
                        price.nickname === "STANDARD" &&
                        "bg-[#0B3558] text-white"
                     }`}
                  >
                     <div className="px-5 mt-[30px]">
                        <span className="text-[16px] capitalize font-semibold bg-[#5f7d9c] px-3 py-1 rounded-full">
                           {price.nickname}
                        </span>
                        <div className="flex items-center lg:text-[42px] uppercase my-2 font-bold">
                           <span className="text-4xl lg:text-[40px] mt-[5px]">
                              {price.unit_amount / 100}$
                           </span>
                        </div>
                        <p className="text-[17px] uppercase font-bold">
                           Yearly
                        </p>
                     </div>
                     <hr className="borderBottom my-3" />
                     <div className="Normal px-5 pb-6 font-normal">
                        <p className="Medium mb-3 text-[18px] font-medium">
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
                                       <span className="mr-2 text-green-500">
                                          <GiCheckMark />
                                       </span>
                                       <span>{feature.trim()}</span>
                                    </li>
                                 ))
                           ) : (
                              <>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-green-500">
                                       <GiCheckMark />
                                    </span>
                                    <span>Create two Events</span>
                                 </li>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-green-500">
                                       <GiCheckMark />
                                    </span>
                                    <span>
                                       Reminder email (invitees and
                                       host)
                                    </span>
                                 </li>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-green-500">
                                       <GiCheckMark />
                                    </span>
                                    <span>Connect to Google Meet</span>
                                 </li>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-green-500">
                                       <GiCheckMark />
                                    </span>
                                    <span>
                                       Send automated event notifications
                                    </span>
                                 </li>
                              </>
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
