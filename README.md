# twnd

[![npm](https://img.shields.io/npm/v/twnd?color=success)](https://www.npmjs.com/package/twnd) [![npm bundle size](https://img.shields.io/bundlephobia/min/twnd?color=brightgreen)](https://www.npmjs.com/package/twnd) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/rosswaycaster/twnd/blob/master/LICENSE)

A simple utility for compiling a readable list of tailwindcss classes.

The goal of `twnd` is to provide an easy way to manage and compose tailwindcss classes.

```jsx
twnd(
  'bg-gray-200 rounded text-gray-700',
  'hover: bg-white border-gray-300',
  'focus: bg-white',
  'lg: px-4 py-2',
  'lg:hover: bg-gray-100 text-gray-600'
)

// bg-gray-200 rounded text-gray-700 hover:bg-white hover:border-gray-300 focus:bg-white lg:px-4 lg:py-2 lg:hover:bg-gray-100 lg:hover:text-gray-600
```

## Installation

```jsx
// yarn
yarn add twnd

// npm
npm install twnd --save
```

## Usage

```jsx
import twnd from 'twnd'

or

var twnd = require('twnd')
```

---

`twnd` is a function that take an infinite amount of arguments. These arguments should either be `strings` or `arrays`. Nested arrays are okay too!

#### Strings

Strings **without** a prefix (`hover:`, `focus:`, `lg:`, `lg:hover:`...) are outputted as they are. However, strings **with** a prefix will add that prefix to each of the classes in that string.

For example:

```jsx
const Button = ({ children, warning, border }) => {
  return (
    <button
      className={twnd(
        'flex-1 bg-gray-200 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight',
        'hover: bg-white border-gray-300',
        'focus: outline-none bg-white shadow-outline border-gray-300',
        'lg: border-gray-600 bg-gray-200',
        'lg:hover: bg-gray-100 text-gray-600'
      )}
    >
      {children}
    </button>
  )
}
```

is the same as typing out all of these classes:

```jsx
const Button = ({ children, warning, border }) => {
  return (
    <button className="ml-4 flex-shrink-0 bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 focus:outline-none focus:shadow-outline lg:ml-0 lg:py-0 lg:px-0 lg:hover:uppercase lg:hover:text-teal-300">
      {children}
    </button>
  )
}
```

#### Arrays

In this example we will use React to build a `Button` component that accepts `rounded` and `border` props. As you can see, you can easily apply specific classes based on if the prop is truthy or not.

```jsx
const Button = ({ children, rounded, border }) => {
  return (
    <button
      className={twnd(
        'inline-block text-sm px-4 py-2 ml-4 leading-none text-white mt-4',
        'hover: text-teal-500 bg-white',
        'lg: mt-0',
        rounded && 'rounded',
        border && ['border border-white', 'hover: border-transparent']
      )}
    >
      {children}
    </button>
  )
}
```

#### Composing Styles

You can also use `twnd` to compose styles.

```jsx
const Button = ({ children, buttonStyle = 'default', rounded, border }) => {
  const baseStyles = twnd(
    'appearance-none py-2 px-4 leading-tight border',
    'lg: text-lg py-4 px-6',
    rounded && 'rounded',
    !border && 'border-transparent'
  )
  const buttonStyles = {
    default: twnd(
      baseStyles,
      'bg-gray-200 text-gray-700',
      'hover: bg-gray-400 text-gray-900',
      border && ['border-gray-500', 'hover: border-gray-700']
    ),
    warning: twnd(
      baseStyles,
      'bg-red-200 text-red-700',
      'hover: bg-red-400 text-red-900',
      border && ['border-red-500', 'hover: border-red-900']
    ),
  }

  return <button className={buttonStyles[buttonStyle]}>{children}</button>
}
```

##### Output

```jsx
// <Button rounded border>Login</Button>

<button class="appearance-none py-2 px-4 leading-tight border lg:text-lg lg:py-4 lg:px-6 rounded bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-900 border-gray-500 hover:border-gray-700">
  Login
</button>
```

```jsx
// <Button buttonStyle="warning" border>Login</Button>

<button class="appearance-none py-2 px-4 leading-tight border lg:text-lg lg:py-4 lg:px-6 bg-red-200 text-red-700 hover:bg-red-400 hover:text-red-900 border-red-500 hover:border-red-900">
  Login
</button>
```

---

👋 ![HitCount](http://hits.dwyl.com/rosswaycaster/twnd.svg)
