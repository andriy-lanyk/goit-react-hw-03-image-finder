import React from "react";
import { Btn } from "./Button.styles";

function Button({ click }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });

  return (
    <Btn type="button" onClick={click}>
      Load more...
    </Btn>
  );
}

export default Button;
