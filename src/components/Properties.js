import React, { Component } from 'react'

export default class Property extends Component {

  constructor(props){
    super(props)

    this.state = {
      properties: [],
      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: 0,
      },
    }
  }

  render(){
    return (
      <div>
        <h1> Properties </h1>
        <input value={ this.state.name } onChange={ e => this.setState({ name: e.target.value }) } />

      </div>
    )
  }
}
