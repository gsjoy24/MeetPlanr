"use client"
import Button from "@/common/Button";
import Container from "@/components/container";
import { UserAuth } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOutUser } = UserAuth()

    return (
        <div className="border-b-2 border-s-black py-6 px-4 fixed w-full bg-white -top-3 z-20">
        <Container>
            <nav className='flex justify-between items-center  '>
                <div className='text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow'><Link href="/">MeetPlanr</Link></div>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex items-center font-bold flex-col lg:flex-row gap-5'>
                        <div className='text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow lg:hidden'><Link href="/">MeetPlanr</Link></div>
                        <li ><Link href="/">Home</Link></li>
                        <li ><Link href="/product">Product</Link></li>
                        <li ><Link href="/solutions">Solutions</Link></li>
                        <li ><Link href="/pricing">Pricing</Link></li>
                        <li ><Link href="/blogs">Blogs</Link></li>
                        {user ?
                            <>
                                <li>
                                    <Image className="rounded-full object-cover" src={user?.photoURL ? user?.photoURL : 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'} width={50} height={50} alt={user?.displayName ? user?.displayName : 'User'} />
                                </li>
                                <li onClick={() => logOutUser()}>
                                    <Button>Log out</Button>
                                </li>
                            </>
                            : <>
                                <li>
                                    <Link href="/sign-up">Sign Up</Link>
                                </li>
                                <li>
                                    <Link href='/login' ><Button>Login</Button></Link>
                                </li>
                            </>}
                    </ul>
                </div>

                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes size={25} /> : <FaBars size={20} />}</button>
            </nav>
        </Container>
        </div>
    );
};

export default Navbar;
