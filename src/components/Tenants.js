import React, { Component } from 'react'

const uuid = require('uuid');

export default class Tenants extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tenants: [],
      name: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log(this.state);
  }

  render() {
    let tenants;
    if (this.state.tenants) {
      this.state.tenants.map(tenant => {
        return (
          <tr key=''>

          </tr>
        )
      })
    }
    return(
      <div>
        <h1> Tenants </h1>
        <input type='text' placeholder='Tenant Name' value={ this.state.name } onChange={ e => this.setState({ name: e.target.value }) }/>
        <button className='btn btn-default' onClick={ this.onSubmit }>Submit</button>
        { tenants }
      </div>
    )
  }
}
