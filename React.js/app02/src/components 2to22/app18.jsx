import React, { Component } from "react";

export class Img extends Component{
    constructor(){
        super();
        this.state={
            imgurl:"https://images.freeimages.com/images/large-previews/f79/cat-1402109.jpg?fmt=webp&w=500",
            alttext:"Cat img",
        }
    }
    handleclick=()=>{
        if(this.state.imgurl=== "https://images.freeimages.com/images/large-previews/f79/cat-1402109.jpg?fmt=webp&w=500"){
            this.setState({
                imgurl:"https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
                alttext:"dog img",
            })
        }
        else{
            this.setState({
                imgurl:"https://images.freeimages.com/images/large-previews/f79/cat-1402109.jpg?fmt=webp&w=500",
                alttext:"cat img",
            })
        }
    }
    render(){
    return <div>
        <h1 style={{color:'red'}}>Secenario 18</h1>

        <img style={{width:'350px',border:'1px solid blue'}} src={this.state.imgurl} alt={this.state.alttext} onClick={this.handleclick}/> <hr />
    </div> 
    }
}