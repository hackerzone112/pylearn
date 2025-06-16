'use client'

import { useState } from 'react'
import { Play, RotateCcw, Copy, Download } from 'lucide-react'

interface CodeEditorProps {
  code: string
  onCodeChange: (code: string) => void
  onRunCode: () => void
  output: string
  isRunning: boolean
}

export default function CodeEditor({ 
  code, 
  onCodeChange, 
  onRunCode, 
  output, 
  isRunning 
}: CodeEditorProps) {
  const [showOutput, setShowOutput] = useState(true)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code)
  }

  const handleDownloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'python_code.py'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleResetCode = () => {
    onCodeChange('')
  }

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-md">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-2 text-sm font-medium text-gray-700">Python Editor</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyCode}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            title="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button
            onClick={handleDownloadCode}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            title="Download code"
          >
            <Download className="h-4 w-4" />
          </button>
          <button
            onClick={handleResetCode}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            title="Reset code"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 relative">
        <textarea
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          placeholder="# Write your Python code here...&#10;# Example:&#10;print('Hello, World!')"
          className="w-full h-full p-4 font-mono text-sm bg-gray-900 text-green-400 resize-none focus:outline-none"
          style={{ fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace' }}
        />
      </div>

      {/* Run Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onRunCode}
          disabled={isRunning}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-colors ${
            isRunning
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
        >
          {isRunning ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Running...</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              <span>Run Code</span>
            </>
          )}
        </button>
      </div>

      {/* Output Panel */}
      {showOutput && (
        <div className="border-t border-gray-200">
          <div className="flex items-center justify-between p-3 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-700">Output</h3>
            <button
              onClick={() => setShowOutput(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="p-4 bg-gray-900 text-green-400 font-mono text-sm min-h-[100px] max-h-[200px] overflow-y-auto">
            {output ? (
              <pre className="whitespace-pre-wrap">{output}</pre>
            ) : (
              <span className="text-gray-500">No output yet. Run your code to see the results!</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 