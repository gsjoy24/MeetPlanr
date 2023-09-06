"use client";

import { useRouter } from "next/navigation";

const ButtonCheckout = ({ priceId }) => {
  const router = useRouter();
  const handleCheckout = async () => {
    console.log("object");
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({priceId}),
      headers: {'Content-Type': 'application/json'}
  })
  const data = await res.json()
  if(data){
    console.log(data);
    router.push(data.url)
    if(data.url == "http://localhost:3000/pricing"){
      alert("payment done")
    }
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