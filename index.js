function countUniqueValues(arr) {
  const frequencyCounter = { };

  for(let value of arr) {
    if(frequencyCounter[value]) continue

    frequencyCounter[value] = 0
  }

  return (Object.keys(frequencyCounter).length)
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))