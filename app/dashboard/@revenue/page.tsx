import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <Card>
      <h3 className='font-semibold'>Revenue</h3>
      <Link href={'/dashboard/sales'} className='block text-blue-500'>Sales</Link>
     </Card> 
  )
}

export default Page
