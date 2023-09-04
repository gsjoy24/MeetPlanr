import React from 'react';
 
const LoadingSpinner = () => {

    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
        <div className='text-7xl flex items-baseline'>
            <p>L</p>
            <p className='animate-spin w-10 h-10 border-8 border-dashed border-blue-600 rounded-full'></p>
            <p>ading....</p>
        </div>
        </div>
    );
};

export default LoadingSpinner;