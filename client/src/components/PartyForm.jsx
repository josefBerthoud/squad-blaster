import React from 'react';

class PartyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      region: '',
      realm: ''
    }
  }
  //adds a user to the selected party
  render() {
    return (
      <div>
        <form>
          <label>
            Add Party Member:
            <input type="text"/>
          </label>
        </form>
      </div>
    )
  }
};

export default PartyForm;