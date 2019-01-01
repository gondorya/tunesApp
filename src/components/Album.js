import React from 'react';

const Album = (props) => (
  <div className={`col col-12 col-md-6 col-lg-4 albumList__item ${props.stateClass}`} onClick={() => {props.activateTile()}}>
    <div className="albumList__image" style={props.styles}></div>
    <div className="albumList__content">
      <h3>{props.title}</h3>
    </div>
  </div>
);

export default Album;