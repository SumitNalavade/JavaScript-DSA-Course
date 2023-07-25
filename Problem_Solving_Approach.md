# Problem Solving Approach
An algorithm is a process or set of steps to accomplish a certain task.

<strong>Problem: Write a function that takes in a string and returns the counts of each character</strong>

## Step 1: Understand The Problem
- <strong>Can I restate the problem in my own words?</strong>
  - Identify the unique characters in a string and return the number of times they show up
- <strong>What are the inputs that go into the problem</strong>
  - Strings
- <strong> What are the outputs that should come from the solution to the problem </strong>
  - Object? Array? Numbers? String?
- <strong> Can the outputs be determined from the inputs (Do I have enough information to solve the problem) </strong>
- <strong> How should I label the important pieces of data that are part of the problem </strong>

## Step 2: Explore Concrete Examples
- <strong>Start with simple examples</strong>
  - ```
    charCount('aaaa') -> {'a': 4}
    charCount("hello") -> {'h': 1, 'e': 1, 'l': 2, 'o': 1}
    ```
- <strong>Progress to more complex examples</strong>
  - Should we include numbers, spaces and capitalized letters?
- <strong>Explore examples with empty inputs</strong>
  - What do we return if nothing is passed in? What about an empty string
- <strong>Explore examples with invalid inputs</strong>
  - What if someome passes in a number or null?

## Step 3: Break It Down
Explicitly write down the steps you need to take

```
function charCount(str) {
  // doSomething

  // return an object with keys that are only lowercase alphanumeric characters in the string
}
```

```
function charCount(str) {
  // Make object to return at end

  // Loop over string for each character
    // If char is a number/letter AND key in object, add one to its count
    // If char is a number/letter AND not a key in object, add it to the object and set value to 1

  //Return object at end
}
```

## Step 4: Solve Or Simplify
Solve the problem, or solve a simpler problem

```
function charCount(str) {
  // Make object to return at end
  const result = {};

  // Loop over string for each character
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    // If char is a key in object, add one to its count
    if(result[char] > 0) {
      result[char]++;
    } 
    // If char is a key in object, add it to the object and set value to 1
    else {
      result[char] = 1;
    }
  }

  // Return object at end

  return result;
}
```

## Step 5: Look Back And Refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance
- Can you use the result or method for some other problem
- Can you improve the performance of your solution
- Can you think of other ways to Refactor
- How have other people solved this problem

```
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
```