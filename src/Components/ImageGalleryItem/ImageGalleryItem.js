import React, { Component } from "react";
import Modal from "../Modal";
import { Image, GalleryItem } from "./ImageGalleryItem.styles";

class ImageGalleryItem extends Component {
  state = {
    modalWindow: false,
    largeUrl: "",
    alt: "",
  };

  openModal = (e) => {
    const elementId = +e.target.dataset.id;
    const modalImg = this.props.photos.filter((photo) => {
      return photo.id === elementId;
    });
    modalImg?.forEach((elem) => {
      this.setState({ largeUrl: elem.largeImageURL, alt: elem.tags });
    });
    this.setState({ modalWindow: true });
  };

  toggleModal = (e) => {
    this.setState(({ modalWindow }) => ({ modalWindow: !modalWindow }));
  };

  render() {
    const { photos } = this.props;
    const { modalWindow, largeUrl, alt } = this.state;
    return (
      <>
        {photos &&
          photos.map(({ id, webformatURL, tags }) => (
            <GalleryItem key={id}>
              <Image
                src={webformatURL}
                alt={tags}
                data-id={id}
                onClick={this.openModal}
              />
            </GalleryItem>
          ))}
        {modalWindow && (
          <Modal largeImg={largeUrl} alt={alt} closeModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
