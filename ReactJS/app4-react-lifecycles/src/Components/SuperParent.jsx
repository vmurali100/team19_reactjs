import React, { Component } from "react";
import SuperChild from "./SuperChild";
import SuperChildUpdate from "./SuperChildUpdate";

export default class SuperParent extends Component {
  constructor() {
    super();

    this.state = {
      products: 18,
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to Parent Component</h2>
        {/* <SuperChild products={this.state.products}/> */}
        <button
          onClick={() => {
            this.setState({ products: 28 });
          }}
        >
          Increse Qty
        </button>
        <SuperChildUpdate products={this.state.products} />
      </div>
    );
  }
}
