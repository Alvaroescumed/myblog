import Link from "next/link";
import styles from "./Navigation.module.css"

export default function Navigation(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} href="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} href="/about">Acerca de</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} href="/posts">Post</Link>
                </li>
            </ul>
        </nav>
    )
}