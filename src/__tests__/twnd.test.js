import twnd from '../index'

test('single string argument', () => {
  const output = twnd('bg-indigo-900 text-center py-4')
  const expectedOutput = 'bg-indigo-900 text-center py-4'
  expect(output).toBe(expectedOutput)
})

test('multiple string arguments', () => {
  const output = twnd('bg-indigo-900', 'text-center py-4', 'uppercase')
  const expectedOutput = 'bg-indigo-900 text-center py-4 uppercase'
  expect(output).toBe(expectedOutput)
})

test('single array argument', () => {
  const output = twnd(['bg-indigo-900 text-center py-4'])
  const expectedOutput = 'bg-indigo-900 text-center py-4'
  expect(output).toBe(expectedOutput)
})

test('multiple array arguments', () => {
  const output = twnd(['bg-indigo-900'], ['text-center py-4'], ['uppercase'])
  const expectedOutput = 'bg-indigo-900 text-center py-4 uppercase'
  expect(output).toBe(expectedOutput)
})

test('string and array arguments', () => {
  const output = twnd('bg-indigo-900', ['text-center py-4'], 'uppercase')
  const expectedOutput = 'bg-indigo-900 text-center py-4 uppercase'
  expect(output).toBe(expectedOutput)
})

test('single prefix string argument', () => {
  const output = twnd('lg: bg-indigo-900 text-center py-4')
  const expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4'
  expect(output).toBe(expectedOutput)
})

test('multiple prefix string arguments', () => {
  const output = twnd(
    'lg: bg-indigo-900 text-center py-4',
    'hover: uppercase bg-indigo-600'
  )
  const expectedOutput =
    'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600'
  expect(output).toBe(expectedOutput)
})

test('mixed prefix string and array arguments', () => {
  const output = twnd('lg: bg-indigo-900 text-center py-4', [
    'hover: uppercase bg-indigo-600',
  ])
  const expectedOutput =
    'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600'
  expect(output).toBe(expectedOutput)
})

test('conditionally output string arguments when truthy', () => {
  const condition = true
  const output = twnd(
    'lg: bg-indigo-900 text-center py-4',
    condition && 'hover: uppercase bg-indigo-600'
  )
  const expectedOutput =
    'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600'
  expect(output).toBe(expectedOutput)
})

test('conditionally output array arguments when truthy', () => {
  const condition = true
  const output = twnd(
    'lg: bg-indigo-900 text-center py-4',
    condition && ['hover: uppercase bg-indigo-600']
  )
  const expectedOutput =
    'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600'
  expect(output).toBe(expectedOutput)
})

test('conditionally output string arguments when falsy', () => {
  const condition = false
  const output = twnd(
    'lg: bg-indigo-900 text-center py-4',
    condition && 'hover: uppercase bg-indigo-600'
  )
  const expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4'
  expect(output).toBe(expectedOutput)
})

test('conditionally output array arguments when falsy', () => {
  const condition = false
  const output = twnd(
    'lg: bg-indigo-900 text-center py-4',
    condition && ['hover: uppercase bg-indigo-600']
  )
  const expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4'
  expect(output).toBe(expectedOutput)
})

test('conditionally output nested array arguments when truthy', () => {
  const condition1 = true
  const condition2 = true
  const output = twnd(
    'lg: bg-indigo-900 text-center py-4',
    condition1 && ['hover: uppercase bg-indigo-600', condition2 && ['rounded']]
  )
  const expectedOutput =
    'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600 rounded'
  expect(output).toBe(expectedOutput)
})

test('conditionally output nested array arguments when falsy', () => {
  const condition1 = true
  const condition2 = false
  const output = twnd(
    'lg: bg-indigo-900 text-center py-4',
    condition1 && ['hover: uppercase bg-indigo-600', condition2 && ['rounded']]
  )
  const expectedOutput =
    'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600'
  expect(output).toBe(expectedOutput)
})
