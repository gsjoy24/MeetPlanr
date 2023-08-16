import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="bg-[#465AF7] hover:bg-sky-950 text-white px-8 py-3 rounded-lg mt-6">{children}</button>
        </div>
    );
};

export default Button;