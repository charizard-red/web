import React, { Component } from "react";
import PageControl from "./PageControl";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class PageLogin extends Component {
  render() {
    return (
      <PageControl>
        <h1>Login Page</h1>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="E-mail"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>

        <Button>Submit</Button>
      </PageControl>
    );
  }
}
export default PageLogin;
