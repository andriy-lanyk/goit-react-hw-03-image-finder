import React, { Component } from "react";
import {
  Header,
  Form,
  FormBtn,
  FormLabel,
  FormInput,
} from "./Searchbar.styles";

class Searchbar extends Component {
  state = {
    value: "",
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.change(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.submitForm}>
          <FormBtn type="submit">
            <FormLabel>Search</FormLabel>
          </FormBtn>

          <FormInput
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
