import Link from 'next/link'
import React from 'react'

function Interceptingroutes() {
  return (
    <div>
      <h1>Intercepting Routes</h1>
      <Link href={'/intercepting/route2'}>route</Link>
    </div>
  )
}

export default Interceptingroutes
