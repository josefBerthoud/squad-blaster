import React from 'react';
import axios from 'axios';

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
      console.log("errored");
    })
  };

  onChangeHandler(e) {
    name = e.target.getAttribute("name");
    this.setState({
      [name]: e.target.value
    })
  };

  render() {
    let { onChangeHandler, submitCharacter } = this.state;
    return (
      <div>
        <form>
          <label>
            Username:
            <input type="text" name="username" onChange={onChangeHandler}/>
          </label>
          <label>
            Region:
            <input type="text" name="region" onChange={onChangeHandler}/>
          </label>
          <label>
            Realm:
            <input type="text" name="realm" onChange={onChangeHandler}/>
          </label>
          <label>
            Character Name:
            <input type="text" name="charname" onChange={onChangeHandler}/>
          </label>
          <button onSubmit={submitCharacter}>Add Character!</button>
        </form>
      </div>
    )
  }
};

export default CharForm;