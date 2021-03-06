import React from 'react';
import axios from 'axios';
import {
  FlexWrapper,
  FormBlock,
  FlexInput,
  CharFormStyling,
  FormFlex,
} from '../styled/StyledApp.jsx';

class CharForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      region: '',
      realm: '',
      charname: '',
    }
    this.submitCharacter = this.submitCharacter.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  //adds a character to the database

  submitCharacter(e) {
    e.preventDefault();
    let { username, region, realm, charname } = this.state;
    //makes axios request to add character to the database
    //on the complete callback from axios, reset the form states to empty
    axios.post('/characters', {
      user: username,
      region: region,
      realm: realm,
      charname: charname
    })
    .then(() => {
      console.log('successfully added!');
      this.setState({
        user: '',
        region: '',
        realm: '',
        charname: ''
      })
    })
    .catch((err) => {
      console.log(err);
    })
  };

  onChangeHandler(e) {
    name = e.target.getAttribute("name");
    this.setState({
      [name]: e.target.value
    })
  };

  render() {
    let { onChangeHandler, submitCharacter } = this;
    let { username, region, realm, charname } = this.state;
    return (
      <CharFormStyling>
        <FormFlex>
          <label>
            Username:
            <FlexInput type="text" value={username} name="username" onChange={onChangeHandler}/>
          </label>
          <label>
            Region:
            <FlexInput type="text" value={region} name="region" onChange={onChangeHandler}/>
          </label>
          <label>
            Realm:
            <FlexInput type="text" value={realm} name="realm" onChange={onChangeHandler}/>
          </label>
          <label>
            Character Name:
            <FlexInput type="text" value={charname} name="charname" onChange={onChangeHandler}/>
          </label>
          <button onSubmit={submitCharacter}>Add Character!</button>
        </FormFlex>
      </CharFormStyling>
    )
  }
};

export default CharForm;