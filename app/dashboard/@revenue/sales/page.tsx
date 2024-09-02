import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <Card>
      <h3 className='font-semibold'>Sales Revenue</h3>
      <Link href={'/dashboard'} className='text-blue-600'>Default</Link>
    </Card>
  )
}

export default Page
