import React from "react";
import { Btn } from "./Button.styles";

function Button({ click }) {
  return (
    <Btn type="button" onClick={click}>
      Load more...
    </Btn>
  );
}

export default Button;
