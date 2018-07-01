import React from 'react'
export default {
  TimeRange: {
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
        hi <a href="">Stuff</a>
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
    'ui:description': 'What it does',
  },
  Flowmaps: {
    'ui:widget': 'radio',
    'ui:description': 'Collect metrics or not',
    'ui:options': {
      inline: true,
    },
  },
  Configuration: {
    'ui:widget': 'radio',
    'ui:description': 'Collect metrics or not',
    'ui:options': {
      inline: true,
    },
  },
  Events: {
    'ui:widget': 'radio',
    'ui:description': 'Collect metrics or not',
    'ui:options': {
      inline: true,
    },
  },
  Snapshots: {
    'ui:widget': 'radio',
    'ui:description': 'Collect metrics or not',
    'ui:options': {
      inline: true,
    },
  },
  SnapshotSelectionCriteria: {
    'ui:description': 'What it does',
    Tiers: {
      'ui:options': {
        orderable: false,
      },
      'ui:description': 'What it does',
    },
    TierType: {
      'ui:description': 'What it does',
      'ui:options': {
        inline: true,
      },
    },
  },
  BusinessTransactions: {
    'ui:options': {
      orderable: false,
    },
    'ui:description': 'What it does',
  },
  BusinessTransactionType: {
    'ui:widget': 'checkboxes',
    'ui:options': {
      inline: true,
    },
    'ui:description': 'What it does',
  },
  UserExperience: {
    'ui:description': 'What it does',
  },
  SnapshotType: {
    'ui:description': 'What it does',
  },
}
