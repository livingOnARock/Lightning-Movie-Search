import React from 'react';
import './App.css';

class MovieRow extends React.Component {
  
    
  render() {
    return (
        <div className="MovieRow" style={{ backgroundColor:'#b3d9ff', display:'block'}}>
          <table key={this.props.movie.id}>
	        <tbody>
	          <tr>
	            <td>
	              <img src={'http://image.tmdb.org/t/p/w185/'+this.props.movie.poster_path} alt='poster' width='100'/>
	            </td>
	            <td key={this.props.movie.id}>
	              {this.props.movie.title}
	              {this.props.movie.overview}
	            </td>
	          </tr>
	        </tbody>
	      </table> 
        </div>
    );
  }

}

export default MovieRow;