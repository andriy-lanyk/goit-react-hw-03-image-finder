import React, { Component } from "react";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Modal from "../Modal";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from "./App.styles";

class App extends Component {
  state = {
    query: "",
  };

  getQuery = (value) => {
    console.log("query: ", value);
    this.setState({ query: value });
  };

  render() {
    return (
      <Container>
        <Searchbar change={this.getQuery} />
        <ImageGallery query={this.state.query} />
        <Button />
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
        {/* <Modal /> */}
      </Container>
    );
  }
}

export default App;
