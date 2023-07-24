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