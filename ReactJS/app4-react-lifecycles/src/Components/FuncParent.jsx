import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FuncChild from "./FuncChild";

const FuncParent = () => {
  const [prducts, setProducts] = useState(10);
 
  return (
    <div>
        <h2>Welcome to Funcational Parent </h2>
        <button onClick={()=>{setProducts(40)}}>Change Qty</button>
      <FuncChild prducts={prducts} />
    </div>
  );
};

export default FuncParent;
