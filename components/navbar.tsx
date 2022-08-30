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
              <B.NavDropdown title="Основы">
                <B.NavDropdown.Item href="/glitch">Glitch</B.NavDropdown.Item>
                <B.NavDropdown.Divider />
                <B.NavDropdown.Item href="/basics/1">1. Введение в HTML</B.NavDropdown.Item>
                <B.NavDropdown.Item href="/basics/2">2. Введение в CSS</B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="JavaScript">
                <B.NavDropdown.Item href="/js/cheatsheet">Шпаргалка</B.NavDropdown.Item>
                <B.NavDropdown.Item href="/codewars">Задания с Codewars</B.NavDropdown.Item>
                <B.NavDropdown.Divider />
                <B.NavDropdown.Item href="/js/let">
                  <code>let</code>
                </B.NavDropdown.Item>
                <B.NavDropdown.Item href="/js/if">
                  <code>if</code>
                </B.NavDropdown.Item>
                <B.NavDropdown.Item href="/js/for">
                  <code>for</code>
                </B.NavDropdown.Item>
                <B.NavDropdown.Item href="/js/arrays">Массивы</B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="p5">
                <B.NavDropdown.Item href="/p5/cheatsheet">Шпаргалка</B.NavDropdown.Item>
                <B.NavDropdown.Divider />
                <B.NavDropdown.Header>Примеры</B.NavDropdown.Header>
                <B.NavDropdown.Item href="/p5/examples/house">Домик</B.NavDropdown.Item>
                <B.NavDropdown.Item href="/p5/examples/snake">Змейка</B.NavDropdown.Item>
                <B.NavDropdown.Item href="/p5/examples/pieces">
                  Перетаскивающиеся шашки
                </B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="Wordle">
                <B.NavDropdown.Item href="/wordle/1">1. Первый урок</B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="React">
                <B.NavDropdown.Item href="/react/intro">Введение в React</B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="Next.js">
                <B.NavDropdown.Item href="/next/init">Как создать проект</B.NavDropdown.Item>
              </B.NavDropdown>
              <B.NavDropdown title="Интервью">
                <B.NavDropdown.Item href="/interview/omitted-html-css">
                  Что я не рассказал про HTML и CSS
                </B.NavDropdown.Item>
                <B.NavDropdown.Item href="/interview/omitted-js">
                  Что я не рассказал про JavaScript
                </B.NavDropdown.Item>
                <B.NavDropdown.Item href="/interview/omitted-react">
                  Что я не рассказал про React
                </B.NavDropdown.Item>
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
