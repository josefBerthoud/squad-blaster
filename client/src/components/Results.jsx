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
    let bestTank = {
      tank: 0,
      username: ''
    };
    let bestHealer = {
      healer: 0,
      username: ''
    };
    let bestDPS = [{username: ''}, {username: ''}, {username: ''}];
    let averageScore = 0;
    let dpsers = [];
    
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].hasOwnProperty('tank')) {
        if (characters[i].tank > bestTank.tank) {
          bestTank = characters[i];
          characters.splice(i, 1);
        }
      }
    }
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].hasOwnProperty('dps')) {
        console.log('adding a player to dpsers array');
        dpsers.push(characters[i]);
      }
    }
    let results = helpers.findHighestDps(dpsers);
    averageScore += results[0];
    bestDPS = results[1];
    console.log(results);

    for (let i = 0; i < characters.length; i++) {
      //if new high healer score and not same user as any current high scores
      //add to healer and add to score
      let name = characters[i].username
      if (name !== bestTank.username && name !== bestDPS[0].username && name !== bestDPS[1].username && name !== bestDPS[2].username) {
        if (characters[i].hasOwnProperty('healer')) {
          if (characters[i].healer > bestHealer.healer) {
            bestHealer = characters[i];
          }
        }
      }
    }
    averageScore += bestTank.tank;
    averageScore += bestHealer.healer;
    console.log(bestTank, bestHealer, bestDPS);
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
          <div>{tank.username}</div>
        </div>
        : null}
        {healer ?
        <div>
          <div>Healer:</div>
          <div>{healer.username}</div>
        </div>
        : null}
        {dps ?
        <div>
          <div>DPS:</div>
          <div>{dps[0].username}</div>
          <div>{dps[1].username}</div>
          <div>{dps[2].username}</div>
        </div>
        : null}
      </div>
    )
  }
};

export default Results;