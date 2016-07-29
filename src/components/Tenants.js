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
    let tenants = this.state.tenants.push(this.state.name);
    this.setState({ tenants });
  }

  render() {
    let tenants;
    if (this.state.tenants) {
      tenants = this.state.tenants.map((tenant) => {
        return (
          <tr key={ tenant.id }>
            <td>{ tenant.name }</td>
            <td><button className='btn btn-default' onClick={ deleteTenant(tenant.id) }>DELETE</button></td>
          </tr>
        )
      })
    } else {
      tenants = [];
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
