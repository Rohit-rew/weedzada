import styles from "./collectiongrid.module.css"

export default function CollectionGridC() {


  return (
    <div  className={styles["grid-container"]}>

      <div className={styles.item}>item1</div>
      <div className={styles.item}>item2</div>
      <div className={styles.item}>item3</div>
      <div className={styles.item}>item4</div>
      <div className={styles.item}>item5</div>
      <div className={styles.item}>item6</div>
      
    </div>
  )
}
