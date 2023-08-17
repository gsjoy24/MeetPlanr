"use client";
import Container from "@/components/container";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosAdd } from "react-icons/io";
import img from "@/assets/events-tabs/placeholder.jpg";
import Image from "next/image";
import Link from "next/link";

const EventsTabs = () => {
   const [tabIndex, setTabIndex] = useState(0);

   return (
      <Container>
         <div className="flex justify-between my-8">
            <h2 className="text-3xl">My MeetPlanr</h2>
            <button className="bg-[#465AF7] hover:bg-sky-950 text-white px-4 py-3 rounded-full flex items-center space-x-1 font-semibold">
               <span>
                  <IoIosAdd className="text-xl" />
               </span>{" "}
               <span>Create</span>
            </button>
         </div>
         <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
         >
            <TabList>
               <Tab>Event Types</Tab>
               <Tab>Scheduled Events</Tab>
            </TabList>

            <TabPanel>
               <div className="mt-8 md:flex lg:flex justify-between items-center">
                  <div className="flex items-center space-x-5">
                     <Image
                        src={img}
                        alt="User Profile"
                        className="w-12 h-12 rounded-full"
                     />
                     <div>
                        <h4>Jhone Devlin</h4>
                        <Link href="" className="text-[#465AF7]">
                           https://calendly.com/alexaghosh6
                        </Link>
                     </div>
                  </div>

                  <div>
                     <Link href="/event/:one-on-one" className="border border-[#465AF7] text-[#465AF7] hover:bg-[#eaf0f8] px-5 py-[2px] rounded-full mt-6">
                        New Event Type
                     </Link>
                  </div>
               </div>
            </TabPanel>
            <TabPanel>
               <p className="text-[#737373] text-xl font-semibold">
                  No Events Yet
               </p>
            </TabPanel>
         </Tabs>
      </Container>
   );
};

export default EventsTabs;
