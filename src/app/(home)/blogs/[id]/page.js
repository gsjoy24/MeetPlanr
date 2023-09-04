"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    console.log(params);
    const [blog,setBlog] = useState({});
    useEffect(()=> {
        (async () => {
            const data = await axios(`/api/blog/${params.id}`)
            setBlog(data?.data);
        })()
    },[params])
    console.log(blog);
    return (
        <div>
            Single blog page
        </div>
    );
};

export default page;