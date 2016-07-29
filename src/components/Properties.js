import React, { Component } from 'react'
import PropertyForm from './PropertyForm'
import Property from './Property'

export default class Property extends Component {

  constructor(props){
    super(props)

    this.state = { properties: [] }
    this.submitProperty = this.submitProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  submitProperty(property) {
    let newProperty = Object.assign({}, property);
    newProperty.deleteProperty = this.deleteProperty;
    let properties = this.state.properties.concat(newProperty);
    this.setState({ properties });
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
