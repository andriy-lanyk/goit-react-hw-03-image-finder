import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import LoaderContainer from "../Loader";
import { List } from "./ImageGallery.styles";

const KEY = "22616220-eca5f4b2df7adfb59c540c753";

class ImageGallery extends Component {
  state = {
    photos: [],
    page: 1,
    isLoader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ isLoader: true, page: 1 });
      fetch(
        `https://pixabay.com/api/?q=${
          this.props.query
        }&page=${1}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((response) => {
          this.setState({ photos: response.hits, isLoader: false });
        });
    }
  }

  addPhotosOnButtonClick = () => {
    let nextPage = this.state.page + 1;
    this.setState({ page: nextPage, isLoader: true });
    fetch(
      `https://pixabay.com/api/?q=${this.props.query}&page=${nextPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
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
