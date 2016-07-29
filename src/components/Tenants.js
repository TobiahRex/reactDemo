import React, { Component } from 'react'
import Tenant from './Tenant'
import TenantForm from './TenantForm'

const uuid = require('uuid');

export default class Tenants extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tenants: [],
      name: ''
    }
    this.submitTenant = this.submitTenant.bind(this);
    this.deleteTenant = this.deleteTenant.bind(this);
  }

  submitTenant(tenantObj) {
    let newTenant = Object.assign({}, tenantObj);
    newTenant.id = uuid();
    newTenant.deleteTenant = this.deleteTenant;
    let tenants = this.state.tenants.concat(newTenant);
    this.setState({ tenants });
  }

  deleteTenant(id){
    let updatedTenants = this.state.tenants.filter(tenant => tenant.id !== id);
    this.setState({ tenants: updatedTenants });
  }

  render() {
    let tenantProps = {
      tenants: this.state.tenants
      // deleteTenant: this.deleteTenant
    }
    let newTenant = {
      submitTenant: this.submitTenant
    }
    return(
      <div>
        <h1> Tenants </h1>
        <TenantForm { ...newTenant } />
        <Tenant { ...tenantProps } />
      </div>
    )
  }
}
