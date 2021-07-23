import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import { List } from "./ImageGallery.styles";

function ImageGallery() {
  return (
    <List className="ImageGallery">
      <ImageGalleryItem />
    </List>
  );
}

export default ImageGallery;
