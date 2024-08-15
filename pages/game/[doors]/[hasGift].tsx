import { useEffect, useState } from "react"
import { Door } from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import styles from "../../../styles/Game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function game() {
    const [valid, setValid] = useState(false)
    const [doors, setDoors] = useState([])

    const router = useRouter()

    useEffect(() => {
        const doorsQuantity = +router.query.doors
        const doorWithGift = +router.query.hasGift
        const quantityOfValidDoors = doorsQuantity >= 3 && doorsQuantity<= 100
        const validGiftDoor = doorWithGift >= 1 && doorWithGift <= doorsQuantity

        setValid(quantityOfValidDoors && validGiftDoor)
    }, [doors])

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
                {valid ? renderDoors() : <h1>Valores inválidos!</h1>}
            </div>
            <div className={styles.buttons}>
                <Link href="/"><button>Reiniciar Jogo</button></Link>
            </div>
        </div>
    )
}