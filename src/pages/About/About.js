import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class About extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>DEXTER-UI - About</title>
        </Helmet>
        <h1>About</h1>
        <div>
          <p>
            DEXTER-UI makes it easy to create job files for <a href="https://github.com/Appdynamics/AppDynamics.DEXTER">DEXTER</a>, the advanced reporting tool for AppDynamics.
          </p>
          <p>
            Learn more about it at the <a href="https://github.com/Appdynamics/dexter-ui">GitHub repository</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default About
