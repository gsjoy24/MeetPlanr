"use client"
import React, { useEffect } from 'react';

const SuccessPage = ({}) => {
    useEffect(()=> {
        console.log("object");
    },[])
    return (
        <div>
            success
        </div>
    );
};

export default SuccessPage;