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
            <Label>Full Name</Label>
            <Input placeholder="Type your name"/>
            <Label>Age</Label>
            <Input placeholder="How old are you?"/>
            <Label>Birthdate</Label>
            <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
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
