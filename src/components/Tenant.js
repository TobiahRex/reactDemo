import React, { Component } from 'react'

export default class Tenant extends Component {

  constructor(props){
    super(props);

    this.deleteTenant = this.deleteTenant.bind(this);
  }

  render(){
    { deleteTenant } = this.props;
    let tenants = this.props.tenants.map(tenant => {
      return(
        <tr key={ tenant.id }>
          <td>{ tenant.name }</td>
          <td><button onClick={  } className='btn btn-default btn-danger'><i className='fa fa-trash'></i> Delete</button></td>
        </tr>
      )
    });
  }
}
