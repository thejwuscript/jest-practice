function analyzeArray(array) {
  let sum = array.reduce(function(prev, curr) {
    return prev += curr;
  }, 0)
  let length = array.length
  let average = sum / length
  let min = array.reduce(function(prev, curr) {
    return (prev < curr) ? prev : curr
  })
  let max = array.reduce(function(prev, curr) {
    return (prev > curr) ? prev : curr
  })
  let object = {
    average,
    min,
    max,
    length
  }
  return object
}

export default analyzeArray