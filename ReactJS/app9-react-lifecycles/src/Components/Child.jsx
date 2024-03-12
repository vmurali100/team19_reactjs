import { Component } from "react";
import { ImageComp } from "./ImageComp";

export class Child extends Component{
    constructor(props){
    super(props);

    this.state = {};
    console.log("constructor Called In child!!!")
    }

 static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps Called in Child");
    return null;
 }
 render(){
    console.log("Render Method called in Child");
    return(
        <div>
            <h2>Value recieved From Sample is : {this.props.count}</h2>
            {this.props.count === 0 && <ImageComp/>}
        </div>
    )
 }
 getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate called in child");
    return null
 }

 componentDidMount(){
    console.log("ComponentDidMount Called in child")
 }

 shouldComponentUpdate(){
    console.log("ShouldComponentUpdate Called in Child");
    return true
 }

 componentDidUpdate(){
    console.log("componentDidUpdate Called in Child")
 }
}