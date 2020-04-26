// Helper function to flatten the array since [].flat() isn't standard yet
const _flatten = (ary) =>
  ary.reduce((a, b) => a.concat(Array.isArray(b) ? _flatten(b) : b), [])

const twnd = (...args) =>
  _flatten(args)
    .reduce((classNames, string) => {
      // This weeds out the falsy arguments we may have gotten
      if (typeof string === 'string') {
        // If the string include ": " then we want to prefix
        if (string.includes(': ')) {
          const split = string.trim().split(': ')
          const prefix = split[0] + ':'
          const classesArray = split[1].trim().split(' ')
          // Loop over all of the classes in the string and add the prefix
          for (let i = 0; i < classesArray.length; i++) {
            const className = classesArray[i]
            classNames += prefix + className + ' '
          }
        } else {
          // These classes do not need to be prefixed
          classNames += string + ' '
        }
      }
      return classNames
    }, '')
    .trim()

export default twnd
