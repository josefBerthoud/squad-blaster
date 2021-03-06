import React from 'react';
import axios from 'axios';
import PartyForm from './PartyForm.jsx';
import CharForm from './CharForm.jsx';
import PartyList from './PartyList.jsx';
import Results from './Results.jsx';
import { 
  FlexWrapper,
  AppWrapper,
  FormBlock
} from '../styled/StyledApp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: [],
      characters: [],
      display: "form"
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.getParty = this.getParty.bind(this);
    this.addToParty = this.addToParty.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  //add helper function to change display back to form on button click in results page

  onSubmitHandler(e) {
    e.preventDefault();
    let { name } = e.target;
    let handler = e.target.getAttribute("handler");
    this.setState({
      [handler]: name
    })
  };

  toggleView(e) {
    e.preventDefault();
    this.setState({
      display: "form",
      party: [],
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
          characters: results.data,
          display: "results"
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  render() {
    let { party, characters, display } = this.state;
    let { addToParty, getParty, toggleView } = this;
    return (
      <AppWrapper>
        <div>
          <h2>SquadBlaster</h2>
          <h4>A tool for indecisive Mythic+ players with too many alts</h4>
        </div>
        <div>
          {display === "form" ?
            <div>
              <span>Are you adding a character or building a party?</span>
              <FlexWrapper>
                < CharForm/>
                < PartyForm addToParty={addToParty}/>
              </FlexWrapper>
              <div>
                {party.length > 0 ? < PartyList party={party} getParty={getParty}/> : null}
              </div>
            </div>
          : <div>< Results characters={characters} toggleView={toggleView}/></div>}
        </div> 
      </AppWrapper>
    )
  }
}

export default App;