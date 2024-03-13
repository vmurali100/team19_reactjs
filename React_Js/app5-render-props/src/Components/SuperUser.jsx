import React, { useState } from "react";
import ChildUser from "./ChildUser";
import ImageComponent from "./ImgComponent";

const SuperUser=()=>{
    const [images,setimages]=useState([
        "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
    ])
    // const showImg=()=>{
    //     // return <h2>Welcome to React js Trainign</h2>
    //     return <ImageComponent/>
    // }
    return <>
    <h1>welcome to SuperUser...!!!</h1>
    <hr />
    {/* <ChildUser render={showImg()}/> */}
    {images.map((address)=>{
        return <ImageComponent address={address}/>
    })}
  
    </>
}

export default SuperUser;