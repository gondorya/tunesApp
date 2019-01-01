import React from 'react';
import GetAlbums from './GetAlbums';

export default class TunesApp extends React.Component {
  render() {
    return (
      <div className="container">
      	<GetAlbums />
      </div>
    );
  };
};