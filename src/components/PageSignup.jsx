import React, { Component } from "react";
import PageControl from "./PageControl";
import "./PageSignup.css";
import {
  Button,
  Col,
  Input,
  CustomInput,
  Form,
  FormGroup,
  Label
} from "reactstrap";

class PageSignup extends Component {
  render() {
    return (
      <PageControl>
        <div nameClass="signUpContainer">
          <h1>Signup Page</h1>

          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                First Name
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">
                Last Name
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Last Name"
              />
            </FormGroup>
          </Form>
          <Form inline>
            <FormGroup>
              <Label for="exampleCheckbox">Gender</Label>
              <div>
                <CustomInput
                  type="radio"
                  name="customRadio"
                  id="exampleCustomRadio"
                  label="Male"
                  inline
                />
                <CustomInput
                  type="radio"
                  name="customRadio"
                  id="exampleCustomRadio2"
                  label="Female"
                  inline
                />
              </div>
            </FormGroup>
          </Form>

          <Form inline>
            <FormGroup>
              <Label for="exampleDate">Birthday</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>
          </Form>

          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Address
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Address"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">
                City
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="City"
              />
            </FormGroup>
          </Form>

          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Country
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Country"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">
                Phone Number
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Phone Number"
              />
            </FormGroup>
          </Form>

          <FormGroup>
            <Label for="exampleCustomMutlipleSelect">
              <h4>Choose a Hospital</h4>
            </Label>
            <CustomInput
              type="select"
              id="exampleCustomMutlipleSelect"
              name="Choose a Hospital"
              multiple
            >
              <option value="">Too Much Makan Obesity Center</option>
              <option>Soto Mi Hospital</option>
              <option>Burbur Emergency Care</option>
              <option>Kemang Family Care</option>
              <option>Nasi Padang Hospital</option>
              <option>Goreng Hospice Care</option>
            </CustomInput>
          </FormGroup>

          <FormGroup>
            <Label for="exampleCustomSelect">Doctor Specialty</Label>
            <CustomInput
              type="select"
              id="exampleCustomSelect"
              name="customSelect"
            >
              <option value="">General Practitioner</option>
              <option>Cardiologists</option>
              <option>Pediatrician</option>
              <option>Neurologist</option>
              <option>Sexualogist</option>
              <option>Dermatologist</option>
            </CustomInput>
          </FormGroup>

          <h4>Appointment Date</h4>
          <Form inline>
            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTime">Time</Label>
              <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
              />
            </FormGroup>
          </Form>

          <Button>Submit</Button>
        </div>
      </PageControl>
    );
  }
}
export default PageSignup;
