import { useState } from "react";
import { Door } from "../components/Door";
import { Gift } from "../components/Gift";
import DoorModel from "../model/door";
import { createDoors } from "../functions/doors";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(6,4))

  const renderDoors = () => {
    return doors.map((door => {
      return <Door key={door.number} value={door} onChange={console.log} />
    }))
  }

  return (
    <div style={{display: "flex"}}>
      {renderDoors()}
    </div>
  )
}
