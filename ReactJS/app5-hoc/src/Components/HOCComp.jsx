import React, { Component } from "react";

const HOCComp = (MainComp) => {
  // MainComp Is ClickCounter Component .
  // We Created a New Comp . Inside New Comp we Used MainComponent (ClickCounter)

  class NewComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    handleReset = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <MainComp
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
        />
      );
    }
  }

  // We are Returning the NewComp
  return NewComp;
};

export default HOCComp;
