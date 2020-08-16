export default {
    Input: {
        TimeFrame: {
            MarkDate: '2019-10-15',
            MarkTime: '10:00:00',
            Duration: '1:00:00',
        },
        TimeRange: {
            From: '2019-10-15T09:00:00',
            To: '2019-10-15T10:00:00'
        },
        UsersGroupsRolesPermissions: true,
        Dashboards: true,
        Events: true,
        EventsSelectionCriteria: ['All'],
        Configuration: true,
        ConfigurationComparisonReferenceAPM: { Controller: '', Application: '' },
        ConfigurationComparisonReferenceWEB: { Controller: '', Application: '' },
        ConfigurationComparisonReferenceMOBILE: { Controller: '', Application: '' },
        ConfigurationComparisonReferenceDB: { Controller: '', Application: '' },
        DetectedEntities: true,
        Metrics: true,
        MetricsSelectionCriteria: [
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
            'BusinessTransactionPercentiles'
        ],
        MetricsList: true,
        Flowmaps: true,
        EntityDashboards: true,
        EntityDashboardSelectionCriteria: {
            Tiers: ['Web'],
            TierType: ['All'],
            BusinessTransactions: [
                '/api/data',
                'Login-AuthenticationEngine',
                'Web-List-.*',
                'Async-Svc.SendEmailActivityService'
            ],
            BusinessTransactionTypes: ['All'],
            Nodes: ['Node.*'],
            NodeTypes: ['All'],
            Backends: ['Oracle.*'],
            BackendTypes: ['All']
        },
        Snapshots: true,
        SnapshotSelectionCriteria: {
            Tiers: ['Web'],
            TierTypes: ['All'],
            BusinessTransactions: [
                '/api/data',
                'Login-AuthenticationEngine',
                'Web-List-.*',
                'Async-Svc.SendEmailActivityService'
            ],
            BusinessTransactionTypes: ['All'],
            UserExperience: {
                Normal: false,
                Slow: true,
                VerySlow: true,
                Stall: true,
                Error: true
            },
            SnapshotType: {
                Full: true,
                Partial: false,
                None: false
            }
        }
    },
    Output: {
        UsersGroupsRolesPermissions: true,
        Dashboards: true,
        Licenses: true,
        Events: true,
        Configuration: true,
        DetectedEntities: true,
        EntityMetrics: true,
        EntityMetricGraphs: true,
        MetricsList: true,
        Flowmaps: true,
        EntityDashboards: true,
        EntityDetails: true,
        Snapshots: true,
        FlameGraphs: true,
        HealthCheck: true
    },
    Target: [
        {
            Controller: 'https://account.saas.appdynamics.com',
            UserName: 'username@account',
            UserPassword: '',
            Application: 'ABCDEFG',
            NameRegex: false,
            Type: 'APM'
        }
    ]
}
