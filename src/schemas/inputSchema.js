export default {
  id: '/Input',
  type: 'object',
  properties: {
    TimeRange: {
      type: 'object',
      properties: {
        From: { type: 'string' },
        To: { type: 'string' },
      },
      required: ['From', 'To'],
    },
    DetectedEntities: { type: 'boolean', default: true },
    Licenses: { type: 'boolean', default: true },
    Dashboards: { type: 'boolean', default: true },
    Metrics: { type: 'boolean', default: true },
    MetricsSelectionCriteria: {
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
        'JVMStats',
        'BusinessTransactionPercentiles',
      ],
    },
    Flowmaps: { type: 'boolean', default: true },
    Configuration: { type: 'boolean', default: true },
    ConfigurationComparisonReferenceCriteria: {
      type: 'object',
      properties: {
        Controller: { type: 'string', default: 'https://reference.controller' },
        Application: { type: 'string', default: 'ReferenceApp' },
      },
    },
    Events: { type: 'boolean', default: true },
    UsersGroupsRolesPermissions: { type: 'boolean', default: true },
    Snapshots: { type: 'boolean', default: true },
    SnapshotSelectionCriteria: {
      type: 'object',
      properties: {
        Tiers: { type: 'array', items: { type: 'string' } },
        TierType: {
          type: 'object',
          properties: {
            All: { type: 'boolean', default: true },
            APP_AGENT: { type: 'boolean' },
            DOT_NET_APP_AGENT: { type: 'boolean' },
            NATIVE_APP_AGENT: { type: 'boolean' },
            NATIVE_DYNAMIC: { type: 'boolean' },
            NATIVE_SDK: { type: 'boolean' },
            NATIVE_WEB_SERVER: { type: 'boolean' },
            NODEJS_APP_AGENT: { type: 'boolean' },
            PHP_APP_AGENT: { type: 'boolean' },
            PYTHON_APP_AGENT: { type: 'boolean' },
            RUBY_APP_AGENT: { type: 'boolean' },
          },
        },
        BusinessTransactions: {
          type: 'array',
          items: { type: 'string' },
        },
        BusinessTransactionType: {
          type: 'object',
          properties: {
            All: { type: 'boolean', default: true },
            SERVLET: { type: 'boolean' },
            HTTP: { type: 'boolean' },
            WEB_SERVICE: { type: 'boolean' },
            POJO: { type: 'boolean' },
            JMS: { type: 'boolean' },
            EJB: { type: 'boolean' },
            SPRING_BEAN: { type: 'boolean' },
            STRUTS_ACTION: { type: 'boolean' },
            ASP_DOTNET: { type: 'boolean' },
            ASP_DOTNET_WEB_SERVICE: { type: 'boolean' },
            DOTNET_REMOTING: { type: 'boolean' },
            WCF: { type: 'boolean' },
            DOTNET_JMS: { type: 'boolean' },
            POCO: { type: 'boolean' },
            PHP_WEB: { type: 'boolean' },
            PHP_MVC: { type: 'boolean' },
            PHP_DRUPAL: { type: 'boolean' },
            PHP_WORDPRESS: { type: 'boolean' },
            PHP_CLI: { type: 'boolean' },
            PHP_WEB_SERVICE: { type: 'boolean' },
            NODEJS_WEB: { type: 'boolean' },
            NATIVE: { type: 'boolean' },
            WEB: { type: 'boolean' },
            PYTHON_WEB: { type: 'boolean' },
            RUBY_WEB: { type: 'boolean' },
            RUBY_RAILS: { type: 'boolean' },
            BINARY_REMOTING: { type: 'boolean' },
          },
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
    },
  },
}
