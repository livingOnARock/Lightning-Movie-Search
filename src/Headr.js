import React from 'react';
import './App.css';

const pStyle = {
  fontSize: '100px',
  textAlign: 'right',
  color:'green',
  backgroundColor: 'black'

};

class Headr extends React.Component {
  
    
  render() {
    return (
        <div className='titleBar'>
          <div className='titleBar'>
	        <img src="http://www.pngall.com/wp-content/uploads/2017/01/Lightning-Download-PNG.png" alt="lightning" width='100' className="appImg" />
	        <div className='pStyle'>
		      <h1 >Lightning Movie Search</h1>
	        </div>
          </div>
        </div>
    );
  }

}

export default Headr;