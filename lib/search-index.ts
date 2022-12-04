const jsReference = [
  {
    category: 'JS',
    title: 'Операторы ++ и --',
    subtitle: 'Увеличивают и уменьшают на 1',
    link: '/js/ref#inc-dec',
  },
  {
    category: 'JS',
    title: 'Операторы +=, -=, *=, /=',
    link: '/js/ref#autoassign',
  },
  {
    category: 'JS',
    title: 'Операторы === и !==',
    subtitle: 'Равно и не равно',
    link: '/js/ref#eq-neq',
  },
  {
    category: 'JS',
    title: 'Разница между === и ==, !== и !=',
    subtitle: 'Одни проверяют типы, а вторые нет',
    link: '/js/ref#eqeqeq',
  },
  {
    category: 'JS',
    title: 'Операторы >, <, >=, <=',
    subtitle: 'Больше / меньше',
    link: '/js/ref#less-more',
  },
  {
    category: 'JS',
    title: 'let',
    subtitle: 'Объявляет переменную',
    link: '/js/ref#let',
  },
  {
    category: 'JS',
    title: 'if',
    subtitle: 'Проверяет условие',
    link: '/js/ref#if',
  },
  {
    category: 'JS',
    title: 'if ... else',
    link: '/js/ref#if-else',
  },
  {
    category: 'JS',
    title: 'for',
    subtitle: 'Цикл со счётчиком',
    link: '/js/ref#for',
  },
  {
    category: 'JS',
    title: 'function',
    subtitle: 'Объявляет функцию',
    link: '/js/ref#function',
  },
  {
    category: 'JS',
    title: 'return',
    subtitle: 'Возвращает значение из функции',
    link: '/js/ref#return',
  },
]

const jsErrors = [
  {
    category: 'Ошибки (JS)',
    title: 'Cannot declare a let variable twice',
    link: '/js/ref#cannot-declare-a-let-variable-twice',
  },
]

export const searchIndex: { category: string; title: string; subtitle?: string; link: string }[] = [
  ...jsReference,
  ...jsErrors,
]
