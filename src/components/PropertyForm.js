import React, { Component } from 'react'

export default class PropertyForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  render(){
    let { submitProperty } = this.props
    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type='text' className='form-control' placeholder='Street Address' value={ this.state.street } onChange={ e => this.setState({ street: e.target.value }) }/>
        </div>
        <div className="form-group">
          <input type='text' className='form-control' placeholder='City' value={ this.state.city } onChange={ e => this.setState({ city: e.target.value }) }/>
        </div>
        <div className="form-group">
          <input type='text' className='form-control' placeholder='State' value={ this.state.state } onChange={ e => this.setState({ state: e.target.value }) }/>
        </div>
        <div className="form-group">
          <input id='email' type='text' className='form-control' placeholder='Zip' value={ this.state.zip } onChange={ e => this.setState({ zip: e.target.value }) }/>
        </div>
        <button onClick={ () =>{ submitProperty(this.state); this.setState({ street: '', city: '', state: '', zip: '' }) }} className="btn btn-default">Add Property</button>
      </form>
    )
  }
}
