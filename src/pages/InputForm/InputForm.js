import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import inputSchema from '../../schemas/inputSchema'
import inputUISchema from './inputUISchema'
import { withRouter } from 'react-router'

class InputForm extends Component {
  handleSubmit = ({ formData }) => {
    localStorage.setItem('formDataInput', JSON.stringify(formData))
    this.props.history.push('/output')
  }
  render() {
    let schema = inputSchema
    let uiSchema = inputUISchema

    return (
      <div>
        <div className="container">
          <h1 className="mt-4">Input</h1>
          <p>
            What to get, including time range and what to select, and what to convert to data warehouse CSVs.
          </p>
          <Form
            schema={schema}
            uiSchema={uiSchema}
            onChange={console.log('changed')}
            onSubmit={this.handleSubmit.bind(this)}
            onError={console.log('errors')}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(InputForm)
