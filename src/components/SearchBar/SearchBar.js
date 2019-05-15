import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchRequest: '',
      };
      
      this.formSumbit = this.formSumbit.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
    formSumbit(e){
      if(e) e.preventDefault();
      this.props.Search(this.state.searchRequest);
    }

    handleInput(e){
      this.setState({searchRequest: e.target.value})
    }

    render() {
      return (
        <div className="SearchBar">
          <form onSubmit={this.formSumbit}>
            <input onChange={this.handleInput} placeholder="Search Movie And Television" />
            <button >Submit</button> 
          </form>
        </div>
      );
    }
  }
  export default SearchBar;
