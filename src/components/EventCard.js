import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaPencilAlt, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import ReactStarsRating from 'react-awesome-stars-rating';
import { UserAuth } from "@/providers/AuthProvider";
const EventCard = ({schedule,handleEdit,setRefetch}) => {
    const {eventName,confirm,duration,scheduleLink,scheduleDate,path,eventType,_id} = schedule || {};
    const {register,handleSubmit,watch,reset,formState: { errors }} = useForm()
    const detailsLink = `${scheduleLink}/details`;
    const [action,setAction] = useState(false)
    const [modal,setModal] = useState(false);
    const [rating,setRating] = useState(0);
    const {user} = UserAuth();
// copy event detail link
    const copyLink = () => {
    navigator.clipboard.writeText(scheduleLink).then(() => {
            toast.success("Meeting Link coped");
        });
    };

    const handleEditEvent = () => {
        handleEdit(path,confirm,eventType);
        setAction(false);
    }
    const handleDeleteEvent = () => {
        setAction(false);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                (async() => {
                    const response = await axios.delete(`/api/scheduling/delete/${_id}`)
                    if(response?.data?.deletedCount > 0){
                        setRefetch(true)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }  
                })()
            }
          })

    }

 // Review Funtion ===================
    const today = new Date();
    const SheduleDate = scheduleDate ? new Date(scheduleDate) : null;
    const isPast = (confirm && (SheduleDate < today));
    // post review in DB
    const handleReview = async(data) => {
        const reviewData = {
            name: user?.displayName,
            photoUrl: user?.photoURL,
            reviewText: data?.reviewText,
            rating,
            timestamp: new Date()
        }
        if(rating){
            const response = await axios.post('/api/reviews',reviewData);
            if(response?.data?.insertedId){
                setModal(false);
                reset();
                setRating(0);
                Swal.fire({
                    icon: 'success',
                    title: 'Thanks for give Review.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        }else{
            toast.error("please Select a review");
        }
    }
    return (
        <div className='border-2 relative shadow-md p-5 max-w-[400px] w-full mx-auto rounded-ss-2xl rounded-br-2xl grid'>
            <h2 className='text-lg font-medium'>{eventName}</h2>
            <p className='my-1'>{duration}mins, One-on-One</p>
            <Link target='_blank' className='my-5 text-blue-500 hover:underline' href={detailsLink}>View more details</Link>
{/*============= button area================= */}
            <div className={`text-right mt-2 flex ${isPast ? "justify-between" : "justify-end"}`}>
                {
                    isPast && <button onClick={() => setModal(true)} className="hover:underline text-[#465AF7]">Give Review</button>
                }
                <button onClick={copyLink} className='px-4 rounded-3xl py-2 border border-[#465AF7]'>Copy Link</button>
            </div>
{/*============= user action btn ================= */}
            <div className="absolute top-2 right-2">
                <div className={`absolute bg-white p-3 shadow-lg border top-0 right-8 text-sm rounded-md w-32 ${action ? "block" : "hidden"}`}>
                    <button onClick={handleEditEvent} className="flex items-center gap-3"><FaPencilAlt/>Edit</button>
                    <button  onClick={handleDeleteEvent} className="flex items-center gap-3 mt-1"><FaTrashAlt/> Delete</button>
                </div>
                <button onClick={()=> setAction(!action)} className={`bg-white text-2xl text-[#465AF7] duration-300 transition-all ${action ? "rotate-90" : "rotate-0"}`}><AiTwotoneSetting/></button>
            </div>
{/* ==================== Review Modal ======================*/}
            {
                modal && <div className="fixed top-0 left-0 z-50 bg-opacity-30 w-full h-screen bg-slate-800 flex justify-center items-center">
                    <div className="bg-white p-5 w-11/12 sm:w-4/5 md:w-1/2 lg:w-2/5 rounded-md relative">
                        <form className="flex flex-col" onSubmit={handleSubmit(handleReview)}>
                            <h1 className="text-center text-2xl">Give Your Feedback.</h1>
                            <textarea maxLength={150} {...register("reviewText")} className="mp_input w-full mt-5 min-h-[100px]" />
                            {watch("reviewText")?.length === 150 && <span className="text-red-500">You cannot write more than 150 letter.</span>}
                            <ReactStarsRating starGap={10} size={30} className="flex mt-6" onChange={(value) => setRating(value)} value={rating} />
                            <input type="submit" className="bg-[#465af7] text-white px-5 py-2 rounded-md w-fit mx-auto mt-8 cursor-pointer"/>
                        </form>
                        <button onClick={() => setModal(false)} className="absolute -top-2 -right-2 bg-white rounded-full"><FaTimesCircle className="text-red-500 text-3xl"/></button>
                    </div>
                </div>
            }
        </div>
    );
};

export default EventCard;
