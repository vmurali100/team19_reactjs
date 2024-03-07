import React from "react";
import { useState } from "react";
import ChildUser from "./ChildUser";
import ImageComp from "./ImageComp";

const SuperUser = () => {
  const [images,setImages] = useState([
    "https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_1280.jpg",
    "https://media.istockphoto.com/id/1146739362/photo/poppies-in-field-at-sunset.jpg?s=2048x2048&w=is&k=20&c=S-HOJz18LwAOO8BZ9EDscfx9K6U2y4sjemIaFVyleIc=",
    "https://media.istockphoto.com/id/1411413042/photo/field-of-blooming-corn-poppy-at-sunset.jpg?s=2048x2048&w=is&k=20&c=AuYMjhCAOp5MOGPzrzHNksU-qbao8hfIC4Tly4nFNq4=",
    "https://media.istockphoto.com/id/1180578060/photo/poppy-on-a-meadow-during-sunset.jpg?s=2048x2048&w=is&k=20&c=airHE_CBK92yxqZznmYtIYGe5vHFxgK43AAXhklnGzw="
  ])
  const showImage = () => {
    // return <h2>Welcome to ReactJS training !!!</h2>;
    return <ImageComp />;
  };
  return (
    <div>
      <h2>Welcomet to Super User !!</h2>
      <hr />
      {/* <ChildUser render={showImage} /> */}
      {images.map((address)=>{
        return <ImageComp address={address}/>
      })}
    </div>
  );
};

export default SuperUser;
