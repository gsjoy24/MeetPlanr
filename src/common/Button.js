import React from 'react';

const Button = ({children,...props}) => {
    return (
        <div>
            <button {...props} className="bg-[#465AF7] hover:bg-sky-950 text-white px-8 py-3 rounded-lg">{children}</button>
        </div>
    );
};

export default Button;