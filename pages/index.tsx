import { useState } from "react";
import { Door } from "../components/Door";
import { Gift } from "../components/Gift";
import DoorModel from "../model/door";
import { createDoors, updateDoors } from "../functions/doors";

export default function Home() {
  
  return (
    <div style={{display: "flex"}}>
      <h1>Início</h1>
    </div>
  )
}
