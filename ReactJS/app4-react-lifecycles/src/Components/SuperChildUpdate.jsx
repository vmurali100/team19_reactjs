import React, { Component } from "react";

export default class SuperChildUpdate extends Component {
  constructor(props) {
    super();
    this.state = {
      total: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      total: props.products * 10,
    };
  }
  render() {
    return (
      <div>
        <h2>Total Cost is : {this.state.total}</h2>
      </div>
    );
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(props, childState) {
    console.log(props);
    console.log(childState);
    console.log("Products Value is  "+props.products + " And Total is  "+ childState.total)
   return null
  }
  componentDidUpdate() {
    console.log("Component update is Finished",this.props)
  }
}
