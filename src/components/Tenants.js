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
    let newTenant = {
      id: uuid(),
      name: this.state.name,
      deleteTenant: this.deleteTenant
    }
    let tenants = this.state.tenants.concat(newTenant);
    this.setState({ tenants });
  }

  deleteTenant(name){
    let updatedTenants = this.state.tenants.filter(tenant => tenant.name !== name);
    this.setState({ tenants: updatedTenants });
  }

  render() {
    let tenant = {}
    return(
      <div>
        <h1> Tenants </h1>
        <input type='text' placeholder='Tenant Name' value={ this.state.name } onChange={ e => this.setState({ name: e.target.value }) }/>
        <button className='btn btn-default' onClick={ this.onSubmit }>Submit</button>
        <Tenant tenants={ this.state.tenants } />
      </div>
    )
  }
}
