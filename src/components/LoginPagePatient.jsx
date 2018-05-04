import React, {Component} from 'react';
import PageControl from './PageControl';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

class LoginPagePatient extends Component {
  render() {
    return (<div>
      <PageControl>
        <form>
          <FormGroup name="patientData">
            <Label>Username</Label>
            <Input placeholder=""/>
            <Label>Email</Label>
            <Input placeholder=""/>
            <label>Gender</label>
            <FormGroup check="check">
              <Label check="check">
                <Input type="radio" name="radio1"/>{' '}
                Male
              </Label>
            </FormGroup>
            <FormGroup check="check">
              <Label check="check">
                <Input type="radio" name="radio1"/>{' '}
                Female
              </Label>
            </FormGroup>
            <Label>Age</Label>
            <Input placeholder=""/>
            <Label>Phone</Label>
            <Input placeholder=""/>
            <Label>Address</Label>
            <Input type="textarea" name="text" id="exampleText" />
            <Label>Birthdate</Label>
            <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
            <Label>Select a Clinic</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <Label>Select a Specialty</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <label>Appointment Date & Time</label>
            <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>

          </FormGroup>
          <Label>Address</Label>
          <Input type="textarea" name="text" id="exampleText" />
          <button>Make an Appointment</button>
        </form>
      </PageControl>

    </div>)
  }
}

export default LoginPagePatient;
