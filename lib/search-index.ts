const jsReference = [
  {
    category: 'JS',
    title: 'Оператор + (сложение или конкатенация)',
    seo: 'плюс',
    link: '/js/ref#plus',
  },
  {
    category: 'JS',
    title: 'Оператор - (вычитание)',
    seo: 'минус',
    link: '/js/ref#minus',
  },
  {
    category: 'JS',
    title: 'Оператор * (умножение)',
    seo: 'звездочка',
    link: '/js/ref#multiply',
  },
  {
    category: 'JS',
    title: 'Оператор / (деление)',
    seo: 'слеш слэш',
    link: '/js/ref#divide',
  },
  {
    category: 'JS',
    title: 'Оператор = (присваивание)',
    subtitle: 'Изменяет переменную',
    seo: 'равно',
    link: '/js/ref#assign',
  },
  {
    category: 'JS',
    title: 'Операторы ++ и -- (инкремент и декремент)',
    subtitle: 'Увеличивают и уменьшают на 1',
    seo: 'плюс плюс, минус минус',
    link: '/js/ref#inc-dec',
  },
  {
    category: 'JS',
    title: 'Операторы +=, -=, *=, /=',
    link: '/js/ref#autoassign',
  },
  {
    category: 'JS',
    title: 'Оператор %',
    subtitle: 'Остаток от деления',
    link: '/js/ref#modulo',
  },
  {
    category: 'JS',
    title: 'Операторы === и !==',
    subtitle: 'Равно и не равно',
    seo: 'сравнение',
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
    category: 'JS: Math',
    title: 'Math.floor',
    subtitle: 'Округление вниз',
    link: '/js/ref#floor',
  },
  {
    category: 'JS: Math',
    title: 'Math.ceil',
    subtitle: 'Округление вверх',
    link: '/js/ref#ceil',
  },
  {
    category: 'JS: Math',
    title: 'Math.round',
    subtitle: 'Округление к ближайшему целому',
    link: '/js/ref#round',
  },
  {
    category: 'JS: Math',
    title: 'Math.trunc',
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
    seo: 'если',
    link: '/js/ref#if',
  },
  {
    category: 'JS',
    title: 'if ... else',
    seo: 'если иначе',
    link: '/js/ref#if-else',
  },
  {
    category: 'JS',
    title: 'Цикл for',
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
  // external
  {
    category: 'JS',
    title: 'break',
    subtitle: 'Прерывает цикл',
    link: 'https://itproger.com/spravka/javascript/break',
  },
  {
    category: 'JS',
    title: 'continue',
    subtitle: 'Переходит к следующей итерации цикла',
    link: 'https://itproger.com/spravka/javascript/continue',
  },
  {
    category: 'JS',
    title: 'alert',
    subtitle: 'Выдает окно с сообщением',
    link: 'https://itproger.com/spravka/javascript/alert',
  },
  {
    category: 'JS',
    title: 'prompt',
    subtitle: 'Выдает окно с полем ввода',
    link: 'https://itproger.com/spravka/javascript/prompt',
  },
  {
    category: 'JS',
    title: 'setInterval',
    subtitle: 'Делает что-то каждые N миллисекунд',
    link: 'https://itproger.com/spravka/javascript/set-interval',
  },
  {
    category: 'JS',
    title: 'delete',
    subtitle: 'Удаляет свойство объекта',
    link: 'https://itproger.com/spravka/javascript/delete',
  },
  {
    category: 'JS',
    title: 'Цикл while',
    subtitle: 'Самый простой вариант цикла',
    seo: 'пока',
    link: 'https://itproger.com/spravka/javascript/while',
  },
  {
    category: 'JS',
    title: 'Цикл do ... while',
    subtitle: 'Цикл с проверкой в конце',
    seo: 'пока',
    link: 'https://itproger.com/spravka/javascript/do-while',
  },
  {
    category: 'JS',
    title: 'switch',
    subtitle: 'Как if, но для нескольких вариантов',
    link: 'https://learn.javascript.ru/switch',
  },
  {
    category: 'JS',
    title: 'var',
    subtitle: 'Устаревший вариант let',
    link: 'https://learn.javascript.ru/var',
  },
  {
    category: 'JS',
    title: 'Условный (тернарный) оператор ?',
    subtitle: 'Как if, но работает как выражение',
    link: 'https://learn.javascript.ru/ifelse#uslovnyy-operator',
  },
  {
    category: 'JS',
    title: 'Анонимные функции () => ...',
    link: 'https://learn.javascript.ru/arrow-functions-basics',
  },
  {
    category: 'JS: Object',
    title: 'Object.keys, Object.values, Object.entries',
    subtitle: 'Перебор свойств объекта',
    link: 'https://learn.javascript.ru/keys-values-entries',
  },
  {
    category: 'JS: JSON',
    title: 'JSON.stringify',
    link: 'https://learn.javascript.ru/json',
  },
  {
    category: 'JS: JSON',
    title: 'JSON.parse',
    link: 'https://learn.javascript.ru/json#json-parse',
  },
  {
    category: 'JS',
    title: 'typeof',
    subtitle: 'Возвращает тип значения',
    link: 'https://learn.javascript.ru/types#type-typeof',
  },
  {
    category: 'JS',
    title: 'BigInt',
    subtitle: 'Работа с большими числами',
    link: 'https://learn.javascript.ru/bigint',
  },
  {
    category: 'JS',
    title: '\\n и эскейпинг',
    seo: 'строка перенос',
    link: 'https://learn.javascript.ru/string#spetssimvoly',
  },
  {
    category: 'JS',
    title: 'Оператор ||',
    subtitle: 'Булево "или" — хотя бы одно должно быть true',
    seo: 'boolean булеан',
    link: 'https://learn.javascript.ru/logical-operators#ili',
  },
  {
    category: 'JS',
    title: 'Оператор &&',
    subtitle: 'Булево "и" — все должны быть true',
    seo: 'boolean булеан',
    link: 'https://learn.javascript.ru/logical-operators#i',
  },
  {
    category: 'JS',
    title: 'Оператор !',
    subtitle: 'Булево "не", инвертирует значение',
    seo: 'boolean булеан',
    link: 'https://learn.javascript.ru/logical-operators#ne',
  },
  {
    category: 'JS: Date',
    title: 'new Date()',
    subtitle: 'Создает дату и время или возвращает текущие',
    link: 'https://learn.javascript.ru/date#sozdanie',
  },
  {
    category: 'JS',
    title: 'parseInt и parseFloat',
    subtitle: 'Перевод строки в число',
    link: 'https://learn.javascript.ru/number#parseint-i-parsefloat',
  },
  {
    category: 'JS: Number',
    title: '.toString',
    subtitle: 'Перевод числа в строку',
    link: 'https://learn.javascript.ru/number#parseint-i-parsefloat',
  },
  {
    category: 'JS: Number',
    title: '.toFixed',
    subtitle: 'Перевод числа в строку с округлением до N знаков',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed',
  },
  {
    category: 'JS',
    title: 'isNaN',
    link: 'https://learn.javascript.ru/number#proverka-isfinite-i-isnan',
  },
  {
    category: 'JS: вопросы',
    title: 'Что такое "e" в числах?',
    link: 'https://learn.javascript.ru/number#sposoby-zapisi-chisla',
  },
  {
    category: 'JS: String',
    title: '.toLowerCase и .toUpperCase',
    subtitle: 'Делает буквы маленькими / большими',
    seo: 'строка регистр',
    link: 'https://learn.javascript.ru/string#izmenenie-registra',
  },
  {
    category: 'JS: вопросы',
    title: 'В чем разница между одинарными (\') и двойными (") кавычками?',
    subtitle: 'Ни в чем',
    seo: 'строка',
    link: 'https://learn.javascript.ru/string#kavychki',
  },
  {
    category: 'JS: String',
    title: '.length',
    subtitle: 'Длина строки',
    link: 'https://learn.javascript.ru/string#dlina-stroki',
  },
  {
    category: 'JS',
    title: 'try ... catch',
    subtitle: 'Ловит ошибки',
    link: 'https://learn.javascript.ru/try-catch',
  },
  {
    category: 'JS: String',
    title: '.slice',
    subtitle: 'Возвращает часть строки',
    link: 'https://learn.javascript.ru/string#poluchenie-podstroki',
  },
  {
    category: 'JS: Array',
    title: 'Array.isArray',
    subtitle: 'Определяет, является ли значение массивом',
    link: 'https://learn.javascript.ru/array-methods#array-isarray',
  },
  {
    category: 'JS: Array',
    title: '.map',
    subtitle: 'Применяет функцию к каждому элементу массива',
    link: 'https://learn.javascript.ru/array-methods#map',
  },
  {
    category: 'JS: Array',
    title: '.sort',
    subtitle: 'Сортирует массив',
    link: 'https://learn.javascript.ru/array-methods#sort-fn',
  },
  {
    category: 'JS: Array',
    title: '.reverse',
    subtitle: 'Делает массив в обратном порядке',
    link: 'https://learn.javascript.ru/array-methods#reverse',
  },
  {
    category: 'JS: String',
    title: '.split',
    subtitle: 'Разбивает строку (например, по пробелу или запятой)',
    link: 'https://learn.javascript.ru/array-methods#split-i-join',
  },
  {
    category: 'JS: Array',
    title: '.join',
    subtitle: 'Склеивает массив в строку',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
  },
  {
    category: 'JS: Array',
    title: '.some',
    subtitle: 'Есть ли в массиве элемент, удовлетворяющий условию?',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
  },
  {
    category: 'JS: Array',
    title: '.every',
    subtitle: 'Правда ли, что в массиве все элементы удовлетворяют условию?',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
  },
  {
    category: 'JS: Array',
    title: '.push',
    subtitle: 'Добавляет элемент в конец массива',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  {
    category: 'JS: Array',
    title: '.pop',
    subtitle: 'Удаляет последний элемент массива',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },
  {
    category: 'JS: Array',
    title: '.unshift',
    subtitle: 'Добавляет элемент в начало массива',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
  },
  {
    category: 'JS: Array',
    title: '.shift',
    subtitle: 'Удаляет первый элемент массива',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
  },
  {
    category: 'JS: вопросы',
    title: 'Когда надо ставить точку с запятой (;)?',
    subtitle: 'Довольно редко',
    link: 'https://learn.javascript.ru/structure#semicolon',
  },
  {
    category: 'JS',
    title: '// Однострочные комментарии',
    subtitle: 'Продолжаются до конца строки',
    link: 'https://learn.javascript.ru/structure#kommentarii',
  },
  {
    category: 'JS',
    title: '/* Многострочные комментарии */',
    subtitle: 'Могут идти несколько строк',
    link: 'https://learn.javascript.ru/structure#kommentarii',
  },
  {
    category: 'JS: вопросы',
    title: 'Что будет, если написать & вместо && или | вместо || ?',
    subtitle: 'Будет вообще не то, что ожидалось',
    link: 'https://learn.javascript.ru/bitwise-operators',
  },
  {
    category: 'JS',
    title: 'export и import',
    link: 'https://learn.javascript.ru/modules-intro#chto-takoe-modul',
  },
  {
    category: 'JS',
    title: 'const',
    subtitle: 'Объявляет константу',
    link: 'https://learn.javascript.ru/variables#konstanty',
  },
]

const jsArrays = [
  {
    category: 'JS: массивы',
    title: 'Справка по массивам',
    seo: 'array []',
    link: '/js/arrays',
  },
  {
    category: 'JS: массивы',
    title: 'Создание массивов',
    subtitle: 'let arr = [1, 2, 3]',
    seo: 'array []',
    link: '/js/arrays#construction',
  },
  {
    category: 'JS: массивы',
    title: 'Доступ к элементам массива',
    subtitle: 'arr[i]',
    seo: 'array []',
    link: '/js/arrays#access',
  },
]

// NB: all are V8 errors
const jsErrors = [
  {
    category: 'Ошибки (JS)',
    title: 'SyntaxError: Identifier ... has already been declared',
    subtitle: 'Нельзя объявлять переменную дважды',
    link: '/js/ref#identifier-has-already-been-declared',
  },
  {
    category: 'Ошибки (JS)',
    title: 'ReferenceError: math is not defined',
    subtitle: 'Math должно быть с большой буквы',
    link: '/js/ref#math-is-not-defined',
  },
  {
    category: 'Ошибки (JS)',
    title: 'SyntaxError: Invalid left-hand side in assignment',
    link: '/js/ref#invalid-left-hand-side-in-assignment',
  },
]

const htmlReference = [
  {
    category: 'HTML',
    title: '<a>',
    subtitle: 'Ссылка',
    link: 'https://itproger.com/spravka/html5/a',
  },
  {
    category: 'HTML',
    title: '<b>',
    subtitle: 'Жирный текст',
    link: 'https://itproger.com/spravka/html5/b',
  },
  {
    category: 'HTML',
    title: '<i>',
    subtitle: 'Курсивный текст',
    link: 'https://itproger.com/spravka/html5/i',
  },
  {
    category: 'HTML',
    title: '<body>',
    subtitle: 'Тело страницы',
    link: 'https://itproger.com/spravka/html5/body',
  },
  {
    category: 'HTML',
    title: '<code>',
    subtitle: 'Кусочек кода',
    link: 'https://itproger.com/spravka/html5/code',
  },
  {
    category: 'HTML',
    title: '<p>',
    subtitle: 'Абзац',
    link: 'https://itproger.com/spravka/html5/p',
  },
  {
    category: 'HTML',
    title: '<div>',
    subtitle: 'Блочный элемент',
    link: 'https://itproger.com/spravka/html5/div',
  },
  {
    category: 'HTML',
    title: '<span>',
    subtitle: 'Строчный элемент',
    link: 'https://itproger.com/spravka/html5/span',
  },
  {
    category: 'HTML',
    title: '<h1>',
    subtitle: 'Заголовок',
    link: 'https://itproger.com/spravka/html5/h1',
  },
  {
    category: 'HTML',
    title: '<h2>',
    subtitle: 'Подзаголовок',
    link: 'https://itproger.com/spravka/html5/h2',
  },
  {
    category: 'HTML',
    title: '<ul>',
    subtitle: 'Ненумерованный список',
    link: 'https://itproger.com/spravka/html5/ul',
  },
  {
    category: 'HTML',
    title: '<ol>',
    subtitle: 'Нумерованный список',
    link: 'https://itproger.com/spravka/html5/ol',
  },
  {
    category: 'HTML',
    title: '<li>',
    subtitle: 'Элемент списка',
    link: 'https://itproger.com/spravka/html5/li',
  },
  {
    category: 'HTML',
    title: '<meta>',
    link: 'https://itproger.com/spravka/html5/meta',
  },
  {
    category: 'HTML',
    title: '<title>',
    link: 'https://itproger.com/spravka/html5/title',
  },
  {
    category: 'HTML',
    title: '<img>',
    link: 'https://itproger.com/spravka/html5/img',
  },
]

const jsxReference = [
  {
    category: 'JSX: вопросы',
    title: 'Что такое /> в конце тега?',
    subtitle: 'Это самозакрывающийся тег',
    link: '/react/jsx#self-closing-tags',
  },
  {
    category: 'JSX',
    title: '<...> — создание элементов',
    link: '/react/jsx#elements',
  },
  {
    category: 'JSX',
    title: '<> ... </> — фрагменты',
    link: '/react/jsx#fragments',
  },
]

const jsxErrors = [
  {
    category: 'Ошибки (React/JSX)',
    title: 'JSX fragment has no corresponding closing tag',
    subtitle: 'Забыли закрыть тег',
    link: '/react/jsx#jsx-fragment-has-no-corresponding-closing-tag',
  },
  {
    category: 'Ошибки (React/JSX)',
    title: 'JSX expressions must have one parent element',
    subtitle: 'Надо обернуть элементы в <> </>',
    link: '/react/jsx#jsx-expressions-must-have-one-parent-element',
  },
]

type SearchEntry = {
  category: string
  title: string
  subtitle?: string
  seo?: string
  link: string
}

export const searchIndex: SearchEntry[] = [
  ...jsReference,
  ...jsArrays,
  ...jsErrors,
  ...htmlReference,
  ...jsxReference,
  ...jsxErrors,
]
