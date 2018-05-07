export default {
  id: '/Output',
  type: 'object',
  properties: {
    DetectedEntities: { type: 'boolean' },
    EntityMetrics: { type: 'boolean' },
    EntityMetricGraphs: { type: 'boolean' },
    EntityDetails: { type: 'boolean' },
    Events: { type: 'boolean' },
    Configuration: { type: 'boolean' },
    Snapshots: { type: 'boolean' },
    FlameGraphs: { type: 'boolean' },
  },
}
