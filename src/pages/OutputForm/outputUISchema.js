import React from 'react'

export default {
  DetectedEntities: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Detected Entities report shows information about each and every detected
        Entity (Application, Tier, Node, Business Transaction, Backend, Service
        Endpoint, Errors and Information Point) (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Detected-Entities-Report">
          Docs
        </a>)
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
        <div>
          <p>
            Entity Metrics report shows summary for all Metrics for each
            transactional metrics for every detected Application, Tier, Node,
            Business Transaction, Backend, Service Endpoint, Errors and
            Information Point. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Entity-Metrics-Report">
              Docs
            </a>)
          </p>
          <p>
            This makes it very valuable in times when you want to rapidly assess
            hundreds of Applications, Tiers and Business Transactions and see
            which ones need your attention.
          </p>

          <p>
            The scatter plot chart above each table provides description of
            Calls vs Response for each row. As the table is filtered, the data
            in the chart will change.
          </p>
        </div>
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
        <p>
          Entity Metrics report shows graphs for all Metrics for each and every
          detected Application, Tier, Node, Business Transaction, Backend,
          Service Endpoint, Errors and Information Point. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Entity-Metric-Graphs-Report">
            Docs
          </a>)
        </p>
        <p>
          The report graphs are only produced for Entities that had some metric
          activity (HasActivity=True in EntityMetrics report).
        </p>

        <p>
          The sets of metrics are driven by EntityMetricsExtractMapping.csv. See
          Metric Sets for more information.
        </p>
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
        <p>
          "Entity Timeline View" is part of Entity Details report that is
          generated for Application and all of its Tiers, Nodes, Business
          Transactions, Backends, Service Endpoints and Errors. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Entity-Details-Report">
            Docs
          </a>)
        </p>
        <p>
          Entity Timeline provides a chronological visualization of Events and
          Snapshots, enabling identification of re-occurring or persistent
          issues.
        </p>
        <p>It provides a single-pane view into many things, including:</p>
        <ul>
          <li>
            1-minute granularity Metrics in the 1 hour time frame for each hour
            in the exported range Filterable list of Events and Health Rule
          </li>
          <li>
            Violations, arranged in the timeline of that hour, with details of
            the Event
          </li>
          <li>
            Filterable list of Snapshots, broken by Business Transaction and
            User Experience, arranged in the timeline of that hour, and
            hotlinked to the specific Snapshot
          </li>
        </ul>
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
        Events and Health Rule Violations report provides information about
        Events and Health Rule Violations in the requested time range in all
        Applications. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Events-and-Health-Rule-Violations-Report">
          Docs
        </a>)
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
        Configuration report provides information about Controller Settings and
        per-Application configuration. It also shows differences between various
        configuration entities as compared against either an empty Application
        or one of the Applications in the Controller. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Configuration-Report">
          Docs
        </a>)
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
        Snapshots report provides information about Snapshots, Segments, Exit
        Calls, traversed Service Endpoints and Business Data for all Snapshots.
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Snapshots-Report">
          Docs
        </a>)
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
        Flame Graphs and Flame Chart reports are an ingenious and useful way to
        visualize many call graphs in single screen. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Flame-Graph-Report">
          Docs
        </a>)
      </div>
    ),
    'ui:options': {
      inline: true,
    },
  },
}
