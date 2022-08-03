import React from 'react';

const WedgetsList = ({ wedgets }) => (
  <div className="wedgets-list">
    {wedgets.map((wedget) => (
      <div key={wedget.id}>
        <h2>{ wedget.title }</h2>
      </div>
    ))}
  </div>
);

export default WedgetsList;
