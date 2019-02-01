/*
Notes:
Bug - @citizenfx/server typings doesn't return <int> for CreateVehicle() so use @citizenfx/client
*/

import * as util from "./utils";

var toggle = false;

RegisterCommand(
  "mypos",
  (source: number) => {
    let ped = GetPlayerPed(source);

    let c = util.EntityCoordsWithHeading(ped);
    console.log(`Pos of [${source}] is [${c[0]},${c[1]},${c[2]}, ${c[3]}]`);
  },
  false
);

RegisterCommand(
  "veh",
  (source: number, args: string[]) => {
    let ped = GetPlayerPed(source);
    let c = util.EntityCoordsWithHeading(ped);
    let model = "adder";
    if (args.length > 0) {
      model = args[0];
    }
    let vehicle = CreateVehicle(model, c[0], c[1], c[2], c[3], true, true);
    SetPedIntoVehicle(source, vehicle, -1);
    console.log(`Set player [${source}] into vehicle [${vehicle}]`);
  },
  false
);

RegisterCommand(
  "freeze",
  (source: number) => {
    let ped = GetPlayerPed(source);
    toggle = !toggle;
    FreezeEntityPosition(ped, toggle);
    console.log(`Player ${ped} frozen: ${toggle}`);
  },
  false
);

RegisterCommand(
  "pedinfo",
  (source: number) => {
    let ped = GetPlayerPed(source);
    let c = util.EntityCoordsWithHeading(ped);
    let r = GetEntityRotation(ped, 2);
    let rV = GetEntityRotationVelocity(ped);
    let v = GetEntityVelocity(ped);
    let model = GetEntityModel(ped);
    let popType = GetEntityPopulationType(ped);
    let type = GetEntityType(ped);
    console.log(`Ped Info [${ped}]`);
    console.log("================");
    console.log(`Position: [${c[0]},${c[1]},${c[2]}, ${c[3]}]`);
    console.log(`Rotation: [${r[0]}] Rotation Velocity: [${rV[0]}]`);
    console.log(`Velocity: [${v}]`);
    console.log(`Model: [${model}]`);
    console.log(`Population Type: [${popType}]`);
    console.log(`Entity Type: [${type}]`);
  },
  false
);

RegisterCommand(
  "tp",
  (source: number) => {
    let ped = GetPlayerPed(source);
    SetEntityCoords(
      ped,
      -75.5208740234375,
      -819.2966918945312,
      326.173583984375,
      false,
      false,
      false,
      true
    );
    console.log(`Teleported [${ped}]`);
  },
  false
);
