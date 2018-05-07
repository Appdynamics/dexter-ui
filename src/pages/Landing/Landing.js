import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>DEXTER-UI</title>
        </Helmet>
        <div className="jumbotron">
          <h1 className="display-3">DEXTER made easy</h1>
          <p className="lead">Create a job file for DEXTER with a wizard</p>
          <Link to={`/input`}>
            <button className="btn btn-primary btn-lg">Create Job File</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Landing
