"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Order() {
    const router = useRouter();
    const handleClick = ()=>{
        alert("order placed successfully!!!");
        router.push("/");
    }
  return (
    <div>
      <h1>Order Here</h1>
      <button onClick={handleClick} className='px-2 py-3 border-2 border-black'>Order now</button>
    </div>
  )
}

export default Order
