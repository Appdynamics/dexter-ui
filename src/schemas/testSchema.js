export default {
  Input: {
    TimeRange: {
      From: '2017-12-29T18:00:00',
      To: '2017-12-29T20:00:00'
    },
    Metrics: true,
    MetricsSelectionCriteria: [
      'Transaction',
      'AgentStats',
      'OSHardware',
      'CLRStats',
      'IISStats',
      'JVMStats',
      'BusinessTransactionPercentiles'
    ],
    Flowmaps: true,
    Configuration: true,
    Events: true,
    Snapshots: true,
    SnapshotSelectionCriteria: {
      Tiers: ['Web'],
      TierType: {
        All: false,
        APP_AGENT: false,
        DOT_NET_APP_AGENT: true,
        NATIVE_APP_AGENT: false,
        NATIVE_DYNAMIC: false,
        NATIVE_SDK: false,
        NATIVE_WEB_SERVER: false,
        NODEJS_APP_AGENT: false,
        PHP_APP_AGENT: false,
        PYTHON_APP_AGENT: false,
        RUBY_APP_AGENT: false
      },
      BusinessTransactions: [
        '/api/data',
        'Login-AuthenticationEngine',
        'Web-List-.*',
        'Async-Svc.SendEmailActivityService'
      ],
      BusinessTransactionType: {
        All: false,
        SERVLET: false,
        HTTP: false,
        WEB_SERVICE: false,
        POJO: false,
        JMS: false,
        EJB: false,
        SPRING_BEAN: false,
        STRUTS_ACTION: false,
        ASP_DOTNET: true,
        ASP_DOTNET_WEB_SERVICE: false,
        DOTNET_REMOTING: false,
        WCF: true,
        DOTNET_JMS: false,
        POCO: false,
        PHP_WEB: false,
        PHP_MVC: false,
        PHP_DRUPAL: false,
        PHP_WORDPRESS: false,
        PHP_CLI: false,
        PHP_WEB_SERVICE: false,
        NODEJS_WEB: false,
        NATIVE: false,
        WEB: false,
        PYTHON_WEB: false,
        RUBY_WEB: false,
        RUBY_RAILS: false,
        BINARY_REMOTING: false
      },
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
    DetectedEntities: true,
    EntityMetrics: true,
    EntityMetricGraphs: true,
    EntityDetails: true,
    Events: true,
    Configuration: true,
    Snapshots: true,
    FlameGraphs: true
  },
  Target: [
    {
      Controller: 'https://account.saas.appdynamics.com',
      UserName: 'username@account',
      UserPassword: '',
      Application: 'ABCDEFG',
      NameRegex: false
    }
  ]
}
