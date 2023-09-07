"use client"
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const SuccessPage = () => {
    const {price} = useParams();
    console.log(price);
    const currentUser = UseGetCurrentUser();
    const plan = (price == 15) ? "Standard" : (price == 15) ? "Premium" : "Basic"
    console.log(plan);
    useEffect(()=> {
        (async()=> {
            if(currentUser){
                const userResponse = axios.put(`/api/users/${currentUser?.username}`,{plan});
                console.log(userResponse.data);
            }
        })();
    },[currentUser,plan])
    return (
        <div>
            success
        </div>
    );
};

export default SuccessPage;