import React, { Component } from 'react'
import PropertyForm from './PropertyForm'
import Property from './Property'

const uuid = require('uuid');

export default class Properties extends Component {

  constructor(props){
    super(props)

    this.state = { properties: [] }
    this.submitProperty = this.submitProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  submitProperty(property) {
    let newProperty = Object.assign({}, property)
    newProperty.id = uuid();
    newProperty.deleteProperty = this.deleteProperty;
    let properties = this.state.properties.concat(newProperty);
    this.setState({ properties });
  }

  deleteProperty(id){
    let updatedProperties = this.state.properties.filter(property => property.id !== id);
    this.setState({ properties: updatedProperties });
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
