function anagram(str1, str2) {
  // If both strings aren't the same length, return false
  if(str1.length !== str2.length) {
    return false
  }

  const arr1 = str1.split('');
  const arr2 = str2.split('');

  const collectionObj1 = { };
  const collectionObj2 = { };

  /*
    Iterate through one of the arrays (doesn't matter which one since we already validated the lengths)
    If the character isn't a key in the corresponding collection object, add it with a value of 1
    If the character is already a key, increment it by one
  */
  for(let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    collectionObj1[val1] ? collectionObj1[val1] += 1 : collectionObj1[val1] = 1
    collectionObj2[val2] ? collectionObj2[val2] += 1 : collectionObj2[val2] = 1 
  }

  // Iterate through the keys of one of the collection objects and check if the count is the same in the second collection object (for the same key)
  for(key1 of Object.keys(collectionObj1)) {
    const collectionObj1Count = collectionObj1[key1];
    const collectionObj2Count = collectionObj2[key1];

    if(collectionObj1Count !== collectionObj2Count) {
      return false
    }
  }

  return true
}

console.log(anagram('texttwisttime', 'timetwisttext'))