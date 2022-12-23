import { Key, ProList } from '@ant-design/pro-list'
import { codeforcesTasks } from '@lib/codeforces'
import { Space, Tag, Collapse } from 'antd'
import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import styles from './codeforces-tasks.module.scss'

export function CodeforcesTasks() {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([])
  const toggle = (key: Key) => {
    if (expandedRowKeys.includes(key)) {
      setExpandedRowKeys(expandedRowKeys.filter((k) => k !== key))
    } else {
      setExpandedRowKeys([...expandedRowKeys, key])
    }
  }

  return (
    <ProList
      rowKey="code"
      expandable={{
        expandedRowKeys,
        onExpandedRowsChange: setExpandedRowKeys,
      }}
      dataSource={codeforcesTasks}
      metas={{
        title: {
          render: (_, task) => {
            return (
              <Space size={0}>
                <span onClick={() => toggle(task.code)}>
                  <b>
                    {task.code} — {task.title}
                  </b>
                </span>
              </Space>
            )
          },
        },
        subTitle: {
          render: (_, task) => {
            return (
              <Space size="large">
                <Space size={0}>
                  {task.tags.map((tag, i) => (
                    <Tag color="red" key={i}>
                      {tag}
                    </Tag>
                  ))}
                </Space>
                <a href={task.link} target="_blank" rel="noreferrer">
                  <BiLinkExternal /> Codeforces
                </a>
              </Space>
            )
          },
        },
        description: {
          render: (_, task) => {
            return (
              <div className={styles.statement}>
                {task.statement}
                {task.hints && (
                  <Collapse className={styles.hints}>
                    {task.hints.map((hint, i) => (
                      <Collapse.Panel header={`Подсказка ${i + 1}`} key={i}>
                        {hint}
                      </Collapse.Panel>
                    ))}
                  </Collapse>
                )}
              </div>
            )
          },
        },
      }}
    />
  )
}
