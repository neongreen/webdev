import createPersistedState from 'use-persisted-state'

export function useStorage<T>(context: string, key: string) {
  return createPersistedState<T>(`webdev/${context}/${key}`)
}
