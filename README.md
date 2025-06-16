# Python Learning Platform

An interactive web application for learning Python programming with an integrated code editor and real-time execution capabilities.

## Features

- **Interactive Code Editor**: Write and run Python code directly in the browser
- **Structured Learning Path**: Organized lessons covering Python fundamentals
- **Code Examples**: Practical examples with explanations for each concept
- **Practice Exercises**: Hands-on exercises to reinforce learning
- **Real-time Output**: See your code execution results instantly
- **Modern UI**: Clean, responsive design built with Next.js and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Learning Interface

1. **Select a Lesson**: Choose from the sidebar to start learning a specific Python concept
2. **Read Content**: Review the lesson material and code examples
3. **Practice**: Use the code editor to write and test your own code
4. **Run Code**: Click the "Run Code" button to execute your Python code
5. **View Output**: See the results of your code execution in the output panel

### Code Editor Features

- **Syntax Highlighting**: Python syntax is highlighted for better readability
- **Copy Code**: Copy your code to clipboard with one click
- **Download Code**: Save your code as a Python file
- **Reset Code**: Clear the editor to start fresh
- **Real-time Execution**: Run code and see results instantly

## Project Structure

```
python-learning-platform/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── CodeEditor.tsx     # Code editor component
│   ├── Header.tsx         # Application header
│   ├── LessonContent.tsx  # Lesson display component
│   └── Sidebar.tsx        # Navigation sidebar
├── types/                 # TypeScript type definitions
│   └── lesson.ts          # Lesson and exercise types
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md             # Project documentation
```

## Learning Path

The platform includes lessons covering:

1. **Introduction to Python**
   - Basic syntax and structure
   - Hello World program
   - Understanding print statements

2. **Variables and Data Types**
   - Creating variables
   - String, integer, and float types
   - Type conversion

3. **Control Flow**
   - If statements and conditionals
   - Loops (for and while)
   - Logical operators

## Technology Stack

- **Frontend**: Next.js 14 with React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Code Execution**: Client-side Python execution (simulated)

## Future Enhancements

- Integration with Pyodide for real Python execution
- User authentication and progress tracking
- More advanced Python concepts (OOP, modules, etc.)
- Code sharing and collaboration features
- Mobile-responsive design improvements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue in the repository. 