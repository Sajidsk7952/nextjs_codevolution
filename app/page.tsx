import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Welcome Back!!</h1>
      <h2 className='font-bold text-xl'><Link href={'/dashboard'}>Dashboard</Link></h2>
      <p><Link href={'/product'}>product</Link></p>
      <p><Link href={'/product/order'}>Order </Link></p>
    </div>
  )
}

export default Page
