const axios = require('axios');

const getRatings = (chars, callback) => {
  let data = [];
  let promises = [];
  chars.forEach((c) => {
    let { username, region, realm, charname } = c;
    let promise = 
      axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${charname}&fields=mythic_plus_scores_by_season%3Acurrent`, {})
      .then((results) => {
        let { dps, healer, tank } = results.data.mythic_plus_scores_by_season[0].scores;
        data.push({
          username: username,
          charname: results.data.name,
          tank: tank,
          healer: healer,
          dps: dps
        });
      })
    promises.push(promise);
  })
  Promise.all(promises).then(() => {
    callback(null, data);
  })
};

module.exports = {
  getRatings
}