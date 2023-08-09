/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/container";
import React from "react";
import { FaCalendarAlt, FaCalendarCheck, FaDatabase, FaLink, FaMoneyCheckAlt, FaRegEnvelope } from "react-icons/fa";
const Featured = () => {
   return (
      <section className="" style={{ marginTop: "64px", marginBottom: "64px" }}>
         <Container>
            <SectionTitle title={"Features"}></SectionTitle>
         </Container>
         <div className=""></div>
      </section>
   );
    const features = [
        {
            title: 'Calendar',
            details: 'The calendar feature is the backbone of our platform, allowing users to set their availability and view upcoming interview appointments. Users can sync their schedules with popular calendar services like Google Calendar, ensuring a seamless integration with their existing commitments.'
        }
    ]
    return (
        <section
            className=""
            style={{ marginTop: "64px", marginBottom: "64px" }}
        >
            <Container>
                <SectionTitle title={"Features"}></SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="border-2 p-5 rounded-md shadow-lg text-center grid">
                        <div className="border w-[150px] h-[150px] flex justify-center items-center rounded-full mx-auto">
                            <FaCalendarCheck className="text-[#00a4f8] text-8xl"/>
                        </div>
                        <h3 className="font-semibold text-2xl mt-7">Calender</h3>
                        <p className="mt-4">The calendar feature is the backbone of our platform, allowing users to set their availability and view upcoming interview appointments. Users can sync their schedules with popular calendar services like Google Calendar, ensuring a seamless integration with their existing commitments</p>
                        <button className="ft_btn">Learn more</button>
                    </div>                    
                    <div className="border-2 p-5 grid rounded-md shadow-lg">
                        <div className="border w-[150px] h-[150px] flex justify-center items-center rounded-full mx-auto">
                            <FaRegEnvelope className="text-[#00a4f8] text-8xl"/>
                        </div>
                        <div className=" text-center">
                            <h3 className="font-semibold text-2xl mt-7">Reminder Emails</h3>
                            <p className="mt-4">To reduce no-shows and enhance communication, your platform sends automated reminder emails to both interviewers and interviewees before the scheduled interview. This feature helps to keep participants informed and engaged, improving the overall scheduling experience.</p>
                            <button className="bg-[#465AF7] text-white px-8 py-4 rounded-lg mt-6">Learn more</button>
                        </div>
                    </div>                    
                    <div className="border-2 p-5 grid rounded-md shadow-lg">
                        <div className="border w-[150px] h-[150px] flex justify-center items-center rounded-full mx-auto">
                            <FaCalendarAlt className="text-[#00a4f8] text-8xl"/>
                        </div>
                        <div className=" text-center">
                            <h3 className="font-semibold text-2xl mt-7">Scheduling</h3>
                            <p className="mt-4">Your platform offers a user-friendly and efficient scheduling process. Interviewees can easily view interviewers' availability and select suitable time slots for their interviews. The system ensures that interviewers' calendars are up-to-date to avoid conflicts and double bookings.</p>
                            <button className="bg-[#465AF7] text-white px-8 py-4 rounded-lg mt-6">Learn more</button>
                        </div>
                    </div>                    
                    <div className="border-2 p-5 grid rounded-md shadow-lg">
                        <div className="border w-[150px] h-[150px] flex justify-center items-center rounded-full mx-auto">
                            <FaLink className="text-[#00a4f8] text-8xl"/>
                        </div>
                        <div className=" text-center">
                            <h3 className="font-semibold text-2xl mt-7">Embedding Options</h3>
                            <p className="mt-4">To enhance accessibility and convenience, your platform provides embedding options. Users can embed interview scheduling forms or links directly into their websites or emails. This feature allows interviewees to schedule interviews without leaving the organization's web page or email interface.</p>
                            <button className="bg-[#465AF7] text-white px-8 py-4 rounded-lg mt-6">Learn more</button>
                        </div>
                    </div>                    
                    <div className="border-2 p-5 grid rounded-md shadow-lg">
                        <div className="border w-[150px] h-[150px] flex justify-center items-center rounded-full mx-auto">
                            <FaDatabase className="text-[#00a4f8] text-8xl"/>
                        </div>
                        <div className=" text-center">
                            <h3 className="font-semibold text-2xl mt-7">Database support</h3>
                            <p className="mt-4">Your platform offers seamless integration with external databases or Applicant Tracking Systems (ATS). This integration allows interviewers to access candidates' information and interview details directly from the ATS or database, streamlining the interview process and enhancing collaboration.</p>
                            <button className="bg-[#465AF7] text-white px-8 py-4 rounded-lg mt-6">Learn more</button>
                        </div>
                    </div>                    
                    <div className="border-2 p-5 grid rounded-md shadow-lg">
                        <div className="border w-[150px] h-[150px] flex justify-center items-center rounded-full mx-auto">
                            <FaMoneyCheckAlt className="text-[#00a4f8] text-8xl"/>
                        </div>
                        <div className=" text-center">
                            <h3 className="font-semibold text-2xl mt-7">Payment</h3>
                            <p className="mt-4"> As an optional feature, your platform provides payment integration for premium or advanced services. Users can choose to charge interviewees for specialized interview sessions, consultations, or access to exclusive features. This payment integration ensures a secure and hassle-free transaction process.</p>
                            <button className="bg-[#465AF7] text-white px-8 py-4 rounded-lg mt-6">Learn more</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Featured;
