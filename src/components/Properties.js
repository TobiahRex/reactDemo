import React, { Component } from 'react'

export default class Property extends Component {

  constructor(props){
    super(props)

    this.state = { properties: [] }
    this.submitProperty = this.submitProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  render(){
    let propertyFormProps = { submitProperty: this.submitProperty }
    let propertyProps = { properties: this.state.properties }

    return (
      <div>
        <h1> Properties </h1>
        <PropertyForm { ...propertyFormProps }/>
        <Property { ...propertyProps } />
      </div>
    )
  }
}
