import React, { Component } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import FileSaver from 'file-saver';

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
                            onCopy={() => this.setState({ copied: true })}>
                            <button className="btn btn-primary mr-2 mb-2">
                                Copy to clipboard
                            </button>
                        </CopyToClipboard>
                        {this.state.copied ? (
                            <span style={{ color: 'red' }}>Copied.</span>
                        ) : null}
                    </div>
                    <p>
                        <textarea
                            className="results-text"
                            id="txtJobFileContents"
                            defaultValue={JSON.stringify(this.state.results, null, 2)}
                        />
                    </p>
                    <p>
                        Or save as this job fil as this file name:
                    </p>
                    <p>
                        <input type="text" id="txtFileName" defaultValue="myjob.json"></input>
                        &nbsp;&nbsp;

                        <button className="btn btn-primary mr-2 mb-2" id="btnSaveFile" onClick={this.onTestSaveFile}>
                            Save Job File
                        </button>
                    </p>
                </div>
            </div>
        )
    }
    onTestSaveFile(txtFileName) {
        window.alert('I will figure this out soon');
        var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
        //FileSaver.saveAs(blob, "hello world.txt");
    }
}
