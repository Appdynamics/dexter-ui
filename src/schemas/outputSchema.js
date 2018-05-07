export default {
  id: '/Output',
  type: 'object',
  properties: {
    DetectedEntities: { target: 'boolean' },
    EntityMetrics: { target: 'boolean' },
    EntityMetricGraphs: { target: 'boolean' },
    EntityDetails: { target: 'boolean' },
    Events: { target: 'boolean' },
    Configuration: { target: 'boolean' },
    Snapshots: { target: 'boolean' },
    FlameGraphs: { target: 'boolean' }
  }
}
