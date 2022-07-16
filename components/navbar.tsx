import * as B from 'react-bootstrap'

export function Navbar() {
  return (
    <div className="navbar-wrapper">
      <B.Navbar bg="light" expand="lg">
        <B.Container>
          <B.Navbar.Brand href="/">Веб-разработка</B.Navbar.Brand>
          <B.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <B.Navbar.Collapse id="basic-navbar-nav">
            {/* No idea how to use Next.js <Link> here */}
            <B.Nav className="me-auto">
              <B.Nav.Link href="/glitch">Glitch</B.Nav.Link>
              <B.NavDropdown title="Основы">
                <B.NavDropdown.Item href="/basics/1">1. Введение в HTML</B.NavDropdown.Item>
                <B.NavDropdown.Item href="/basics/2">2. Введение в CSS</B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="JavaScript">
                <B.NavDropdown.Item href="/js/if">
                  <code>if</code>
                </B.NavDropdown.Item>
              </B.NavDropdown>
              <B.Nav.Link href="/codewars">Codewars</B.Nav.Link>
              <B.NavDropdown title="Wordle">
                <B.NavDropdown.Item href="/wordle/1">1. Первый урок</B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="Next.js">
                <B.NavDropdown.Item href="/next/init">Как создать проект</B.NavDropdown.Item>
              </B.NavDropdown>
            </B.Nav>
          </B.Navbar.Collapse>
        </B.Container>
      </B.Navbar>
      <style jsx>{`
        .navbar-wrapper {
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  )
}
