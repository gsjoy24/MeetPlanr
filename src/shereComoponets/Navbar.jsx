"use client"
import Button from "@/common/Button";
import Container from "@/components/container";
import { UserAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // todo: this is the user info, design the interface now. Ans Please remove the unnecessary classes {jm-shadow, jm_nav}. This file should have the extension js, not jsx i think. best of luck!
    const { user } = UserAuth()
    console.log(user);
    return (
        <Container>
            <div>
                <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center py-6 px-4 border-b-2 border-s-black '>
                    <h1 className='text-4xl font-bold text-[#465AF7] text-blue-e lg:col-span-2 jm-shadow mx-2'><Link href="/">MeetPlanr</Link></h1>

                    <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                        <ul className='flex font-bold flex-col lg:flex-row gap-3 lg:gap-x-7'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/product">Product</Link></li>
                            <li><Link href="/statistics">Solutions</Link></li>
                            <li><Link href="/applied">Pricing</Link></li>
                            <li><Link href="/blogs">Blog</Link></li>
                            <li><Link href="/sign-up">Sign Up</Link></li>
                        </ul>
                        <Link href='/login' ><Button>Login</Button></Link>
                    </div>
                    <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes /> : <FaBars />}</button>
                </nav>
            </div>
        </Container>
    );
};

export default Navbar;
