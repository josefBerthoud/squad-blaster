import React from 'react';

class CharForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      region: '',
      realm: '',
      charname: ''
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  //adds a character to the database

  onSubmitHandler(e) {
    e.preventDefault();
    //makes axios request to add character to the database
    //on the complete callback from axios, reset the form states to empty
    let { name } = e.target;
    let handler = e.target.getAttribute("handler");
  };

  onChangeHandler(e) {
    name = e.target.getAttribute("name");
    this.setState({
      [name]: e.target.value
    })
  };

  render() {
    let { onChangeHandler, onSubmitHandler } = this.state;
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
        </form>
      </div>
    )
  }
};

export default CharForm;