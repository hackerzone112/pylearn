# Python Learning Platform Demo

## Getting Started

1. **Start the Application**
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:3000`

2. **Welcome Screen**
   - You'll see a welcome message with a "Load Hello World Example" button
   - Click it to load a simple Python example in the code editor

## Using the Platform

### Two Main Sections

1. **Lessons Tab** - Structured learning path
2. **DSA Practice Tab** - Interactive coding challenges

## Lessons Section

### Basic Examples

1. **Hello World**
   ```python
   print("Hello, World!")
   ```
   Click "Run Code" to see the output.

2. **Variables and Strings**
   ```python
   name = "Alice"
   age = 25
   print(f"Name: {name}, Age: {age}")
   ```

3. **Basic Arithmetic**
   ```python
   a = 10
   b = 5
   print(f"Addition: {a + b}")
   print(f"Subtraction: {a - b}")
   print(f"Multiplication: {a * b}")
   print(f"Division: {a / b}")
   ```

4. **Conditional Statements**
   ```python
   age = 18
   if age >= 18:
       print("You are an adult")
   else:
       print("You are a minor")
   ```

5. **Loops**
   ```python
   for i in range(5):
       print(f"Count: {i}")
   ```

## DSA Practice Section

### Data Structures Challenges

1. **Lists and Arrays**
   ```python
   numbers = [1, 2, 3, 4, 5]
   print(f"Original list: {numbers}")
   numbers.append(6)
   print(f"After append: {numbers}")
   print(f"First element: {numbers[0]}")
   print(f"List length: {len(numbers)}")
   ```

2. **Dictionaries and Hash Tables**
   ```python
   student = {
       "name": "Alice",
       "age": 20,
       "grades": [85, 90, 92]
   }
   print(f"Student: {student}")
   print(f"Name: {student['name']}")
   student["major"] = "Computer Science"
   print(f"Updated student: {student}")
   ```

3. **Stacks and Queues**
   ```python
   # Stack implementation
   stack = []
   stack.append(1)
   stack.append(2)
   stack.append(3)
   print(f"Stack: {stack}")
   popped = stack.pop()
   print(f"Popped: {popped}")
   print(f"Stack after pop: {stack}")
   ```

### Algorithm Challenges

1. **Linear Search**
   ```python
   def linear_search(arr, target):
       for i in range(len(arr)):
           if arr[i] == target:
               return i
       return -1

   numbers = [4, 2, 7, 1, 9, 3]
   target = 7
   result = linear_search(numbers, target)
   print(f"Array: {numbers}")
   print(f"Searching for: {target}")
   print(f"Found at index: {result}")
   ```

2. **Binary Search**
   ```python
   def binary_search(arr, target):
       left, right = 0, len(arr) - 1
       while left <= right:
           mid = (left + right) // 2
           if arr[mid] == target:
               return mid
           elif arr[mid] < target:
               left = mid + 1
           else:
               right = mid - 1
       return -1

   sorted_numbers = [1, 3, 5, 7, 9, 11, 13, 15]
   target = 7
   result = binary_search(sorted_numbers, target)
   print(f"Array: {sorted_numbers}")
   print(f"Searching for: {target}")
   print(f"Found at index: {result}")
   ```

3. **Bubble Sort**
   ```python
   def bubble_sort(arr):
       n = len(arr)
       for i in range(n):
           for j in range(0, n - i - 1):
               if arr[j] > arr[j + 1]:
                   arr[j], arr[j + 1] = arr[j + 1], arr[j]
       return arr

   numbers = [64, 34, 25, 12, 22, 11, 90]
   print(f"Original array: {numbers}")
   sorted_numbers = bubble_sort(numbers.copy())
   print(f"Sorted array: {sorted_numbers}")
   ```

4. **Quick Sort**
   ```python
   def quick_sort(arr):
       if len(arr) <= 1:
           return arr
       
       pivot = arr[len(arr) // 2]
       left = [x for x in arr if x < pivot]
       middle = [x for x in arr if x == pivot]
       right = [x for x in arr if x > pivot]
       
       return quick_sort(left) + middle + quick_sort(right)

   numbers = [3, 6, 8, 10, 1, 2, 1]
   print(f"Original array: {numbers}")
   sorted_numbers = quick_sort(numbers)
   print(f"Sorted array: {sorted_numbers}")
   ```

## Learning Path

### Basics (Beginner)
1. **Introduction to Python** - Basic syntax and print statements
2. **Variables and Data Types** - Creating and using variables
3. **Control Flow** - If statements and conditional logic

### Data Structures (Intermediate)
4. **Lists and Arrays** - Understanding Python lists and array operations
5. **Dictionaries and Hash Tables** - Working with key-value pairs
6. **Stacks and Queues** - Implementing fundamental data structures

### Algorithms (Beginner to Advanced)
7. **Linear Search** - Understanding linear search algorithm
8. **Binary Search** - Efficient search algorithm for sorted arrays
9. **Bubble Sort** - Simple sorting algorithm
10. **Quick Sort** - Efficient divide-and-conquer sorting algorithm

## DSA Practice Challenges

### Available Challenges
1. **Reverse a List** - Write a function to reverse a list in-place
2. **Find Duplicates** - Find all duplicate elements in an array
3. **Two Sum** - Find two numbers that add up to a target
4. **Valid Parentheses** - Check if parentheses are balanced
5. **Merge Sorted Arrays** - Merge two sorted arrays into one sorted array

### Challenge Features
- **Difficulty Levels**: Beginner, Intermediate, Advanced
- **Categories**: Data Structures, Algorithms
- **Complexity Analysis**: Time and space complexity information
- **Hints**: Step-by-step guidance
- **Auto-load**: Click to load challenge code in editor

## Code Editor Features

- **Syntax Highlighting**: Python syntax is highlighted for better readability
- **Copy Code**: Copy your code to clipboard with one click
- **Download Code**: Save your code as a Python file
- **Reset Code**: Clear the editor to start fresh
- **Real-time Execution**: Run code and see results instantly
- **Enhanced DSA Support**: Better handling of algorithms and data structures

## Tips for Learning

1. **Start Simple**: Begin with basic print statements
2. **Experiment**: Try modifying the examples
3. **Practice**: Complete the exercises in each lesson
4. **Use Hints**: Check the hints if you get stuck
5. **Run Often**: Test your code frequently
6. **Understand Complexity**: Pay attention to time and space complexity
7. **Practice DSA**: Use the practice tab for hands-on algorithm challenges

## Example Workflow

1. **For Beginners**:
   - Start with Basics lessons
   - Practice simple examples
   - Move to Data Structures
   - Try basic algorithms

2. **For Intermediate Learners**:
   - Review basics quickly
   - Focus on Data Structures
   - Practice algorithm implementation
   - Use DSA practice challenges

3. **For Advanced Learners**:
   - Jump to complex algorithms
   - Focus on optimization
   - Practice advanced DSA challenges
   - Experiment with different approaches

## Troubleshooting

- If code doesn't run, check for syntax errors
- Make sure to use proper indentation for Python
- Use quotes for strings
- Check the output panel for error messages
- For DSA challenges, read the hints carefully

## Next Steps

After completing the basic lessons and DSA practice, you can:
- Learn about functions and modules
- Explore object-oriented programming
- Work with more advanced data structures (trees, graphs)
- Practice with real-world projects
- Study advanced algorithms (dynamic programming, graph algorithms)

Happy coding! 🐍 