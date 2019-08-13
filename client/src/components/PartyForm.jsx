import React from 'react';

class PartyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

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