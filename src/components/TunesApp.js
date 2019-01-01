import React from 'react';
import Header from './Header';
import GetAlbums from './GetAlbums';

export default class TunesApp extends React.Component {
  	render() {
    	return (
      		<div className='container'>
      			<Header />
      			<GetAlbums />
      		</div>
    	);
  	};
};