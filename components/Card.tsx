import React from 'react'

function Card({children} : {children : React.ReactNode}) {
    const cardStyle : React.CSSProperties = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      };
    
  return (
    <div style={cardStyle}>
      {children}
    </div>
  )
}

export default Card
