export default {
    id: '/Target',
    type: 'array',
    minItems: 1,
    items: {
        type: 'object',
        properties: {
            Controller: { type: 'string', format: 'uri', default: "https://yourtenant.saas.appdynamics.com" },
            UserName: { type: 'string', pattern: '.*@.*|BEARER', default: "yourusername@yourtenant" },
            UserPassword: { type: 'string' },
            Application: { type: 'string', default: ".*" },
            NameRegex: { type: 'boolean', default: true },
            Type: {
                type: 'string',
                default: 'APM',
                enum: ['APM', 'SIM', 'DB', 'WEB', 'MOBILE', 'BIQ'],
            },
        },
        required: ['Controller', 'UserName', 'Application'],
    },
}
