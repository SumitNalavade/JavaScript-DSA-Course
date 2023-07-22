function double(arr) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(2 * arr[i]);
  }

  return newArray;
}

console.log(double([1,2,3]))