// Taken from https://www.npmjs.com/package/react-highlight-regex and modified

import React, { useMemo } from 'react'

export type Props = {
  text: string
  match: RegExp
  mode?: 'all' | 'first' // default: 'all'
  highlightClassname?: string
}

export function HighlightMatches({ text, match, highlightClassname, mode }: Props) {
  if (match.flags.includes('g') && mode === 'first') {
    throw new Error('Cannot use mode="first" with a global regex')
  }

  const $match = useMemo(() => {
    if (match.flags.includes('g') || mode === 'first') return match
    return new RegExp(match.source, 'g' + match.flags)
  }, [mode, match])

  const matchedPieces = useMemo(() => {
    if (mode === 'first') {
      // if the regex has capturing groups, the array will have several elements even if there's only one match
      const matches = text.match($match)
      if (!matches) return []
      else return [matches[0]]
    } else {
      return Array.from(text.matchAll($match)).map(([text]) => text)
    }
  }, [mode, text, $match])

  const preservedPieces = useMemo(() => {
    if (!matchedPieces) return [text]
    if (mode === 'first') {
      const matchStart = text.search($match)
      const matchEnd = matchStart + (matchedPieces[0]?.length || 0)
      return [text.slice(0, matchStart), text.slice(matchEnd)]
    } else {
      return text.split($match)
    }
  }, [mode, text, matchedPieces, $match])
  const content = []

  console.log({ matchedPieces, preservedPieces })

  let i = 0
  while (matchedPieces.length || preservedPieces.length) {
    if (preservedPieces.length) {
      content.push(<span key={i++}>{preservedPieces.shift()}</span>)
    }
    if (matchedPieces.length) {
      content.push(
        <mark className={highlightClassname} key={i++}>
          {matchedPieces.shift()}
        </mark>
      )
    }
  }

  return <>{content}</>
}
