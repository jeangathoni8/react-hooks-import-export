import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import RockyMountain from "./parks/RockyMountain";


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

function ColoradoStateParks() {
  MesaVerde(); // => "Mesa Verde National Park"

  return <h1>Colorado State Parks!</h1>;
}

function ColoradoStateParks() {
  RockyMountain() // => "Rocky Mountain National Park"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;