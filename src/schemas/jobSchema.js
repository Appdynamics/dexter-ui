import { Validator } from 'jsonschema'
import inputSchema from './inputSchema'
import outputSchema from './outputSchema'
import targetSchema from './targetSchema'
import testSchema from './testSchema'

// https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File
// https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File-Examples

const v = new Validator()

const schema = {
  id: '/JobSchema',
  type: 'object',
  properties: {
    Input: { $ref: '/Input' },
    Output: { $ref: '/Output' },
    Target: { $ref: '/Target', minimum: 1 }
  }
}

v.addSchema(inputSchema, '/Input')
v.addSchema(outputSchema, '/Output')
v.addSchema(targetSchema, '/Target')
v.addSchema(schema, '/JobSchema')

console.log(v.validate(testSchema, schema))
export default v
