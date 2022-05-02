import Link from "next/link";
import styles from 'src/components/Header/Header.module.css'

const NAV_ITEMS = [
  {href:"/", label: "index"},
  {href:"/about", label: "About"},
]

export const Header = () => {
  return (
      <header className={styles.header}>
        {NAV_ITEMS.map((item) => {
          return(
            <Link key={item.href} href={item.href}>
            <a className={styles.anchor}>{item.label}</a>
          </Link>
          );
        })}
          {/* <Link href="/">
            <a className={styles.anchor}>Index</a>
          </Link>
          <Link href="/about">
            <a className={styles.anchor}>About</a>
          </Link> */}
      </header>
  )
}
