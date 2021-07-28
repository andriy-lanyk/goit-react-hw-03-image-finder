import React, { Component } from "react";
import fetchPhotos from "../FetchPhotos";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import LoaderContainer from "../Loader";
import { List } from "./ImageGallery.styles";

class ImageGallery extends Component {
  state = {
    photos: [],
    page: 1,
    isLoader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      const firstPage = 1;
      this.setState({ isLoader: true, page: 1 });
      fetchPhotos(this.props.query, firstPage).then((response) => {
        this.setState({ photos: response.hits, isLoader: false });
      });
    }
  }

  addPhotosOnButtonClick = () => {
    let nextPage = this.state.page + 1;
    this.setState({ page: nextPage, isLoader: true });
    fetchPhotos(this.props.query, nextPage)
      .then((response) => {
        this.setState({
          photos: [...this.state.photos, ...response.hits],
          isLoader: false,
        });
      })
      .finally(() => {
        this.scrollToTop();
      });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <>
        <List>
          <ImageGalleryItem photos={this.state.photos} />
        </List>
        {this.state.photos.length > 0 && (
          <Button click={this.addPhotosOnButtonClick} />
        )}
        {this.state.isLoader && <LoaderContainer />}
      </>
    );
  }
}

export default ImageGallery;
