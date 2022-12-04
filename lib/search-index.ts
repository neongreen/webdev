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
    title: 'Math.floor(x)',
    subtitle: 'Округление вниз',
    link: '/js/ref#floor',
  },
  {
    category: 'JS',
    title: 'Math.ceil(x)',
    subtitle: 'Округление вверх',
    link: '/js/ref#ceil',
  },
  {
    category: 'JS',
    title: 'Math.round(x)',
    subtitle: 'Округление к ближайшему целому',
    link: '/js/ref#round',
  },
  {
    category: 'JS',
    title: 'Math.trunc(x)',
    subtitle: 'Отрезает дробную часть',
    link: '/js/ref#trunc',
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

// NB: all are V8 errors
const jsErrors = [
  {
    category: 'Ошибки (JS)',
    title: 'SyntaxError: Identifier ... has already been declared',
    link: '/js/ref#identifier-has-already-been-declared',
  },
  {
    category: 'Ошибки (JS)',
    title: 'ReferenceError: math is not defined',
    link: '/js/ref#math-is-not-defined',
  },
]

export const searchIndex: { category: string; title: string; subtitle?: string; link: string }[] = [
  ...jsReference,
  ...jsErrors,
]
