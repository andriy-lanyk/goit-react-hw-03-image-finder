import React from "react";
import { Image, GalleryItem } from "./ImageGalleryItem.styles";

function ImageGalleryItem({ photos }) {
  console.log("photosInItem: ", photos);
  return (
    photos &&
    photos.map(({ id, webformatURL }) => (
      <GalleryItem key={id}>
        <Image src={webformatURL} alt="" />
      </GalleryItem>
    ))
  );
}

export default ImageGalleryItem;
