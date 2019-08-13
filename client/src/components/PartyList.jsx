import React from 'react';
import PartyListEntry from './PartyListEntry.jsx';

const PartyList = (props) => {
  let { party, getParty } = props;
  return (
    <div>
      <h4>Party:</h4>
      <div>
        {party.map((player, index) =>
          < PartyListEntry 
            username={player.username}
            region={player.region}
            realm={player.realm}
            key={index}
          />
        )}
      </div>
      <button onClick={getParty}>Blast Off!</button>
    </div>
  )
};

export default PartyList;