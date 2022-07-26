import * as B from 'react-bootstrap'
import { Codewars } from '@lib/codewars'
import { AnnStandalone } from './ann'
import ReactMarkdown from 'react-markdown'

export function CodewarsTable(props: { tasks: Codewars[] }) {
  return (
    <B.Table bordered hover>
      <thead>
        <tr>
          <th>Код</th>
          <th>Задание</th>
          <th>Темы</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task) => (
          <tr key={task.id}>
            <td>
              <code>{task.id}</code>
            </td>
            <td>
              <AnnStandalone text={task.nameRu} align="left" />
              <a href={task.link}>{task.name}</a>
            </td>
            <td>
              {/* eslint-disable-next-line react/no-children-prop */}
              <ReactMarkdown children={task.topics} />
            </td>
          </tr>
        ))}
      </tbody>
    </B.Table>
  )
}
