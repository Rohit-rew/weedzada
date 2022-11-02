import styles from "../footer/footer.module.css"

export default function FooterC() {
  return (
    <div className={styles.footer}>

        <div className={styles["footer-container"]}>

            <div className={styles['flex-column']}>
                <img className={styles.logo} src='/logo4.png' width={"100px"}/>
                <p>All rights reserved</p>

            </div>

            <div className={styles['footer-heading']}>
                <h2>Policies</h2>

                <p>Item1</p>
                <p>Item2</p>
                <p>Item3</p>
            </div>
            <div className={styles['footer-heading']}>
                <h2>Blogs</h2>

                <p>Item1</p>
                <p>Item2</p>
                <p>Item3</p>
            </div>
            <div className={styles['footer-heading']}>
                <h2>Contact</h2>

                <p>Item1</p>
                <p>Item2</p>
                <p>Item2</p>
            </div>
            <div className={styles['footer-heading']}>
                <h2>About</h2>

                <p>Item1</p>
                <p>Item2</p>
                <p>Item2</p>
                <p>Item3</p>
            </div>
            <div className={styles['footer-heading']}>
                <h2>Contact</h2>

                <p>Item1</p>
                <p>Item2</p>
                <p>Item3</p>
                <p>Item3</p>
                <p>Item3</p>
            </div>

            <div className={styles['contact-info']}>
                <p>+91-98214-43242</p>
                <div className={styles["social-icon-container"] }>
                    <img src='/1.png'/>
                    <img src='/2.png'/>
                    <img src='/3.png'/>
                </div>
                <button>Follow us</button>
            </div>

        </div>
      
    </div>
  )
}
