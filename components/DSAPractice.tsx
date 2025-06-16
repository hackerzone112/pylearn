'use client'

import { useState } from 'react'
import { Code, Target, Timer, Trophy, BarChart3 } from 'lucide-react'

interface DSAPracticeProps {
  onCodeLoad: (code: string) => void
}

interface PracticeChallenge {
  id: string
  title: string
  description: string
  category: 'Data Structures' | 'Algorithms'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  initialCode: string
  expectedOutput: string
  hints: string[]
  timeComplexity: string
  spaceComplexity: string
}

const practiceChallenges: PracticeChallenge[] = [
  {
    id: 'dsa-1',
    title: 'Reverse a List',
    description: 'Write a function to reverse a list in-place',
    category: 'Data Structures',
    difficulty: 'beginner',
    initialCode: `def reverse_list(arr):
    # Your code here
    pass

# Test your function
numbers = [1, 2, 3, 4, 5]
print(f"Original: {numbers}")
reverse_list(numbers)
print(f"Reversed: {numbers}")`,
    expectedOutput: 'Should reverse the list in-place',
    hints: ['Use two pointers', 'Swap elements from both ends', 'Move pointers towards center'],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'dsa-2',
    title: 'Find Duplicates',
    description: 'Find all duplicate elements in an array',
    category: 'Data Structures',
    difficulty: 'intermediate',
    initialCode: `def find_duplicates(arr):
    # Your code here
    pass

# Test your function
numbers = [1, 2, 3, 2, 4, 5, 3, 6]
duplicates = find_duplicates(numbers)
print(f"Array: {numbers}")
print(f"Duplicates: {duplicates}")`,
    expectedOutput: 'Should return list of duplicate elements',
    hints: ['Use a dictionary to count occurrences', 'Or use a set to track seen elements', 'Return elements that appear more than once'],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-3',
    title: 'Two Sum',
    description: 'Find two numbers that add up to a target',
    category: 'Algorithms',
    difficulty: 'intermediate',
    initialCode: `def two_sum(arr, target):
    # Your code here
    pass

# Test your function
numbers = [2, 7, 11, 15]
target = 9
result = two_sum(numbers, target)
print(f"Array: {numbers}")
print(f"Target: {target}")
print(f"Result: {result}")`,
    expectedOutput: 'Should return indices of two numbers that sum to target',
    hints: ['Use a hash map to store complements', 'For each number, check if complement exists', 'Return indices when found'],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-4',
    title: 'Valid Parentheses',
    description: 'Check if parentheses are balanced',
    category: 'Data Structures',
    difficulty: 'intermediate',
    initialCode: `def is_valid_parentheses(s):
    # Your code here
    pass

# Test your function
test_cases = ["()", "()[]{}", "(]", "([)]", "{[]}"]
for s in test_cases:
    result = is_valid_parentheses(s)
    print(f"'{s}' -> {result}")`,
    expectedOutput: 'Should return True for balanced, False otherwise',
    hints: ['Use a stack', 'Push opening brackets', 'Pop and match closing brackets'],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'dsa-5',
    title: 'Merge Sorted Arrays',
    description: 'Merge two sorted arrays into one sorted array',
    category: 'Algorithms',
    difficulty: 'intermediate',
    initialCode: `def merge_sorted_arrays(arr1, arr2):
    # Your code here
    pass

# Test your function
arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]
merged = merge_sorted_arrays(arr1, arr2)
print(f"Array 1: {arr1}")
print(f"Array 2: {arr2}")
print(f"Merged: {merged}")`,
    expectedOutput: 'Should return merged sorted array',
    hints: ['Use two pointers', 'Compare elements from both arrays', 'Add smaller element to result'],
    timeComplexity: 'O(n + m)',
    spaceComplexity: 'O(n + m)'
  }
]

export default function DSAPractice({ onCodeLoad }: DSAPracticeProps) {
  const [selectedChallenge, setSelectedChallenge] = useState<PracticeChallenge | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')

  const filteredChallenges = practiceChallenges.filter(challenge => {
    const categoryMatch = selectedCategory === 'all' || challenge.category === selectedCategory
    const difficultyMatch = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  const handleChallengeSelect = (challenge: PracticeChallenge) => {
    setSelectedChallenge(challenge)
    onCodeLoad(challenge.initialCode)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Trophy className="h-6 w-6 mr-2 text-primary-600" />
          DSA Practice Challenges
        </h2>
        
        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Categories</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Algorithms">Algorithms</option>
          </select>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              onClick={() => handleChallengeSelect(challenge)}
              className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                selectedChallenge?.id === challenge.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  challenge.difficulty === 'beginner'
                    ? 'bg-green-100 text-green-800'
                    : challenge.difficulty === 'intermediate'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  {challenge.category}
                </span>
                <span className="flex items-center">
                  <Timer className="h-3 w-3 mr-1" />
                  {challenge.timeComplexity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Challenge Details */}
      {selectedChallenge && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{selectedChallenge.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Description</h4>
              <p className="text-gray-600 mb-4">{selectedChallenge.description}</p>
              
              <h4 className="font-medium text-gray-900 mb-2">Expected Output</h4>
              <p className="text-gray-600 mb-4">{selectedChallenge.expectedOutput}</p>
              
              <h4 className="font-medium text-gray-900 mb-2">Complexity</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Time:</span> {selectedChallenge.timeComplexity}</p>
                <p><span className="font-medium">Space:</span> {selectedChallenge.spaceComplexity}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Hints</h4>
              <ul className="space-y-1">
                {selectedChallenge.hints.map((hint, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    {hint}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => onCodeLoad(selectedChallenge.initialCode)}
                className="mt-4 btn-primary"
              >
                <Code className="h-4 w-4 mr-2" />
                Load Challenge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 