const findHighestDps = (chars) => {
  let bestAvg = 0;
  let bestComp;
  for (let a = 0; a < chars.length; a++) {
    for (let b = 0; b < chars.length; b++) {
      for (let c = 0; c < chars.length; c++) {
        if (chars[a].username !== chars[b].username && chars[a].username !== chars[c].username && chars[b].username !== chars[c].username) {
          //unique set of players
          if (chars[a].hasOwnProperty('dps') && chars[b].hasOwnProperty('dps') && chars[c].hasOwnProperty('dps')) {
            let avg = (chars[a].dps + chars[b].dps + chars[c].dps) / 3;
            if (avg > bestAvg) {
              bestAvg = avg;
              bestComp = [chars[a], chars[b], chars[c]];
            }
          }
        }
      }
    }
  }
  return [bestAvg, bestComp];
};

module.exports = {
  findHighestDps
};