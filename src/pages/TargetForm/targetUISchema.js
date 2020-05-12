import React from 'react'

export default {
    items: {
        Controller: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#controller-string">Docs</a>)<br />
                    URL of your controller. Ex: https://mycompany.saas.appdynamics.com or http://localhost:9080.
                </div>
            ),
        },
        UserName: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#username-string">Docs</a>)<br />
                    Username in the format myusername@tenant or token authentication.
                </div>
            ),
        },
        UserPassword: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#userpassword-string">Docs</a>)<br />
                    Password of the user or token value to connect to Controller. Leave blank to be prompted for password when extraction begins.
                </div>
            ),
        },
        Application: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#application-string">Docs</a>)<br />.
                    Application or Applications to query in the Controller.
                    Works with NameRegex.
                </div>
            ),
        },
        NameRegex: {
            'ui:widget': 'radio',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#nameregex-boolean">Docs</a>)<br />
                    Specifies whether Application is interpreted as Regular Expression.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
        Type: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#type-string">Docs</a>)<br />
                    Specifies type of Application. Can be: APM, SIM, WEB, MOBILE, DB, BIQ
                </div>
            ),
        },
    },
    'ui:options': {
        removable: false,
    },
}
