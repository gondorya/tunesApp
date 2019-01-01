import React from 'react';

const AlbumsNavigation = (props) => (
    <div className={`navigation ${props.stateClass}`}>
    	<button 
    		className={`button button--prev ${props.prevStateClass}`}
    		onClick={() => {props.showTile(props.currentIndex - 1)}} >
    		prev
    	</button>
      	<button
      		className={`button button--next ${props.nextStateClass}`}
      		onClick={() => {props.showTile(props.currentIndex + 1)}}>
      		next
      	</button>
	</div>
);

export default AlbumsNavigation;