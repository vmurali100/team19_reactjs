import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProgressBar = () => {
  const [percent, setPersent] = useState(0);
  const handlePercent = () => {
    setTimeout(() => {
      setPersent(percent + 1);
    }, 100);
  };
  useEffect(function () {
    if(percent <=100){
        handlePercent();
    }
    
  }, [percent]);
  return (
    <div>
      <div id="progress">
        <div id="progressbar" style={{ width: percent + "%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
