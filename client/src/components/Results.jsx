import React from 'react';
import helpers from '../helpers.js';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: this.props.characters,
      tank: null,
      healer: null,
      dps: null,
      avgScore: null,
    };
  }

  componentDidMount() {
    let { characters } = this.state;
    let results = helpers.buildParty(characters);
    this.setState({
      tank: results[0],
      healer: results[1],
      dps: results[2],
      avgScore: Math.floor(results[3] / 5),
    })
  };

  render() {
    let { tank, healer, dps, avgScore } = this.state;
    let { toggleView } = this.props;
    return (
      <div>
        <div>
          <div>
            {tank ?
            <div>
              <div>Tank:</div>
              <div>{tank.charname}</div>
            </div>
            : null}
            {healer ?
            <div>
              <div>Healer:</div>
              <div>{healer.charname}</div>
            </div>
            : null}
            {dps ?
            <div>
              <div>DPS:</div>
              <div>{dps[0].charname}</div>
              <div>{dps[1].charname}</div>
              <div>{dps[2].charname}</div>
            </div>
            : null}
          </div>
          <div>
            {avgScore ? 
            <div>
              Party Score: 
              {Math.floor(avgScore)}
            </div> : null}
          </div>
        </div>
        <button onClick={toggleView}>Build Another party!</button>
      </div>
    )
  }
};

export default Results;