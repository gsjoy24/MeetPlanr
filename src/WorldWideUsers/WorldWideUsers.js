"use client";
import Image from "next/image";
import Container from "@/components/container";
import Slider from "react-infinite-logo-slider";
import img1 from "@/assets/product-image/Bitly.png";
import img2 from "@/assets/product-image/Compass.png";
import img3 from "@/assets/product-image/Crocs.png";
import img4 from "@/assets/product-image/Doordash.png";
import img5 from "@/assets/product-image/Dropbox.png";
import img6 from "@/assets/product-image/G2.png";
import img7 from "@/assets/product-image/Luat.png";
import img8 from "@/assets/product-image/Pendo.png";
import img9 from "@/assets/product-image/Twilio.png";

const WorldWideUsers = () => {
   return (
      <div className="py-24 mt-20 bg-gradient-to-r from-[#f7f8fa] via-[#f4f4f8] to-[#fdfcfc]">
         <Container>
            <p className="text-xl sm:text-4xl font-bold text-[#0B3558] lg:w-[680px] mx-auto text-center mb-10 leading-10">
               Scheduling automation for more than{" "}
               <span className="text-[#465AF7]">20 million</span> users
               worldwide
            </p>

            <Slider
               duration={25}
               pauseOnHover={false}
               blurBorders={false}
               blurBorderColor={"#fff"}
            >
               <Slider.Slide className="-mr-16">
                  <Image src={img1} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide className="mr-16">
                  <Image src={img2} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide className="mr-16">
                  <Image src={img3} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide className="mr-16">
                  <Image src={img4} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide className="-mr-16">
                  <Image src={img5} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide className="-mr-16">
                  <Image src={img6} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide className="-mr-16">
                  <Image src={img7} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide>
                  <Image src={img8} alt="docs image"></Image>
               </Slider.Slide>
               <Slider.Slide>
                  <Image src={img9} alt="docs image"></Image>
               </Slider.Slide>
            </Slider>
         </Container>
      </div>
   );
};

export default WorldWideUsers;
