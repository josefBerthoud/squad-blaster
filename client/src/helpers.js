const findHighestDps = (chars) => {
  let bestAvg = 0;
  let bestComp;
  for (let a = 0; a < chars.length; a++) {
    for (let b = 0; b < chars.length; b++) {
      for (let c = 0; c < chars.length; c++) {
        if (a.username !== b.username && a.username !== c.username && b.username !== c.username) {
          //unique set of players
          let avg = (a.dps + b.dps + c.dps) / 3;
          if (avg > bestAvg) {
            bestAvg = avg;
            bestComp = [a, b, c];
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