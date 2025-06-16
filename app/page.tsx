'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import CodeEditor from '@/components/CodeEditor'
import LessonContent from '@/components/LessonContent'
import DSAPractice from '@/components/DSAPractice'
import { Lesson } from '@/types/lesson'

export default function Home() {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [activeTab, setActiveTab] = useState<'lessons' | 'practice'>('lessons')

  const handleRunCode = async () => {
    setIsRunning(true)
    setOutput('')
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      const data = await response.json()
      
      if (data.success) {
        setOutput(data.output)
      } else {
        setOutput(`Error: ${data.error}`)
      }
    } catch (error) {
      setOutput(`Error: ${error}`)
    } finally {
      setIsRunning(false)
    }
  }

  const handleCodeLoad = (newCode: string) => {
    setCode(newCode)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentLesson={currentLesson}
        onLessonSelect={setCurrentLesson}
      />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 flex">
          <div className="flex-1 p-6">
            {/* Tab Navigation */}
            <div className="mb-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('lessons')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'lessons'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Lessons
                  </button>
                  <button
                    onClick={() => setActiveTab('practice')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'practice'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    DSA Practice
                  </button>
                </nav>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'lessons' ? (
              currentLesson ? (
                <LessonContent lesson={currentLesson} />
              ) : (
                <div className="text-center py-20">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to Python Learning Platform
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Select a lesson from the sidebar to start learning Python
                  </p>
                  <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
                      <p className="text-gray-600 mb-4">
                        Try writing your first Python code in the editor!
                      </p>
                      <button 
                        onClick={() => setCode('print("Hello, World!")')}
                        className="btn-primary"
                      >
                        Load Hello World Example
                      </button>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <DSAPractice onCodeLoad={handleCodeLoad} />
            )}
          </div>
          
          <div className="w-1/2 p-6">
            <CodeEditor
              code={code}
              onCodeChange={setCode}
              onRunCode={handleRunCode}
              output={output}
              isRunning={isRunning}
            />
          </div>
        </main>
      </div>
    </div>
  )
} 