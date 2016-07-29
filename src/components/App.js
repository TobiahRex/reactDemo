import React from 'react'
import Navbar from './Navbar';

export default class App extends React.Component {
  render(){
    console.log('app render');
    return(
      <div>
        <Navbar />
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    )
  }
};
