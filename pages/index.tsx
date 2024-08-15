import Link from "next/link";
import Card from "../components/Card";
import styles from "../styles/Form.module.css"
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [doorsQuantity, setDoorsQuantity] = useState(3)
  const [doorsWithGift, setDoorsWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Quantidade de Portas?" 
            value={doorsQuantity}
            onChange={newQuantity => setDoorsQuantity(newQuantity)}
          />
        </Card>
      </div>
      <div>
        <Card>
        <NumberInput text="Porta com presente?" 
            value={doorsWithGift}
            onChange={newDoorsWithGift => setDoorsWithGift(newDoorsWithGift)}
          />
        </Card>
        <Card bgcolor="blueviolet">
          <Link href={`/game/${doorsQuantity}/${doorsWithGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
