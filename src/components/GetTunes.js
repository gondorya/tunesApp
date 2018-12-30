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
      <div className="tuneList row">
        {tunes.map((tune) => {
          const pic = tune['im:image'][2].label.replace('170x170', '350x350');
          console.log(tune);
          return (
            <div className="col col-12 col-md-6 col-lg-4" key={tune.id.attributes['im:id']}>
              <div className="tuneList__item" style={{backgroundImage: `url(${pic})`}}></div>
              {tune.title.label}
            </div>
        )})}
      </div>
    );
  }
};