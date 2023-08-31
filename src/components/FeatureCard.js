import Image from 'next/image';
import { useState } from 'react';
import { FaCalendarCheck, FaTimesCircle } from 'react-icons/fa';

const FeatureCard = ({feature}) => {
    const {description,icon,image,name} = feature || {};   
    const [showModal, setShowModal] = useState(false);
    const [showAll,setShowAll] = useState(false);   
    return (
        <>
            <div className="border-2 p-5 rounded-md shadow-lg grid ft_hover">
                <div className="border w-[130px] h-[130px] flex justify-center items-center rounded-full mx-auto bg-white">
                    <Image width={90} height={90} src={icon} className='rounded-3xl' alt='Feature icon'/>
                </div>
                <h3 className="font-semibold text-2xl mt-7 text-center">
                    {name}
                </h3>
                {
                    showAll 
                    ? <p className='py-5'>{description} <button className='font-semibold hover:underline' onClick={() => setShowAll(false)}>See less.</button></p> 
                    : <p className='py-5'>{description.slice(0,120)}... <button className='font-semibold hover:underline' onClick={()=> setShowAll(true)}>See more.</button></p>
                }

                <button onClick={() => setShowModal(true)} className="bg-[#465AF7] hover:bg-sky-950 active:scale-95 duration-200 text-white px-6 py-3 rounded-lg" >
                    Learn more
                </button>
            </div>
            {
                showModal && <div className="fixed flex justify-center items-center bg-slate-800 bg-opacity-20 top-0 left-0 w-full h-screen z-50">
                <div className="w-4/5 h-[90vh] bg-white overflow-auto p-5">
                    <Image width={600} height={300} src={image} className='w-4/5 mx-auto border-2 shadow-lg p-5 rounded-lg' alt='Features Image'/>
                    <h2 className='text-3xl font-semibold my-5'>{name}</h2>
                    <p>{description}</p>
                    <button onClick={()=> setShowModal(false)} className='text-3xl text-red-600 fixed top-4 rounded-full bg-white z-50 right-[9%]'><FaTimesCircle className=''/></button>
                </div>
            </div>
            }
        </>
    );
};

export default FeatureCard;
