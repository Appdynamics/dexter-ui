import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Heading extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          DEXTER-UI
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/input">
          <button className="btn btn-primary my-2 my-sm-0">
            Create Job File
          </button>
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </nav>
    )
  }
}

export default Heading
