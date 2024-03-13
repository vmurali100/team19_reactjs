import { Component } from "react";

export const HOCComp = (MainComp) =>{
   // MainComp is a click/hover counter component
   // We created a NewComp. Inside New Comp we used MainComponent (click/hover)

 class NewComp  extends Component{
     constructor(props){
        super(props);

        this.state = {
            count : 0
        }
     }
    handleIncrement = () =>{
        this.setState({count : this.state.count + 1})
    }
    handleDecrement = () =>{
        this.setState({count : this.state.count -1})
    }
    handleReset = () =>{
        this.setState({count : 0})
    }

    render(){
        const {handleDecrement, handleIncrement,handleReset} = this
        return(
            <MainComp count = {this.state.count}
            handleIncrement = {handleIncrement}
            handleDecrement = {handleDecrement}
            handleReset = {handleReset}
            />
        );
    }
}
// We are returning the NewComp
return NewComp;
}

