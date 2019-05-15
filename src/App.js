import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import MediaList from './components/MediaList/MediaList';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: []
    }
    this.mediaSearch = this.mediaSearch.bind(this);
    this.Search = this.Search.bind(this);
  }

  Search (searchRequest){
    const api_key = '460434c9495cf2dd6d32ac80934bf675';
    const searchResult = searchRequest;
    if(searchResult !== ''){
      const URL = `https://api.themoviedb.org/3/search/multi?include_adult=false&page=1&language=en-US&api_key=${api_key}&query=${searchResult}`;
      return axios.get(URL).then((response) => {
        let results = response.data.results;
        this.setState({searchResults: results});  
        console.log(results);
      }).catch(function(error){
          console.log(error);
      });
    }
  }

  mediaSearch(mediaSearch) {
    this.Search(mediaSearch);
  }


  render() {
    return (
      <div className="App">
        <SearchBar Search={this.Search} />
        <MediaList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;