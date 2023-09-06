"use client";
import { UserAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

const 
ButtonCheckout = ({ priceId,price }) => {
  const { setPrice } = UserAuth();
  const router = useRouter();
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
    <button
      className=" font-semibold text-[#0B3558] bg-sky-100 border border-[#0b3558af] px-8 py-3 rounded-lg mt-6"
      onClick={handleCheckout}
    >
  Choose Plan
    </button>
  );
}

export default ButtonCheckout;