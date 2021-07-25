import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import { List } from "./ImageGallery.styles";

const KEY = "22616220-eca5f4b2df7adfb59c540c753";

class ImageGallery extends Component {
  state = {
    photos: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      console.log("Первый ФЕТЧ");
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((response) => {
          this.setState({ photos: response.hits });
        });
    }
  }

  addPhotosOnButtonClick = () => {
    this.setState({ page: this.state.page + 1 });
    console.log("this.state.page: ", this.state.page);
    fetch(
      `https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({ photos: [...this.state.photos, ...response.hits] });
      });
  };

  render() {
    console.log(this.state.photos);
    return (
      <>
        <List>
          <ImageGalleryItem photos={this.state.photos} />
        </List>
        <Button click={this.addPhotosOnButtonClick} />
      </>
    );
  }
}

export default ImageGallery;
