import React from 'react';
import axios from 'axios';
import PartyForm from './PartyForm.jsx';
import CharForm from './CharForm.jsx';
import PartyList from './PartyList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: [],
      characters: []
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.getParty = this.getParty.bind(this);
    this.addToParty = this.addToParty.bind(this);
  }
  
  //add componentdidupdate if characters.length > 5 call function to make best comp
  //otherwise alert('not enough players to form a party!') and char and party state to empty

  onSubmitHandler(e) {
    e.preventDefault();
    let { name } = e.target;
    let handler = e.target.getAttribute("handler");
    this.setState({
      [handler]: name
    })
  };

  addToParty(player) {
    console.log(player);
    let { party } = this.state;
    party.push(player);
    this.setState({
      party: party
    });
  };

  getParty() {
    let { party } = this.state;
    if (this.state.party.length === 5) {
      axios.get('/getsquad', {
        params: {
          user1: party[0].username,
          user2: party[1].username,
          user3: party[2].username,
          user4: party[3].username,
          user5: party[4].username,
        }
      })
      .then((results) => {
        console.log(results.data);
        this.setState({
          characters: results.data
        })
        //now can call helper function to make team, render component that shows comp
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  render() {
    let { form, party } = this.state;
    let { onSubmitHandler, addToParty, getParty } = this;
    return (
      <div>
        <div>
          <h2>SquadBlaster</h2>
          <h4>A solution to all of your squad blastin' needs</h4>
        </div>
        <div>
          <span>Are you adding a character or building a party?</span>
          <div>
            < CharForm/>
            < PartyForm addToParty={addToParty}/>
          </div>
          <div>
            {party.length > 0 ? < PartyList party={party} getParty={getParty}/> : null}
          </div>
        </div> 
      </div>
    )
  }
}

export default App;