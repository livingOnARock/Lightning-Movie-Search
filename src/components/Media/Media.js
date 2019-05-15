import React from 'react';
import './Media.css'

class Media extends React.Component {
  render() {
    return (
      <div className="Media">
        <div className="image-container">
          <img src={'http://image.tmdb.org/t/p/w185/'+this.props.searchResults.poster_path} alt='poster' />
        </div>
        <div className="MediaInfo">
          <h2>{this.props.searchResults.name}</h2>
          {this.props.searchResults.overview}
        </div>
      </div>
    );
  }
}

export default Media;