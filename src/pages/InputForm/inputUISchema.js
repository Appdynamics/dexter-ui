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
  UsersGroupsRolesPermissions: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Users, Groups, Roles and Permissions report shows information about each
        and every security entity (User, Group, Role and Permission) and their
        relationship in Controller. (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Users-and-Permissions-Report">
          Docs
        </a>)
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
        Extract dashboards, their widgets and time series (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File">
          Docs
        </a>)
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
  ConfigurationComparisonReferenceAPM: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        <p>
          Specifies which Application to use as reference during configuration
          comparison (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferenceapmcontroller-and-configurationcomparisonreferenceapmapplication-string">
            Docs
          </a>)
        </p>
        <p>
          If Controller and Application are blank, then configuration comparison is performed against a blank template application.
        </p>
      </div>
    ),
  },
  ConfigurationComparisonReferenceWEB: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        <p>
          Specifies which Application to use as reference during configuration
          comparison (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferencewebcontroller-and-configurationcomparisonreferencewebapplication-string">
            Docs
          </a>)
        </p>
        <p>
          If Controller and Application are blank, then configuration comparison is performed against a blank template application.
        </p>
      </div>
    ),
  },
  ConfigurationComparisonReferenceMOBILE: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        <p>
          Specifies which Application to use as reference during configuration
          comparison (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferencemobilecontroller-and-configurationcomparisonreferencemobileapplication-string">
            Docs
          </a>)
        </p>
        <p>
          If Controller and Application are blank, then configuration comparison is performed against a blank template application.
        </p>
      </div>
    ),
  },
  ConfigurationComparisonReferenceDB: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        <p>
          Specifies which Application to use as reference during configuration
          comparison (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferencedbcontroller-and-configurationcomparisonreferencedbapplication-string">
            Docs
          </a>)
        </p>
        <p>
          If Controller and Application are blank, then configuration comparison is performed against a blank template application.
        </p>
      </div>
    ),
  },
  DetectedEntities: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Extract detected entities for this application type (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File">
          Docs
        </a>)
      </div>
    ),
    'ui:options': {
      inline: true,
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
  Licenses: {
    'ui:widget': 'radio',
    'ui:description': (
      <div>
        Extract license rules and license consumption (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File">
          Docs
        </a>)
      </div>
    ),
    'ui:options': {
      inline: true,
    },
  },
}
