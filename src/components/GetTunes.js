import React from 'react';

const API = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

export default class GetTunes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tunes: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ tunes: data.feed.entry }));
  }

  render() {
    const { tunes } = this.state;
    return (
      <ul>
        {tunes.map((tune) => 
          <li key={tune.id.attributes['im:id']}>
            {tune.title.label}
          </li>
        )}
      </ul>
    );
  }
};