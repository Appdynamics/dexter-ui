export default {
    id: '/Input',
    type: 'object',
    properties: {
        TimeFrame: {
            type: 'object',
            properties: {
                MarkDate: { type: 'string', default: "TODAY" },
                MarkTime: { type: 'string', default: "PREVIOUS_HOUR" },
                Duration: { type: 'string', default: "1:00:00" },
            },
            required: ['MarkDate', 'MarkTime', 'Duration'],
        },
        UsersGroupsRolesPermissions: { type: 'boolean', default: true },
        Dashboards: { type: 'boolean', default: true },
        Licenses: { type: 'boolean', default: false },
        Events: { type: 'boolean', default: true },
        EventsSelectionCriteria: {
            type: 'array',
            items: { type: 'string' },
            default: [
                'All',
            ],
        },
        Configuration: { type: 'boolean', default: true },
        ConfigurationComparisonReferenceAPM: {
            type: 'object',
            properties: {
                Controller: { type: 'string', default: '' },
                Application: { type: 'string', default: '' },
            },
        },
        ConfigurationComparisonReferenceWEB: {
            type: 'object',
            properties: {
                Controller: { type: 'string', default: '' },
                Application: { type: 'string', default: '' },
            },
        },
        ConfigurationComparisonReferenceMOBILE: {
            type: 'object',
            properties: {
                Controller: { type: 'string', default: '' },
                Application: { type: 'string', default: '' },
            },
        },
        ConfigurationComparisonReferenceDB: {
            type: 'object',
            properties: {
                Controller: { type: 'string', default: '' },
                Application: { type: 'string', default: '' },
            },
        },
        DetectedEntities: { type: 'boolean', default: true },
        Metrics: { type: 'boolean', default: true },
        MetricsSelectionCriteria: {
            type: 'object',
            properties: {
                MetricSets: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [
                        'TransactionApplication',
                        'TransactionTier',
                        'TransactionNode',
                        'TransactionBackend',
                        'TransactionBT',
                        'TransactionSEP',
                        'TransactionError',
                        'TransactionIP',
                        'AgentStats',
                        'OSHardware',
                        'CLRStats',
                        'IISStats',
                        'IISReqCounts',
                        'IISReqPerf',
                        'JVMStats',
                        'JMXDBConnStats',
                        'JMXWebContainerStats',
                        'BusinessTransactionPercentiles',
                        'BIQMetric',
                        'BIQBizJourney',
                        'DBKPI',
                        'DBServerStats',
                        'DBIO',
                        'DBEngineStats',
                        'WEBTransactionApplication',
                        'WEBTransactionPage',
                        'WEBTransactionAJAX',
                        'WEBTransactionVirtualPage',
                        'MOBILETransactionApplication',
                        'MOBILETransactionNetworkRequest',
                        'SIMHardware'
                    ],
                },
                IncludeHourAndMinuteDetail: { type: 'boolean', default: true },
            },
        },
        MetricsList: { type: 'boolean', default: true },
        Flowmaps: { type: 'boolean', default: true },
        EntityDashboards: { type: 'boolean', default: false },
        EntityDashboardSelectionCriteria: {
            type: 'object',
            properties: {
                Tiers: { type: 'array', items: { type: 'string' } },
                TierTypes: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [
                        'All',
                    ],
                },
                BusinessTransactions: {
                    type: 'array',
                    items: { type: 'string' },
                },
                BusinessTransactionTypes: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [
                        'All',
                    ],
                },
                Nodes: { type: 'array', items: { type: 'string' } },
                NodeTypes: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [
                        'All',
                    ],
                },
                Backends: { type: 'array', items: { type: 'string' } },
                BackendTypes: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [
                        'All',
                    ],
                },
            },
        },
        Snapshots: { type: 'boolean', default: true },
        SnapshotSelectionCriteria: {
            type: 'object',
            properties: {
                Tiers: { type: 'array', items: { type: 'string' } },
                TierTypes: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [
                        'All',
                    ],
                },
                BusinessTransactions: {
                    type: 'array',
                    items: { type: 'string' },
                },
                BusinessTransactionTypes: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [
                        'All',
                    ],
                },
                RequestIDs: {
                    type: 'array',
                    items: { type: 'string' },
                },
                UserExperience: {
                    type: 'object',
                    properties: {
                        Normal: { type: 'boolean', default: true },
                        Slow: { type: 'boolean', default: true },
                        VerySlow: { type: 'boolean', default: true },
                        Stall: { type: 'boolean', default: true },
                        Error: { type: 'boolean', default: true },
                    },
                },
                SnapshotType: {
                    type: 'object',
                    properties: {
                        Full: { type: 'boolean', default: true },
                        Partial: { type: 'boolean', default: true },
                        None: { type: 'boolean', default: true },
                    },
                },
            },
        }
    },
}
