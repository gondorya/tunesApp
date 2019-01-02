import React from 'react';

const Album = (props) => (
    <div className={`col col-12 col-md-6 col-lg-4 albumList__item ${props.stateClass}`} 
        onClick={() => {props.activateTile(props.index)}} 
        onKeyPress={(e) => {props.keyPress(e, '13', props.activateTile(props.index))}}
        tabIndex={props.tabIndexValue}
        data-index={props.index + 1}>
        <button className="button button--close" onClick={(e) => {e.stopPropagation(); props.activateTile(-1)}}>close</button>
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