export function EntityCoordsWithHeading(entity: number): number[] {
  let entityInfo = [];

  let entityCoords = GetEntityCoords(entity, true);
  let entityHeading = GetEntityHeading(entity);

  entityInfo.push(
    entityCoords[0],
    entityCoords[1],
    entityCoords[2],
    entityHeading
  );

  return entityInfo;
}
