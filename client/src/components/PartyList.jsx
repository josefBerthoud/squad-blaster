import React from 'react';
import PartyListEntry from './PartyListEntry.jsx';

const PartyList = (props) => {
  let { party } = props;
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
    </div>
  )
};

export default PartyList;