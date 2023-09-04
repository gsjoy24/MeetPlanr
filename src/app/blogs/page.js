"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Page = () => {
  const [data, setData] = useState([]);
   const [expanded, setExpanded] = useState(false);

  useEffect(() => {
   
    fetch('data.json') 
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      
  }, []);

    return (
        <section >
        <div className="flex justify-center items-center p-8">
            <div className="flex flex-col items-center pr-8">
            <Image src='https://i.ibb.co/cQCcTyz/Untitled-design-6.jpg' alt="" width={500} height={500} />
            </div>
            <div className="flex flex-col pl-8">
                <p className='font-thin text-sm mb-4 '>FEATURES — 5 MIN READ</p>
                <h1 className='font-bold text-2xl mb-4'>The perfect fit: Choosing the <br></br> best scheduling app for your <br></br> small business.</h1>
                <p>Streamlining your scheduling process is crucial in helping small <br></br> businesses find time to serve more customers. Managing appointments <br></br> efficiently, enhancing…</p>
                <Link className='text-blue-500 hover:underline mt-2' href="/your-target-page">
                    Read article
                </Link>
            </div>
        </div>

         {/* card section  */}

         
         <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {data.map((item) => (
          <div key={item.id} className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200">
            <figure>
              <Image src={item.image} alt="Card" width={400} height={200} />
            </figure>
            <div className="card-body">
              <h2 className="text-sm">{item.subtitle}</h2>
              <h1 className="text-xl font-bold mt-4">{item.title}</h1>
              <p className="mt-4">
                {expanded ? item.content : `${item.content.split(' ').slice(0, 20).join(' ')}...`}
              </p>
              <button
                className="text-blue-500 hover:underline mt-2"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'See Less' : 'See More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
<div className="flex justify-center mt-6">
    <button className="btn bg-[#465AF7] text-white px-6 mb-8 mt-8">Learn more</button>
  </div>

  <div className="flex justify-center items-center p-8">
  <div className="flex flex-col pl-8">
                
                <h1 className='font-bold text-2xl mb-4'>Get the freedom to book Anywhere.</h1>
                <p>For teams on-the-move, Setmore Free comes in a pocket-<br></br>friendly edition for your Android or iOS device. Your<br></br>appointments are just a tap away.</p>
                <div className="flex mt-5">
      <button className="border border-blue-500 hover:bg-slate-300 text-blue-500 hover:text-white font-thin py-2 px-4 mr-2 rounded flex items-center justify-center">
        <Image src='https://i.ibb.co/k611zwY/icon-apple.png' alt="iOS Icon" width={20} height={25} className="w-4 h-5 mr-2 mb-1" /> iOS
      </button>
      <button className="border border-blue-500 hover:bg-slate-300 text-blue-500 hover:text-white font-thin py-2 px-4 rounded flex items-center justify-center">
        <Image src='https://i.ibb.co/cyyZ4t3/icon-android.png' alt="Android Icon" width={20} height={25} className="w-4 h-5 mr-2" /> Android
      </button>
    </div>
            </div>
            <div className="flex flex-col items-center pr-8">
                <Image src='https://i.ibb.co/k9nhLBM/phone.webp' alt="" width={500} height={500} />
            </div>
            
        </div>
       
        <div className="flex justify-center items-center  ">
      <div>
        <Image
          width="1440"
          height="280"
          src='https://i.ibb.co/2qMBCLm/setmore-people-community.webp'
          alt=""
          
          loading="lazy"
          
        />
      </div>
    </div>
    <div className="blue-section w-full h-96 bg-blue-500 flex flex-col justify-center items-center text-white mb-10">
      <p className='text-4xl font-bold mb-8'>Make the magic happen, we’ll<br></br> make sure it happens on time.</p>
      <div className="mt-4">
      <button className=" bg-white hover:bg-slate-300 text-blue-500 hover: font-thin py-2 px-4 rounded flex items-center justify-center">
          Sign Up
        </button>
      </div>
    </div>
    

        </section>
        
    );
};

export default Page;
