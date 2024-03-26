import React from 'react'
import { useSelector } from 'react-redux'

export default function Product() {
    const { products } = useSelector((state) => {
        return state;
      });
  return (
    <div>
      <h1>Welcome to Product Component..</h1>
      <ul>
        {products.map((prod,i)=>{
            return <li key={i}>{prod}</li>
        })}
      </ul>
    </div>
  )
}
