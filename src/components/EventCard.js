import React from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

const EventCard = ({ schedule }) => {
   const { eventName, description, duration, scheduleLink } = schedule || {};
   const detailsLink = `${scheduleLink}/details`;
   const copyLink = () => {
      navigator.clipboard.writeText(scheduleLink).then(() => {
         toast.success("Meeting Link coped");
      });
   };
   return (
      <div className="border-2 shadow-md p-5 rounded-ss-2xl rounded-br-2xl grid">
         <h2 className="text-lg font-medium">{eventName}</h2>
         <p className="my-1">{duration}mins, One-on-One</p>
         <Link
            target="_blank"
            className="my-5 text-blue-500 hover:underline"
            href={detailsLink}
         >
            View more details
         </Link>
         <div className="text-right mt-2 self-end">
            <button
               onClick={copyLink}
               className="px-4 rounded-3xl py-2 border border-[#465AF7]"
            >
               Copy Link
            </button>
         </div>
      </div>
   );
};

export default EventCard;
