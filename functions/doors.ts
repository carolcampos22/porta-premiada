import DoorModel from "../model/door";

export function createDoors(quantity: number, selected: number): DoorModel[] {
    return Array.from({length: quantity}, (_, i) => {
        const number = i + 1
        const hasGift = number === selected
        return new DoorModel(number, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const isEqualToModified = currentDoor.number === modifiedDoor.number
        
        if(isEqualToModified) {
            return modifiedDoor
        } else {
            return modifiedDoor.open ? currentDoor : currentDoor.deselect()
        }
    })
}