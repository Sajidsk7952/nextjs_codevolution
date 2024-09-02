import React from 'react'

function Layout({children} : { children : React.ReactNode}) {
  return (
    <div>
      {children}
      <h1>The Products are</h1>
    </div>
  )
}

export default Layout
