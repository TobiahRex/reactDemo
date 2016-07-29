import React, { Component } from 'react'

export default class Property extends Component {
  render() {

    let properties = this.props.properties ? this.props.properties.map(property => {
      return (
        <tr key={ property.id }>
          <td className='text-center'>{ property.address }</td>
        </tr>
      )
    })  : []
    return (

    )
  }
}
