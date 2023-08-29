"use client"
import Container from "@/components/container";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaArrowLeft, FaRegClock, FaVideo } from "react-icons/fa";

const EventSchedule = ({params}) => {
    // console.log(params);
    const [startDate, setStartDate] = useState(null);
    console.log(startDate);
    const duration = 30;
    const endDate = null;
    return (
        <Container>
            <div className="pt-28 pb-10 flex justify-center gap-5"  >
                <div className="w-[40%] border rounded-md p-10">
                    <button className="text-2xl p-2 rounded-full text-[#465AF7] border-[#465AF7] border-2"><FaArrowLeft/></button>
                    <h3 className="font-medium text-2xl mt-6">MD Jubaer</h3>
                    <h2 className="text-3xl font-semibold my-3">Evening Meeting</h2>
                    <div className="flex gap-2 items-center my-3">
                        <FaRegClock className="text-2xl font-medium"/>
                        <span className="font-medium text-lg">30 minutes</span>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <FaVideo className="text-2xl font-medium"/>
                        <span className="font-medium text-lg">Google Meet</span>
                    </div>
                </div>
                <div className="">
                    <DatePicker
                        selected={startDate}
                        showTimeSelect
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        maxDate={endDate}
                        locale="pt-BR"
                        timeFormat="p"
                        timeIntervals={duration}
                        dateFormat="Pp"
                        inline
                        fixedHeight
                    />
                </div>
            </div>
        </Container>
    );
};

export default EventSchedule;