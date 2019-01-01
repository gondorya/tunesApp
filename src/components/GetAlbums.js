import React from 'react';
import Album from './Album';
import AlbumsNavigation from './AlbumsNavigation';

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
      .then(data => this.setState({ albums: data.feed.entry }))
      .catch(error => console.error('Error:', error));
  }

  activateTile = (index) => {
    this.setState({
      activeItem: index,
    })
  }

  handleEnterPress = (e, action) => {
    if (e.keyCode === '13') {
      action;
    }
  }

  render() {
    const { albums } = this.state;
    return (
      <div className="albumList row">
        {albums.map((album, index) => {
          const pic = album['im:image'][2].label.replace('170x170', '350x350');
          return (
            <Album
              key={album.id.attributes['im:id']}
              stateClass={this.state.activeItem === index ? 'is-active' : ''}
              tabIndexValue={this.state.activeItem === -1 ? '1' : false}
              activateTile={(newIndex) => {this.activateTile(newIndex)}}
              index = {index}
              title={album['im:name'].label}
              artist={album['im:artist'].label}
              date={album['im:releaseDate'].attributes.label}
              category={album.category.attributes.label}
              link={album.link.attributes.href}
              styles={{backgroundImage: `url(${pic})`}} 
              enterPress = {this.handleEnterPress}/>
        )})}

        <AlbumsNavigation 
          stateClass={this.state.activeItem > -1 ? 'is-visible' : ''}
          prevStateClass={this.state.activeItem > 0 ? 'is-active' : ''}
          nextStateClass={this.state.activeItem < 99 ? 'is-active' : ''}
          currentIndex={this.state.activeItem}
          showTile={(newIndex) => {this.activateTile(newIndex)}}
        />
      </div>
    );
  }
};