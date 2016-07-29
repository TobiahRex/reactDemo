import React, { Component } from 'react'

export default class Property extends Component {
  render() {

    let properties = this.props.properties ? this.props.properties.map(property => {
      return (
        <tr key={ property.id }>
          <td className='text-center'>{ property.street }, { property.city }, { property.state }, { property.zip }</td>
          <td className='text-center'><button onClick={ () => property.deleteProperty(property.id) } className='btn btn-default btn-danger'><i className='fa fa-trash'></i> Delete</button></td>
        </tr>
      )
    }) : []

    console.log('properties: ', properties);
    return (
      <table className='table'>
        <thead>
          <tr>
            <th className='text-center'>Address</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          { properties }
        </tbody>
      </table>
    )
  }
}
