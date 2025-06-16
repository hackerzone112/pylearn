import { Play, BookOpen, Code, Trophy } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Python Learning Platform
            </h1>
          </div>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <BookOpen className="h-5 w-5" />
            <span>Lessons</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <Play className="h-5 w-5" />
            <span>Practice</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <Trophy className="h-5 w-5" />
            <span>Progress</span>
          </a>
        </nav>
      </div>
    </header>
  )
} 