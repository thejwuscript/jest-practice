function reverseString(str) {
  let array = str.split('')
  let lastIndex = array.length - 1
  let reversed = []
  for (let i = lastIndex; i >= 0; i--) {
    reversed.push(array[i])
  }
  return reversed.join('')
}

export { reverseString }