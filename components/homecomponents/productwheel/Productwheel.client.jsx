import styles from "./productwheel.module.css"
import React from "react"
import ProductCard from "../../productcard/ProductCard.client"
import { motion } from "framer-motion"

export default function ProductwheelC() {

    const [card , setCard] = React.useState()

    console.log(card)

    React.useEffect(()=>{

        const array = new Array(36).fill(0)
        setCard( array.map((item , i)=>{
            return (
                <motion.div 
                animate={{rotate : i*10}}
                transition={{delay : i/20 , type : "spring" , damping : 3}}
                initial={{rotate : 0}}
                style={{rotate : `${i*10}deg`}} className={styles.item}>
                    {/* <ProductCard /> */}
                    </motion.div>
            )
        }))

    },[])

  return (
    <div className={styles.container}>
        <div className={styles.subdiv}>
            {card}

        </div>
    </div>
  )
}
