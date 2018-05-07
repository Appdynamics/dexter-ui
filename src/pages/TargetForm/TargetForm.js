import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import targetSchema from '../../schemas/targetSchema'
import targetUISchema from './targetUISchema'

export default class targetForm extends Component {
  handleSubmit = ({ formData }) => {
    localStorage.setItem('formDataTarget', JSON.stringify(formData))
    this.props.history.push('/results')
  }
  render() {
    let schema = targetSchema
    let uiSchema = targetUISchema

    return (
      <div>
        <div className="container">
          <h1 className="mt-4">Target</h1>
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
