import { Navbar } from '@components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container" style={{ marginBottom: '5rem' }}>
        {children}
      </main>
    </>
  )
}
