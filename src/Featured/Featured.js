"use client";
import Button from "@/common/Button";
/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/container";
import React, { useEffect, useState } from "react";
import {
   FaCalendarAlt,
   FaCalendarCheck,
   FaDatabase,
   FaLink,
   FaMoneyCheckAlt,
   FaRegEnvelope,
} from "react-icons/fa";
import CalenderModal from "./CalenderModal";
import FeatureCard from "@/components/FeatureCard";

const Featured = () => {
   const [features,setFeatures] = useState([]);;
	useEffect(() => {
		(async() => {
			const res = await fetch('/api/features');
			const features = await res.json();
			setFeatures(features);
		  })()
	},[])
	console.log(features)
   
   return (
      <section className="" style={{ marginTop: "64px", marginBottom: "64px" }}>
         <Container>
            <SectionTitle title={"Features"}></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                  features.map((feature,idx) => <FeatureCard feature={feature} key={idx}></FeatureCard>)
               }
            </div>
         </Container>
      </section>
   );
};

export default Featured;
