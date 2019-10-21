export default {
  id: '/Output',
  type: 'object',
  properties: {
    UsersGroupsRolesPermissions: { type: 'boolean', default: true },
    Dashboards: { type: 'boolean', default: true },
    Events: { type: 'boolean', default: true },
    Configuration: { type: 'boolean', default: true },
    DetectedEntities: { type: 'boolean', default: true },
    EntityMetrics: { type: 'boolean', default: true },
    EntityMetricGraphs: { type: 'boolean', default: true },
    EntityDashboards: { type: 'boolean', default: true },
    EntityDetails: { type: 'boolean', default: true },
    Snapshots: { type: 'boolean', default: true },
    FlameGraphs: { type: 'boolean', default: true }
  },
}
