import React from "react";
import { Btn } from "./Button.styles";

function Button() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });

  return <Btn type="button">Load more...</Btn>;
}

export default Button;
