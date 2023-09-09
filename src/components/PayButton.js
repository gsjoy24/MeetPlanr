"use client";
import UseGetCurrentUser from "@/hooks/UseGetCurrentUser";
import LoadingSpinner from "@/shareComponents/LoadingSpinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ButtonCheckout = ({ priceId,price,priceName }) => {
  const router = useRouter();
  const currentUser = UseGetCurrentUser();
  const selectedPlan = currentUser?.plan?.toUpperCase() === priceName?.toUpperCase() && !(priceName?.toUpperCase() == "BASIC");
  const isDisable = (currentUser?.plan === "Standard" || currentUser?.plan === "Premium")
  const isFree = priceName?.toUpperCase() == "BASIC";
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({priceId,price}),
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    if(data){
    router.push(data.url)
  }
  }
  return (
    <button disabled={selectedPlan || !currentUser || isDisable || isFree} className={`disabled:cursor-not-allowed font-semibold border border-[#0b3558af] px-8 py-3 rounded-lg mt-6 ${selectedPlan ? "bg-slate-400 text-[#ddd]" : " text-[#0B3558] bg-sky-100" }`} onClick={handleCheckout} >
    {selectedPlan ?  "Plan Selected" : (!currentUser) ? <span className="loading loading-dots loading-md"></span> :(isFree) ? "Free" :"Choose Plan"}
    </button>
  );
}

export default ButtonCheckout;