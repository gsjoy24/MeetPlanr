"use client"


/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios(`/api/blog/${params.id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [params]);

    return (
        <div className=" min-h-screen py-6">
            <div className="max-w-2xl mx-auto  p-6 ">
                <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full rounded-md mb-4"
                    width={1000}
                    height={400} 
                />
                <p className="text-gray-600">{blog.subtitle}</p>
                <p className="text-gray-800 mt-2">{blog.content}</p>
            </div>
        </div>
    );
};

export default page;
