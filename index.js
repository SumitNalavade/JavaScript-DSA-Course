function charCount(str) {
  const val = str.toLowerCase();

  const obj = {};

  for(let char of val) {
    // If character isn't alphanumeric, skip it
    if(!(/[a-z0-0]/.test(char))) continue

    // If character exists as a key in object, increment its count, else add it as a key and set the count to one
    obj[char] = ++obj[char] || 1;
  }

  return obj
}

console.log(charCount("Hello World"))