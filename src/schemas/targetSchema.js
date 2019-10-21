export default {
  id: '/Target',
  type: 'array',
  minItems: 1,
  items: {
    type: 'object',
    properties: {
      Controller: { type: 'string', format: 'uri' },
      UserName: { type: 'string', pattern: '.*@.*|BEARER' },
      UserPassword: { type: 'string' },
      Application: { type: 'string' },
      NameRegex: { type: 'boolean', default: false },
      Type: {
        type: 'string',
        default: 'APM',
        enum: ['APM', 'SIM', 'DB', 'WEB', 'MOBILE', 'BIQ'],
      },
    },
    required: ['Controller', 'UserName', 'Application'],
  },
}