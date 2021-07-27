import React, { Component } from "react";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import { Container } from "./App.styles";

class App extends Component {
  state = {
    query: "",
  };

  getQuery = (value) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <Container>
        <Searchbar change={this.getQuery} />
        <ImageGallery query={this.state.query} />
      </Container>
    );
  }
}

export default App;
