"use client"
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import React, { useEffect } from 'react';
import img1 from '@/assets/product-image/1.jpg'
import img2 from '@/assets/product-image/2.jpg'
import img3 from '@/assets/product-image/3.jpg'
import img4 from '@/assets/product-image/4.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
const UserDocs = () => {
    useEffect(() =>{
        Aos.init({
            offset: 200,
            duration: 300,
            easing: 'linear',
            delay: 100,
        })
    },[])
    return (
       <section className="py-20">
          <h3 className="text-[#00a4f8] font-semibold uppercase text-center mb-6">
             AN INTRODUCTION TO CALENDLY
          </h3>
          <SectionTitle title={"How Calendly Works"}></SectionTitle>
          <div className="">
             <div className="grid gap-10 md:grid-cols-2 items-center">
                <div className="md:pr-8">
                   <h3 className="text-[#00a4f8] font-semibold uppercase">
                      STEP ONE
                   </h3>
                   <h2 className="my-6 text-4xl font-bold">
                      Create a Scheduling Link
                   </h2>
                   <p className="leading-relaxed text-xl text-[#5A7795] lg:w-[470px]">
                      Connect your calendar and Calendly will help you create
                      scheduling links and booking pages based on your
                      availability. Share your Calendly link with others so
                      people can book time with you in one click.
                   </p>
                </div>
                <div data-aos="zoom-in" className="">
                   <Image src={img1} alt="docs image"></Image>
                </div>
             </div>
             <div className="grid gap-16 md:grid-cols-2 items-center my-10">
                <div className=" md:order-2">
                   <h3 className="text-[#00a4f8] font-semibold uppercase">
                      STEP TWO
                   </h3>
                   <h2 className="my-6 text-4xl font-bold">
                      Team-based scheduling
                   </h2>
                   <p className="leading-relaxed text-xl text-[#5A7795] lg:w-[470px]">
                      Booking links can be based on different event types - from
                      15-minute Zoom calls to 30-minute in-person meetings – and
                      rules. Include other members of your team, route the
                      meeting to the right people on your team, and collaborate
                      around scheduling requirements.
                   </p>
                </div>
                <div className="md:order-1" data-aos="zoom-in">
                   <Image
                      data-aos="zoom-in"
                      src={img2}
                      alt="docs image"
                   ></Image>
                </div>
             </div>
             <div className="grid gap-10 md:grid-cols-2 items-center my-10">
                <div className="md:pr-8">
                   <h3 className="text-[#00a4f8] font-semibold uppercase">
                      STEP THREE
                   </h3>
                   <h2 className="my-6 text-4xl font-bold">
                      Workflows and integrations
                   </h2>
                   <p className="leading-relaxed text-xl text-[#5A7795] lg:w-[470px]">
                      Workflows and integrations connect Calendly to your
                      process and other tools. Send reminders, follow-ups, and
                      connect your CRM, video conferencing, and even billing
                      platforms!
                   </p>
                </div>
                <div className="" data-aos="zoom-in">
                   <Image
                      data-aos="zoom-in"
                      src={img3}
                      alt="docs image"
                   ></Image>
                </div>
             </div>
             <div className="grid gap-16 md:grid-cols-2 items-center my-10">
                <div className="md:order-2">
                   <h3 className="text-[#00a4f8] font-semibold">STEP FOUR</h3>
                   <h2 className="my-6 text-4xl font-bold">
                      Designed for your whole organization
                   </h2>
                   <p className="leading-relaxed text-xl text-[#5A7795] lg:w-[470px]">
                      With Calendly commonly used to power meetings with
                      prospects, customers, recruits and more, it’s ideal to
                      power scheduling for your whole company with meeting
                      analytics, and enterprise-ready admin, security, and
                      IT-oriented features.
                   </p>
                </div>
                <div className="md:order-1" data-aos="zoom-in">
                   <Image
                      data-aos="zoom-in"
                      src={img4}
                      alt="docs image"
                   ></Image>
                </div>
             </div>
          </div>
       </section>
    );
};

export default UserDocs;