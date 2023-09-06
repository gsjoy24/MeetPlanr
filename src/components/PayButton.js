"use client";

function ButtonCheckout({ priceId }) {
  console.log(priceId);
  const handleCheckout = async ( ) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({priceId}),
      headers: {'Content-Type': 'application/json'}
  })
  const data = await res.json()
  if(data){
    window.location.href = data.url
  }
  }
  return (
    <button
      className="bg-sky-500 text-white px-4 py-2 rounded"
      onClick={handleCheckout}
    >
      Buy
    </button>
  );
}

export default ButtonCheckout;