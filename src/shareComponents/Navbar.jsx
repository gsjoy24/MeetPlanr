"use client"
import Button from "@/common/Button";
import Container from "@/components/container";
import { UserAuth } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOutUser } = UserAuth();
  const [condition, setCondition] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOutUser();
    setCondition(false);
  }
  return (
    <div className="sticky top-0 z-20 w-full py-2 bg-white border-b-2 border-s-black">
      <Container>
        <nav className='relative flex items-center justify-between '>
          <div className='text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow'><Link href="/">MeetPlanr</Link></div>

          <div className={`jm_nav  ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
            <ul className='flex flex-col items-center gap-5 font-bold lg:flex-row'>
              <div className='text-2xl md:text-3xl font-bold text-[#465AF7] text-blue-e jm-shadow lg:hidden'><Link href="/">MeetPlanr</Link></div>

              <li><Link href="/">Home</Link></li>
              <li><Link href="/product">Product</Link></li>
              <li onClick={() => setIsOpen((prev) => !prev)} className="flex items-center cursor-pointer">
                <Link href="/solutions">Solutions</Link>

                {!isOpen ? (
                  <HiOutlineChevronDown className="ml-2" />
                ) : (
                  <HiOutlineChevronUp className="ml-2" />
                )}

                {isOpen && (
                  <ul className="text-[17px] absolute mt-[270px] p-3 pl-5 pr-16 space-y-2 rounded-md sm:mb-5 bg-[#d1e6fa]">
                    <li className="hover:text-[#465AF7] duration-100">
                      <Link href="/solutions/marketing">Marketing</Link>
                    </li>
                    <li className="hover:text-[#465AF7] duration-100">
                      <Link href="/solutions/technology">Technology</Link>
                    </li>
                    <li className="hover:text-[#465AF7] duration-100">
                      <Link href="/solutions/customer-success">Customer Success</Link>
                    </li>
                    <li className="hover:text-[#465AF7] duration-100">
                      <Link href="/solutions/professional-services">Professional Services</Link>
                    </li>
                    <li className="hover:text-[#465AF7] duration-100">
                      <Link href="/solutions/businesses">Small & Medium Businesses</Link>
                    </li>
                  </ul>
                )}
              </li>
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
            {condition && <div className="absolute z-50 overflow-hidden bg-white border rounded-lg w-60 lg:top-16 lg:right-0 drop_shadow h-fit">
              <Link href={'/my-account'} onClick={() => setCondition(false)} className="flex items-center justify-between w-full px-5 py-3 text-left hover:bg-slate-300">
                <span>My Account</span>
                <FaAngleRight />
              </Link>
              <button onClick={handleLogOut} className="flex items-center justify-between w-full px-5 py-3 text-left hover:bg-slate-300">
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
}

export default Navbar;
