import React from 'react';
import Album from './Album';

const API = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

export default class GetAlbums extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      activeItem: -1,
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ albums: data.feed.entry }));
  }

  activateTile = (index) => {
    this.setState({
      activeItem: index,
    })
  };

  render() {
    const { albums } = this.state;
    return (
      <div className="albumList row">
        {albums.map((album, index) => {
          const pic = album['im:image'][2].label.replace('170x170', '350x350');
          console.log(album);
          return (
            <Album
              key={album.id.attributes['im:id']}
              stateClass={this.state.activeItem === index ? 'is-active' : ''}
              activateTile={() => {this.activateTile(index)}}
              index = {index + 1}
              title={album['im:name'].label}
              artist={album['im:artist'].label}
              date={album['im:releaseDate'].attributes.label}
              category={album.category.attributes.label}
              link={album.link.attributes.href}
              styles={{backgroundImage: `url(${pic})`}} />
        )})}
      </div>
    );
  }
};