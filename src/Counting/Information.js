'use client'
import Container from "@/components/container";
import { useEffect, useState } from "react";
import CountUp from 'react-countup';

const Information = () => {
  const [activeStudents, setActiveStudents] = useState(0);
  const [activeTeachers, setActiveTeachers] = useState(0);
  const [testimonials, setTestimonials] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);
  const initialCount = 0;
  const finalStudentCount = 200000 ;
  const finalTeacherCount = 200000;
  const finalTestimonialCount = 200000;
  const finalVideoCount = 200000;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("count-section");
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const isVisible = elementPosition.top < window.innerHeight;
        if (isVisible) {
          startCounting();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    const startCounting = () => {
      const studentIncrement = Math.ceil((finalStudentCount - initialCount) / 100);
      const teacherIncrement = Math.ceil((finalTeacherCount - initialCount) / 100);
      const testimonialIncrement = Math.ceil((finalTestimonialCount - initialCount) / 100);
      const videoIncrement = Math.ceil((finalVideoCount - initialCount) / 100);
      let currentStudentCount = initialCount;
      let currentTeacherCount = initialCount;
      let currentTestimonialCount = initialCount;
      let currentVideoCount = initialCount;

      const interval = setInterval(() => {
        currentStudentCount += studentIncrement;
        currentTeacherCount += teacherIncrement;
        currentTestimonialCount += testimonialIncrement;
        currentVideoCount += videoIncrement;
        setActiveStudents(currentStudentCount);
        setActiveTeachers(currentTeacherCount);
        setTestimonials(currentTestimonialCount);
        setTotalVideos(currentVideoCount);

        if (currentStudentCount >= finalStudentCount && currentTeacherCount >= finalTeacherCount && currentTestimonialCount >= finalTestimonialCount && currentVideoCount >= finalVideoCount) {
          clearInterval(interval); 
        }
      }, ); 

      return () => {
        clearInterval(interval);
      };
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <Container>
     <div className="flex flex-col items-center justify-center md:flex-row md:gap-4 mb-20 -mt-8 ">
    <div id="count-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-8">
        <div className="text-center md:text-left">
          <h1 className="text-sm text-center mb-3 mt-3">Businesses trust Sign 
                    In Scheduling with their appointments worldwide</h1>
          <div className="text-4xl text-center font-bold text-black">
            <CountUp start={initialCount} end={activeStudents} duration={5} formattingFn={(value) => `${(value / 1000).toFixed(0)} K`} />
          </div>
          <p className="text-gray-500 mt-4 font-light"></p>
        </div>
      </div>

      <div className="p-8">
        <div className="text-center md:text-left">
          <h1 className="text-sm text-center mb-3 mt-3">Businesses trust Sign 
                    In Scheduling with their appointments worldwide</h1>
          <div className="text-4xl text-center font-bold text-black">
            <CountUp start={initialCount} end={activeTeachers} duration={5} formattingFn={(value) => `${(value / 1000).toFixed(0)} K`}/>
          </div>
          
        </div>
      </div>

      <div className="p-8">
        <div className="text-center md:text-left">
          <h1 className="text-sm text-center mb-3 mt-3">Businesses trust Sign 
                    In Scheduling with their appointments worldwide</h1>
          <div className="text-4xl text-center font-bold text-black">
            <CountUp start={initialCount} end={testimonials} duration={5} formattingFn={(value) => `${(value / 1000).toFixed(0)} K`}/>
          </div>
          
        </div>
      </div>

      <div className="p-8">
        <div className="text-center md:text-left">
          <h1 className="text-sm text-center mb-3 mt-3">Businesses trust Sign 
                    In Scheduling with their appointments worldwide</h1>
          <div className="text-4xl text-center font-bold text-black">
            <CountUp start={initialCount} end={totalVideos} duration={5} formattingFn={(value) => `${(value / 1000).toFixed(0)} K`}  />
          </div>
          
        </div>
      </div>
    </div>
  </div>
   </Container>
  

  );
};

export default Information;
