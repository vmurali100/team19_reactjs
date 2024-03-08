import React,{Component} from "react"
import Child from "./Child";

export default class Sample extends Component{
    constructor(props){
        super(props);

        thgis.state={
            count :0,

        };
        console.log("constructor method called !!! in Sample");
    }
    componentDidMount(){
        console.log("componentDidMount called !!! in sample")
    }
    handleCount=()=>{
        this.setState({count:this.state.count+10 });
    };
  render ()  {
    console.log("Render Method is called in sample");
    return(
        <div>
            <h2>Welcome to sample Component!!</h2>
            <button onClick={this.handleCount}>change Count</button>
            <hr />
            <Child count={this.state.count}/>
        </div>
    );
  } 
  static getDirivedStateFromProps(){
    console.log("getDirivedStateFromProps called !!! in sample");
    return null;

  } 
}

