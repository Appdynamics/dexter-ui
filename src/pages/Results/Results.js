import React, { Component } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class Results extends Component {
  constructor(props) {
    super(props)
    const Input = JSON.parse(localStorage.getItem('formDataInput'))
    const Output = JSON.parse(localStorage.getItem('formDataOutput'))
    const Target = JSON.parse(localStorage.getItem('formDataTarget'))
    const results = { Input, Output, Target }
    this.state = { results }
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-4">Results</h1>
          <p>Here is the contents of your job file!</p>
          <div>
            <CopyToClipboard
              text={JSON.stringify(this.state.results, null, 2)}
              onCopy={() => this.setState({ copied: true })}
            >
              <button className="btn btn-primary mr-2 mb-2">
                Copy to clipboard
              </button>
            </CopyToClipboard>
            {this.state.copied ? (
              <span style={{ color: 'red' }}>Copied.</span>
            ) : null}
          </div>
          <textarea
            className="results-text"
            defaultValue={JSON.stringify(this.state.results, null, 2)}
          />
        </div>
      </div>
    )
  }
}
