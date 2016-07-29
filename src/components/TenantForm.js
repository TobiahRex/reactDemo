import React, { Component } from 'react'

export default class TenantForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: ''
    }
  }

  render(){
    let { onSubmit } = this.props
    return (

      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type='text' className='form-control' placeholder='Tenant Name' value={ this.state.name } onChange={ e => this.setState({ name: e.target.value }) }/>
        </div>
        <div className="form-group">
          <input id='email' type='text' className='form-control' placeholder='Email' value={ this.state.email } onChange={ e => this.setState({ email: e.target.value }) }/>
        </div>
        <button onClick={ () => onSubmit(this.state) } className="btn btn-default">Add Tenant</button>
      </form>
    )
  }

}
