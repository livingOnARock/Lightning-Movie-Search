import React from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';
import Headr from './Headr';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={}
    console.log("initializer");
    this.performSearch('a')
  }

  performSearch(searchTerm){
      const api_key = '460434c9495cf2dd6d32ac80934bf675';
      const searchResult = searchTerm
      const URL = `https://api.themoviedb.org/3/search/multi?include_adult=false&page=1&language=en-US&api_key=${api_key}&query=${searchResult}`

    $.ajax({
      url: URL,
      success: (searchResults) => {
         console.log('success')
        let results = searchResults.results
        let movieRows = []
        results.forEach((movie) => {
          console.log(movie.title)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          if (movie.poster_path && movie.overview){
            movieRows.push(movieRow)
          }
        })
        this.setState({rows: movieRows})
        console.log(movieRows)
      },
      error( xhr, statue, err){
        console.error('failed')

        
     }
    }) 
  }
    searchHandler(event){
        console.log(event.target.value)
        let searchTerm = event.target.value
        this.performSearch(searchTerm)
      }

    
  render() {
    return (

        <div className="App" style={{ backgroundColor:'#b3d9ff'}}>
          <header style={{backgroundColor: '#2680d9', color:'white', paddingLeft:15, paddingRight:15 }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src="http://www.pngall.com/wp-content/uploads/2017/01/Lightning-Download-PNG.png" alt="lightning" width='100'/>
                  </td>
                  <td>
                    <h1>Lightning Movie Search</h1>
                  </td>
                </tr>
              </tbody>
            </table> 
          </header>
          <input type="text" style={{
            fontSize:24, 
            display:'block', 
            width:'99%', 
            padding: 8
          }} onChange={this.searchHandler.bind(this)} placeholder="Search for Movie" />
      
          <div style={{ height: '100%'}}>
          {this.state.rows}

          </div>
        </div>
        
    );
  }

}

export default App;