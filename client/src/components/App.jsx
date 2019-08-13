import React from 'react';
import PartyForm from './PartyForm.jsx';
import CharForm from './CharForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  
  onSubmitHandler(e) {
    e.preventDefault();
    let { name } = e.target;
    let handler = e.target.getAttribute("handler");
    this.setState({
      [handler]: name
    })
  };

  render() {
    let { form } = this.state;
    let { onSubmitHandler } = this;
    return (
      <div>
        <div></div>
        {form === null ? 
        <div>
          <span>Are you adding a character or building a party?</span>
          <div>
            <button name="character" handler="form" onClick={onSubmitHandler}>Add Character</button>
            <button name="party" handler="form" onClick={onSubmitHandler}>Build Party</button>
          </div>
        </div> 
        : form === 'character' ? < CharForm/> : < PartyForm/>}
      </div>
    )
  }
}

export default App;