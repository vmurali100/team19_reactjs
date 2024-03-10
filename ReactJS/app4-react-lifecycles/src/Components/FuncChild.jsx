import React, { useEffect, useState } from "react";

const FuncChild = (props) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log("Compoennt Did Mountted ");
    setTotal(props.prducts * 10);
  }, [props.prducts]);

  useEffect(() => {
    return () => {
      console.log("Cleaning is done");
    };
  }, []);
  return (
    <div>
      <h2>Total Cost is : {total}</h2>
      {total === 100 ? (
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1709624552~exp=1709625152~hmac=bd990c45c6e0ad7116c3f32435ae802407beaef71ffc1c5b0a4520bfe0fb4105"
          alt=""
        />
      ) : (
        handleRemove()
      )}
    </div>
  );
};

export default FuncChild;
