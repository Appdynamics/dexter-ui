import React from 'react'

export default {
    UsersGroupsRolesPermissions: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#usersgroupsrolespermissions-boolean-1">Docs</a>)<br />
                Users, Groups, Roles and Permissions report shows information about each and every security entity (User, Group, Role and Permission) and their relationship in Controller.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Dashboards: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#dashboards-boolean-1">Docs</a>)<br />
                Dashboards report shows information about Dashboard, their Widgets and Time Series referenced by then in Controller
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Licenses: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#licenses-boolean-1">Docs</a>)<br />
                Licenses report provides information about global account and license rule configuration and consumption for Controller.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Events: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#events-boolean-1">Docs</a>)<br />
                Events and Health Rule Violations report provides information about Events and Health Rule Violations in the requested time range in all Applications of all types, as well as Controller Audit log events and Controller Notifications.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Configuration: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configuration-boolean-1">Docs</a>)<br />
                Configuration report provides information about Controller Settings and Application configuration for all Application types.
                <br />
                It also shows differences between various configuration entities as compared against either an empty APM, WEB, MOBILE or DB Application or one of the APM, WEB, MOBILE or DB Applications in the Controller.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    DetectedEntities: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#detectedentities-boolean-1">Docs</a>)<br />
                Specifies whether to render:
                <ul>
                    <li>Detected APM Entities report for APM applications</li>
                    <li>Detected SIM Entities report for SIM applications</li>
                    <li>Detected DB Entities report for DB Collectors</li>
                    <li>Detected WEB Entities report for WEB applications</li>
                    <li>Detected MOBILE Entities report for MOBILE applications</li>
                    <li>Detected BIQ Entities report for BIQ applications</li>
                </ul>
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    EntityMetrics: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitymetrics-boolean">Docs</a>)<br />
                Entity Metrics report shows summary for all transactional Metrics for Applications, Tiers, Nodes, Business Transactions, Backends, Service Endpoints, Errors and Information Points for APM Applications.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    EntityMetricGraphs: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitymetricgraphs-boolean">Docs</a>)<br />
                Entity Metrics report shows graphs for all Metrics for Application, Tiers, Nodes, Business Transactions, Backends, Service Endpoints, Errors and Information Points for APM Applications.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Flowmaps: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#flowmaps-boolean-1">Docs</a>)<br />
                Entity Flowmaps report shows activity flow for all Applications, Tiers, Nodes, Business Transactions and Backends for APM Applications.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    EntityDashboards: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboards-boolean-1">Docs</a>)<br />
                APM Entity Dashboard report shows Flowmap dashboard screenshot about each and every detected Entity in APM applications (Applications, Tiers, Nodes, Business Transactions, Backends).
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    EntityDetails: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydetails-boolean">Docs</a>)<br />
                Entity Details report is generated for Application and all of its Tiers, Nodes, Business Transactions, Backends, Service Endpoints and Errors for APM Aplications.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Snapshots: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshots-boolean-1">Docs</a>)<br />
                Snapshots report provides information about Snapshots, Segments, Exit Calls, traversed Service Endpoints and Business Data for all Snapshots in APM Applications.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    IndividualSnapshots: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#individualsnapshots-boolean">Docs</a>)<br />
                Individual Snapshot report provides information about Snapshot, Segments, Exit Calls, traversed Service Endpoints and Business Data for single Snapshot.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    FlameGraphs: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#flamegraphs-boolean">Docs</a>)<br />
                Flame Graphs and Flame Chart reports visualizes a collection of stack traces (aka call stacks) in an adjacency diagram with an inverted icicle layout. They are a useful way to visualize many call graphs in single screen.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    HealthCheck: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#healthcheck-boolean">Docs</a>)<br />
                The Health Check report provides a health grade of key application configurations within AppDynamics. It describes well a particular application’s monitoring is configured and identifies configuration gaps, which could prevent customers from getting maximum value from AppDynamics.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    }
}
