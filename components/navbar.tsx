import * as B from 'react-bootstrap'
import { Search } from '@components/search'

function DropdownBasics() {
  return (
    <B.NavDropdown title={<s>Основы</s>}>
      <B.NavDropdown.Item href="/glitch">Glitch</B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Item href="/basics/1">1. Введение в HTML</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/basics/2">2. Введение в CSS</B.NavDropdown.Item>
    </B.NavDropdown>
  )
}

function DropdownJavaScript() {
  return (
    <B.NavDropdown title="JavaScript">
      <B.NavDropdown.Header>Справка</B.NavDropdown.Header>
      <B.NavDropdown.Item href="/js/ref">Основы</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/js/arrays">🚧 Массивы</B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Header>Другие сайты</B.NavDropdown.Header>
      <B.NavDropdown.Item href="/codewars">Codewars</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/js/codeforces">Codeforces</B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Header>Задания</B.NavDropdown.Header>
      <B.NavDropdown.Item href="/js/tasks/loops">Циклы</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/js/tasks/bools">Булевы операции</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/js/tasks/functions">Функции</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/js/tasks/regexes">Регулярные выражения</B.NavDropdown.Item>
    </B.NavDropdown>
  )
}

function DropdownP5() {
  return (
    <B.NavDropdown title="p5">
      <B.NavDropdown.Item href="/p5/cheatsheet">Шпаргалка</B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Header>Примеры</B.NavDropdown.Header>
      <B.NavDropdown.Item href="/p5/examples/house">Домик</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/p5/examples/snake">Змейка</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/p5/examples/pieces">Перетаскивающиеся шашки</B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Item href="/p5/examples/art">Генеративное искусство</B.NavDropdown.Item>
    </B.NavDropdown>
  )
}

function DropdownReact() {
  return (
    <B.NavDropdown title="React">
      <B.NavDropdown.Header>Справка</B.NavDropdown.Header>
      <B.NavDropdown.Item href="/react/ref">🚧 Основы</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/react/jsx">🚧 JSX</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/react/cheatsheet">
        <s>Шпаргалка</s>
      </B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Item href="/react/tasks/state">
        Задания на <code>useState</code>
      </B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Item href="/react/telegram-embed">
        Как вставить пост из телеграм-канала на сайт
      </B.NavDropdown.Item>
      <B.NavDropdown.Item href="/react/p5-over">Как добавить p5 поверх страницы</B.NavDropdown.Item>
    </B.NavDropdown>
  )
}

function DropdownAntDesign() {
  return (
    <B.NavDropdown title="Ant Design">
      <B.NavDropdown.Item href="/antd/intro">Как подключить Ant Design</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/antd/cheatsheet">Шпаргалка</B.NavDropdown.Item>
      <B.NavDropdown.Divider />
      <B.NavDropdown.Header>Примеры</B.NavDropdown.Header>
      <B.NavDropdown.Item href="/antd/form-use-watch">
        <code>Form.useWatch</code>
      </B.NavDropdown.Item>
    </B.NavDropdown>
  )
}

function DropdownNextjs() {
  return (
    <B.NavDropdown title="Next.js">
      <B.NavDropdown.Item href="/next/init">Как создать проект</B.NavDropdown.Item>
      <B.NavDropdown.Item href="/next/vercel">
        Как выложить сайт в интернет (на Vercel)
      </B.NavDropdown.Item>
    </B.NavDropdown>
  )
}

function DropdownInterview() {
  return (
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
  )
}

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
              <DropdownBasics />
              <DropdownJavaScript />
              <DropdownP5 />
              <DropdownReact />
              <DropdownAntDesign />
              <DropdownNextjs />
              <DropdownInterview />
            </B.Nav>
            <Search />
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
