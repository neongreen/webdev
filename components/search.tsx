import Fuse from 'fuse.js'
import React from 'react'
import { Select, RefSelectProps } from 'antd'
import 'antd/dist/antd.css'
import styles from './search.module.scss'
import { searchIndex } from '@lib/search-index'
import { useRouter } from 'next/router'

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ['title'],
}

const fuse = new Fuse(searchIndex, fuseOptions)

// We use antd because bootstrap doesn't have a nice search input
export function Search() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const selectRef = React.useRef<RefSelectProps>(null)
  const router = useRouter()

  const searchResults = fuse.search(searchQuery)

  return (
    <>
      <Select
        ref={selectRef}
        showSearch
        className={styles.select}
        searchValue={searchQuery}
        value={searchQuery || null}
        placeholder="Поиск"
        autoClearSearchValue
        transitionName="" // disable animation
        filterOption={false}
        notFoundContent={searchQuery.trim() === '' ? null : 'Ничего не найдено'}
        onSearch={(input) => setSearchQuery(input)}
        onSelect={(link: string) => {
          setSearchQuery('')
          selectRef.current!.blur()
          router.push(link)
        }}
      >
        {searchResults.map((result) => (
          <Select.Option key={result.item.link} value={result.item.link}>
            <div className={styles.selectOption}>
              <div className={styles.category}>{result.item.category}</div>
              <div className={styles.title}>{result.item.title}</div>
            </div>
          </Select.Option>
        ))}
      </Select>
    </>
  )
}