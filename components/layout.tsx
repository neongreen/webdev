import { Navbar } from '@components/navbar'
import { BsGithub, BsTelegram } from 'react-icons/bs'
import styles from './layout.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={`container ${styles.main}`}>{children}</main>
      <footer className={`${styles.footer} bg-light`}>
        <a href="https://github.com/neongreen/webdev" className="d-flex align-items-center">
          <BsGithub />
          <span className="ms-1">GitHub</span>
        </a>
        <a href="https://t.me/lightgreen" className="d-flex align-items-center">
          <BsTelegram />
          <span className="ms-1">Telegram</span>
        </a>
      </footer>
    </>
  )
}
