"use client"
import { UserAuth } from '@/providers/AuthProvider';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const UseGetCurrentUser = () => {
    const { user } = UserAuth();
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
      (async() => {
        try {
          if(user?.email){
            const response = await axios(`/api/users?email=${user?.email}`);
            setCurrentUser(response.data);
          }
        } catch (error) {
          // Handle error
          console.error(error);
        }
      })()
    }, [user]);
    return currentUser
};

export default UseGetCurrentUser;