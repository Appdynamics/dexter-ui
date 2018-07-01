export default {
  items: {
    Controller: {
      'ui:description':
        'URL of your controller. Ex: https://mycompany.saas.appdynamics.com or http://localhost:9080',
    },
    UserName: {
      'ui:description':
        'Please add username in the format myusername@customer1',
    },
    UserPassword: {
      'ui:description':
        'This is in plain-text (but password is never sent to a server)',
    },
    Application: {
      'ui:description': 'Description here',
    },
    NameRegex: {
      // 'ui:description': 'Name regex',
    },
  },
  'ui:options': {
    removable: false,
  },
}
