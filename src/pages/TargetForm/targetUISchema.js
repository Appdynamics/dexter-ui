import React from 'react'

export default {
  items: {
    Controller: {
      'ui:description': (
        <div>
          URL of your controller. Ex: https://mycompany.saas.appdynamics.com or http://localhost:9080.
          (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#controller-string">Docs</a>)
        </div>
      ),
    },
    UserName: {
      'ui:description': (
        <div>
          Username in the format myusername@tenant 
          (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#username-string">Docs</a>)
          or token authentication
          (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#client-api-token">Docs</a>)
        </div>
      ),
    },
    UserPassword: {
      'ui:description': (
        <div>
          Password of the user to connect to Controller. Leave blank to be prompted for password when extraction begins
          (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#userpassword-string">Docs</a>)
        </div>
      ),
    },
    Application: {
      'ui:description': (
        <div>
          Application or Applications to query in the Controller 
          (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#application-string">Docs</a>).
          NameRegex specifies whether Application is interpreted as Regular Expression or not
        </div>
      ),
    },
    NameRegex: {
      'ui:description': (
        <div>
          Specifies whether Application is interpreted as Regular Expression or not
          (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#nameregex-boolean">Docs</a>)
        </div>
      ),
    },
    Type: {
      'ui:description': (
        <div>
          Specifies type of Application. Can be: APM, SIM, WEB, MOBILE, DB, BIQ
          (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#type-string">Docs</a>)
        </div>
      ),
    },
  },
  'ui:options': {
    removable: false,
  },
}
