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
    let propertyFormProps = {
      
    }
    let propertyProps = {
      properties: this.state.properties
    }

    return (
      <div>
        <h1> Properties </h1>
        <PropertyForm { ...propertyFormProps }/>
        <Property { ...propertyProps } />
      </div>
    )
  }
}
