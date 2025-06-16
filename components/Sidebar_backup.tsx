'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, BookOpen, CheckCircle, Circle } from 'lucide-react'
import { Lesson } from '@/types/lesson'

interface SidebarProps {
  currentLesson: Lesson | null
  onLessonSelect: (lesson: Lesson) => void
}

const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Introduction to Python',
    description: 'Learn the basics of Python programming',
    content: 'Python is a high-level, interpreted programming language...',
    difficulty: 'beginner',
    category: 'Basics',
    examples: [
      {
        id: '1-1',
        title: 'Hello World',
        description: 'Your first Python program',
        code: 'print("Hello, World!")',
        explanation: 'The print() function outputs text to the console.'
      }
    ],
    exercises: [
      {
        id: '1-ex1',
        title: 'Print Your Name',
        description: 'Write a program that prints your name',
        initialCode: '# Write your code here\n',
        expectedOutput: 'Your name should be printed',
        hints: ['Use the print() function', 'Put your name in quotes']
      }
    ]
  },
  {
    id: '2',
    title: 'Variables and Data Types',
    description: 'Understanding variables and different data types in Python',
    content: 'Variables are containers for storing data values...',
    difficulty: 'beginner',
    category: 'Basics',
    examples: [
      {
        id: '2-1',
        title: 'Creating Variables',
        description: 'How to create and use variables',
        code: 'name = "Alice"\nage = 25\nprint(f"Name: {name}, Age: {age}")',
        explanation: 'Variables store data that can be used throughout your program.'
      }
    ],
    exercises: [
      {
        id: '2-ex1',
        title: 'Create Variables',
        description: 'Create variables for your name and age',
        initialCode: '# Create variables for your name and age\n',
        expectedOutput: 'Variables should be created and printed',
        hints: ['Use the assignment operator (=)', 'Put strings in quotes']
      }
    ]
  },
  {
    id: '3',
    title: 'Control Flow',
    description: 'Learn about if statements and loops',
    content: 'Control flow statements determine the order of execution...',
    difficulty: 'beginner',
    category: 'Basics',
    examples: [
      {
        id: '3-1',
        title: 'If Statement',
        description: 'Using if statements for decision making',
        code: 'age = 18\nif age >= 18:\n    print("You are an adult")\nelse:\n    print("You are a minor")',
        explanation: 'If statements allow your program to make decisions based on conditions.'
      }
    ],
    exercises: [
      {
        id: '3-ex1',
        title: 'Simple Calculator',
        description: 'Create a simple calculator using if statements',
        initialCode: '# Create a simple calculator\n',
        expectedOutput: 'Should handle basic arithmetic operations',
        hints: ['Use if/elif/else statements', 'Check for different operators']
      }
    ]
  },
  {
    id: '4',
    title: 'Python Lists - Complete Guide',
    description: 'Master Python lists with all methods and operations',
    content: 'Lists are one of the most versatile data structures in Python. They are ordered, mutable, and can store elements of different types...',
    difficulty: 'intermediate',
    category: 'Data Structures',
    examples: [
      {
        id: '4-1',
        title: 'Creating Lists',
        description: 'Different ways to create lists',
        code: '# Empty list\nempty_list = []\n\n# List with elements\nnumbers = [1, 2, 3, 4, 5]\nfruits = ["apple", "banana", "orange"]\nmixed = [1, "hello", 3.14, True]\n\n# Using list() constructor\nlist_from_range = list(range(5))\nlist_from_string = list("Python")\n\nprint(f"Empty list: {empty_list}")\nprint(f"Numbers: {numbers}")\nprint(f"Fruits: {fruits}")\nprint(f"Mixed: {mixed}")\nprint(f"From range: {list_from_range}")\nprint(f"From string: {list_from_string}")',
        explanation: 'Lists can be created empty, with initial elements, or from other iterables using the list() constructor.'
      },
      {
        id: '4-2',
        title: 'List Methods - Adding Elements',
        description: 'Methods to add elements to lists',
        code: 'fruits = ["apple", "banana"]\nprint(f"Original: {fruits}")\n\n# append() - adds element at the end\nfruits.append("orange")\nprint(f"After append: {fruits}")\n\n# insert() - adds element at specific index\nfruits.insert(1, "grape")\nprint(f"After insert: {fruits}")\n\n# extend() - adds all elements from iterable\nfruits.extend(["mango", "kiwi"])\nprint(f"After extend: {fruits}")\n\n# += operator - same as extend\nfruits += ["pear", "plum"]\nprint(f"After +=: {fruits}")',
        explanation: 'append() adds to the end, insert() adds at specific position, extend() adds multiple elements, and += is a shorthand for extend().'
      },
      {
        id: '4-3',
        title: 'List Methods - Removing Elements',
        description: 'Methods to remove elements from lists',
        code: 'numbers = [1, 2, 3, 4, 5, 2, 6, 2]\nprint(f"Original: {numbers}")\n\n# remove() - removes first occurrence of value\nnumbers.remove(2)\nprint(f"After remove(2): {numbers}")\n\n# pop() - removes and returns element at index\npopped = numbers.pop(1)\nprint(f"Popped element: {popped}")\nprint(f"After pop(1): {numbers}")\n\n# pop() without index - removes last element\nlast = numbers.pop()\nprint(f"Last element: {last}")\nprint(f"After pop(): {numbers}")\n\n# del statement - removes element at index\ndel numbers[0]\nprint(f"After del numbers[0]: {numbers}")\n\n# clear() - removes all elements\nnumbers.clear()\nprint(f"After clear(): {numbers}")',
        explanation: 'remove() removes by value, pop() removes by index and returns the element, del removes by index, and clear() removes all elements.'
      },
      {
        id: '4-4',
        title: 'List Methods - Searching and Information',
        description: 'Methods to search and get information about lists',
        code: 'fruits = ["apple", "banana", "orange", "apple", "grape"]\nprint(f"List: {fruits}")\n\n# len() - get length\nprint(f"Length: {len(fruits)}")\n\n# count() - count occurrences\nprint(f"Count of apple: {fruits.count(\'apple\')}")\n\n# index() - find first occurrence\nprint(f"Index of banana: {fruits.index(\'banana\')}")\n\n# in operator - check if element exists\nprint(f"Is orange in list: {\'orange\' in fruits}")\nprint(f"Is mango in list: {\'mango\' in fruits}")\n\n# min() and max() - find minimum and maximum\nnumbers = [3, 1, 4, 1, 5, 9, 2, 6]\nprint(f"Numbers: {numbers}")\nprint(f"Minimum: {min(numbers)}")\nprint(f"Maximum: {max(numbers)}")\nprint(f"Sum: {sum(numbers)}")',
        explanation: 'len() gets length, count() counts occurrences, index() finds position, in checks membership, and min/max/sum work on numeric lists.'
      },
      {
        id: '4-5',
        title: 'List Methods - Sorting and Reversing',
        description: 'Methods to sort and reverse lists',
        code: 'numbers = [3, 1, 4, 1, 5, 9, 2, 6]\nfruits = ["banana", "apple", "orange", "grape"]\nprint(f"Original numbers: {numbers}")\nprint(f"Original fruits: {fruits}")\n\n# sort() - sorts in-place\nnumbers.sort()\nprint(f"After sort(): {numbers}")\n\n# sort() with reverse=True\nfruits.sort(reverse=True)\nprint(f"After sort(reverse=True): {fruits}")\n\n# sorted() - returns new sorted list\noriginal = [3, 1, 4, 1, 5]\nsorted_list = sorted(original)\nprint(f"Original: {original}")\nprint(f"Sorted: {sorted_list}")\n\n# reverse() - reverses in-place\nnumbers.reverse()\nprint(f"After reverse(): {numbers}")\n\n# reversed() - returns iterator\nreversed_list = list(reversed(original))\nprint(f"Reversed: {reversed_list}")',
        explanation: 'sort() modifies the list in-place, sorted() returns a new list, reverse() reverses in-place, and reversed() returns an iterator.'
      },
      {
        id: '4-6',
        title: 'List Slicing and Indexing',
        description: 'Advanced list slicing and indexing techniques',
        code: 'numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(f"Original: {numbers}")\n\n# Basic indexing\nprint(f"First element: {numbers[0]}")\nprint(f"Last element: {numbers[-1]}")\nprint(f"Second to last: {numbers[-2]}")\n\n# Basic slicing [start:end:step]\nprint(f"First 5 elements: {numbers[:5]}")\nprint(f"Last 5 elements: {numbers[-5:]}")\nprint(f"Elements 2 to 7: {numbers[2:7]}")\nprint(f"Every 2nd element: {numbers[::2]}")\nprint(f"Reverse: {numbers[::-1]}")\n\n# Negative step\nprint(f"Reverse every 2nd: {numbers[::-2]}")\nprint(f"From end to start: {numbers[5:2:-1]}")\n\n# Modifying with slicing\nnumbers[2:5] = [20, 30, 40]\nprint(f"After slice assignment: {numbers}")\n\n# Deleting with slicing\ndel numbers[1:4]\nprint(f"After slice deletion: {numbers}")',
        explanation: 'Slicing uses [start:end:step] format. Negative indices count from the end. Step can be negative for reverse iteration.'
      }
    ],
    exercises: [
      {
        id: '4-ex1',
        title: 'List Operations Practice',
        description: 'Create a list and perform various operations',
        initialCode: '# Create a list of your favorite movies\n# Add a new movie\n# Remove a movie\n# Sort the list\n# Print the first and last movies\n',
        expectedOutput: 'Should demonstrate list creation, modification, and sorting',
        hints: ['Use square brackets for lists', 'Use append() to add', 'Use remove() to delete', 'Use sort() to sort']
      },
      {
        id: '4-ex2',
        title: 'List Slicing Challenge',
        description: 'Practice list slicing operations',
        initialCode: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n# Get first 3 elements\n# Get last 3 elements\n# Get every 3rd element\n# Reverse the list\n',
        expectedOutput: 'Should show different slicing results',
        hints: ['Use [start:end] format', 'Use negative indices for end', 'Use [::step] for stepping', 'Use [::-1] for reverse']
      }
    ]
  },
  {
    id: '5',
    title: 'Python Tuples - Complete Guide',
    description: 'Master Python tuples with all methods and operations',
    content: 'Tuples are immutable sequences in Python. They are similar to lists but cannot be modified after creation...',
    difficulty: 'intermediate',
    category: 'Data Structures',
    examples: [
      {
        id: '5-1',
        title: 'Creating Tuples',
        description: 'Different ways to create tuples',
        code: '# Empty tuple\nempty_tuple = ()\n\n# Tuple with elements\ncoordinates = (10, 20)\nperson = ("Alice", 25, "Engineer")\nmixed = (1, "hello", 3.14, True)\n\n# Single element tuple (note the comma)\nsingle = (42,)\n\n# Using tuple() constructor\ntuple_from_list = tuple([1, 2, 3])\ntuple_from_string = tuple("Python")\n\nprint(f"Empty tuple: {empty_tuple}")\nprint(f"Coordinates: {coordinates}")\nprint(f"Person: {person}")\nprint(f"Mixed: {mixed}")\nprint(f"Single element: {single}")\nprint(f"From list: {tuple_from_list}")\nprint(f"From string: {tuple_from_string}")',
        explanation: 'Tuples are created with parentheses. Single element tuples need a trailing comma. tuple() constructor converts other iterables.'
      },
      {
        id: '5-2',
        title: 'Tuple Methods and Operations',
        description: 'Available methods and operations on tuples',
        code: 'fruits = ("apple", "banana", "orange", "apple", "grape")\nnumbers = (3, 1, 4, 1, 5, 9, 2, 6)\nprint(f"Fruits: {fruits}")\nprint(f"Numbers: {numbers}")\n\n# len() - get length\nprint(f"Length of fruits: {len(fruits)}")\n\n# count() - count occurrences\nprint(f"Count of apple: {fruits.count(\'apple\')}")\n\n# index() - find first occurrence\nprint(f"Index of banana: {fruits.index(\'banana\')}")\n\n# in operator - check membership\nprint(f"Is orange in tuple: {\'orange\' in fruits}")\n\n# min(), max(), sum() - for numeric tuples\nprint(f"Minimum: {min(numbers)}")\nprint(f"Maximum: {max(numbers)}")\nprint(f"Sum: {sum(numbers)}")\n\n# Concatenation\ntuple1 = (1, 2, 3)\ntuple2 = (4, 5, 6)\ncombined = tuple1 + tuple2\nprint(f"Combined: {combined}")\n\n# Repetition\nrepeated = tuple1 * 3\nprint(f"Repeated: {repeated}")',
        explanation: 'Tuples support len(), count(), index(), membership testing, and mathematical operations. They can be concatenated and repeated.'
      },
      {
        id: '5-3',
        title: 'Tuple Unpacking',
        description: 'Advanced tuple unpacking techniques',
        code: '# Basic unpacking\ncoordinates = (10, 20)\nx, y = coordinates\nprint(f"X: {x}, Y: {y}")\n\n# Multiple assignment\nperson = ("Alice", 25, "Engineer")\nname, age, profession = person\nprint(f"Name: {name}, Age: {age}, Profession: {profession}")\n\n# Extended unpacking\nnumbers = (1, 2, 3, 4, 5)\nfirst, *middle, last = numbers\nprint(f"First: {first}, Middle: {middle}, Last: {last}")\n\n# Ignoring values with underscore\npoint = (10, 20, 30)\nx, _, z = point\nprint(f"X: {x}, Z: {z}")\n\n# Nested unpacking\nnested = ((1, 2), (3, 4))\n(a, b), (c, d) = nested\nprint(f"A: {a}, B: {b}, C: {c}, D: {d}")\n\n# Swapping variables\na, b = 10, 20\nprint(f"Before swap: a={a}, b={b}")\na, b = b, a\nprint(f"After swap: a={a}, b={b}")',
        explanation: 'Tuple unpacking allows assigning multiple variables at once. Extended unpacking uses * to capture multiple values. Underscore ignores values.'
      },
      {
        id: '5-4',
        title: 'Tuple vs List Comparison',
        description: 'Understanding when to use tuples vs lists',
        code: '# Tuples are immutable\ncoordinates = (10, 20)\nprint(f"Coordinates: {coordinates}")\n\n# This would cause an error:\n# coordinates[0] = 30\n\n# Lists are mutable\npoints = [10, 20]\npoints[0] = 30\nprint(f"Modified points: {points}")\n\n# Tuples are faster and use less memory\nimport sys\nprint(f"Tuple size: {sys.getsizeof((1, 2, 3))} bytes")\nprint(f"List size: {sys.getsizeof([1, 2, 3])} bytes")\n\n# Tuples can be used as dictionary keys\npoint_dict = {(0, 0): "origin", (1, 1): "diagonal"}\nprint(f"Point dictionary: {point_dict}")\n\n# Lists cannot be used as dictionary keys\n# This would cause an error:\n# list_dict = {[1, 2]: "value"}\n\n# Tuples are good for fixed data\nrgb_color = (255, 128, 0)\nprint(f"RGB color: {rgb_color}")',
        explanation: 'Tuples are immutable, faster, use less memory, and can be dictionary keys. Lists are mutable and better for dynamic data.'
      }
    ],
    exercises: [
      {
        id: '5-ex1',
        title: 'Tuple Creation and Unpacking',
        description: 'Create tuples and practice unpacking',
        initialCode: '# Create a tuple with your name, age, and city\n# Unpack it into separate variables\n# Create a tuple of coordinates and unpack x, y\n# Print all the unpacked values\n',
        expectedOutput: 'Should demonstrate tuple creation and unpacking',
        hints: ['Use parentheses for tuples', 'Use comma-separated assignment', 'Use multiple variables on left side']
      },
      {
        id: '5-ex2',
        title: 'Tuple Operations',
        description: 'Practice tuple methods and operations',
        initialCode: 'numbers = (1, 2, 3, 2, 4, 5, 2)\n# Count occurrences of 2\n# Find index of first 3\n# Check if 6 is in the tuple\n# Get the sum of all numbers\n',
        expectedOutput: 'Should show tuple method results',
        hints: ['Use count() method', 'Use index() method', 'Use in operator', 'Use sum() function']
      }
    ]
  },
  {
    id: '6',
    title: 'Python Dictionaries - Complete Guide',
    description: 'Master Python dictionaries with all methods and operations',
    content: 'Dictionaries are hash tables that store key-value pairs. They are unordered (in Python < 3.7), mutable, and provide fast O(1) lookup...',
    difficulty: 'intermediate',
    category: 'Data Structures',
    examples: [
      {
        id: '6-1',
        title: 'Creating Dictionaries',
        description: 'Different ways to create dictionaries',
        code: '# Empty dictionary\nempty_dict = {}\n\n# Dictionary with key-value pairs\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "city": "New York"\n}\n\n# Using dict() constructor\nperson2 = dict(name="Bob", age=30, city="London")\n\n# From list of tuples\npairs = [("a", 1), ("b", 2), ("c", 3)]\ndict_from_pairs = dict(pairs)\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}\n\n# Using zip()\nkeys = ["name", "age", "city"]\nvalues = ["Charlie", 35, "Paris"]\ndict_from_zip = dict(zip(keys, values))\n\nprint(f"Empty: {empty_dict}")\nprint(f"Person: {person}")\nprint(f"Person2: {person2}")\nprint(f"From pairs: {dict_from_pairs}")\nprint(f"Squares: {squares}")\nprint(f"From zip: {dict_from_zip}")',
        explanation: 'Dictionaries can be created with curly braces, dict() constructor, from pairs, comprehension, or zip().'
      },
      {
        id: '6-2',
        title: 'Dictionary Methods - Accessing and Modifying',
        description: 'Methods to access and modify dictionary elements',
        code: 'student = {\n    "name": "Alice",\n    "age": 20,\n    "grades": [85, 90, 92]\n}\nprint(f"Original: {student}")\n\n# Accessing values\nprint(f"Name: {student[\'name\']}")\nprint(f"Age: {student.get(\'age\')}")\nprint(f"City: {student.get(\'city\', \'Unknown\')}")\n\n# Adding/Updating elements\nstudent["major"] = "Computer Science"\nprint(f"After adding major: {student}")\n\nstudent.update({\n    "city": "Boston",\n    "gpa": 3.8\n})\nprint(f"After update: {student}")\n\n# Removing elements\nremoved_age = student.pop("age")\nprint(f"Removed age: {removed_age}")\nprint(f"After pop: {student}")\n\n# popitem() - removes and returns last item\nlast_item = student.popitem()\nprint(f"Last item: {last_item}")\nprint(f"After popitem: {student}")\n\n# del statement\ndel student["grades"]\nprint(f"After del: {student}")',
        explanation: 'Use square brackets or get() to access values. get() provides default for missing keys. update() adds multiple items, pop() removes by key.'
      },
      {
        id: '6-3',
        title: 'Dictionary Methods - Information and Views',
        description: 'Methods to get information and different views of dictionaries',
        code: 'inventory = {\n    "apples": 50,\n    "bananas": 30,\n    "oranges": 25,\n    "grapes": 40\n}\nprint(f"Inventory: {inventory}")\n\n# len() - number of key-value pairs\nprint(f"Number of items: {len(inventory)}")\n\n# keys() - view of all keys\nprint(f"Keys: {list(inventory.keys())}")\n\n# values() - view of all values\nprint(f"Values: {list(inventory.values())}")\n\n# items() - view of all key-value pairs\nprint(f"Items: {list(inventory.items())}")\n\n# in operator - check if key exists\nprint(f"Has apples: {\'apples\' in inventory}")\nprint(f"Has mangoes: {\'mangoes\' in inventory}")\n\n# clear() - remove all items\ninventory.clear()\nprint(f"After clear: {inventory}")\n\n# copy() - shallow copy\noriginal = {"a": 1, "b": 2}\ncopied = original.copy()\nprint(f"Original: {original}")\nprint(f"Copied: {copied}")',
        explanation: 'keys(), values(), and items() return views. in checks key membership. clear() removes all items. copy() creates a shallow copy.'
      },
      {
        id: '6-4',
        title: 'Dictionary Methods - Advanced Operations',
        description: 'Advanced dictionary operations and methods',
        code: 'scores = {\n    "Alice": 85,\n    "Bob": 92,\n    "Charlie": 78,\n    "Diana": 95\n}\nprint(f"Scores: {scores}")\n\n# setdefault() - get value or set default\ncharlie_score = scores.setdefault("Charlie", 0)\nprint(f"Charlie score: {charlie_score}")\n\n# setdefault() for new key\nemma_score = scores.setdefault("Emma", 88)\nprint(f"Emma score: {emma_score}")\nprint(f"Updated scores: {scores}")\n\n# fromkeys() - create dict with same value\nkeys = ["a", "b", "c"]\ndefault_dict = dict.fromkeys(keys, 0)\nprint(f"Default dict: {default_dict}")\n\n# Dictionary comprehension with conditions\nfiltered = {name: score for name, score in scores.items() if score > 80}\nprint(f"High scores: {filtered}")\n\n# Nested dictionaries\nstudents = {\n    "Alice": {"age": 20, "major": "CS", "gpa": 3.8},\n    "Bob": {"age": 22, "major": "Math", "gpa": 3.9}\n}\nprint(f"Students: {students}")\nprint(f"Alice GPA: {students[\'Alice\'][\'gpa\']}")\n\n# Merging dictionaries (Python 3.9+)\ndict1 = {"a": 1, "b": 2}\ndict2 = {"c": 3, "d": 4}\nmerged = dict1 | dict2\nprint(f"Merged: {merged}")',
        explanation: 'setdefault() gets value or sets default. fromkeys() creates dict with same value. Comprehension filters data. Dictionaries can be nested.'
      },
      {
        id: '6-5',
        title: 'Dictionary Iteration and Sorting',
        description: 'How to iterate through dictionaries and sort them',
        code: 'fruits = {\n    "apple": 2.50,\n    "banana": 1.75,\n    "orange": 3.00,\n    "grape": 4.25\n}\nprint(f"Fruits: {fruits}")\n\n# Iterating through keys\nprint("Keys:")\nfor key in fruits:\n    print(f"  {key}")\n\n# Iterating through values\nprint("Values:")\nfor value in fruits.values():\n    print(f"  ${value:.2f}")\n\n# Iterating through items\nprint("Items:")\nfor key, value in fruits.items():\n    print(f"  {key}: ${value:.2f}")\n\n# Sorting by keys\nsorted_by_key = dict(sorted(fruits.items()))\nprint(f"Sorted by key: {sorted_by_key}")\n\n# Sorting by values\nsorted_by_value = dict(sorted(fruits.items(), key=lambda x: x[1]))\nprint(f"Sorted by value: {sorted_by_value}")\n\n# Sorting by values (descending)\nsorted_desc = dict(sorted(fruits.items(), key=lambda x: x[1], reverse=True))\nprint(f"Sorted by value (desc): {sorted_desc}")\n\n# Finding min/max\nmin_price = min(fruits.values())\nmax_price = max(fruits.values())\nprint(f"Min price: ${min_price:.2f}")\nprint(f"Max price: ${max_price:.2f}")',
        explanation: 'Iterate through keys, values, or items. Sort using sorted() with key function. Use lambda for custom sorting criteria.'
      }
    ],
    exercises: [
      {
        id: '6-ex1',
        title: 'Dictionary Creation and Access',
        description: 'Create a dictionary and practice accessing elements',
        initialCode: '# Create a dictionary for a book with title, author, year, and genre\n# Access each value using different methods\n# Add a new key-value pair\n# Print all information\n',
        expectedOutput: 'Should demonstrate dictionary creation and access',
        hints: ['Use curly braces for dictionaries', 'Use key: value format', 'Use square brackets or get()', 'Use update() or direct assignment']
      },
      {
        id: '6-ex2',
        title: 'Dictionary Operations',
        description: 'Practice dictionary methods and operations',
        initialCode: 'inventory = {"apples": 10, "bananas": 5, "oranges": 8}\n# Get all keys\n# Get all values\n# Check if "grapes" exists\n# Add "grapes" with quantity 12\n# Remove "bananas"\n',
        expectedOutput: 'Should show dictionary method results',
        hints: ['Use keys() method', 'Use values() method', 'Use in operator', 'Use direct assignment', 'Use pop() or del']
      }
    ]
  },
  {
    id: '7',
    title: 'Lists and Arrays',
    description: 'Understanding Python lists and array operations',
    content: 'Lists are one of the most versatile data structures in Python...',
    difficulty: 'intermediate',
    category: 'Data Structures',
    examples: [
      {
        id: '7-1',
        title: 'Creating and Manipulating Lists',
        description: 'Basic list operations',
        code: 'numbers = [1, 2, 3, 4, 5]\nprint(f"Original list: {numbers}")\nnumbers.append(6)\nprint(f"After append: {numbers}")\nprint(f"First element: {numbers[0]}")\nprint(f"List length: {len(numbers)}")',
        explanation: 'Lists are mutable, ordered collections that can store different types of data.'
      }
    ],
    exercises: [
      {
        id: '7-ex1',
        title: 'List Operations',
        description: 'Create a list and perform basic operations',
        initialCode: '# Create a list of your favorite fruits\n# Add a new fruit\n# Print the first and last elements\n',
        expectedOutput: 'Should show list creation and manipulation',
        hints: ['Use square brackets for lists', 'Use append() to add elements', 'Use index [0] for first element']
      }
    ]
  },
  {
    id: '8',
    title: 'Dictionaries and Hash Tables',
    description: 'Working with key-value pairs in Python',
    content: 'Dictionaries are hash tables that store key-value pairs...',
    difficulty: 'intermediate',
    category: 'Data Structures',
    examples: [
      {
        id: '8-1',
        title: 'Dictionary Operations',
        description: 'Creating and using dictionaries',
        code: 'student = {\n    "name": "Alice",\n    "age": 20,\n    "grades": [85, 90, 92]\n}\nprint(f"Student: {student}")\nprint(f"Name: {student[\'name\']}")\nstudent["major"] = "Computer Science"\nprint(f"Updated student: {student}")',
        explanation: 'Dictionaries provide fast O(1) lookup time and are perfect for storing related data.'
      }
    ],
    exercises: [
      {
        id: '8-ex1',
        title: 'Create a Dictionary',
        description: 'Create a dictionary for a book with title, author, and year',
        initialCode: '# Create a dictionary for a book\n# Add a new key-value pair\n# Print all information\n',
        expectedOutput: 'Should display book information in dictionary format',
        hints: ['Use curly braces {} for dictionaries', 'Use key: value format', 'Access with square brackets']
      }
    ]
  },
  {
    id: '9',
    title: 'Stacks and Queues',
    description: 'Implementing stack and queue data structures',
    content: 'Stacks (LIFO) and Queues (FIFO) are fundamental data structures...',
    difficulty: 'intermediate',
    category: 'Data Structures',
    examples: [
      {
        id: '9-1',
        title: 'Stack Implementation',
        description: 'Using lists as stacks',
        code: 'stack = []\n# Push operations\nstack.append(1)\nstack.append(2)\nstack.append(3)\nprint(f"Stack: {stack}")\n# Pop operation\npopped = stack.pop()\nprint(f"Popped: {popped}")\nprint(f"Stack after pop: {stack}")',
        explanation: 'Stacks follow Last-In-First-Out (LIFO) principle. Use append() to push and pop() to remove.'
      }
    ],
    exercises: [
      {
        id: '9-ex1',
        title: 'Queue Implementation',
        description: 'Implement a queue using a list',
        initialCode: '# Create a queue using a list\n# Add elements (enqueue)\n# Remove elements (dequeue)\n',
        expectedOutput: 'Should demonstrate FIFO behavior',
        hints: ['Use append() to enqueue', 'Use pop(0) to dequeue', 'Remember FIFO principle']
      }
    ]
  },
  {
    id: '10',
    title: 'Linear Search',
    description: 'Understanding linear search algorithm',
    content: 'Linear search is the simplest search algorithm...',
    difficulty: 'beginner',
    category: 'Algorithms',
    examples: [
      {
        id: '10-1',
        title: 'Linear Search Implementation',
        description: 'Basic linear search algorithm',
        code: 'def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\n\nnumbers = [4, 2, 7, 1, 9, 3]\ntarget = 7\nresult = linear_search(numbers, target)\nprint(f"Array: {numbers}")\nprint(f"Searching for: {target}")\nprint(f"Found at index: {result}")',
        explanation: 'Linear search checks each element sequentially until the target is found. Time complexity: O(n).'
      }
    ],
    exercises: [
      {
        id: '10-ex1',
        title: 'Find Maximum Element',
        description: 'Write a function to find the maximum element in a list',
        initialCode: 'def find_max(arr):\n    # Your code here\n    pass\n\nnumbers = [3, 7, 2, 9, 1, 5]\nmax_num = find_max(numbers)\nprint(f"Maximum: {max_num}")',
        expectedOutput: 'Should return the maximum value in the list',
        hints: ['Initialize max_value with first element', 'Compare with each element', 'Update max_value if current is larger']
      }
    ]
  },
  {
    id: '11',
    title: 'Binary Search',
    description: 'Efficient search algorithm for sorted arrays',
    content: 'Binary search is a divide-and-conquer algorithm...',
    difficulty: 'intermediate',
    category: 'Algorithms',
    examples: [
      {
        id: '11-1',
        title: 'Binary Search Implementation',
        description: 'Binary search on sorted array',
        code: 'def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nsorted_numbers = [1, 3, 5, 7, 9, 11, 13, 15]\ntarget = 7\nresult = binary_search(sorted_numbers, target)\nprint(f"Array: {sorted_numbers}")\nprint(f"Searching for: {target}")\nprint(f"Found at index: {result}")',
        explanation: 'Binary search works on sorted arrays and has O(log n) time complexity.'
      }
    ],
    exercises: [
      {
        id: '11-ex1',
        title: 'Binary Search Practice',
        description: 'Find if a number exists in a sorted array',
        initialCode: 'def binary_search(arr, target):\n    # Your code here\n    pass\n\nsorted_arr = [2, 4, 6, 8, 10, 12, 14, 16]\ntarget = 10\nresult = binary_search(sorted_arr, target)\nprint(f"Target {target} found: {result != -1}")',
        expectedOutput: 'Should return True if target exists, False otherwise',
        hints: ['Use two pointers (left, right)', 'Calculate middle index', 'Compare with target and adjust pointers']
      }
    ]
  },
  {
    id: '12',
    title: 'Bubble Sort',
    description: 'Simple sorting algorithm',
    content: 'Bubble sort is a simple comparison-based sorting algorithm...',
    difficulty: 'beginner',
    category: 'Algorithms',
    examples: [
      {
        id: '12-1',
        title: 'Bubble Sort Implementation',
        description: 'Basic bubble sort algorithm',
        code: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nnumbers = [64, 34, 25, 12, 22, 11, 90]\nprint(f"Original array: {numbers}")\nsorted_numbers = bubble_sort(numbers.copy())\nprint(f"Sorted array: {sorted_numbers}")',
        explanation: 'Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.'
      }
    ],
    exercises: [
      {
        id: '12-ex1',
        title: 'Sort in Descending Order',
        description: 'Modify bubble sort to sort in descending order',
        initialCode: 'def bubble_sort_desc(arr):\n    # Your code here\n    pass\n\nnumbers = [5, 2, 8, 1, 9, 3]\nprint(f"Original: {numbers}")\nsorted_desc = bubble_sort_desc(numbers.copy())\nprint(f"Descending: {sorted_desc}")',
        expectedOutput: 'Should return array sorted in descending order',
        hints: ['Change the comparison operator', 'Use < instead of >', 'Keep the same structure']
      }
    ]
  },
  {
    id: '13',
    title: 'Quick Sort',
    description: 'Efficient divide-and-conquer sorting algorithm',
    content: 'Quick sort is a highly efficient, comparison-based sorting algorithm...',
    difficulty: 'advanced',
    category: 'Algorithms',
    examples: [
      {
        id: '13-1',
        title: 'Quick Sort Implementation',
        description: 'Quick sort with pivot selection',
        code: 'def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    \n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    \n    return quick_sort(left) + middle + quick_sort(right)\n\nnumbers = [3, 6, 8, 10, 1, 2, 1]\nprint(f"Original array: {numbers}")\nsorted_numbers = quick_sort(numbers)\nprint(f"Sorted array: {sorted_numbers}")',
        explanation: 'Quick sort uses a pivot element to partition the array and recursively sorts the subarrays.'
      }
    ],
    exercises: [
      {
        id: '13-ex1',
        title: 'Quick Sort with Custom Pivot',
        description: 'Implement quick sort using the first element as pivot',
        initialCode: 'def quick_sort_first_pivot(arr):\n    # Your code here\n    pass\n\nnumbers = [7, 2, 1, 6, 8, 5, 3, 4]\nprint(f"Original: {numbers}")\nsorted_arr = quick_sort_first_pivot(numbers)\nprint(f"Sorted: {sorted_arr}")',
        expectedOutput: 'Should return sorted array using first element as pivot',
        hints: ['Use arr[0] as pivot', 'Partition around the pivot', 'Recursively sort left and right parts']
      }
    ]
  },
  {
    id: '14',
    title: 'Graph Data Structures - Fundamentals',
    description: 'Understanding graph representation and basic operations',
    content: 'Graphs are fundamental data structures consisting of vertices (nodes) and edges. They are used to model relationships and connections between objects...',
    difficulty: 'advanced',
    category: 'Data Structures',
    examples: [
      {
        id: '14-1',
        title: 'Graph Representation - Adjacency List',
        description: 'Implementing graphs using adjacency lists',
        code: 'from collections import defaultdict\n\nclass Graph:\n    def __init__(self):\n        self.graph = defaultdict(list)\n    \n    def add_edge(self, u, v, weight=1):\n        self.graph[u].append((v, weight))\n        # For undirected graph, add reverse edge\n        self.graph[v].append((u, weight))\n    \n    def print_graph(self):\n        for vertex in self.graph:\n            print(f"{vertex} -> {self.graph[vertex]}")\n\n# Create and test graph\ng = Graph()\ng.add_edge(0, 1, 4)\ng.add_edge(0, 2, 3)\ng.add_edge(1, 2, 1)\ng.add_edge(1, 3, 2)\ng.add_edge(2, 3, 4)\ng.add_edge(3, 4, 2)\ng.add_edge(2, 4, 3)\n\ng.print_graph()',
        explanation: 'Adjacency list representation stores each vertex with a list of its adjacent vertices and edge weights. Space complexity: O(V + E).'
      },
      {
        id: '14-2',
        title: 'Graph Representation - Adjacency Matrix',
        description: 'Implementing graphs using adjacency matrices',
        code: 'class GraphMatrix:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.graph = [[0 for _ in range(vertices)] for _ in range(vertices)]\n    \n    def add_edge(self, u, v, weight=1):\n        self.graph[u][v] = weight\n        # For undirected graph\n        self.graph[v][u] = weight\n    \n    def print_graph(self):\n        for i in range(self.V):\n            for j in range(self.V):\n                print(f"{self.graph[i][j]}", end=" ")\n            print()\n\n# Create and test graph\ng = GraphMatrix(5)\ng.add_edge(0, 1, 4)\ng.add_edge(0, 2, 3)\ng.add_edge(1, 2, 1)\ng.add_edge(1, 3, 2)\ng.add_edge(2, 3, 4)\ng.add_edge(3, 4, 2)\ng.add_edge(2, 4, 3)\n\ng.print_graph()',
        explanation: 'Adjacency matrix uses a 2D array where graph[i][j] represents the weight of edge from vertex i to j. Space complexity: O(V²).'
      },
      {
        id: '14-3',
        title: 'Graph Traversal - Depth First Search (DFS)',
        description: 'Implementing DFS for graph traversal',
        code: 'from collections import defaultdict\n\nclass Graph:\n    def __init__(self):\n        self.graph = defaultdict(list)\n    \n    def add_edge(self, u, v):\n        self.graph[u].append(v)\n    \n    def dfs_recursive(self, start, visited=None):\n        if visited is None:\n            visited = set()\n        \n        visited.add(start)\n        print(f"Visited: {start}")\n        \n        for neighbor in self.graph[start]:\n            if neighbor not in visited:\n                self.dfs_recursive(neighbor, visited)\n    \n    def dfs_iterative(self, start):\n        visited = set()\n        stack = [start]\n        \n        while stack:\n            vertex = stack.pop()\n            if vertex not in visited:\n                visited.add(vertex)\n                print(f"Visited: {vertex}")\n                # Add unvisited neighbors to stack\n                for neighbor in reversed(self.graph[vertex]):\n                    if neighbor not in visited:\n                        stack.append(neighbor)\n\n# Test DFS\ng = Graph()\ng.add_edge(0, 1)\ng.add_edge(0, 2)\ng.add_edge(1, 2)\ng.add_edge(2, 0)\ng.add_edge(2, 3)\ng.add_edge(3, 3)\n\nprint("DFS Recursive:")\ng.dfs_recursive(2)\nprint("\\nDFS Iterative:")\ng.dfs_iterative(2)',
        explanation: 'DFS explores as far as possible along each branch before backtracking. Time complexity: O(V + E), Space complexity: O(V).'
      },
      {
        id: '14-4',
        title: 'Graph Traversal - Breadth First Search (BFS)',
        description: 'Implementing BFS for graph traversal',
        code: 'from collections import defaultdict, deque\n\nclass Graph:\n    def __init__(self):\n        self.graph = defaultdict(list)\n    \n    def add_edge(self, u, v):\n        self.graph[u].append(v)\n    \n    def bfs(self, start):\n        visited = set()\n        queue = deque([start])\n        visited.add(start)\n        \n        while queue:\n            vertex = queue.popleft()\n            print(f"Visited: {vertex}")\n            \n            for neighbor in self.graph[vertex]:\n                if neighbor not in visited:\n                    visited.add(neighbor)\n                    queue.append(neighbor)\n    \n    def bfs_with_levels(self, start):\n        visited = set()\n        queue = deque([(start, 0)])  # (vertex, level)\n        visited.add(start)\n        \n        while queue:\n            vertex, level = queue.popleft()\n            print(f"Vertex: {vertex}, Level: {level}")\n            \n            for neighbor in self.graph[vertex]:\n                if neighbor not in visited:\n                    visited.add(neighbor)\n                    queue.append((neighbor, level + 1))\n\n# Test BFS\ng = Graph()\ng.add_edge(0, 1)\ng.add_edge(0, 2)\ng.add_edge(1, 2)\ng.add_edge(2, 0)\ng.add_edge(2, 3)\ng.add_edge(3, 3)\n\nprint("BFS:")\ng.bfs(2)\nprint("\\nBFS with Levels:")\ng.bfs_with_levels(2)',
        explanation: 'BFS explores all vertices at the current depth before moving to vertices at the next depth level. Time complexity: O(V + E).'
      }
    ],
    exercises: [
      {
        id: '14-ex1',
        title: 'Graph Creation and Traversal',
        description: 'Create a graph and implement both DFS and BFS',
        initialCode: 'from collections import defaultdict\n\nclass Graph:\n    def __init__(self):\n        # Your code here\n        pass\n    \n    def add_edge(self, u, v):\n        # Your code here\n        pass\n    \n    def dfs(self, start):\n        # Your code here\n        pass\n    \n    def bfs(self, start):\n        # Your code here\n        pass\n\n# Test your implementation\ng = Graph()\ng.add_edge(0, 1)\ng.add_edge(0, 2)\ng.add_edge(1, 3)\ng.add_edge(2, 3)\ng.add_edge(3, 4)\n\nprint("DFS:")\ng.dfs(0)\nprint("\\nBFS:")\ng.bfs(0)',
        expectedOutput: 'Should show DFS and BFS traversal of the graph',
        hints: ['Use defaultdict(list) for adjacency list', 'Use set for visited vertices', 'Use stack for DFS', 'Use queue for BFS']
      }
    ]
  },
  {
    id: '15',
    title: 'Shortest Path Algorithms',
    description: 'Dijkstra\'s and Bellman-Ford algorithms for shortest path',
    content: 'Shortest path algorithms find the path with minimum total weight between two vertices in a weighted graph...',
    difficulty: 'advanced',
    category: 'Algorithms',
    examples: [
      {
        id: '15-1',
        title: 'Dijkstra\'s Algorithm',
        description: 'Finding shortest path in weighted graph with non-negative edges',
        code: 'import heapq\nfrom collections import defaultdict\n\nclass Graph:\n    def __init__(self):\n        self.graph = defaultdict(list)\n    \n    def add_edge(self, u, v, weight):\n        self.graph[u].append((v, weight))\n    \n    def dijkstra(self, start):\n        # Initialize distances\n        distances = {vertex: float(\'infinity\') for vertex in self.graph}\n        distances[start] = 0\n        \n        # Priority queue: (distance, vertex)\n        pq = [(0, start)]\n        \n        while pq:\n            current_distance, current_vertex = heapq.heappop(pq)\n            \n            # If we\'ve already found a shorter path, skip\n            if current_distance > distances[current_vertex]:\n                continue\n            \n            # Check all neighbors\n            for neighbor, weight in self.graph[current_vertex]:\n                distance = current_distance + weight\n                \n                # If we found a shorter path, update it\n                if distance < distances[neighbor]:\n                    distances[neighbor] = distance\n                    heapq.heappush(pq, (distance, neighbor))\n        \n        return distances\n\n# Test Dijkstra\'s algorithm\ng = Graph()\ng.add_edge(0, 1, 4)\ng.add_edge(0, 2, 2)\ng.add_edge(1, 2, 1)\ng.add_edge(1, 3, 5)\ng.add_edge(2, 3, 8)\ng.add_edge(2, 4, 10)\ng.add_edge(3, 4, 2)\n\nshortest_paths = g.dijkstra(0)\nprint("Shortest distances from vertex 0:")\nfor vertex, distance in shortest_paths.items():\n    print(f"To vertex {vertex}: {distance}")',
        explanation: 'Dijkstra\'s algorithm finds shortest paths from a source vertex to all other vertices. Time complexity: O((V + E) log V) with binary heap.'
      },
      {
        id: '15-2',
        title: 'Bellman-Ford Algorithm',
        description: 'Finding shortest path with negative edge weights',
        code: 'from collections import defaultdict\n\nclass Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.edges = []\n    \n    def add_edge(self, u, v, weight):\n        self.edges.append((u, v, weight))\n    \n    def bellman_ford(self, start):\n        # Initialize distances\n        distances = [float(\'infinity\')] * self.V\n        distances[start] = 0\n        \n        # Relax edges V-1 times\n        for _ in range(self.V - 1):\n            for u, v, weight in self.edges:\n                if distances[u] != float(\'infinity\') and distances[u] + weight < distances[v]:\n                    distances[v] = distances[u] + weight\n        \n        # Check for negative weight cycles\n        for u, v, weight in self.edges:\n            if distances[u] != float(\'infinity\') and distances[u] + weight < distances[v]:\n                print("Graph contains negative weight cycle!")\n                return None\n        \n        return distances\n\n# Test Bellman-Ford\ng = Graph(5)\ng.add_edge(0, 1, -1)\ng.add_edge(0, 2, 4)\ng.add_edge(1, 2, 3)\ng.add_edge(1, 3, 2)\ng.add_edge(1, 4, 2)\ng.add_edge(3, 2, 5)\ng.add_edge(3, 1, 1)\ng.add_edge(4, 3, -3)\n\nshortest_paths = g.bellman_ford(0)\nif shortest_paths:\n    print("Shortest distances from vertex 0:")\n    for i, distance in enumerate(shortest_paths):\n        print(f"To vertex {i}: {distance}")',
        explanation: 'Bellman-Ford can handle negative edge weights and detect negative cycles. Time complexity: O(VE).'
      },
      {
        id: '15-3',
        title: 'Floyd-Warshall Algorithm',
        description: 'Finding shortest paths between all pairs of vertices',
        code: 'class Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.graph = [[float(\'infinity\')] * vertices for _ in range(vertices)]\n        # Distance from vertex to itself is 0\n        for i in range(vertices):\n            self.graph[i][i] = 0\n    \n    def add_edge(self, u, v, weight):\n        self.graph[u][v] = weight\n    \n    def floyd_warshall(self):\n        dist = [row[:] for row in self.graph]  # Copy the graph\n        \n        # Add all vertices as intermediate vertices\n        for k in range(self.V):\n            for i in range(self.V):\n                for j in range(self.V):\n                    # If vertex k is on the shortest path from i to j,\n                    # then update the value of dist[i][j]\n                    if dist[i][k] + dist[k][j] < dist[i][j]:\n                        dist[i][j] = dist[i][k] + dist[k][j]\n        \n        return dist\n    \n    def print_solution(self, dist):\n        print("Shortest distances between all pairs:")\n        for i in range(self.V):\n            for j in range(self.V):\n                if dist[i][j] == float(\'infinity\'):\n                    print("INF", end=" ")\n                else:\n                    print(f"{dist[i][j]:2d}", end=" ")\n            print()\n\n# Test Floyd-Warshall\ng = Graph(4)\ng.add_edge(0, 1, 5)\ng.add_edge(0, 3, 10)\ng.add_edge(1, 2, 3)\ng.add_edge(2, 3, 1)\n\nall_pairs_shortest = g.floyd_warshall()\ng.print_solution(all_pairs_shortest)',
        explanation: 'Floyd-Warshall finds shortest paths between all pairs of vertices. Time complexity: O(V³), Space complexity: O(V²).'
      }
    ],
    exercises: [
      {
        id: '15-ex1',
        title: 'Implement Dijkstra\'s Algorithm',
        description: 'Implement Dijkstra\'s algorithm for shortest path',
        initialCode: 'import heapq\nfrom collections import defaultdict\n\nclass Graph:\n    def __init__(self):\n        # Your code here\n        pass\n    \n    def add_edge(self, u, v, weight):\n        # Your code here\n        pass\n    \n    def dijkstra(self, start):\n        # Your code here\n        pass\n\n# Test your implementation\ng = Graph()\ng.add_edge(0, 1, 4)\ng.add_edge(0, 2, 2)\ng.add_edge(1, 2, 1)\ng.add_edge(1, 3, 5)\ng.add_edge(2, 3, 8)\n\nresult = g.dijkstra(0)\nprint("Shortest paths:", result)',
        expectedOutput: 'Should return shortest distances from start vertex',
        hints: ['Use priority queue (heapq)', 'Initialize distances to infinity', 'Update distances when shorter path found', 'Use (distance, vertex) tuples in queue']
      }
    ]
  },
  {
    id: '16',
    title: 'Minimum Spanning Tree Algorithms',
    description: 'Kruskal\'s and Prim\'s algorithms for MST',
    content: 'A Minimum Spanning Tree (MST) is a subset of edges that connects all vertices with minimum total weight...',
    difficulty: 'advanced',
    category: 'Algorithms',
    examples: [
      {
        id: '16-1',
        title: 'Kruskal\'s Algorithm',
        description: 'Finding MST using Union-Find data structure',
        code: 'class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    \n    def find(self, x):\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    \n    def union(self, x, y):\n        px, py = self.find(x), self.find(y)\n        if px == py:\n            return False\n        \n        if self.rank[px] < self.rank[py]:\n            self.parent[px] = py\n        elif self.rank[px] > self.rank[py]:\n            self.parent[py] = px\n        else:\n            self.parent[py] = px\n            self.rank[px] += 1\n        return True\n\nclass Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.edges = []\n    \n    def add_edge(self, u, v, weight):\n        self.edges.append((weight, u, v))\n    \n    def kruskal(self):\n        # Sort edges by weight\n        self.edges.sort()\n        \n        uf = UnionFind(self.V)\n        mst = []\n        total_weight = 0\n        \n        for weight, u, v in self.edges:\n            if uf.union(u, v):\n                mst.append((u, v, weight))\n                total_weight += weight\n        \n        return mst, total_weight\n\n# Test Kruskal\'s algorithm\ng = Graph(4)\ng.add_edge(0, 1, 10)\ng.add_edge(0, 2, 6)\ng.add_edge(0, 3, 5)\ng.add_edge(1, 3, 15)\ng.add_edge(2, 3, 4)\n\nmst, total = g.kruskal()\nprint("MST edges:")\nfor u, v, weight in mst:\n    print(f"{u} -- {v} : {weight}")\nprint(f"Total weight: {total}")',
        explanation: 'Kruskal\'s algorithm sorts edges by weight and adds them if they don\'t create a cycle. Time complexity: O(E log E).'
      },
      {
        id: '16-2',
        title: 'Prim\'s Algorithm',
        description: 'Finding MST using priority queue',
        code: 'import heapq\nfrom collections import defaultdict\n\nclass Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.graph = defaultdict(list)\n    \n    def add_edge(self, u, v, weight):\n        self.graph[u].append((v, weight))\n        self.graph[v].append((u, weight))  # Undirected graph\n    \n    def prim(self, start=0):\n        # Priority queue: (weight, vertex, parent)\n        pq = [(0, start, -1)]\n        visited = set()\n        mst = []\n        total_weight = 0\n        \n        while pq and len(visited) < self.V:\n            weight, vertex, parent = heapq.heappop(pq)\n            \n            if vertex in visited:\n                continue\n            \n            visited.add(vertex)\n            if parent != -1:\n                mst.append((parent, vertex, weight))\n                total_weight += weight\n            \n            # Add all unvisited neighbors to priority queue\n            for neighbor, edge_weight in self.graph[vertex]:\n                if neighbor not in visited:\n                    heapq.heappush(pq, (edge_weight, neighbor, vertex))\n        \n        return mst, total_weight\n\n# Test Prim\'s algorithm\ng = Graph(4)\ng.add_edge(0, 1, 10)\ng.add_edge(0, 2, 6)\ng.add_edge(0, 3, 5)\ng.add_edge(1, 3, 15)\ng.add_edge(2, 3, 4)\n\nmst, total = g.prim()\nprint("MST edges:")\nfor u, v, weight in mst:\n    print(f"{u} -- {v} : {weight}")\nprint(f"Total weight: {total}")',
        explanation: 'Prim\'s algorithm grows the MST from a starting vertex by adding the minimum weight edge to unvisited vertices. Time complexity: O(E log V).'
      }
    ],
    exercises: [
      {
        id: '16-ex1',
        title: 'Implement Kruskal\'s Algorithm',
        description: 'Implement Kruskal\'s algorithm for MST',
        initialCode: 'class UnionFind:\n    def __init__(self, n):\n        # Your code here\n        pass\n    \n    def find(self, x):\n        # Your code here\n        pass\n    \n    def union(self, x, y):\n        # Your code here\n        pass\n\nclass Graph:\n    def __init__(self, vertices):\n        # Your code here\n        pass\n    \n    def add_edge(self, u, v, weight):\n        # Your code here\n        pass\n    \n    def kruskal(self):\n        # Your code here\n        pass\n\n# Test your implementation\ng = Graph(4)\ng.add_edge(0, 1, 10)\ng.add_edge(0, 2, 6)\ng.add_edge(0, 3, 5)\ng.add_edge(1, 3, 15)\ng.add_edge(2, 3, 4)\n\nmst, total = g.kruskal()\nprint("MST weight:", total)',
        expectedOutput: 'Should return MST edges and total weight',
        hints: ['Sort edges by weight', 'Use Union-Find to detect cycles', 'Add edge if it doesn\'t create cycle', 'Track total weight']
      }
    ]
  },
  {
    id: '17',
    title: 'Advanced Graph Algorithms',
    description: 'Topological Sort, Strongly Connected Components, and more',
    content: 'Advanced graph algorithms solve complex problems like dependency resolution, cycle detection, and component analysis...',
    difficulty: 'advanced',
    category: 'Algorithms',
    examples: [
      {
        id: '17-1',
        title: 'Topological Sort',
        description: 'Ordering vertices in a directed acyclic graph',
        code: 'from collections import defaultdict, deque\n\nclass Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.graph = defaultdict(list)\n        self.in_degree = [0] * vertices\n    \n    def add_edge(self, u, v):\n        self.graph[u].append(v)\n        self.in_degree[v] += 1\n    \n    def topological_sort_kahn(self):\n        # Kahn\'s algorithm\n        in_degree = self.in_degree.copy()\n        queue = deque([i for i in range(self.V) if in_degree[i] == 0])\n        result = []\n        \n        while queue:\n            u = queue.popleft()\n            result.append(u)\n            \n            for v in self.graph[u]:\n                in_degree[v] -= 1\n                if in_degree[v] == 0:\n                    queue.append(v)\n        \n        if len(result) != self.V:\n            return None  # Graph has cycle\n        return result\n    \n    def topological_sort_dfs(self):\n        # DFS-based topological sort\n        visited = [False] * self.V\n        stack = []\n        \n        def dfs(u):\n            visited[u] = True\n            for v in self.graph[u]:\n                if not visited[v]:\n                    dfs(v)\n            stack.append(u)\n        \n        for i in range(self.V):\n            if not visited[i]:\n                dfs(i)\n        \n        return stack[::-1]\n\n# Test topological sort\ng = Graph(6)\ng.add_edge(5, 2)\ng.add_edge(5, 0)\ng.add_edge(4, 0)\ng.add_edge(4, 1)\ng.add_edge(2, 3)\ng.add_edge(3, 1)\n\nprint("Kahn\'s algorithm:")\nresult = g.topological_sort_kahn()\nif result:\n    print("Topological order:", result)\nelse:\n    print("Graph has cycle!")\n\nprint("\\nDFS-based:")\nresult = g.topological_sort_dfs()\nprint("Topological order:", result)',
        explanation: 'Topological sort orders vertices so that all edges point forward. Kahn\'s algorithm uses in-degree, DFS version uses recursion.'
      },
      {
        id: '17-2',
        title: 'Strongly Connected Components (Tarjan\'s Algorithm)',
        description: 'Finding strongly connected components in directed graph',
        code: 'from collections import defaultdict\n\nclass Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.graph = defaultdict(list)\n        self.Time = 0\n    \n    def add_edge(self, u, v):\n        self.graph[u].append(v)\n    \n    def tarjan_scc(self):\n        disc = [-1] * self.V\n        low = [-1] * self.V\n        stack_member = [False] * self.V\n        st = []\n        scc_list = []\n        \n        def dfs(u):\n            nonlocal self\n            disc[u] = self.Time\n            low[u] = self.Time\n            self.Time += 1\n            stack_member[u] = True\n            st.append(u)\n            \n            for v in self.graph[u]:\n                if disc[v] == -1:\n                    dfs(v)\n                    low[u] = min(low[u], low[v])\n                elif stack_member[v]:\n                    low[u] = min(low[u], disc[v])\n            \n            # If u is root of SCC\n            if low[u] == disc[u]:\n                scc = []\n                while True:\n                    w = st.pop()\n                    stack_member[w] = False\n                    scc.append(w)\n                    if w == u:\n                        break\n                scc_list.append(scc)\n        \n        for i in range(self.V):\n            if disc[i] == -1:\n                dfs(i)\n        \n        return scc_list\n\n# Test Tarjan\'s algorithm\ng = Graph(5)\ng.add_edge(1, 0)\ng.add_edge(0, 2)\ng.add_edge(2, 1)\ng.add_edge(0, 3)\ng.add_edge(3, 4)\n\nsccs = g.tarjan_scc()\nprint("Strongly Connected Components:")\nfor i, scc in enumerate(sccs):\n    print(f"Component {i}: {scc}")',
        explanation: 'Tarjan\'s algorithm finds strongly connected components using DFS with discovery time and lowest reachable vertex.'
      },
      {
        id: '17-3',
        title: 'Cycle Detection in Directed Graph',
        description: 'Detecting cycles using DFS with color coding',
        code: 'from collections import defaultdict\n\nclass Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.graph = defaultdict(list)\n    \n    def add_edge(self, u, v):\n        self.graph[u].append(v)\n    \n    def has_cycle_dfs(self):\n        # Colors: 0 = white (unvisited), 1 = gray (visiting), 2 = black (visited)\n        color = [0] * self.V\n        \n        def dfs(u):\n            color[u] = 1  # Mark as visiting\n            \n            for v in self.graph[u]:\n                if color[v] == 1:  # Back edge found\n                    return True\n                elif color[v] == 0:  # Unvisited\n                    if dfs(v):\n                        return True\n            \n            color[u] = 2  # Mark as visited\n            return False\n        \n        for i in range(self.V):\n            if color[i] == 0:\n                if dfs(i):\n                    return True\n        return False\n    \n    def has_cycle_union_find(self):\n        # Union-Find approach for undirected graph\n        parent = list(range(self.V))\n        \n        def find(x):\n            if parent[x] != x:\n                parent[x] = find(parent[x])\n            return parent[x]\n        \n        def union(x, y):\n            px, py = find(x), find(y)\n            if px == py:\n                return True  # Cycle detected\n            parent[px] = py\n            return False\n        \n        # For demonstration, we\'ll check all edges\n        edges = []\n        for u in self.graph:\n            for v in self.graph[u]:\n                edges.append((u, v))\n        \n        for u, v in edges:\n            if union(u, v):\n                return True\n        return False\n\n# Test cycle detection\ng = Graph(4)\ng.add_edge(0, 1)\ng.add_edge(1, 2)\ng.add_edge(2, 3)\ng.add_edge(3, 1)  # Creates cycle\n\nprint("DFS Cycle Detection:", g.has_cycle_dfs())\n\n# Undirected graph for Union-Find\ng2 = Graph(3)\ng2.add_edge(0, 1)\ng2.add_edge(1, 2)\ng2.add_edge(2, 0)  # Creates cycle\n\nprint("Union-Find Cycle Detection:", g2.has_cycle_union_find())',
        explanation: 'DFS with color coding detects cycles in directed graphs. Union-Find detects cycles in undirected graphs.'
      }
    ],
    exercises: [
      {
        id: '17-ex1',
        title: 'Implement Topological Sort',
        description: 'Implement Kahn\'s algorithm for topological sort',
        initialCode: 'from collections import defaultdict, deque\n\nclass Graph:\n    def __init__(self, vertices):\n        # Your code here\n        pass\n    \n    def add_edge(self, u, v):\n        # Your code here\n        pass\n    \n    def topological_sort(self):\n        # Your code here\n        pass\n\n# Test your implementation\ng = Graph(6)\ng.add_edge(5, 2)\ng.add_edge(5, 0)\ng.add_edge(4, 0)\ng.add_edge(4, 1)\ng.add_edge(2, 3)\ng.add_edge(3, 1)\n\nresult = g.topological_sort()\nprint("Topological order:", result)',
        expectedOutput: 'Should return topological ordering of vertices',
        hints: ['Calculate in-degree for each vertex', 'Use queue for vertices with in-degree 0', 'Decrease in-degree when removing edges', 'Check for cycles']
      }
    ]
  },
  {
    id: '18',
    title: 'Python Yield and Generators - Fundamentals',
    description: 'Understanding yield keyword and generator functions',
    content: 'The `yield` keyword in Python is used to create generator functions that can pause and resume execution, making them memory-efficient for handling large datasets...',
    difficulty: 'intermediate',
    category: 'Python Advanced',
    examples: [
      {
        id: '18-1',
        title: 'Basic Generator Function',
        description: 'Creating a simple generator with yield',
        code: 'def number_generator(n):\n    """Generate numbers from 0 to n-1"""\n    for i in range(n):\n        yield i\n\n# Using the generator\ngen = number_generator(5)\nprint("Generator object:", gen)\nprint("Type:", type(gen))\n\n# Iterating through the generator\nprint("\\nNumbers from generator:")\nfor num in gen:\n    print(num, end=" ")\n\nprint("\\n\\nGenerator is exhausted:")\nfor num in gen:  # This won\'t print anything\n    print(num)\n\n# Creating a new generator\nprint("\\nNew generator:")\ngen2 = number_generator(3)\nprint(list(gen2))',
        explanation: 'Generator functions use `yield` to return values one at a time. They maintain their state between calls and are memory-efficient for large sequences.'
      },
      {
        id: '18-2',
        title: 'Generator vs List Comparison',
        description: 'Memory efficiency comparison between generators and lists',
        code: 'import sys\n\ndef list_approach(n):\n    """Create a list of numbers"""\n    return [i for i in range(n)]\n\ndef generator_approach(n):\n    """Generate numbers one at a time"""\n    for i in range(n):\n        yield i\n\n# Memory comparison\nn = 1000000\n\nprint("Memory usage comparison:")\nprint(f"n = {n:,}")\n\n# List approach\nnumbers_list = list_approach(n)\nlist_memory = sys.getsizeof(numbers_list)\nprint(f"List memory usage: {list_memory:,} bytes")\n\n# Generator approach\ngen = generator_approach(n)\ngen_memory = sys.getsizeof(gen)\nprint(f"Generator memory usage: {gen_memory:,} bytes")\n\n# Calculate memory ratio\nratio = list_memory / gen_memory\nprint(f"List uses {ratio:.1f}x more memory than generator")\n\n# Time to access first element\nimport time\n\nstart = time.time()\nfirst_list = numbers_list[0]\nlist_time = time.time() - start\n\nstart = time.time()\nfirst_gen = next(gen)\ngen_time = time.time() - start\n\nprint(f"\\nAccess time comparison:")\nprint(f"List first element: {list_time:.6f} seconds")\nprint(f"Generator first element: {gen_time:.6f} seconds")',
        explanation: 'Generators are much more memory-efficient than lists for large datasets, as they generate values on-demand rather than storing them all in memory.'
      },
      {
        id: '18-3',
        title: 'Generator Expressions',
        description: 'Creating generators using generator expressions',
        code: '# Generator expression syntax: (expression for item in iterable)\n\n# List comprehension (creates list in memory)\nnumbers_list = [x**2 for x in range(10)]\nprint("List comprehension:", numbers_list)\nprint("Type:", type(numbers_list))\n\n# Generator expression (creates generator)\nnumbers_gen = (x**2 for x in range(10))\nprint("\\nGenerator expression:", numbers_gen)\nprint("Type:", type(numbers_gen))\nprint("Values:", list(numbers_gen))\n\n# Memory comparison\nimport sys\n\nlarge_list = [x**2 for x in range(1000000)]\nlarge_gen = (x**2 for x in range(1000000))\n\nprint(f"\\nMemory usage:")\nprint(f"List: {sys.getsizeof(large_list):,} bytes")\nprint(f"Generator: {sys.getsizeof(large_gen):,} bytes")\n\n# Practical example: Processing large file\nprint("\\nProcessing large dataset:")\n# Simulate processing large dataset\nlarge_dataset = (i for i in range(1000000))\n\ncount = 0\nfor item in large_dataset:\n    if item % 100000 == 0:\n        print(f"Processed {item:,} items")\n    count += 1\n    if count >= 10:  # Just show first 10 for demo\n        break\n\nprint("Generator processing complete!")',
        explanation: 'Generator expressions provide a concise way to create generators. They are memory-efficient and perfect for processing large datasets.'
      },
      {
        id: '18-4',
        title: 'Multiple Yield Statements',
        description: 'Using multiple yield statements in a generator function',
        code: 'def multi_yield_generator():\n    """Generator with multiple yield statements"""\n    print("Starting generator...")\n    yield "First yield"\n    \n    print("After first yield...")\n    yield "Second yield"\n    \n    print("After second yield...")\n    yield "Third yield"\n    \n    print("Generator finished")\n\n# Using the generator\nprint("Creating generator...")\ngen = multi_yield_generator()\n\nprint("\\nCalling next() multiple times:")\nprint("1st call:", next(gen))\nprint("2nd call:", next(gen))\nprint("3rd call:", next(gen))\n\n# This would raise StopIteration\ntry:\n    print("4th call:", next(gen))\nexcept StopIteration:\n    print("Generator exhausted - StopIteration raised")\n\n# Using in a loop\nprint("\\nUsing in a loop:")\ngen2 = multi_yield_generator()\nfor item in gen2:\n    print(f"Received: {item}")',
        explanation: 'Multiple yield statements allow generators to pause and resume execution at different points, maintaining state between calls.'
      }
    ],
    exercises: [
      {
        id: '18-ex1',
        title: 'Create a Fibonacci Generator',
        description: 'Implement a generator that yields Fibonacci numbers',
        initialCode: 'def fibonacci_generator(n):\n    """Generate first n Fibonacci numbers"""\n    # Your code here\n    pass\n\n# Test your implementation\nfib_gen = fibonacci_generator(10)\nprint("First 10 Fibonacci numbers:")\nfor num in fib_gen:\n    print(num, end=" ")\n\n# Expected output: 0 1 1 2 3 5 8 13 21 34',
        expectedOutput: 'Should print first 10 Fibonacci numbers: 0 1 1 2 3 5 8 13 21 34',
        hints: ['Initialize first two numbers (0, 1)', 'Use a loop to generate n numbers', 'Yield each number', 'Update the next number as sum of previous two']
      }
    ]
  },
  {
    id: '19',
    title: 'Advanced Generator Techniques',
    description: 'Generator methods, send(), throw(), and close()',
    content: 'Advanced generator techniques include using send() to pass values back to the generator, throw() to raise exceptions, and close() to terminate generators...',
    difficulty: 'advanced',
    category: 'Python Advanced',
    examples: [
      {
        id: '19-1',
        title: 'Generator send() Method',
        description: 'Using send() to pass values back to generators',
        code: 'def counter_generator():\n    """Generator that can receive values via send()"""\n    count = 0\n    while True:\n        received = yield count\n        if received is not None:\n            count = received\n        else:\n            count += 1\n\n# Using send() method\ngen = counter_generator()\n\n# Must start with next() or send(None)\nprint("Starting generator...")\nprint("Initial value:", next(gen))\n\nprint("\\nSending values to generator:")\nprint("Send 10:", gen.send(10))\nprint("Next value:", next(gen))\nprint("Send 100:", gen.send(100))\nprint("Next value:", next(gen))\n\n# Practical example: Accumulator\ndef accumulator():\n    """Accumulate values sent to it"""\n    total = 0\n    while True:\n        value = yield total\n        if value is not None:\n            total += value\n\nprint("\\nAccumulator example:")\nacc = accumulator()\nnext(acc)  # Start the generator\n\nprint("Initial total:", acc.send(5))\nprint("After adding 10:", acc.send(10))\nprint("After adding 3:", acc.send(3))\nprint("After adding 7:", acc.send(7))',
        explanation: 'The send() method allows two-way communication with generators. The first call must be next() or send(None) to start the generator.'
      },
      {
        id: '19-2',
        title: 'Generator throw() Method',
        description: 'Raising exceptions in generators using throw()',
        code: 'def resilient_generator():\n    """Generator that handles exceptions gracefully"""\n    try:\n        for i in range(10):\n            try:\n                yield i\n            except ValueError as e:\n                print(f"Caught ValueError: {e}")\n                yield f"Error at {i}"\n            except RuntimeError as e:\n                print(f"Caught RuntimeError: {e}")\n                break\n    except GeneratorExit:\n        print("Generator is being closed")\n        raise\n\n# Using throw() method\ngen = resilient_generator()\n\nprint("Normal iteration:")\nprint("1st value:", next(gen))\nprint("2nd value:", next(gen))\n\nprint("\\nThrowing ValueError:")\ntry:\n    gen.throw(ValueError, "Test error")\nexcept StopIteration:\n    print("Generator exhausted")\n\n# Create new generator for RuntimeError test\ngen2 = resilient_generator()\nnext(gen2)\nnext(gen2)\n\nprint("\\nThrowing RuntimeError:")\ntry:\n    gen2.throw(RuntimeError, "Fatal error")\nexcept StopIteration:\n    print("Generator stopped due to RuntimeError")\n\n# Practical example: Error handling in data processing\ndef data_processor():\n    """Process data with error handling"""\n    data = [1, 2, "error", 4, 5]\n    \n    for i, item in enumerate(data):\n        try:\n            if isinstance(item, str):\n                raise ValueError(f"Invalid data type at index {i}")\n            yield item * 2\n        except ValueError as e:\n            yield f"Error: {e}"\n\nprint("\\nData processing with error handling:")\nprocessor = data_processor()\nfor result in processor:\n    print(f"Result: {result}")',
        explanation: 'The throw() method allows raising exceptions within generators, enabling sophisticated error handling and control flow.'
      },
      {
        id: '19-3',
        title: 'Generator close() Method',
        description: 'Properly closing generators and cleanup',
        code: 'def resource_generator():\n    """Generator that manages resources"""\n    print("Opening resource...")\n    resource = "database_connection"  # Simulated resource\n    \n    try:\n        for i in range(5):\n            print(f"Processing item {i} with {resource}")\n            yield i\n    except GeneratorExit:\n        print(f"Closing {resource}...")  # Cleanup code\n        raise\n    finally:\n        print("Cleanup completed")\n\n# Normal usage\ngen = resource_generator()\nprint("Normal iteration:")\nfor item in gen:\n    print(f"Got: {item}")\n    if item == 2:\n        break\n\nprint("\\nExplicit close:")\ngen2 = resource_generator()\nnext(gen2)\nnext(gen2)\ngen2.close()  # Explicitly close the generator\n\n# Context manager example\nfrom contextlib import contextmanager\n\n@contextmanager\ndef managed_generator():\n    """Context manager for generator cleanup"""\n    gen = resource_generator()\n    try:\n        yield gen\n    finally:\n        gen.close()\n\nprint("\\nUsing context manager:")\nwith managed_generator() as gen:\n    for item in gen:\n        print(f"Context item: {item}")\n        if item == 1:\n            break',
        explanation: 'The close() method properly terminates generators and ensures cleanup code is executed. It raises GeneratorExit within the generator.'
      },
      {
        id: '19-4',
        title: 'Generator Delegation with yield from',
        description: 'Using yield from to delegate to sub-generators',
        code: 'def sub_generator1():\n    """First sub-generator"""\n    yield "A"\n    yield "B"\n    yield "C"\n\ndef sub_generator2():\n    """Second sub-generator"""\n    yield "X"\n    yield "Y"\n    yield "Z"\n\ndef delegating_generator():\n    """Generator that delegates to other generators"""\n    print("Starting delegating generator...")\n    \n    yield "Before delegation"\n    \n    # Delegate to first sub-generator\n    yield from sub_generator1()\n    \n    yield "Between delegations"\n    \n    # Delegate to second sub-generator\n    yield from sub_generator2()\n    \n    yield "After delegation"\n\n# Using yield from\nprint("Delegating generator example:")\nfor item in delegating_generator():\n    print(f"  {item}")\n\n# Practical example: Flattening nested lists\ndef flatten(nested_list):\n    """Flatten a nested list using yield from"""\n    for item in nested_list:\n        if isinstance(item, list):\n            yield from flatten(item)\n        else:\n            yield item\n\nprint("\\nFlattening nested list:")\nnested = [1, [2, 3, [4, 5]], 6, [7, 8]]\nflattened = list(flatten(nested))\nprint(f"Original: {nested}")\nprint(f"Flattened: {flattened}")\n\n# Tree traversal example\nclass TreeNode:\n    def __init__(self, value):\n        self.value = value\n        self.children = []\n    \n    def add_child(self, child):\n        self.children.append(child)\n    \n    def traverse(self):\n        """Traverse tree using yield from"""\n        yield self.value\n        for child in self.children:\n            yield from child.traverse()\n\n# Create a simple tree\nroot = TreeNode("Root")\nchild1 = TreeNode("Child1")\nchild2 = TreeNode("Child2")\ngrandchild1 = TreeNode("Grandchild1")\ngrandchild2 = TreeNode("Grandchild2")\n\nroot.add_child(child1)\nroot.add_child(child2)\nchild1.add_child(grandchild1)\nchild2.add_child(grandchild2)\n\nprint("\\nTree traversal:")\nfor node_value in root.traverse():\n    print(f"  {node_value}")',
        explanation: 'yield from delegates to sub-generators, making it easy to compose generators and flatten nested structures.'
      }
    ],
    exercises: [
      {
        id: '19-ex1',
        title: 'Implement a Stateful Generator',
        description: 'Create a generator that maintains state and responds to send()',
        initialCode: 'def stateful_counter():\n    """Generator that maintains a counter and responds to commands"""\n    # Your code here\n    pass\n\n# Test your implementation\ncounter = stateful_counter()\nnext(counter)  # Start the generator\n\nprint("Initial state:", counter.send("get"))\nprint("After increment:", counter.send("increment"))\nprint("After increment:", counter.send("increment"))\nprint("Current state:", counter.send("get"))\nprint("After reset:", counter.send("reset"))\nprint("Final state:", counter.send("get"))',
        expectedOutput: 'Should handle commands: get, increment, reset and maintain state',
        hints: ['Initialize a counter variable', 'Use yield to return current state', 'Use send() to receive commands', 'Handle different command types']
      }
    ]
  },
  {
    id: '20',
    title: 'Coroutines and Async Generators',
    description: 'Advanced async programming with generators and coroutines',
    content: 'Coroutines are generators that can be used for cooperative multitasking and asynchronous programming. They form the foundation for Python\'s async/await syntax...',
    difficulty: 'advanced',
    category: 'Python Advanced',
    examples: [
      {
        id: '20-1',
        title: 'Basic Coroutines',
        description: 'Creating and using coroutines for cooperative multitasking',
        code: 'def simple_coroutine():\n    """A simple coroutine that receives and processes data"""\n    print("Coroutine started")\n    while True:\n        data = yield\n        if data is None:\n            break\n        print(f"Received: {data}")\n        result = data.upper()\n        yield result\n\n# Using the coroutine\ncoro = simple_coroutine()\nnext(coro)  # Prime the coroutine\n\nprint("Sending data to coroutine:")\nfor item in ["hello", "world", "python"]:\n    result = coro.send(item)\n    print(f"Result: {result}")\n    next(coro)  # Get next yield\n\n# Practical example: Data pipeline\ndef data_processor():\n    """Coroutine that processes data in a pipeline"""\n    print("Data processor started")\n    processed_count = 0\n    \n    while True:\n        data = yield\n        if data is None:\n            break\n        \n        # Process the data\n        processed = data * 2\n        processed_count += 1\n        \n        yield processed\n\n# Using the data processor\nprocessor = data_processor()\nnext(processor)\n\nprint("\\nData processing pipeline:")\ndata_stream = [1, 2, 3, 4, 5]\n\nfor data in data_stream:\n    result = processor.send(data)\n    print(f"Input: {data}, Output: {result}")\n    next(processor)\n\n# Close the coroutine\nprocessor.send(None)',
        explanation: 'Coroutines are generators that can receive data via send() and are used for cooperative multitasking and data processing pipelines.'
      },
      {
        id: '20-2',
        title: 'Coroutine Chaining',
        description: 'Chaining multiple coroutines together',
        code: 'def producer(target):\n    """Producer coroutine that sends data to target"""\n    print("Producer started")\n    for i in range(5):\n        print(f"Producing: {i}")\n        target.send(i)\n    target.close()\n\ndef processor(target):\n    """Processor coroutine that processes data and sends to target"""\n    print("Processor started")\n    try:\n        while True:\n            data = yield\n            processed = data * 2\n            print(f"Processing: {data} -> {processed}")\n            target.send(processed)\n    except GeneratorExit:\n        print("Processor closing")\n        target.close()\n\ndef consumer():\n    """Consumer coroutine that receives and displays data"""\n    print("Consumer started")\n    total = 0\n    try:\n        while True:\n            data = yield\n            total += data\n            print(f"Consuming: {data}, Total: {total}")\n    except GeneratorExit:\n        print(f"Consumer closing, Final total: {total}")\n\n# Chain the coroutines\nprint("Coroutine chain example:")\nc = consumer()\np = processor(c)\n\n# Prime the coroutines\nnext(c)\nnext(p)\n\n# Start the producer\nproducer(p)\n\n# Practical example: Log processing pipeline\ndef log_reader(target):\n    """Read log entries and send to target"""\n    log_entries = [\n        "ERROR: Database connection failed",\n        "INFO: User login successful",\n        "WARNING: High memory usage",\n        "ERROR: File not found",\n        "INFO: Process completed"\n    ]\n    \n    for entry in log_entries:\n        target.send(entry)\n    target.close()\n\ndef log_filter(target):\n    """Filter only ERROR entries"""\n    try:\n        while True:\n            entry = yield\n            if entry.startswith("ERROR:"):\n                target.send(entry)\n    except GeneratorExit:\n        target.close()\n\ndef log_formatter():\n    """Format log entries"""\n    count = 0\n    try:\n        while True:\n            entry = yield\n            count += 1\n            formatted = f"[{count}] {entry}"\n            print(formatted)\n    except GeneratorExit:\n        print(f"Processed {count} error entries")\n\nprint("\\nLog processing pipeline:")\nformatter = log_formatter()\nfilter_coro = log_filter(formatter)\n\nnext(formatter)\nnext(filter_coro)\n\nlog_reader(filter_coro)',
        explanation: 'Coroutines can be chained together to create data processing pipelines, where each coroutine handles a specific transformation.'
      },
      {
        id: '20-3',
        title: 'Async Generators (Python 3.6+)',
        description: 'Using async generators for asynchronous iteration',
        code: 'import asyncio\nimport aiohttp\nimport time\n\n# Simulate async data source\ndef simulate_async_data():\n    """Simulate async data source for demonstration"""\n    async def async_data_generator():\n        for i in range(5):\n            # Simulate async operation\n            await asyncio.sleep(0.1)\n            yield f"Data {i}"\n    return async_data_generator()\n\n# Async generator example\nasync def async_number_generator(n):\n    """Async generator that yields numbers with delays"""\n    for i in range(n):\n        await asyncio.sleep(0.1)  # Simulate async work\n        yield i\n\nasync def process_async_generator():\n    """Process async generator"""\n    print("Processing async generator:")\n    async for num in async_number_generator(5):\n        print(f"Received: {num}")\n        # Simulate processing time\n        await asyncio.sleep(0.05)\n\n# File processing example\nasync def async_file_reader(filename):\n    """Async generator that reads file lines"""\n    # Simulate async file reading\n    lines = [\n        "Line 1: Hello World",\n        "Line 2: Python is awesome",\n        "Line 3: Async programming",\n        "Line 4: Generators rock",\n        "Line 5: End of file"\n    ]\n    \n    for line in lines:\n        await asyncio.sleep(0.1)  # Simulate async I/O\n        yield line\n\nasync def process_file_lines():\n    """Process file lines asynchronously"""\n    print("\\nProcessing file lines:")\n    line_count = 0\n    async for line in async_file_reader("example.txt"):\n        line_count += 1\n        print(f"Processing line {line_count}: {line[:20]}...")\n        await asyncio.sleep(0.05)  # Simulate processing\n    \n    print(f"Processed {line_count} lines")\n\n# Web scraping example (simulated)\nasync def async_url_fetcher(urls):\n    """Async generator that fetches URLs"""\n    for url in urls:\n        # Simulate async HTTP request\n        await asyncio.sleep(0.2)\n        yield f"Content from {url}"\n\nasync def scrape_websites():\n    """Scrape multiple websites asynchronously"""\n    urls = [\n        "https://example1.com",\n        "https://example2.com",\n        "https://example3.com"\n    ]\n    \n    print("\\nScraping websites:")\n    async for content in async_url_fetcher(urls):\n        print(f"Fetched: {content[:30]}...")\n        await asyncio.sleep(0.1)  # Simulate processing\n\n# Run all examples\nasync def main():\n    print("Async Generator Examples")\n    print("=" * 30)\n    \n    await process_async_generator()\n    await process_file_lines()\n    await scrape_websites()\n\n# Note: This would need to be run with asyncio.run(main()) in a real environment\nprint("Async generator examples (simulated):")\nprint("Note: These would need asyncio.run() to execute properly")\nprint("The examples show the structure of async generators")',
        explanation: 'Async generators use async/await syntax and are used for asynchronous iteration, perfect for I/O-bound operations like file reading or web scraping.'
      },
      {
        id: '20-4',
        title: 'Generator-based Context Managers',
        description: 'Creating context managers using generators',
        code: 'from contextlib import contextmanager\nimport time\n\n@contextmanager\ndef timer():\n    """Context manager that times code execution"""\n    start = time.time()\n    try:\n        yield\n    finally:\n        end = time.time()\n        print(f"Execution time: {end - start:.4f} seconds")\n\n@contextmanager\ndef file_handler(filename, mode="r"):\n    """Context manager for file handling"""\n    print(f"Opening file: {filename}")\n    file = open(filename, mode)\n    try:\n        yield file\n    finally:\n        file.close()\n        print(f"Closed file: {filename}")\n\n@contextmanager\ndef database_connection():\n    """Simulate database connection context manager"""\n    print("Connecting to database...")\n    connection = "database_connection"  # Simulated\n    try:\n        yield connection\n    finally:\n        print("Disconnecting from database...")\n\n# Using the context managers\nprint("Timer context manager:")\nwith timer():\n    # Simulate some work\n    time.sleep(0.1)\n    print("Work completed")\n\nprint("\\nFile handler context manager:")\n# Create a temporary file for demonstration\nwith open("temp.txt", "w") as f:\n    f.write("Hello, World!")\n\nwith file_handler("temp.txt", "r") as f:\n    content = f.read()\n    print(f"File content: {content}")\n\nprint("\\nDatabase connection context manager:")\nwith database_connection() as db:\n    print(f"Using connection: {db}")\n    print("Performing database operations...")\n\n# Nested context managers\nprint("\\nNested context managers:")\nwith timer():\n    with database_connection() as db:\n        print(f"Working with {db}")\n        time.sleep(0.05)\n        print("Database operations completed")\n\n# Custom context manager without decorator\ndef custom_context_manager():\n    """Custom context manager without @contextmanager decorator"""\n    print("Entering custom context")\n    try:\n        yield "custom_resource"\n    finally:\n        print("Exiting custom context")\n\n# Using custom context manager\nprint("\\nCustom context manager:")\nwith custom_context_manager() as resource:\n    print(f"Using resource: {resource}")',
        explanation: 'The @contextmanager decorator allows creating context managers using generators, making resource management clean and readable.'
      }
    ],
    exercises: [
      {
        id: '20-ex1',
        title: 'Implement a Coroutine Pipeline',
        description: 'Create a pipeline of coroutines for data processing',
        initialCode: 'def data_source(target):\n    """Generate data and send to target"""\n    # Your code here\n    pass\n\ndef data_filter(target):\n    """Filter even numbers and send to target"""\n    # Your code here\n    pass\n\ndef data_multiplier(target):\n    """Multiply data by 2 and send to target"""\n    # Your code here\n    pass\n\ndef data_sink():\n    """Receive and display final data"""\n    # Your code here\n    pass\n\n# Test your pipeline\nsink = data_sink()\nmultiplier = data_multiplier(sink)\nfilter_coro = data_filter(multiplier)\n\nnext(sink)\nnext(multiplier)\nnext(filter_coro)\n\ndata_source(filter_coro)',
        expectedOutput: 'Should process numbers 1-10, filter even ones, multiply by 2, and display results',
        hints: ['Use send() to pass data between coroutines', 'Prime each coroutine with next()', 'Filter even numbers using modulo', 'Multiply filtered numbers by 2']
      }
    ]
  },
  {
    id: '21',
    title: 'Object-Oriented Programming (OOP) in Python',
    description: 'Learn the fundamentals and advanced features of OOP in Python',
    content: 'Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which can contain data and code. Python supports OOP with features like classes, inheritance, polymorphism, encapsulation, and more.',
    difficulty: 'intermediate',
    category: 'Python OOP',
    examples: [
      {
        id: '21-1',
        title: 'Defining Classes and Creating Objects',
        description: 'How to define a class and instantiate objects',
        code: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        print(f"{self.name} says woof!")\n\n# Create objects\ndog1 = Dog("Buddy", 3)\ndog2 = Dog("Max", 5)\n\ndog1.bark()\ndog2.bark()\nprint(f"{dog1.name} is {dog1.age} years old.")',
        explanation: 'Classes are defined using the class keyword. The __init__ method initializes object attributes. Methods are functions defined within a class.'
      },
      {
        id: '21-2',
        title: 'Inheritance and Method Overriding',
        description: 'How to inherit from a base class and override methods',
        code: 'class Animal:\n    def speak(self):\n        print("Animal speaks")\n\nclass Dog(Animal):\n    def speak(self):\n        print("Dog barks")\n\nclass Cat(Animal):\n    def speak(self):\n        print("Cat meows")\n\nanimals = [Dog(), Cat()]\nfor animal in animals:\n    animal.speak()',
        explanation: 'Inheritance allows a class to inherit attributes and methods from another class. Method overriding lets subclasses provide specific implementations.'
      },
      {
        id: '21-3',
        title: 'Encapsulation and Private Members',
        description: 'Using private and protected members in Python',
        code: 'class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.__balance = balance  # Private attribute\n    \n    def deposit(self, amount):\n        self.__balance += amount\n    \n    def withdraw(self, amount):\n        if amount <= self.__balance:\n            self.__balance -= amount\n            return amount\n        else:\n            print("Insufficient funds")\n            return 0\n    \n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount("Alice", 1000)\naccount.deposit(500)\nprint(account.get_balance())\naccount.withdraw(2000)',
        explanation: 'Encapsulation restricts access to certain attributes. Prefixing with __ makes an attribute private.'
      },
      {
        id: '21-4',
        title: 'Polymorphism and Duck Typing',
        description: 'Using polymorphism and duck typing in Python',
        code: 'class Bird:\n    def fly(self):\n        print("Bird is flying")\n\nclass Airplane:\n    def fly(self):\n        print("Airplane is flying")\n\ndef let_it_fly(flier):\n    flier.fly()\n\nlet_it_fly(Bird())\nlet_it_fly(Airplane())',
        explanation: 'Polymorphism allows different objects to be used interchangeably if they implement the same method. Python uses duck typing: "If it walks like a duck and quacks like a duck..."'
      },
      {
        id: '21-5',
        title: 'Class Methods and Static Methods',
        description: 'Using @classmethod and @staticmethod decorators',
        code: 'class MathUtils:\n    @staticmethod\n    def add(a, b):\n        return a + b\n    \n    @classmethod\n    def description(cls):\n        return f"This is {cls.__name__} class"\n\nprint(MathUtils.add(3, 4))\nprint(MathUtils.description())',
        explanation: '@staticmethod defines a method that does not access class or instance data. @classmethod receives the class as its first argument.'
      },
      {
        id: '21-6',
        title: 'Special Methods and Operator Overloading',
        description: 'Implementing __str__, __repr__, and operator overloading',
        code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2\nprint(v3)',
        explanation: 'Special methods like __add__, __str__, and __repr__ allow you to define how objects behave with operators and built-in functions.'
      }
    ],
    exercises: [
      {
        id: '21-ex1',
        title: 'Create a Shape Hierarchy',
        description: 'Implement a base class Shape and subclasses Circle and Rectangle with area methods',
        initialCode: 'class Shape:\n    # Your code here\n    pass\n\nclass Circle(Shape):\n    # Your code here\n    pass\n\nclass Rectangle(Shape):\n    # Your code here\n    pass\n\n# Test your implementation\nc = Circle(5)\nr = Rectangle(4, 6)\nprint("Circle area:", c.area())\nprint("Rectangle area:", r.area())',
        expectedOutput: 'Should print area of circle and rectangle',
        hints: ['Use inheritance', 'Implement area() method in each subclass', 'Use math.pi for circle area']
      }
    ]
  },
  {
    id: '22',
    title: 'Advanced OOP: Decorators and Metaclasses',
    description: 'Learn about decorators, metaclasses, and advanced class manipulation',
    content: 'Advanced OOP concepts in Python include decorators for modifying functions and classes, metaclasses for controlling class creation, and descriptors for attribute access control.',
    difficulty: 'advanced',
    category: 'Python Advanced OOP',
    examples: [
      {
        id: '22-1',
        title: 'Function Decorators',
        description: 'Creating and using function decorators',
        code: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end - start:.4f} seconds")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return "Done"\n\nresult = slow_function()\nprint(result)',
        explanation: 'Decorators are functions that modify other functions. They use the @ syntax and can add functionality like timing, logging, or validation.'
      },
      {
        id: '22-2',
        title: 'Class Decorators',
        description: 'Creating decorators that work with classes',
        code: 'def singleton(cls):\n    instances = {}\n    def get_instance(*args, **kwargs):\n        if cls not in instances:\n            instances[cls] = cls(*args, **kwargs)\n        return instances[cls]\n    return get_instance\n\n@singleton\nclass Database:\n    def __init__(self):\n        print("Creating database connection...")\n    \n    def query(self, sql):\n        return f"Executing: {sql}"\n\ndb1 = Database()\ndb2 = Database()\nprint(db1 is db2)  # True - same instance',
        explanation: 'Class decorators modify classes and can implement patterns like singletons, mixins, or automatic registration.'
      },
      {
        id: '22-3',
        title: 'Property Decorators',
        description: 'Using @property for getters and setters',
        code: 'class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def radius(self):\n        return self._radius\n    \n    @radius.setter\n    def radius(self, value):\n        if value < 0:\n            raise ValueError("Radius cannot be negative")\n        self._radius = value\n    \n    @property\n    def area(self):\n        import math\n        return math.pi * self._radius ** 2\n\nc = Circle(5)\nprint(f"Radius: {c.radius}")\nprint(f"Area: {c.area}")\nc.radius = 10\nprint(f"New area: {c.area}")',
        explanation: '@property allows you to define getter methods that can be accessed like attributes. @setter allows controlled assignment.'
      },
      {
        id: '22-4',
        title: 'Metaclasses',
        description: 'Understanding and using metaclasses',
        code: 'class MetaLogger(type):\n    def __new__(cls, name, bases, attrs):\n        print(f"Creating class: {name}")\n        return super().__new__(cls, name, bases, attrs)\n    \n    def __init__(cls, name, bases, attrs):\n        print(f"Initializing class: {name}")\n        super().__init__(name, bases, attrs)\n\nclass MyClass(metaclass=MetaLogger):\n    def __init__(self):\n        print("Instance created")\n\nobj = MyClass()',
        explanation: 'Metaclasses control class creation. They are classes for classes and can modify class behavior at creation time.'
      },
      {
        id: '22-5',
        title: 'Descriptors',
        description: 'Creating custom descriptors for attribute control',
        code: 'class ValidatedAttribute:\n    def __init__(self, min_value=None, max_value=None):\n        self.min_value = min_value\n        self.max_value = max_value\n    \n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        return obj.__dict__.get(self.name)\n    \n    def __set__(self, obj, value):\n        if self.min_value is not None and value < self.min_value:\n            raise ValueError(f"Value {value} is below minimum {self.min_value}")\n        if self.max_value is not None and value > self.max_value:\n            raise ValueError(f"Value {value} is above maximum {self.max_value}")\n        obj.__dict__[self.name] = value\n    \n    def __set_name__(self, owner, name):\n        self.name = name\n\nclass Person:\n    age = ValidatedAttribute(min_value=0, max_value=150)\n    \n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person("Alice", 25)\nprint(f"{p.name} is {p.age} years old")\n# p.age = -5  # This would raise ValueError',
        explanation: 'Descriptors control how attributes are accessed, set, and deleted. They implement the descriptor protocol with __get__, __set__, and __delete__ methods.'
      }
    ],
    exercises: [
      {
        id: '22-ex1',
        title: 'Create a Caching Decorator',
        description: 'Implement a decorator that caches function results',
        initialCode: 'def cache(func):\n    # Your code here\n    pass\n\n@cache\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# Test your implementation\nprint(fibonacci(10))  # Should be fast due to caching',
        expectedOutput: 'Should return fibonacci(10) quickly using caching',
        hints: ['Use a dictionary to store results', 'Check if result exists before computing', 'Store result before returning']
      }
    ]
  },
  {
    id: '23',
    title: 'Abstract Base Classes and Interfaces',
    description: 'Using ABCs and creating interfaces in Python',
    content: 'Abstract Base Classes (ABCs) define interfaces that subclasses must implement. They provide a way to ensure certain methods are implemented and create formal contracts.',
    difficulty: 'advanced',
    category: 'Python Advanced OOP',
    examples: [
      {
        id: '23-1',
        title: 'Creating Abstract Base Classes',
        description: 'Defining abstract methods and base classes',
        code: 'from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    \n    @abstractmethod\n    def perimeter(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        import math\n        return math.pi * self.radius ** 2\n    \n    def perimeter(self):\n        import math\n        return 2 * math.pi * self.radius\n\n# shape = Shape()  # This would raise TypeError\ncircle = Circle(5)\nprint(f"Area: {circle.area():.2f}")\nprint(f"Perimeter: {circle.perimeter():.2f}")',
        explanation: 'ABCs use @abstractmethod to define methods that must be implemented by subclasses. You cannot instantiate an ABC directly.'
      },
      {
        id: '23-2',
        title: 'Multiple Inheritance and Mixins',
        description: 'Using multiple inheritance and mixin classes',
        code: 'class SerializableMixin:\n    def to_dict(self):\n        return {key: value for key, value in self.__dict__.items()}\n    \n    def from_dict(self, data):\n        self.__dict__.update(data)\n\nclass PrintableMixin:\n    def __str__(self):\n        return f"{self.__class__.__name__}({self.__dict__})"\n\nclass Person(SerializableMixin, PrintableMixin):\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person("Alice", 30)\nprint(p)\nprint(p.to_dict())',
        explanation: 'Mixins are classes designed to be inherited from to add functionality. They use multiple inheritance to compose behavior.'
      },
      {
        id: '23-3',
        title: 'Protocols and Structural Typing',
        description: 'Using protocols for structural typing',
        code: 'from typing import Protocol\n\nclass Drawable(Protocol):\n    def draw(self) -> str:\n        ...\n\ndef draw_shape(shape: Drawable):\n    return shape.draw()\n\nclass Circle:\n    def draw(self) -> str:\n        return "Drawing a circle"\n\nclass Square:\n    def draw(self) -> str:\n        return "Drawing a square"\n\nprint(draw_shape(Circle()))\nprint(draw_shape(Square()))',
        explanation: 'Protocols define structural types. Any class that implements the required methods satisfies the protocol, even without explicit inheritance.'
      }
    ],
    exercises: [
      {
        id: '23-ex1',
        title: 'Implement an Animal Interface',
        description: 'Create an abstract Animal class with concrete implementations',
        initialCode: 'from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    # Your code here\n    pass\n\nclass Dog(Animal):\n    # Your code here\n    pass\n\nclass Cat(Animal):\n    # Your code here\n    pass\n\n# Test your implementation\ndog = Dog()\ncat = Cat()\nprint(dog.speak())\nprint(cat.speak())',
        expectedOutput: 'Should print different sounds for dog and cat',
        hints: ['Use @abstractmethod for required methods', 'Implement speak() in each subclass', 'Return appropriate animal sounds']
      }
    ]
  },
  {
    id: '24',
    title: 'Advanced Python Features',
    description: 'Context managers, dataclasses, and modern Python features',
    content: 'Modern Python provides powerful features like context managers for resource management, dataclasses for simple data containers, and type hints for better code documentation.',
    difficulty: 'advanced',
    category: 'Python Advanced',
    examples: [
      {
        id: '24-1',
        title: 'Context Managers',
        description: 'Creating custom context managers',
        code: 'from contextlib import contextmanager\nimport time\n\n@contextmanager\ndef timer():\n    start = time.time()\n    try:\n        yield\n    finally:\n        end = time.time()\n        print(f"Execution took {end - start:.4f} seconds")\n\nwith timer():\n    time.sleep(1)\n    print("Work completed")\n\nclass DatabaseConnection:\n    def __enter__(self):\n        print("Connecting to database...")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Disconnecting from database...")\n    \n    def query(self, sql):\n        print(f"Executing: {sql}")\n\nwith DatabaseConnection() as db:\n    db.query("SELECT * FROM users")',
        explanation: 'Context managers ensure proper resource cleanup using the with statement. They implement __enter__ and __exit__ methods.'
      },
      {
        id: '24-2',
        title: 'Dataclasses',
        description: 'Using dataclasses for simple data containers',
        code: 'from dataclasses import dataclass, field\nfrom typing import List\n\n@dataclass\nclass Point:\n    x: float\n    y: float\n    \n    def distance_from_origin(self):\n        import math\n        return math.sqrt(self.x**2 + self.y**2)\n\n@dataclass\nclass Student:\n    name: str\n    age: int\n    grades: List[float] = field(default_factory=list)\n    \n    def average_grade(self):\n        return sum(self.grades) / len(self.grades) if self.grades else 0\n\np = Point(3, 4)\nprint(f"Distance: {p.distance_from_origin()}")\n\ns = Student("Alice", 20, [85, 90, 88])\nprint(f"Average grade: {s.average_grade():.1f}")',
        explanation: 'Dataclasses automatically generate __init__, __repr__, __eq__, and other special methods. They are perfect for simple data containers.'
      },
      {
        id: '24-3',
        title: 'Type Hints and Annotations',
        description: 'Using type hints for better code documentation',
        code: 'from typing import List, Dict, Optional, Union, Callable\n\ndef calculate_average(numbers: List[float]) -> float:\n    return sum(numbers) / len(numbers)\n\ndef process_user_data(\n    user_id: int,\n    data: Dict[str, Union[str, int, float]],\n    callback: Optional[Callable] = None\n) -> bool:\n    print(f"Processing user {user_id}")\n    if callback:\n        callback(data)\n    return True\n\n# Type hints help with documentation and IDE support\nresult = calculate_average([1.0, 2.0, 3.0])\nprint(f"Average: {result}")\n\nprocess_user_data(\n    123,\n    {"name": "Alice", "age": 30, "score": 95.5},\n    lambda x: print(f"Callback: {x}")\n)',
        explanation: 'Type hints provide documentation and enable better IDE support and static type checking with tools like mypy.'
      },
      {
        id: '24-4',
        title: 'Enum Classes',
        description: 'Using enums for constants and state management',
        code: 'from enum import Enum, auto\n\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n\nclass Status(Enum):\n    PENDING = auto()\n    RUNNING = auto()\n    COMPLETED = auto()\n    FAILED = auto()\n\nclass Task:\n    def __init__(self, name):\n        self.name = name\n        self.status = Status.PENDING\n    \n    def start(self):\n        self.status = Status.RUNNING\n        print(f"Task {self.name} started")\n    \n    def complete(self):\n        self.status = Status.COMPLETED\n        print(f"Task {self.name} completed")\n\nprint(Color.RED)\nprint(Color.RED.value)\n\ntask = Task("Data Processing")\ntask.start()\ntask.complete()\nprint(f"Final status: {task.status}")',
        explanation: 'Enums provide a way to define named constants and improve code readability. They prevent magic numbers and provide type safety.'
      }
    ],
    exercises: [
      {
        id: '24-ex1',
        title: 'Create a Custom Context Manager',
        description: 'Implement a context manager for file operations with error handling',
        initialCode: 'class SafeFileHandler:\n    def __init__(self, filename, mode="r"):\n        # Your code here\n        pass\n    \n    def __enter__(self):\n        # Your code here\n        pass\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        # Your code here\n        pass\n\n# Test your implementation\nwith SafeFileHandler("test.txt", "w") as f:\n    f.write("Hello, World!")\n\nwith SafeFileHandler("test.txt", "r") as f:\n    content = f.read()\n    print(content)',
        expectedOutput: 'Should safely handle file operations with proper cleanup',
        hints: ['Open file in __enter__', 'Close file in __exit__', 'Handle exceptions in __exit__', 'Return file object from __enter__']
      }
    ]
  },
  {
    id: '25',
    title: 'File I/O and Exception Handling',
    description: 'Working with files and handling exceptions in Python',
    content: 'File I/O operations are fundamental for reading and writing data. Exception handling ensures your programs can gracefully handle errors and unexpected situations.',
    difficulty: 'intermediate',
    category: 'Python Core',
    examples: [
      {
        id: '25-1',
        title: 'Basic File Operations',
        description: 'Reading and writing text files',
        code: '# Writing to a file\nwith open("example.txt", "w") as file:\n    file.write("Hello, World!\\n")\n    file.write("This is a test file.\\n")\n    file.write("Python is awesome!\\n")\n\n# Reading from a file\nwith open("example.txt", "r") as file:\n    content = file.read()\n    print("Full content:")\n    print(content)\n\n# Reading line by line\nwith open("example.txt", "r") as file:\n    print("\\nLine by line:")\n    for line_num, line in enumerate(file, 1):\n        print(f"Line {line_num}: {line.strip()}")\n\n# Appending to a file\nwith open("example.txt", "a") as file:\n    file.write("\\nThis line was appended.")\n\n# Reading all lines into a list\nwith open("example.txt", "r") as file:\n    lines = file.readlines()\n    print(f"\\nTotal lines: {len(lines)}")',
        explanation: 'The with statement ensures proper file handling and automatic cleanup. Different modes: "r" (read), "w" (write), "a" (append).'
      },
      {
        id: '25-2',
        title: 'Binary File Operations',
        description: 'Working with binary files and images',
        code: '# Writing binary data\nwith open("data.bin", "wb") as file:\n    # Write integers as bytes\n    file.write((12345).to_bytes(4, byteorder="big"))\n    file.write((67890).to_bytes(4, byteorder="big"))\n    \n    # Write a string as bytes\n    file.write("Hello Binary!".encode("utf-8"))\n\n# Reading binary data\nwith open("data.bin", "rb") as file:\n    # Read integers\n    int1 = int.from_bytes(file.read(4), byteorder="big")\n    int2 = int.from_bytes(file.read(4), byteorder="big")\n    \n    # Read string\n    string_data = file.read().decode("utf-8")\n    \n    print(f"Integer 1: {int1}")\n    print(f"Integer 2: {int2}")\n    print(f"String: {string_data}")\n\n# Working with file positions\nwith open("data.bin", "rb") as file:\n    print(f"Current position: {file.tell()}")\n    file.seek(0)  # Go to beginning\n    print(f"After seek(0): {file.tell()}")\n    file.seek(8)  # Skip first two integers\n    print(f"After seek(8): {file.tell()}")',
        explanation: 'Binary files store raw bytes. Use "wb" and "rb" modes. seek() and tell() help navigate file positions.'
      },
      {
        id: '25-3',
        title: 'Exception Handling Basics',
        description: 'Using try/except blocks to handle errors',
        code: '# Basic exception handling\ntry:\n    number = int(input("Enter a number: "))\n    result = 10 / number\n    print(f"Result: {result}")\nexcept ValueError:\n    print("Error: Please enter a valid number")\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero")\nexcept Exception as e:\n    print(f"Unexpected error: {e}")\nelse:\n    print("No exceptions occurred")\nfinally:\n    print("This always executes")\n\n# Handling multiple exceptions\ntry:\n    with open("nonexistent.txt", "r") as file:\n        content = file.read()\nexcept (FileNotFoundError, PermissionError) as e:\n    print(f"File error: {e}")\nexcept Exception as e:\n    print(f"Other error: {e}")\n\n# Raising exceptions\ndef validate_age(age):\n    if not isinstance(age, int):\n        raise TypeError("Age must be an integer")\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    if age > 150:\n        raise ValueError("Age seems unrealistic")\n    return True\n\n# Test the validation\ntry:\n    validate_age("twenty")\nexcept (TypeError, ValueError) as e:\n    print(f"Validation error: {e}")',
        explanation: 'try/except blocks catch and handle exceptions. else runs if no exception occurs, finally always executes. You can raise custom exceptions.'
      },
      {
        id: '25-4',
        title: 'Custom Exceptions',
        description: 'Creating and using custom exception classes',
        code: 'class ValidationError(Exception):\n    """Custom exception for validation errors"""\n    pass\n\nclass InsufficientFundsError(Exception):\n    """Custom exception for insufficient funds"""\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f"Insufficient funds: ${balance} available, ${amount} requested")\n\nclass BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n    \n    def withdraw(self, amount):\n        if amount <= 0:\n            raise ValidationError("Withdrawal amount must be positive")\n        if amount > self.balance:\n            raise InsufficientFundsError(self.balance, amount)\n        self.balance -= amount\n        return amount\n    \n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValidationError("Deposit amount must be positive")\n        self.balance += amount\n\n# Test custom exceptions\naccount = BankAccount(100)\n\ntry:\n    account.withdraw(150)\nexcept InsufficientFundsError as e:\n    print(f"Bank error: {e}")\n    print(f"Available: ${e.balance}, Requested: ${e.amount}")\nexcept ValidationError as e:\n    print(f"Validation error: {e}")\n\ntry:\n    account.deposit(-50)\nexcept ValidationError as e:\n    print(f"Validation error: {e}")',
        explanation: 'Custom exceptions should inherit from Exception. They can include additional data and provide meaningful error messages.'
      },
      {
        id: '25-5',
        title: 'Working with CSV and JSON',
        description: 'Reading and writing CSV and JSON files',
        code: 'import csv\nimport json\n\n# Writing CSV data\nstudents = [\n    ["Alice", 20, "Computer Science"],\n    ["Bob", 22, "Mathematics"],\n    ["Charlie", 21, "Physics"]\n]\n\nwith open("students.csv", "w", newline="") as file:\n    writer = csv.writer(file)\n    writer.writerow(["Name", "Age", "Major"])  # Header\n    writer.writerows(students)\n\n# Reading CSV data\nwith open("students.csv", "r") as file:\n    reader = csv.reader(file)\n    header = next(reader)  # Skip header\n    print("CSV Data:")\n    for row in reader:\n        print(f"Name: {row[0]}, Age: {row[1]}, Major: {row[2]}")\n\n# Using DictReader and DictWriter\nwith open("students.csv", "r") as file:\n    reader = csv.DictReader(file)\n    print("\\nUsing DictReader:")\n    for row in reader:\n        print(f"{row[\'Name\']} is {row[\'Age\']} years old")\n\n# Working with JSON\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "city": "New York",\n    "hobbies": ["reading", "swimming", "coding"]\n}\n\n# Writing JSON\nwith open("person.json", "w") as file:\n    json.dump(person, file, indent=2)\n\n# Reading JSON\nwith open("person.json", "r") as file:\n    loaded_person = json.load(file)\n    print("\\nJSON Data:")\n    print(f"Name: {loaded_person[\'name\']}")\n    print(f"Hobbies: {loaded_person[\'hobbies\']}")\n\n# JSON with custom objects\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def to_dict(self):\n        return {"name": self.name, "age": self.age}\n\nperson_obj = Person("Bob", 30)\nwith open("person_obj.json", "w") as file:\n    json.dump(person_obj.to_dict(), file, indent=2)',
        explanation: 'CSV module handles comma-separated values. JSON module works with JavaScript Object Notation. Both support reading and writing with different options.'
      }
    ],
    exercises: [
      {
        id: '25-ex1',
        title: 'File Processing with Error Handling',
        description: 'Create a program that reads numbers from a file and calculates their average',
        initialCode: 'def calculate_average_from_file(filename):\n    """Read numbers from file and calculate average with error handling"""\n    # Your code here\n    pass\n\n# Test your implementation\n# Create a test file first\nwith open("numbers.txt", "w") as f:\n    f.write("10\\n20\\n30\\n40\\n50")\n\nresult = calculate_average_from_file("numbers.txt")\nprint(f"Average: {result}")\n\n# Test with invalid file\nresult = calculate_average_from_file("nonexistent.txt")\nprint(f"Result: {result}")',
        expectedOutput: 'Should calculate average and handle file errors gracefully',
        hints: ['Use try/except for file operations', 'Handle FileNotFoundError', 'Convert strings to numbers', 'Calculate average of valid numbers']
      }
    ]
  },
  {
    id: '26',
    title: 'Modules and Packages',
    description: 'Creating and organizing Python modules and packages',
    content: 'Modules and packages help organize code into reusable components. Understanding how to create, import, and structure modules is essential for building maintainable applications.',
    difficulty: 'intermediate',
    category: 'Python Core',
    examples: [
      {
        id: '26-1',
        title: 'Creating and Using Modules',
        description: 'Creating simple modules and importing them',
        code: '# math_utils.py\nimport math\n\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError("Cannot divide by zero")\n    return a / b\n\ndef square_root(x):\n    if x < 0:\n        raise ValueError("Cannot calculate square root of negative number")\n    return math.sqrt(x)\n\n# Constants\nPI = math.pi\nE = math.e\n\n# Test the module\nif __name__ == "__main__":\n    print("Testing math_utils module")\n    print(f"5 + 3 = {add(5, 3)}")\n    print(f"Square root of 16 = {square_root(16)}")\n\n# main.py - importing the module\nimport math_utils\n\nprint("Using math_utils module:")\nprint(f"Addition: {math_utils.add(10, 5)}")\nprint(f"Multiplication: {math_utils.multiply(4, 7)}")\nprint(f"PI constant: {math_utils.PI}")\n\n# Importing specific functions\nfrom math_utils import subtract, divide\n\nprint(f"Subtraction: {subtract(20, 8)}")\nprint(f"Division: {divide(15, 3)}")\n\n# Importing with alias\nimport math_utils as mu\n\nprint(f"Using alias: {mu.square_root(25)}")',
        explanation: 'Modules are Python files that can be imported. Use __name__ == "__main__" to run code only when the module is executed directly.'
      },
      {
        id: '26-2',
        title: 'Package Structure',
        description: 'Creating and organizing packages',
        code: '# mypackage/__init__.py\n"""MyPackage - A collection of useful utilities"""\n\n__version__ = "1.0.0"\n__author__ = "Your Name"\n\n# Import main functions to make them available at package level\nfrom .math_utils import add, subtract, multiply, divide\nfrom .string_utils import reverse, capitalize\n\n__all__ = [\'add\', \'subtract\', \'multiply\', \'divide\', \'reverse\', \'capitalize\']\n\n# mypackage/math_utils.py\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError("Cannot divide by zero")\n    return a / b\n\n# mypackage/string_utils.py\ndef reverse(text):\n    return text[::-1]\n\ndef capitalize(text):\n    return text.capitalize()\n\ndef count_words(text):\n    return len(text.split())\n\n# Using the package\nimport mypackage\n\nprint("Using mypackage:")\nprint(f"Math: {mypackage.add(5, 3)}")\nprint(f"String: {mypackage.reverse(\'hello\')}")\n\n# Importing specific modules\nfrom mypackage import math_utils, string_utils\n\nprint(f"Math module: {math_utils.multiply(4, 6)}")\nprint(f"String module: {string_utils.count_words(\'Hello world\')}")\n\n# Importing specific functions\nfrom mypackage.math_utils import divide\nfrom mypackage.string_utils import capitalize\n\nprint(f"Divide: {divide(20, 4)}")\nprint(f"Capitalize: {capitalize(\'python\')}")',
        explanation: 'Packages are directories containing __init__.py files. They organize related modules and can have subpackages.'
      },
      {
        id: '26-3',
        title: 'Relative vs Absolute Imports',
        description: 'Understanding different import strategies',
        code: '# mypackage/__init__.py\nprint("Initializing mypackage")\n\n# mypackage/subpackage/__init__.py\nprint("Initializing subpackage")\n\n# mypackage/subpackage/utils.py\ndef helper_function():\n    return "Helper function from subpackage"\n\n# mypackage/subpackage/advanced.py\n# Relative import within the same package\nfrom .utils import helper_function\n\ndef advanced_function():\n    return f"Advanced: {helper_function()}"\n\n# main.py - Absolute imports\nimport mypackage\nfrom mypackage.subpackage.utils import helper_function\nfrom mypackage.subpackage import advanced\n\nprint("Absolute imports:")\nprint(helper_function())\nprint(advanced.advanced_function())\n\n# Relative imports in a module within the package\n# mypackage/subpackage/relative_example.py\nfrom ..math_utils import add  # Go up one level\nfrom .utils import helper_function  # Same level\n\ndef relative_function():\n    return f"Relative: {add(1, 2)} and {helper_function()}"\n\n# Import from main\nfrom mypackage.subpackage.relative_example import relative_function\nprint(relative_function())',
        explanation: 'Absolute imports use the full path from the root. Relative imports use dots to navigate the package hierarchy.'
      },
      {
        id: '26-4',
        title: 'Virtual Environments and Dependencies',
        description: 'Managing project dependencies and virtual environments',
        code: '# requirements.txt\n# This file lists project dependencies\nrequests==2.28.1\npandas==1.5.2\nnumpy==1.24.1\nmatplotlib==3.6.2\n\n# setup.py - For creating installable packages\nfrom setuptools import setup, find_packages\n\nsetup(\n    name="myproject",\n    version="1.0.0",\n    description="A sample Python project",\n    author="Your Name",\n    packages=find_packages(),\n    install_requires=[\n        "requests>=2.25.0",\n        "pandas>=1.3.0",\n    ],\n    extras_require={\n        "dev": [\n            "pytest>=6.0",\n            "black>=21.0",\n        ],\n    },\n)\n\n# Example of using external packages\nimport sys\nprint(f"Python path: {sys.path}")\n\n# Check if a package is installed\ntry:\n    import requests\n    print("requests is installed")\nexcept ImportError:\n    print("requests is not installed")\n\n# Installing packages programmatically (not recommended in production)\n# import subprocess\n# subprocess.check_call([sys.executable, "-m", "pip", "install", "requests"])\n\n# Using pip programmatically\ntry:\n    import pkg_resources\n    installed_packages = [d.project_name for d in pkg_resources.working_set]\n    print(f"Installed packages: {len(installed_packages)}")\nexcept ImportError:\n    print("pkg_resources not available")',
        explanation: 'Virtual environments isolate project dependencies. requirements.txt lists dependencies, setup.py creates installable packages.'
      },
      {
        id: '26-5',
        title: 'Dynamic Imports and Reflection',
        description: 'Importing modules dynamically and inspecting code',
        code: 'import importlib\nimport inspect\n\n# Dynamic import\nmodule_name = "math"\nmath_module = importlib.import_module(module_name)\nprint(f"Imported {module_name}: {math_module.sqrt(16)}")\n\n# Importing with error handling\ndef safe_import(module_name):\n    try:\n        module = importlib.import_module(module_name)\n        return module\n    except ImportError:\n        print(f"Module {module_name} not found")\n        return None\n\n# Test safe import\njson_module = safe_import("json")\nif json_module:\n    data = json_module.dumps({"key": "value"})\n    print(f"JSON: {data}")\n\n# Inspecting modules\nimport os\n\ndef inspect_module(module):\n    print(f"\\nInspecting {module.__name__}:")\n    print(f"File: {module.__file__}")\n    \n    # Get all attributes\n    attributes = [attr for attr in dir(module) if not attr.startswith("_")]\n    print(f"Public attributes: {attributes[:5]}...")  # Show first 5\n    \n    # Get functions\n    functions = [name for name, obj in inspect.getmembers(module) \n                 if inspect.isfunction(obj)]\n    print(f"Functions: {functions[:5]}...")  # Show first 5\n\ninspect_module(os)\n\n# Dynamic function calling\ndef call_function_dynamically(module, function_name, *args, **kwargs):\n    if hasattr(module, function_name):\n        func = getattr(module, function_name)\n        if callable(func):\n            return func(*args, **kwargs)\n    return None\n\n# Test dynamic function calling\nresult = call_function_dynamically(math_module, "pow", 2, 3)\nprint(f"Dynamic pow(2, 3): {result}")\n\n# Reloading modules\ndef reload_module(module_name):\n    try:\n        module = importlib.import_module(module_name)\n        return importlib.reload(module)\n    except ImportError:\n        print(f"Module {module_name} not found")\n        return None',
        explanation: 'Dynamic imports allow loading modules at runtime. Reflection lets you inspect and manipulate code structures programmatically.'
      }
    ],
    exercises: [
      {
        id: '26-ex1',
        title: 'Create a Utility Package',
        description: 'Create a package with math and string utilities',
        initialCode: '# Create a package structure:\n# myutils/\n#   __init__.py\n#   math_utils.py\n#   string_utils.py\n\n# myutils/__init__.py\n# Your code here\n\n# myutils/math_utils.py\n# Your code here\n\n# myutils/string_utils.py\n# Your code here\n\n# Test your package\nimport myutils\n\nprint(myutils.add(5, 3))\nprint(myutils.reverse_string("hello"))',
        expectedOutput: 'Should create a working package with math and string utilities',
        hints: ['Create __init__.py with imports', 'Define functions in separate modules', 'Use relative imports in __init__.py', 'Test the package functionality']
      }
    ]
  },
  {
    id: '27',
    title: 'Regular Expressions',
    description: 'Pattern matching and text processing with regex',
    content: 'Regular expressions are powerful tools for pattern matching and text manipulation. They allow you to search, replace, and validate text based on complex patterns.',
    difficulty: 'intermediate',
    category: 'Python Core',
    examples: [
      {
        id: '27-1',
        title: 'Basic Regex Patterns',
        description: 'Understanding basic regex syntax and patterns',
        code: 'import re\n\n# Basic patterns\ntext = "Hello, my phone number is 123-456-7890 and email is john@example.com"\n\n# Finding phone numbers\nphone_pattern = r"\\\\d{3}-\\\\d{3}-\\\\d{4}"\nphone_matches = re.findall(phone_pattern, text)\nprint(f"Phone numbers found: {{phone_matches}}")\n\n# Finding email addresses\nemail_pattern = r"\\\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Z|a-z]{2,}\\\\b"\nemail_matches = re.findall(email_pattern, text)\nprint(f"Email addresses found: {{email_matches}}")\n\n# Character classes\nsample_text = "The cat sat on the mat. The dog ran in the fog."\n\n# Find words starting with \'c\' or \'d\'\npattern1 = r"\\\\b[cC][a-zA-Z]*\\\\b"\nmatches1 = re.findall(pattern1, sample_text)\nprint(f"Words starting with c: {{matches1}}")\n\npattern2 = r"\\\\b[dD][a-zA-Z]*\\\\b"\nmatches2 = re.findall(pattern2, sample_text)\nprint(f"Words starting with d: {{matches2}}")\n\n# Combining patterns\ncombined_pattern = r"\\\\b[cCdD][a-zA-Z]*\\\\b"\ncombined_matches = re.findall(combined_pattern, sample_text)\nprint(f"Words starting with c or d: {{combined_matches}}")\n\n# Quantifiers\nnumber_text = "I have 5 apples, 10 oranges, and 100 bananas."\n\n# Find numbers\nnumber_pattern = r"\\\\d+"\nnumbers = re.findall(number_pattern, number_text)\nprint(f"Numbers found: {{numbers}}")\n\n# Find numbers with optional decimal\ndecimal_pattern = r"\\\\d+\\\\.?\\\\d*"\ndecimals = re.findall(decimal_pattern, "3.14, 42, 2.5, 100")\nprint(f"Decimal numbers: {{decimals}}")',
        explanation: 'Basic patterns include character classes [abc], quantifiers +, *, ?, and anchors ^, $. \\d matches digits, \\b matches word boundaries.'
      },
      {
        id: '27-2',
        title: 'Regex Functions and Methods',
        description: 'Using different regex functions for searching and matching',
        code: 'import re\n\n# re.search() - Find first match\ntext = "The quick brown fox jumps over the lazy dog."\n\n# Search for a pattern\nmatch = re.search(r"fox", text)\nif match:\n    print(f"Found \'fox\' at position {{match.start()}} to {{match.end()}}")\n    print(f"Match: \'{{match.group()}}\")\n\n# re.match() - Match at beginning of string\nmatch = re.match(r"The", text)\nif match:\n    print(f"String starts with \'The\': {{match.group()}}")\n\n# re.findall() - Find all matches\nall_words = re.findall(r"\\\\b\\w+\\b", text)\nprint(f"All words: {{all_words}}")\n\n# re.finditer() - Get match objects\nfor match in re.finditer(r"\\\\b\\w{4}\\b", text):  # 4-letter words\n    print(f"4-letter word: \'{{match.group()}}\' at position {{match.start()}}")\n\n# re.sub() - Replace patterns\nreplaced_text = re.sub(r"fox", "cat", text)\nprint(f"After replacement: {{replaced_text}}")\n\n# re.split() - Split by pattern\nsplit_text = re.split(r"\\\\s+", text)  # Split by whitespace\nprint(f"Split by whitespace: {{split_text}}")\n\n# Using groups\nphone_text = "Call me at 123-456-7890 or 987-654-3210"\nphone_pattern = r"(\\\\d{3})-(\\\\d{3})-(\\\\d{4})"\n\nmatches = re.findall(phone_pattern, phone_text)\nfor match in matches:\n    area_code, prefix, number = match\n    print(f"Area code: {{area_code}}, Prefix: {{prefix}}, Number: {{number}}")\n\n# Named groups\nnamed_pattern = r"(?P<area>\\\\d{3})-(?P<prefix>\\\\d{3})-(?P<number>\\\\d{4})"\nmatch = re.search(named_pattern, phone_text)\nif match:\n    print(f"Named groups: {{match.groupdict()}}")',
        explanation: 're.search() finds first match, re.match() matches at start, re.findall() finds all matches, re.sub() replaces, re.split() splits by pattern.'
      },
      {
        id: '27-3',
        title: 'Advanced Regex Patterns',
        description: 'Using advanced regex features like lookaheads and backreferences',
        code: 'import re\n\n# Lookahead and lookbehind\npassword_text = "Password: secret123, User: john, Password: mypass456"\n\n# Positive lookahead - find password followed by numbers\npassword_pattern = r"Password:\\s*(\\\\w+)(?=\\\\d)"\npasswords = re.findall(password_pattern, password_text)\nprint(f"Passwords with numbers: {{passwords}}")\n\n# Negative lookahead - find password not followed by numbers\npassword_pattern2 = r"Password:\\s*(\\\\w+)(?!\\\\d)"\npasswords2 = re.findall(password_pattern2, password_text)\nprint(f"Passwords without numbers: {{passwords2}}")\n\n# Lookbehind - find numbers preceded by "Password:"\nnumber_pattern = r"(?<=Password:\\s*\\\\w*)\\d+"\nnumbers = re.findall(number_pattern, password_text)\nprint(f"Numbers after passwords: {{numbers}}")\n\n# Backreferences\nhtml_text = "<h1>Title</h1><p>Content</p><h2>Subtitle</h2>"\n\n# Find matching HTML tags\nhtml_pattern = r"<(\\\\w+)>.*?</\\\\1>"\nhtml_matches = re.findall(html_pattern, html_text)\nprint(f"HTML tags: {{html_matches}}")\n\n# Non-greedy matching\ntext = "<tag>content1</tag><tag>content2</tag>"\n\ngreedy_pattern = r"<tag>.*</tag>"\ngreedy_match = re.search(greedy_pattern, text)\nprint(f"Greedy match: {{greedy_match.group()}}")\n\nnon_greedy_pattern = r"<tag>.*?</tag>"\nnon_greedy_matches = re.findall(non_greedy_pattern, text)\nprint(f"Non-greedy matches: {{non_greedy_matches}}")\n\n# Conditional patterns\nemail_text = "john@example.com, jane@test.org, invalid-email"\n\n# Complex email validation\nemail_pattern = r"\\\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Z|a-z]{2,}\\b"\nvalid_emails = re.findall(email_pattern, email_text)\nprint(f"Valid emails: {{valid_emails}}")\n\n# Date validation\ndate_text = "2023-12-25, 2023/12/25, 25-12-2023, invalid-date"\n\ndate_pattern = r"\\\\b\\\\d{4}[-/]\\\\d{1,2}[-/]\\\\d{1,2}\\b"\nvalid_dates = re.findall(date_pattern, date_text)\nprint(f"Valid dates: {{valid_dates}}")',
        explanation: 'Lookaheads (?=...) and lookbehinds (?<=...) match patterns without consuming characters. Backreferences \\1 refer to captured groups.'
      },
      {
        id: '27-4',
        title: 'Regex Flags and Compilation',
        description: 'Using regex flags and compiled patterns for better performance',
        code: 'import re\n\n# Regex flags\ntext = "Hello WORLD, hello world, HELLO World"\n\n# Case insensitive matching\npattern = r"hello"\nmatches = re.findall(pattern, text, re.IGNORECASE)\nprint(f"Case insensitive matches: {{matches}}")\n\n# Multiline matching\nmultiline_text = """Line 1: Hello\nLine 2: World\nLine 3: Python"""\n\n# Match lines starting with "Line"\nline_pattern = r"^Line \\d+:"\nlines = re.findall(line_pattern, multiline_text, re.MULTILINE)\nprint(f"Lines starting with \'Line\': {{lines}}")\n\n# Dotall flag - dot matches newlines\nhtml_content = "<div>Content\\nwith\\nnewlines</div>"\ndotall_pattern = r"<div>(.*)</div>"\nmatch = re.search(dotall_pattern, html_content, re.DOTALL)\nif match:\n    print(f"Content with newlines: {{repr(match.group(1))}}")\n\n# Compiling patterns for better performance\n# Compile once, use many times\nphone_pattern = re.compile(r"(\\d{3})-(\\d{3})-(\\d{4})")\n\nphone_numbers = [\n    "123-456-7890",\n    "987-654-3210",\n    "555-123-4567"\n]\n\nfor phone in phone_numbers:\n    match = phone_pattern.search(phone)\n    if match:\n        print(f"Phone: {{match.group()}}")\n\n# Using compiled pattern with flags\nemail_pattern = re.compile(\n    r"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",\n    re.IGNORECASE\n)\n\nemails = [\n    "john@example.com",\n    "JANE@TEST.ORG",\n    "invalid-email"\n]\n\nfor email in emails:\n    if email_pattern.match(email):\n        print(f"Valid email: {{email}}")\n    else:\n        print(f"Invalid email: {{email}}")\n\n# Verbose flag for complex patterns\nverbose_pattern = re.compile(r"""\n    \\b                    # Word boundary\n    [A-Za-z0-9._%+-]+     # Username\n    @                     # @ symbol\n    [A-Za-z0-9.-]+        # Domain\n    \\.[A-Z|a-z]{2,}      # TLD\n    \\b                    # Word boundary\n""", re.VERBOSE | re.IGNORECASE)\n\n# Test verbose pattern\ntest_email = "user@example.com"\nif verbose_pattern.match(test_email):\n    print(f"Valid email (verbose): {{test_email}}")',
        explanation: 'Flags modify regex behavior: IGNORECASE, MULTILINE, DOTALL, VERBOSE. Compiling patterns improves performance for repeated use.'
      },
      {
        id: '27-5',
        title: 'Practical Regex Examples',
        description: 'Real-world examples of regex usage',
        code: 'import re\n\n# URL validation\ndef validate_url(url):\n    pattern = r"^https?://[\\w\\-._~:/?#[\\]@!$&\'()*+,;=%]+$"\n    return bool(re.match(pattern, url))\n\nurls = [\n    "https://www.example.com",\n    "http://test.org/path?param=value",\n    "invalid-url",\n    "ftp://example.com"\n]\n\nfor url in urls:\n    print(f"{{url}}: {{'Valid' if validate_url(url) else 'Invalid'}}")\n\n# Credit card validation (simplified)\ndef validate_credit_card(card_number):\n    # Remove spaces and dashes\n    cleaned = re.sub(r"[\\s-]", "", card_number)\n    \n    # Check if it\'s 13-19 digits\n    if not re.match(r"^\\d{13,19}$", cleaned):\n        return False\n    \n    # Luhn algorithm check (simplified)\n    digits = [int(d) for d in cleaned]\n    checksum = sum(digits[-1::-2])  # Sum of digits from right\n    \n    for d in digits[-2::-2]:  # Double every other digit\n        doubled = d * 2\n        checksum += doubled if doubled < 10 else doubled - 9\n    \n    return checksum % 10 == 0\n\ncards = [\n    "4532 1234 5678 9012",\n    "1234-5678-9012-3456",\n    "1234567890123456"\n]\n\nfor card in cards:\n    print(f"{{card}}: {{'Valid' if validate_credit_card(card) else 'Invalid'}}")\n\n# Text cleaning\ndef clean_text(text):\n    # Remove extra whitespace\n    text = re.sub(r"\\s+", " ", text)\n    \n    # Remove special characters but keep letters, numbers, and basic punctuation\n    text = re.sub(r"[^\\w\\s.,!?-]", "", text)\n    \n    # Capitalize sentences\n    text = re.sub(r"([.!?]\\s+)([a-z])", lambda m: m.group(1) + m.group(2).upper(), text)\n    \n    return text.strip()\n\nmessy_text = "  hello   world!!!   this   is   a   test...   "\ncleaned = clean_text(messy_text)\nprint(f"Original: {{repr(messy_text)}}")\nprint(f"Cleaned: {{repr(cleaned)}}")\n\n# Log parsing\ndef parse_log_line(log_line):\n    pattern = r"(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}) \\[(\\w+)\\] (\\w+): (.+)"\n    match = re.match(pattern, log_line)\n    \n    if match:\n        timestamp, level, component, message = match.groups()\n        return {{\n            "timestamp": timestamp,\n            "level": level,\n            "component": component,\n            "message": message\n        }}\n    return None\n\nlog_lines = [\n    "2023-12-25 10:30:15 [INFO] Server: Request received",\n    "2023-12-25 10:30:16 [ERROR] Database: Connection failed",\n    "Invalid log line"\n]\n\nfor line in log_lines:\n    parsed = parse_log_line(line)\n    if parsed:\n        print(f"Parsed: {{parsed}}")\n    else:\n        print(f"Could not parse: {{line}}")',
        explanation: 'Regex is powerful for validation, text cleaning, and parsing. These examples show practical applications in real-world scenarios.'
      }
    ],
    exercises: [
      {
        id: '27-ex1',
        title: 'Email and Phone Number Validator',
        description: 'Create functions to validate email addresses and phone numbers',
        initialCode: 'import re\n\ndef validate_email(email):\n    """Validate email address format"""\n    # Your code here\n    pass\n\ndef validate_phone(phone):\n    """Validate phone number format (US format)"""\n    # Your code here\n    pass\n\ndef extract_contact_info(text):\n    """Extract all email addresses and phone numbers from text"""\n    # Your code here\n    pass\n\n# Test your functions\ntest_text = """\nContact us at john@example.com or call 555-123-4567.\nAlso try jane@test.org or 123-456-7890.\nInvalid: not-an-email or 123-456\n"""\n\nprint("Valid emails:", validate_email("test@example.com"))\nprint("Valid phone:", validate_phone("555-123-4567"))\nprint("Extracted info:", extract_contact_info(test_text))',
        expectedOutput: 'Should validate and extract contact information from text',
        hints: ['Use word boundaries for email validation', 'Support multiple phone formats', 'Use findall() to extract all matches', 'Handle edge cases']
      }
    ]
  }
]

export default function Sidebar({ currentLesson, onLessonSelect }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Basics', 'Data Structures', 'Algorithms'])

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const getCategoryLessons = (category: string) => {
    return lessons.filter(lesson => lesson.category === category)
  }

  const categories = Array.from(new Set(lessons.map(lesson => lesson.category)))

  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Course Content</h2>
        
        {categories.map(category => {
          const categoryLessons = getCategoryLessons(category)
          const isExpanded = expandedCategories.includes(category)
          
          return (
            <div key={category} className="mb-4">
              <button
                onClick={() => toggleCategory(category)}
                className="flex items-center justify-between w-full p-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <span>{category}</span>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {isExpanded && (
                <div className="ml-4 space-y-1">
                  {categoryLessons.map(lesson => (
                    <button
                      key={lesson.id}
                      onClick={() => onLessonSelect(lesson)}
                      className={`flex items-center w-full p-2 text-left text-sm rounded-md transition-colors ${
                        currentLesson?.id === lesson.id
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span className="truncate">{lesson.title}</span>
                      <span className={`ml-auto text-xs px-2 py-1 rounded ${
                        lesson.difficulty === 'beginner' 
                          ? 'bg-green-100 text-green-800'
                          : lesson.difficulty === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 