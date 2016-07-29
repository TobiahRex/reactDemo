import React, { Component } from 'react'
import Tenant from './Tenant'

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

  onSubmit(tenantObj) {
    let newTenant = Object.assign({}, tenantObj);
    newTenant.id: uuid();
    newTenant.delete: this.deleteTenant;
    }
    let tenants = this.state.tenants.concat(newTenant);
    this.setState({ tenants });
  }

  deleteTenant(id){
    let updatedTenants = this.state.tenants.filter(tenant => tenant.id !== id);
    this.setState({ tenants: updatedTenants });
  }

  render() {
    let tenantProps = {
      deleteTenant: this.deleteTenant,
      tenants: this.state.tenants
    }
    let newTenant = {
      add: this.onSubmit
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
