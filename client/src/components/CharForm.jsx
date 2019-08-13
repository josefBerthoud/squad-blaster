import React from 'react';

class CharForm extends React.Component {
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
            Add Character:
            <input type="text"/>
          </label>
        </form>
      </div>
    )
  }
};

export default CharForm;