import React, { Component } from 'react';

class CatDogImageToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCat: true,
      imageUrl: 'URL_TO_CAT_IMAGE',
    };
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {
    this.setState((prevState) => ({
      isCat: !prevState.isCat,
      imageUrl: prevState.isCat ? 'URL_TO_DOG_IMAGE' : 'URL_TO_CAT_IMAGE',
    }));
  }

  render() {
    return (
      <div>
        <h1>Click to toggle between Cat and Dog</h1>
        <img
          src={this.state.imageUrl}
          alt={this.state.isCat ? 'Cat' : 'Dog'}
          onClick={this.toggleImage}
          style={{ cursor: 'pointer' }}
        />
      </div>
    );
  }
}

export default CatDogImageToggle;
