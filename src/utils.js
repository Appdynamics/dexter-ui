export const mapObjectsToSelect = objs =>
  objs &&
  objs.map(({ _id, name }) => ({
    value: _id,
    label: name,
  }))
