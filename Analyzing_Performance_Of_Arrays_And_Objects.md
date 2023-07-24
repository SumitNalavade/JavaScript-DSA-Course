# Analyzing Performance of Arrays and Objects

- Understand how arrays and objects work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built in methods

## Objects
When to use objects:
- When you don't need order
- When you need fast access, insertion and removal

Big O of Objects:
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n) (Searching for values, not keys)
- Access: O(1)

Big O of Object Methods:
- ```Object.keys```: O(n)
- ```Object.values```: O(n)
- ```Object.entries```: O(n)
- ```hasOwnProperty```: O(1)

## Arrays
When to use arrays:
- When you need order
- When you need fast access

Big O of Arrays:
- Insertion: Depends...
- Removal: Depends...
- Searching: O(n)
- Access: O(1)

<strong>Accessing values in arrays by index is O(1) time because JavaScript has a direct shortcut to each element</strong>

<strong>Insertion/removal at the end of an array is O(1) time, but insertion/removal to the beginning is O(n) since the array needs to be reindexed</strong>

Big O of Array Methods:
- Push/Pop: O(1)
- Shift/Unshift: O(n)
- Concat: O(n)
- Splice: O(n)
- Sort: O(nlogn)
- forEach/map/filter/reduce/etc: O(n)