import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello this is a HOME page</h1>
        <p className="text-center">
          Clik <Link to="/profile">here</Link> to access the profile page.
        </p>
      </div>
    )
  }
}
