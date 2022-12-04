import { Navbar } from '@components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx>{`
        main {
          margin-bottom: 5rem;
        }
      `}</style>
      <Navbar />
      <main className="container">{children}</main>
    </>
  )
}
