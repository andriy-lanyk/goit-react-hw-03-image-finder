import React, { Component } from "react";
import {
  Header,
  Form,
  FormBtn,
  FormLabel,
  FormInput,
} from "./Searchbar.styles";

class Searchbar extends Component {
  render() {
    return (
      <Header>
        <Form>
          <FormBtn type="submit">
            <FormLabel>Search</FormLabel>
          </FormBtn>

          <FormInput
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
