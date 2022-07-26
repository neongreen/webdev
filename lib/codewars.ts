export type Codewars = {
  id: string
  name: string
  nameRu: string
  link: string
  topics: string
}

export const easyCodewarsTasks: Codewars[] = [
  {
    id: 'jenny',
    name: "Jenny's secret message",
    nameRu: 'Тайное послание Дженни',
    link: 'https://www.codewars.com/kata/55225023e1be1ec8bc000390',
    topics: 'Как работает `return`',
  },
  {
    id: 'quarter',
    name: 'Quarter of the year',
    nameRu: 'Квартал года',
    link: 'https://www.codewars.com/kata/5ce9c1000bab0b001134f5af',
    topics: '`if`, сравнение чисел',
  },
  {
    id: 'century',
    name: 'Century from year',
    nameRu: 'Век из года',
    link: 'https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097',
    topics: '`if`, сравнение чисел, деление с остатком',
  },
  {
    id: 'sameCase',
    name: 'Check same case',
    nameRu: 'Одинаковый ли регистр',
    link: 'https://www.codewars.com/kata/5dd462a573ee6d0014ce715b',
    topics: '`if`, `&&`, `!`, сравнение букв',
  },
  {
    id: 'sumPositive',
    name: 'Sum of positive',
    nameRu: 'Сумма положительных',
    link: 'https://www.codewars.com/kata/5715eaedb436cf5606000381',
    topics: '`for`, `if`, переменные, сравнение чисел',
  },
  {
    id: 'smallest',
    name: 'Find the smallest integer',
    nameRu: 'Найди наименьшее число',
    link: 'https://www.codewars.com/kata/55a2d7ebe362935a210000b2',
    topics: '`for`, `if`, переменные, сравнение чисел',
  },
  {
    id: 'abbrevName',
    name: 'Abbreviate a two word name',
    nameRu: 'Инициалы имени',
    link: 'https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3',
    topics: 'Строки, сложение строк, `.split`',
  },
  {
    id: 'exclam',
    name: 'Remove exclamation marks',
    nameRu: 'Убрать восклицательные знаки',
    link: 'https://www.codewars.com/kata/57a0885cbb9944e24c00008e',
    topics: '`for`, `if`, строки, сложение строк, переменные',
  },
]

export const mediumCodewarsTasks: Codewars[] = [
  {
    id: 'drawStairs',
    name: 'Draw stairs',
    nameRu: 'Нарисуй лесенку',
    link: 'https://www.codewars.com/kata/5b4e779c578c6a898e0005c5',
    topics: '`for`, `\\n`, переменные, сложение строк',
  },
  {
    id: 'isPalindrome',
    name: 'Is it a palindrome?',
    nameRu: 'Это палиндром?',
    link: 'https://www.codewars.com/kata/57a1fd2ce298a731b20006a4',
    topics: 'Строки, `for`',
  },
]
