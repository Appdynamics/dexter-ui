import React from 'react'
export default {
  TimeRange: {
    'ui:description': <div>Note this is in UTC/GMT time</div>,
    From: {
      'ui:widget': 'alt-datetime',
    },
    To: {
      'ui:widget': 'alt-datetime',
    },
  },
  Metrics: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Specified whether to extract and index summary and detail metrics for
        all Entities, which are used in Entity Metrics, Entity Metric Graphs and
        Entity Details report. Used in conjunction with MetricsSelectionCriteria
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#metrics-boolean">
          Docs
        </a>)
      </div>
    ),
    'ui:options': {
      inline: true,
    },
  },
  MetricsSelectionCriteria: {
    'ui:options': {
      orderable: false,
    },
    'ui:description': (
      <div>
        Selects which sets of metrics to export. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#metricsselectioncriteria-array-of-strings">
          Docs
        </a>)
      </div>
    ),
  },
  Flowmaps: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Specifies whether to extract and index flow maps for Entities
        (Application, Tier, Node, Business Transaction and Backend) (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#flowmaps-boolean">
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
        Specifies whether to extract and index configuration (BT rules, Backend
        rules, Data Collectors) (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configuration-boolean">
          Docs
        </a>)
      </div>
    ),
    'ui:options': {
      inline: true,
    },
  },
  ConfigurationComparisonReferenceCriteria: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        <p>
          Specifies which Application to use as reference during configuration
          comparison (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configuration-boolean">
            Docs
          </a>)
        </p>
        <p>
          If Controller is "https://reference.controller" and Application is
          "ReferenceApp", then configuration comparison is performed against a
          blank template application (TemplateApplicationConfiguration.xml)
        </p>
      </div>
    ),
  },
  Events: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Specifies whether to extract and index Events and Health Rule Violations
        (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#events-boolean">
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
        Specifies whether to retrieve Snapshots for all Business Transactions.
        Used in conjunction with SnapshotSelectionCriteria (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snaphots-boolean">
          Docs
        </a>)
      </div>
    ),
    'ui:options': {
      inline: true,
    },
  },
  SnapshotSelectionCriteria: {
    'ui:description': (
      <div>
        Selects which sets of metrics to export. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#metricsselectioncriteria-array-of-strings">
          Docs
        </a>)
      </div>
    ),
    Tiers: {
      'ui:title': 'SnapshotSelectionCriteria\\Tiers ',
      'ui:options': {
        orderable: false,
      },
      'ui:description': (
        <div>
          Filters Snapshots to be extracted to only ones originating from these
          Tiers. Regular expressions are supported (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriatiers-array-of-strings">
            Docs
          </a>)
        </div>
      ),
    },
    TierType: {
      'ui:title': 'SnapshotSelectionCriteria\\TierType',
      'ui:description': (
        <div>
          Contains settings for filtering by Tier Type. Each of the settings
          specifies the type of Tier which will be included. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriatiertypesetting-boolean">
            Docs
          </a>)
        </div>
      ),
      'ui:options': {
        inline: true,
      },
    },
    BusinessTransactions: {
      'ui:title': 'SnapshotSelectionCriteria\\BusinessTransactions ',
      'ui:options': {
        orderable: false,
      },
      'ui:description': (
        <div>
          Filters Snapshots to be extracted to only ones originating from these
          Business Transactions. Regular expressions are supported (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriabusinesstransactions-array-of-strings">
            Docs
          </a>)
        </div>
      ),
    },
    BusinessTransactionType: {
      'ui:title': 'SnapshotSelectionCriteria\\BusinessTransactionType',
      'ui:widget': 'checkboxes',
      'ui:options': {
        inline: true,
      },
      'ui:description': (
        <div>
          Contains settings for filtering by Business Transaction Type. Each of
          the settings specifies the type of Business Transaction which will be
          included. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriabusinesstransactiontypesetting-boolean">
            Docs
          </a>)
        </div>
      ),
    },
    UserExperience: {
      'ui:title': 'SnapshotSelectionCriteria\\UserExperience',
      'ui:description': (
        <div>Contains settings for filtering by User Experience</div>
      ),
    },
    SnapshotType: {
      'ui:title': 'SnapshotSelectionCriteria\\SnapshotType',
      'ui:description': (
        <div>Contains settings for filtering by Snapshot Type</div>
      ),
    },
  },
}
