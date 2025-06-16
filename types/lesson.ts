export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  examples: CodeExample[]
  exercises: Exercise[]
}

export interface CodeExample {
  id: string
  title: string
  description: string
  code: string
  explanation: string
}

export interface Exercise {
  id: string
  title: string
  description: string
  initialCode: string
  expectedOutput?: string
  hints: string[]
} 