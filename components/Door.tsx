import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export const Door = (props: DoorProps) => {
    const door = props.value
    const selected = door.selected && !door.open ? styles.selected : ''

    const toggleSelection = e => props.onChange(door.toggleSelection())
    const openDoor = e => {
        e.stopPropagation()
        props.onChange(door.openDoor())
    }

    const renderDoor = () => {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.doorknob} onClick={openDoor}></div>
            </div>

        )
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.structure} ${selected}`}>
                {door.open ? false : renderDoor()}
            </div>
            <div className={styles.floor}></div>

        </div >
    )
}