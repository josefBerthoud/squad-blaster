import React from 'react';

const PartyListEntry = (props) => {
  return (
    <div>
     <div>{props.username}</div>
     <div>{props.region}</div>
     <div>{props.realm}</div>
    </div>
  )
};

export default PartyListEntry;