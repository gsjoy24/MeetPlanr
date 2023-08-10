import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import img1 from "../assets/review-image/img1.jpg";
import img2 from "../assets/review-image/img2.jpg";
import img3 from "../assets/review-image/img3.jpg";
import img4 from "../assets/review-image/img5.jpg";
import img5 from "../assets/review-image/img6.jpg";
import img6 from "../assets/review-image/img7.jpg";
import img7 from "../assets/review-image/img8.jpg";
import img8 from "../assets/review-image/img9.jpg";
import img9 from "../assets/review-image/img10.jpg";
import img10 from "../assets/review-image/img11.jpg";
import img11 from "../assets/review-image/img12.jpg";
import img12 from "../assets/review-image/img4.jpg";
import SectionTitle from "../components/SectionTitle";
import Container from "@/components/container";

const Review = () => {
    return (
        <Container>
            <div className="" style={{ marginTop: "64px", marginBottom: "64px" }}>
                <div>
                    <SectionTitle title={"Happy clients Says"}></SectionTitle>
                </div>
                <div className="carousel w-full py-10">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="grid lg:grid-cols-3  mx-auto grid-cols-1 2xl:gap-10 gap-8" >
                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img1}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img2}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img3}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide4"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide2"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="grid lg:grid-cols-3 mx-auto grid-cols-1 px-5 justify-center items-center 2xl:gap-10  gap-8">
                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img4}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img5}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img6}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide1"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide3"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="grid lg:grid-cols-3 mx-auto grid-cols-1 px-5 justify-center items-center 2xl:gap-10  gap-8">
                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img7}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img8}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img9}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide2"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide4"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="grid lg:grid-cols-3 mx-auto grid-cols-1 px-5 justify-center items-center 2xl:gap-10  gap-8">
                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img10}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img11}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure className="">
                                            <Image
                                                src={img12}
                                                alt="Picture of the author"
                                                className="h-[120px] w-[120px] rounded-[50%]  mx-auto my-2 object-cover shadow-sm"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>
                                                Slate helps you see how many
                                                more days you need to work to
                                                reach your financial goal for
                                                the month and year.
                                            </p>

                                            <div className="flex gap-2 my-2">
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                                <AiFillStar className="text-orange-700 w-6 h-6" />
                                            </div>

                                            <h2 className="card-title text-[#23A6F0]">
                                                Regina Miles
                                            </h2>
                                            <h2 className="">Banker</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href="#slide3"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href="#slide1"
                                className="lg:w-6 text-primary btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Review;
