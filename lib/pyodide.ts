// Pyodide-based Python execution service
// This provides a more accurate Python execution environment in the browser

declare global {
  interface Window {
    loadPyodide: (config?: any) => Promise<any>
  }
}

let pyodide: any = null
let isLoading = false

export async function initializePyodide() {
  if (pyodide) return pyodide
  if (isLoading) {
    // Wait for the current loading to complete
    while (isLoading) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    return pyodide
  }

  isLoading = true
  
  try {
    // Load Pyodide from CDN
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
    document.head.appendChild(script)

    await new Promise((resolve, reject) => {
      script.onload = resolve
      script.onerror = reject
    })

    // Initialize Pyodide
    pyodide = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
    })

    // Install common packages
    await pyodide.loadPackage(['numpy', 'pandas'])
    
    return pyodide
  } catch (error) {
    console.error('Failed to load Pyodide:', error)
    throw error
  } finally {
    isLoading = false
  }
}

export async function executePythonCode(code: string): Promise<string> {
  try {
    const pyodideInstance = await initializePyodide()
    
    // Capture stdout
    let stdout = ''
    pyodideInstance.runPython(`
      import sys
      import io
      from contextlib import redirect_stdout
      
      # Create a string buffer to capture output
      output_buffer = io.StringIO()
      
      # Redirect stdout to our buffer
      with redirect_stdout(output_buffer):
          try:
              exec("""${code.replace(/"/g, '\\"')}""")
          except Exception as e:
              print(f"Error: {e}")
      
      # Get the captured output
      captured_output = output_buffer.getvalue()
      output_buffer.close()
    `)
    
    // Get the captured output
    stdout = pyodideInstance.globals.get('captured_output')
    
    return stdout || 'Code executed successfully!'
  } catch (error) {
    console.error('Python execution error:', error)
    return `Error: ${error}`
  }
}

// Fallback function for when Pyodide is not available
export async function executePythonCodeFallback(code: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let output = ''
      
      // Simple pattern matching for common Python constructs
      if (code.includes('print(')) {
        const printMatches = code.match(/print\(['"]([^'"]+)['"]\)/g)
        if (printMatches) {
          output = printMatches.map(match => {
            const content = match.match(/print\(['"]([^'"]+)['"]\)/)?.[1] || ''
            return content
          }).join('\n')
        }
      }
      
      // Handle basic arithmetic
      if (code.includes('+') || code.includes('-') || code.includes('*') || code.includes('/')) {
        try {
          const arithmeticMatch = code.match(/(\d+)\s*([+\-*/])\s*(\d+)/)
          if (arithmeticMatch) {
            const [, num1, operator, num2] = arithmeticMatch
            const result = eval(`${num1} ${operator} ${num2}`)
            output += `\nResult: ${result}`
          }
        } catch (e) {
          // Ignore arithmetic errors in simulation
        }
      }
      
      // Handle variable assignments
      if (code.includes('=')) {
        const varMatches = code.match(/(\w+)\s*=\s*['"]([^'"]+)['"]/g)
        if (varMatches) {
          output += '\nVariables assigned successfully'
        }
      }
      
      if (!output) {
        output = 'Code executed successfully! (Fallback mode)'
      }
      
      resolve(output)
    }, 500)
  })
} 