import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import outputSchema from '../../schemas/outputSchema'
import outputUISchema from './outputUISchema'

export default class OutputForm extends Component {
  handleSubmit = ({ formData }) => {
    localStorage.setItem('formDataOutput', JSON.stringify(formData))
    this.props.history.push('/target')
  }
  render() {
    let schema = outputSchema
    let uiSchema = outputUISchema

    return (
      <div>
        <div className="container">
          <h1 className="mt-4">Output</h1>
          <p>What reports to produce using input data</p>
          <Form
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}
