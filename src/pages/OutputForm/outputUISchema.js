import React from 'react'

export default {
  UsersGroupsRolesPermissions: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Users, Groups, Roles and Permissions report shows information about each and every security entity (User, Group, Role and Permission) and their relationship in Controller.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#usersgroupsrolespermissions-boolean-1">Docs</a>)
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
        Dashboards report shows information about Dashboard, their Widgets and Time Series referenced by then in Controller
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#dashboards-boolean-1">Docs</a>)
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
        Events and Health Rule Violations report provides information about Events and Health Rule Violations in the requested time range in all Applications of all types, as well as Controller Audit log events and Controller Notifications.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#events-boolean-1">Docs</a>)
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
        Configuration report provides information about Controller Settings and Application configuration for all Application types.
        It also shows differences between various configuration entities as compared against either an empty APM, WEB, MOBILE or DB Application or one of the APM, WEB, MOBILE or DB Applications in the Controller.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configuration-boolean-1">Docs</a>)
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
        Specifies whether to render:
        <ul>
            <li>Detected APM Entities report for APM applications</li>
            <li>Detected SIM Entities report for SIM applications</li>
            <li>Detected DB Entities report for DB Collectors</li>
            <li>Detected WEB Entities report for WEB applications</li>
            <li>Detected MOBILE Entities report for MOBILE applications</li>
            <li>Detected BIQ Entities report for BIQ applications</li>
        </ul>
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#detectedentities-boolean-1">Docs</a>)
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
        Entity Metrics report shows summary for all transactional Metrics for Applications, Tiers, Nodes, Business Transactions, Backends, Service Endpoints, Errors and Information Points for APM Applications.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitymetrics-boolean">Docs</a>)
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
        Entity Metrics report shows graphs for all Metrics for Application, Tiers, Nodes, Business Transactions, Backends, Service Endpoints, Errors and Information Points for APM Applications.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitymetricgraphs-boolean">Docs</a>)
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
        Entity Details report is generated for Application and all of its Tiers, Nodes, Business Transactions, Backends, Service Endpoints and Errors for APM Aplications.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboards-boolean-1">Docs</a>)
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
        Entity Details report is generated for Application and all of its Tiers, Nodes, Business Transactions, Backends, Service Endpoints and Errors for APM Aplications.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydetails-boolean">Docs</a>)
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
        Snapshots report provides information about Snapshots, Segments, Exit Calls, traversed Service Endpoints and Business Data for all Snapshots in APM Applications.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshots-boolean-1">Docs</a>)
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
        Flame Graphs and Flame Chart reports visualizes a collection of stack traces (aka call stacks) in an adjacency diagram with an inverted icicle layout. They are a useful way to visualize many call graphs in single screen.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#flamegraphs-boolean">Docs</a>)
      </div>
    ),
    'ui:options': {
      inline: true,
    },
  }
}
