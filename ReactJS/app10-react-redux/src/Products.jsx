import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const { products } = useSelector((state) => {
    return state;
  });
  console.log(products)
  return <div>
    <ul>
        {products.map((prod,i)=>{
            return <li key={i}>{prod}</li>
        })}
    </ul>
  </div>;
};

export default Products;
