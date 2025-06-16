'use client'

import { useState } from 'react'
import { BookOpen, Code, Lightbulb, CheckCircle } from 'lucide-react'
import { Lesson, CodeExample, Exercise } from '@/types/lesson'

interface LessonContentProps {
  lesson: Lesson
}

export default function LessonContent({ lesson }: LessonContentProps) {
  const [selectedExample, setSelectedExample] = useState<CodeExample | null>(null)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="h-6 w-6 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">{lesson.title}</h1>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            lesson.difficulty === 'beginner' 
              ? 'bg-green-100 text-green-800'
              : lesson.difficulty === 'intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{lesson.description}</p>
        <div className="prose max-w-none">
          <p>{lesson.content}</p>
        </div>
      </div>

      {/* Code Examples */}
      {lesson.examples.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Code className="h-5 w-5 mr-2 text-primary-600" />
            Code Examples
          </h2>
          <div className="space-y-4">
            {lesson.examples.map((example) => (
              <div key={example.id} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 mb-3">{example.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 mb-3">
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <div className="flex">
                    <Lightbulb className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-800">{example.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exercises */}
      {lesson.exercises.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-primary-600" />
            Practice Exercises
          </h2>
          <div className="space-y-4">
            {lesson.exercises.map((exercise) => (
              <div key={exercise.id} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{exercise.title}</h3>
                <p className="text-gray-600 mb-3">{exercise.description}</p>
                {exercise.expectedOutput && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-3">
                    <p className="text-yellow-800">
                      <strong>Expected Output:</strong> {exercise.expectedOutput}
                    </p>
                  </div>
                )}
                {exercise.hints.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Hints:</h4>
                    <ul className="space-y-1">
                      {exercise.hints.map((hint, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 