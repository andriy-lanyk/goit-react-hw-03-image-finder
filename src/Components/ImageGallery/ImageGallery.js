import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import { List } from "./ImageGallery.styles";

const KEY = "22616220-eca5f4b2df7adfb59c540c753";

class ImageGallery extends Component {
  state = {
    photo: [],
  };

  getPhotos = () => {
    fetch(
      `https://pixabay.com/api/?q=${
        this.props.query
      }&page=${1}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <List>
        <ImageGalleryItem />
      </List>
    );
  }
}

export default ImageGallery;
