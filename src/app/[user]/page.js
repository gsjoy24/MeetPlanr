"use client"
import Container from '@/components/container';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Schedule = () => {

  return (
    <Container>
        <div className='pt-20'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 5)}
            placeholderText="Select a date between today and 5 days in the future"
        />
        </div>
    </Container>
  );
};

export default Schedule;
