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
    let bestTank = null;
    let bestHealer = null;
    let bestDPS = null;
    let averageScore = 0;
    //check for naive solution
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].hasOwnProperty(tank)) {
        if (characters[i].tank > bestTank.tank) {
          bestTank = characters[i];
          characters.splice(i, 1);
        }
      }
    }
    for (let i = 0; i < characters.length; i++) {
      let dpsers = [];
      if (characters[i].hasOwnProperty(dps)) {
        dpsers.push(characters[i]);
      }
      if (dpsers.length >= 4) {
        //find highest average rating group of 3 where the username is not repeated
        let results = helpers.findHighestDps(dpsers);
        averageScore += results[0];
        bestDPS = results[1];
      } else {
        //not enough roles to make a full party
        console.log('not enough roles represented by this party');
      }
    }
    for (let i = 0; i < characters.length; i++) {
      //if new high healer score and not same user as any current high scores
      //add to healer and add to score
      let name = characters[i].username
      if (name !== bestTank.username && name !== bestDPS[0].username && name !== bestDPS[1].username && name !== bestDPS[2].username) {
        if (characters[i].healer > bestHealer.healer) {
          bestHealer = characters[i];
        }
      }
    }
    averageScore += bestTank.tank;
    averageScore += bestHealer.healer;
    this.setState({
      tank: bestTank,
      healer: bestHealer,
      dps: bestDPS,
      avgScore: averageScore
    })
  };

  render() {
    let { tank, healer, dps } = this.state;
    return (
      <div>
        {tank ?
        <div>
          <div>Tank:</div>
          <div>{tank}</div>
        </div>
        : null}
        {healer ?
        <div>
          <div>Healer:</div>
          <div>{healer}</div>
        </div>
        : null}
        {dps ?
        <div>
          <div>DPS:</div>
          <div>{dps[0]}</div>
          <div>{dps[1]}</div>
          <div>{dps[2]}</div>
        </div>
        : null}
      </div>
    )
  }
};

export default Results;