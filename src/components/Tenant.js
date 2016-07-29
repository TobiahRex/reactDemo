import React, { Component } from 'react'

export default class Tenant extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let { deleteTenant } = this.props;
    let tenants = this.props.tenants ? this.props.tenants.map(tenant => {
      return(
        <tr key={ tenant.id }>
          <td>{ tenant.name }</td>
          <td><button onClick={ () => tenant.deleteTenant(tenant.id) } className='btn btn-default btn-danger'><i className='fa fa-trash'></i> Delete</button></td>
        </tr>
      )
    }) : []
    console.log('tenants: ', tenants);
    return (
      <table className='table'>
        <thead>
          <tr>
            <th className='text-center'>Name</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          { tenants }
        </tbody>
      </table>
    )
  }
}
