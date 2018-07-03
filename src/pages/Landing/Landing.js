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
          <p className="lead">
            Create a job file for{' '}
            <a href="https://github.com/Appdynamics/AppDynamics.DEXTER">
              DEXTER
            </a>{' '}
            in just a few steps
          </p>
          <hr className="my-4" />
          <p>
            <a href="https://github.com/Appdynamics/AppDynamics.DEXTER">
              DEXTER
            </a>{' '}
            is the amazing data warehousing and reports tool for AppDynamics.{' '}
            <i>DEXTER-UI</i> helps you create the job file that tells DEXTER
            what reports to create
          </p>
          <Link to={`/input`}>
            <button className="btn btn-primary btn-lg">Create Job File</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Landing
