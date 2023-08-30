"use client"
import Button from "@/common/Button";
import Container from "@/components/container";
import { UserAuth } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOutUser } = UserAuth();
    const [condition, setCondition] = useState(false);
    const handleLogOut = () => {
        logOutUser();
        setCondition(false);
    }
    return (
        <div className="border-b-2 border-s-black py-2 sticky w-full bg-white top-0 z-20">
            <Container>
                <nav className='flex justify-between relative items-center  '>
                    <div className='text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow'><Link href="/">MeetPlanr</Link></div>

                    <div className={`jm_nav  ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                        <ul className='flex items-center font-bold flex-col lg:flex-row gap-5'>
                            <div className='text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow lg:hidden'><Link href="/">MeetPlanr</Link></div>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/product">Product</Link></li>
                            <li><Link href="/solutions">Solutions</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/blogs">Blogs</Link></li>
                            {user ?
                                <li>
                                    <button onClick={() => setCondition(!condition)}>
                                        <Image className="rounded-full" src={user?.photoURL ? user?.photoURL : 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'} width={50} height={50} alt={user?.displayName ? user?.displayName : 'User'} />
                                    </button>

                                </li>
                                : <>
                                    <li>
                                        <Link href='/login' ><Button>Login</Button></Link>
                                    </li>
                                </>}
                        </ul>
                        {condition && <div className="absolute w-60 lg:top-16 lg:right-0 bg-white border drop_shadow h-fit z-50 rounded-lg overflow-hidden">
                            <Link href={'/my-account'} onClick={() => setCondition(false)} className="flex justify-between items-center px-5 py-3 hover:bg-slate-300 w-full text-left">
                                <span>My Account</span>
                                <FaAngleRight />
                            </Link>
                            <button onClick={handleLogOut} className="flex justify-between items-center px-5 py-3 hover:bg-slate-300 w-full text-left">
                                <span>Log out</span>
                                <FaAngleRight />
                            </button>
                        </div>}
                    </div>

                    <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes size={25} /> : <FaBars size={20} />}</button>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;
