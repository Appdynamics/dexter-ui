import React from 'react'

export default {
  items: {
    Controller: {
      'ui:description': (
        <div>
          URL of your controller. Ex: https://mycompany.saas.appdynamics.com or
          http://localhost:9080.
        </div>
      ),
    },
    UserName: {
      'ui:description': (
        <div>
          Username in the format myusername@customer1 (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#username-string">
            Docs
          </a>)
        </div>
      ),
    },
    UserPassword: {
      'ui:description': (
        <div>
          Password of the user to connect to Controller. Leave blank to be
          prompted for password when extraction begins
        </div>
      ),
    },
    Application: {
      'ui:description': (
        <div>
          Application or Applications to query in the Controller (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#application-string">
            Docs
          </a>). NameRegex specifies whether Application is interpreted as
          Regular Expression or not
        </div>
      ),
    },
    NameRegex: {
      // 'ui:description': 'Name regex',
    },
    Type: {
      'ui:description': (
        <div>
          APM is for applications (default, probably what you want), SIM is for
          server monitoring, and WEB is for end user monitoring (soon to be
          supported)
        </div>
      ),
    },
  },
  'ui:options': {
    removable: false,
  },
}
