import React from 'react';
import {
  FlexWrapper,
  FormBlock,
  FlexInput,
  PartyFormStyling,
  FormFlex,
} from '../styled/StyledApp.jsx';

class PartyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      region: '',
      realm: '',
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
  
  onPlayerSubmit(e) {
    console.log('called onplayersubmit!');
    e.preventDefault();
    let { username, region, realm } = this.state;
    if (username !== '' && region !== '' && realm !== '') {
      this.setState({
        username: '',
        region: '',
        realm: '',
      }, () => {this.props.addToParty({
        username: username,
        region: region,
        realm: realm
      })})
    }
  }

  render() {
    let { onChangeHandler, onPlayerSubmit } = this;
    let { username, region, realm } = this.state;
    return (
      <PartyFormStyling>
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
          <button onClick={onPlayerSubmit}>Add Player To Party!</button>
        </FormFlex>
      </PartyFormStyling>
    )
  }
};

export default PartyForm;