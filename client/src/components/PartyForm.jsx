import React from 'react';

class PartyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      region: '',
      realm: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onPlayerSubmit = this.onPlayerSubmit.bind(this);
  }

  onChangeHandler(e) {
    name = e.target.getAttribute("name");
    this.setState({
      [name]: e.target.value
    })
  };
  
  //needs onsubmit to lift new party member up to app
  onPlayerSubmit(e) {
    console.log('called onplayersubmit!');
    e.preventDefault();
    let { username, region, realm } = this.state;
    if (username !== '' && region !== '' && realm !== '') {
      this.props.addToParty({
        username: username,
        region: region,
        realm: realm
      });
      this.setState({
        username: '',
        region: '',
        realm: '',
      })
    }
  }

  render() {
    let { onChangeHandler, onPlayerSubmit } = this;
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
          <button onClick={onPlayerSubmit}>Add To Party!</button>
        </form>
      </div>
    )
  }
};

export default PartyForm;