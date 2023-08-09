import Container from "@/component/app";
import Image from "next/image";
import sectionImage from "../../public/security.png";
import { BsCheck2, BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

const Security = () => {
   return (
      <Container>
         <div className="flex justify-between py-20">
            <div className="pr-20">
               <Image src={sectionImage} alt="Landscape picture" width={650} />
            </div>

            <div className="w-[520px]">
               <h1 className="text-[#1d344b] text-[38px] font-bold">
                  The security and oversight your IT team needs
               </h1>

               <div className="space-x-4 mt-5">
                  <div className="flex">
                     <BsCheck2 className="text-blue-500 text-5xl" />
                     <div className="mt-2 ml-5">
                        <h3 className="text-[#0b3558] text-[22px] font-bold">
                           Centralize billing
                        </h3>
                        <p className="text-[#425466] text-[19px] leading-8">
                           Hundreds of coworkers use Calendly – bring them all
                           together in one secure, managed account.
                        </p>
                     </div>
                  </div>
               </div>

               <div>
                  <div className="flex">
                     <BsCheck2 className="text-blue-500 text-5xl" />
                     <div className="mt-2 ml-5">
                        <h3 className="text-[#0b3558] text-[22px] font-bold">
                           Secure your Calendly usage
                        </h3>
                        <p className="text-[#425466] text-[19px] leading-8">
                           Single-sign-on, SCIM, and more make it easy to
                           onboard/offboard users, mandate passwords, and more.
                        </p>
                     </div>
                  </div>
               </div>

               <div>
                  <div className="flex">
                     <BsCheck2 className="text-blue-500 text-5xl" />
                     <div className="mt-2 ml-5">
                        <h3 className="text-[#0b3558] text-[22px] font-bold">
                           Standardize how your teams use Calendly
                        </h3>
                        <p className="text-[#425466] text-[19px] leading-8">
                           Manage how your coworkers create meeting types, send
                           consistent reminders, and adhere to brand standards.
                        </p>
                     </div>
                  </div>
               </div>

               <span className="flex items-center mt-6 font-semibold text-blue-600 hover:text-slate-800">
                  <Link
                     href="/"
                     className="text-[19px]"
                  >
                     Learn more
                  </Link>
                  <BsArrowRightShort className="text-3xl cursor-pointer" />
               </span>
            </div>
         </div>
      </Container>
   );
};

export default Security;
