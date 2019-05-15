import React from 'react';
import Media from '../Media/Media';
import './MediaList.css';

class MediaList extends React.Component {
    render() {
        return (
            <div className="MediaList">
                {
                    this.props.searchResults.map(result => {
                        if(result.poster_path && result.name && result.overview){
                            return (
                                <div className="result">
                                    <Media searchResults={result} key={result.id}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
}
  
export default MediaList;
