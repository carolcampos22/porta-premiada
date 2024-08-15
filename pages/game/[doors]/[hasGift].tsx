import { useEffect, useState } from "react"
import { Door } from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import styles from "../../../styles/Game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function game() {
    const [doors, setDoors] = useState([])

    const router = useRouter()

    useEffect(() => {
        const doorsQuantity = +router.query.doors
        const doorWithGift = +router.query.hasGift
        setDoors(createDoors(doorsQuantity, doorWithGift))
    }, [router?.query])

    const renderDoors = () => {
        return doors.map((door => {
            return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        }))
    }

    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {renderDoors()}
            </div>
            <div className={styles.buttons}>
                <Link href="/"><button>Reiniciar Jogo</button></Link>
            </div>
        </div>
    )
}