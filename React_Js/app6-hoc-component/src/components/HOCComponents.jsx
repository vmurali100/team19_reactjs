import React, { Component } from "react";

const HocComponent=(MainComponent)=>{
    class NewComp extends Component{
        constructor(){
            super();
            this.state={
                count:0
            }
        }
        Incrementcount = () => {
            this.setState({ count: this.state.count + 1 });
          };
          Decrementcount = () => {
            this.setState({ count: this.state.count - 1 });
          };
          ResetCount = () => {
            this.setState({ count: (this.state.count = 0) });
          };
        render(){
            return <>
            <MainComponent  count={this.state.count} Incrementcount={this.Incrementcount} Decrementcount={this.Decrementcount} ResetCount={this.ResetCount} />
            </>
        }
    }
    return  NewComp;

}
export default HocComponent;