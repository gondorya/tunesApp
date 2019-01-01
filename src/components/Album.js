import React from 'react';

const Album = (props) => (
  <div className={`col col-12 col-md-6 col-lg-4 albumList__item ${props.stateClass}`} onClick={() => {props.activateTile()}} data-index={props.index}>
    <div className="albumList__image" style={props.styles}></div>
    <div className="albumList__content">
      <p><span className="albumList__label">Title:</span> {props.title}</p>
      <p><span className="albumList__label">Artist:</span> {props.artist}</p>
      <p><span className="albumList__label">Released:</span> {props.date}</p>
      <p><span className="albumList__label">Category:</span> {props.category}</p>
      <p><a href={props.link}>Go to album</a></p>
    </div>
  </div>
);

export default Album;