# Problem Solving Patterns

## Frequency Counter
This pattern uses objects or sets to collect values/frequencies of values.  
This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

<strong>Example: </strong>  
Write a function called <strong>same</strong>, which accepts two arrays.  
The function should return true if every value in the array has it's corresponding value squared in the second array.  
The frequency of values must be the same.

<strong>Initial Approach: </strong>
```
function same(arr1, arr2) {
  /*
    Create an object to hold the values of array1 as keys along with it's square and count as values

    Example:
    {
      1: {
        squaredValue : 1,
        initialCount : 2,
        finalSquaredCount: 2
      }
    }
  */
  const collectionObj = { };

  // Fill the collction object
  for(let i = 0; i < arr1.length; i++) {
    const initialValue = arr1[i];
    const squaredValue = initialValue ** 2
    const initialCount = arr1.filter((elm) => elm === initialValue).length
    const finalCount = arr2.filter((elm) => elm === squaredValue).length

    collectionObj[initialValue] = {
      squaredValue,
      initialCount,
      finalCount
    }
  }
  
  // Iterate throught the collection object and for each key, validate if the array1 count is equal to the number of times the squared value shows up in array2
  for(let i = 0; i < Object.values(collectionObj).length; i++) {
    const obj = Object.values(collectionObj)[i];

    if(obj.initialCount !== obj.finalCount) {
      return false
    }
  }

  return true
}
```

<strong>Refactored Approach</strong>  
```

function sameRefactored(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  /*
    Create two objects to hold the contents of both arrays
    Compare the two objects later

    collectionObj will be similar to the initial approach, but without the finalSquaredCount key
    collectionObj2 will hold the elements of arr2 as keys and the counts as values
  */
  collectionObj = {};
  collectionObj2 = {};

  // Fill collectionObj
  for(let initialValue of arr1) {
    const squaredValue = initialValue ** 2;

    if(!collectionObj[initialValue]) {
      collectionObj[initialValue] = { squaredValue, initialCount: 1 }
    } else {
      collectionObj[initialValue] = { squaredValue, initialCount: collectionObj[initialValue].initialCount + 1 }
    }
  }

  // Fill collectionObj2
  for(let initialValue of arr2) {
    if(!collectionObj2[initialValue]) {
      collectionObj2[initialValue] = 1
    } else {
      collectionObj2[initialValue] = collectionObj2[initialValue] + 1
    }
  }

  // Loop through the value objects in collectionObj and compare them against collectionObj2
  for(let initialObject of Object.values(collectionObj)) {
    // If the squared value isn't a key in collectionObj2, return false
    if(initialObject.squaredValue in collectionObj2) {
      return false
    }

    // If the counts of each value don't match, return false
    if(collectionObj2[initialObject.squaredValue] !== initialObject.initialCount) {
      return false
    }
  }

  return true
}
```

Here, the initial approach uses the array.filter() method within a for loop which gives it a time complexity of O(n^2)  

However, the second approaches uses three seperate loops, with a final time complexity of O(n)

<strong>Example: </strong>  
Given two strings, write a function to determine if the second string is an anagram of the first.
```
anagram('', '') // true
anagram('aaz', 'zza') // false
anagram('anagram', 'nagaram') // true
anagram('rat', 'car') // false
anagram('awesome', 'awesom') // false
```

<strong>Initial Approach: </strong>
```
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
```