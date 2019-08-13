const buildParty = (characters) => {
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
    let name = characters[i].username
    if (name !== bestTank.username) {
      if (characters[i].hasOwnProperty('healer')) {
        if (characters[i].healer > bestHealer.healer) {
          bestHealer = characters[i];
        }
      }
    }
  }
  for (let i = 0; i < characters.length; i++) {
    let name = characters[i].username;
    if (characters[i].hasOwnProperty('dps') && name !== bestTank.username && name !== bestHealer.username) {
      dpsers.push(characters[i]);
    }
  }
  let results = findHighestDps(dpsers);
  averageScore = results[0];
  bestDPS = results[1];
  console.log(averageScore);

  averageScore += bestTank.tank;
  console.log(averageScore);
  averageScore += bestHealer.healer;
  console.log(averageScore);

  return[bestTank, bestHealer, bestDPS, averageScore];
};

const findHighestDps = (chars) => {
  let bestAvg = 0;
  let bestComp;
  let bestTotal;
  for (let a = 0; a < chars.length; a++) {
    for (let b = 0; b < chars.length; b++) {
      for (let c = 0; c < chars.length; c++) {
        if (chars[a].username !== chars[b].username && chars[a].username !== chars[c].username && chars[b].username !== chars[c].username) {
          //unique set of players
          if (chars[a].hasOwnProperty('dps') && chars[b].hasOwnProperty('dps') && chars[c].hasOwnProperty('dps')) {
            let avg = (chars[a].dps + chars[b].dps + chars[c].dps) / 3;
            if (avg > bestAvg) {
              bestAvg = avg;
              bestTotal = chars[a].dps + chars[b].dps + chars[c].dps;
              bestComp = [chars[a], chars[b], chars[c]];
            }
          }
        }
      }
    }
  }
  return [bestTotal, bestComp];
};

module.exports = {
  findHighestDps,
  buildParty
};