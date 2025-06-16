import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { error: 'No code provided' },
        { status: 400 }
      )
    }

    console.log('Received code:', code)

    // Enhanced Python execution simulation for DSA
    const result = await executePythonCode(code)
    
    console.log('Execution result:', result)
    
    return NextResponse.json({ 
      output: result,
      success: true 
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to execute code', details: error },
      { status: 500 }
    )
  }
}

async function executePythonCode(code: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let output = ''
      
      // Create a simple variable store for evaluation
      const variables: { [key: string]: any } = {}
      
      // Parse variable assignments first
      const varAssignments = code.match(/(\w+)\s*=\s*([^#\n]+)/g)
      if (varAssignments) {
        varAssignments.forEach(assignment => {
          const match = assignment.match(/(\w+)\s*=\s*(.+)/)
          if (match) {
            const [, varName, value] = match
            // Handle different types of values
            if (value.trim().startsWith('"') || value.trim().startsWith("'")) {
              // String value
              variables[varName] = value.trim().replace(/^["']|["']$/g, '')
            } else if (!isNaN(Number(value.trim()))) {
              // Numeric value
              variables[varName] = Number(value.trim())
            } else {
              // Try to evaluate as expression with function support
              try {
                // Process function calls in the value
                let processedValue = value.trim()
                
                // Handle int() function
                const intRegex = /int\(([^)]+)\)/g
                let intMatch
                while ((intMatch = intRegex.exec(processedValue)) !== null) {
                  const [, intArg] = intMatch
                  let intValue = 0
                  if (variables.hasOwnProperty(intArg.trim())) {
                    const varValue = variables[intArg.trim()]
                    intValue = Math.floor(Number(varValue))
                  } else {
                    // Try to evaluate as a string literal or expression
                    try {
                      const evaluatedArg = evaluateExpression(intArg)
                      intValue = Math.floor(Number(evaluatedArg))
                    } catch {
                      intValue = 0
                    }
                  }
                  processedValue = processedValue.replace(intMatch[0], String(intValue))
                }
                
                // Handle str() function
                const strRegex = /str\(([^)]+)\)/g
                let strMatch
                while ((strMatch = strRegex.exec(processedValue)) !== null) {
                  const [, strArg] = strMatch
                  let strValue = ""
                  if (variables.hasOwnProperty(strArg.trim())) {
                    const varValue = variables[strArg.trim()]
                    strValue = String(varValue)
                  } else {
                    // Try to evaluate as an expression
                    try {
                      const evaluatedArg = evaluateExpression(strArg)
                      strValue = String(evaluatedArg)
                    } catch {
                      strValue = strArg
                    }
                  }
                  processedValue = processedValue.replace(strMatch[0], `"${strValue}"`)
                }
                
                // Handle input() function
                const inputRegex = /input\([^)]*\)/g
                let inputMatch
                while ((inputMatch = inputRegex.exec(processedValue)) !== null) {
                  const defaultValue = "25" // Default value for simulation
                  processedValue = processedValue.replace(inputMatch[0], `"${defaultValue}"`)
                }
                
                // Handle type() function
                const typeRegex = /type\(([^)]+)\)/g
                let typeMatch
                while ((typeMatch = typeRegex.exec(processedValue)) !== null) {
                  const [, typeArg] = typeMatch
                  
                  let typeValue = "unknown"
                  if (variables.hasOwnProperty(typeArg.trim())) {
                    const varValue = variables[typeArg.trim()]
                    if (typeof varValue === 'string') {
                      typeValue = "str"
                    } else if (typeof varValue === 'number') {
                      typeValue = Number.isInteger(varValue) ? "int" : "float"
                    } else if (Array.isArray(varValue)) {
                      typeValue = "list"
                    } else if (typeof varValue === 'object') {
                      typeValue = "dict"
                    }
                  } else {
                    // Try to evaluate as a string literal or expression
                    try {
                      const evaluatedArg = evaluateExpression(typeArg)
                      if (typeof evaluatedArg === 'string') {
                        typeValue = "str"
                      } else if (typeof evaluatedArg === 'number') {
                        typeValue = Number.isInteger(Number(evaluatedArg)) ? "int" : "float"
                      }
                    } catch {
                      typeValue = "unknown"
                    }
                  }
                  
                  processedValue = processedValue.replace(typeMatch[0], `"${typeValue}"`)
                }
                
                // Now evaluate the processed value
                variables[varName] = eval(processedValue)
              } catch {
                variables[varName] = value.trim()
              }
            }
          }
        })
      }
      
      // Handle tuple unpacking assignments (e.g., "a, b = 10, 3")
      const tupleAssignments = code.match(/(\w+(?:\s*,\s*\w+)*)\s*=\s*([^#\n]+)/g)
      if (tupleAssignments) {
        tupleAssignments.forEach(assignment => {
          // Skip if this is a simple assignment (already handled above)
          if (!assignment.includes(',')) return
          
          const match = assignment.match(/(\w+(?:\s*,\s*\w+)*)\s*=\s*(.+)/)
          if (match) {
            const [, varNames, values] = match
            
            // Parse variable names
            const varNameList = varNames.split(',').map(name => name.trim())
            
            // Parse values
            const valueList = values.split(',').map(val => val.trim())
            
            // Assign each variable to its corresponding value
            for (let i = 0; i < Math.min(varNameList.length, valueList.length); i++) {
              const varName = varNameList[i]
              const value = valueList[i]
              
              // Handle different types of values
              if (value.startsWith('"') || value.startsWith("'")) {
                // String value
                variables[varName] = value.replace(/^["']|["']$/g, '')
              } else if (!isNaN(Number(value))) {
                // Numeric value
                variables[varName] = Number(value)
              } else {
                // Try to evaluate as expression
                try {
                  variables[varName] = eval(value)
                } catch {
                  variables[varName] = value
                }
              }
            }
          }
        })
      }
      
      // Function to evaluate expressions including method calls
      function evaluateExpression(expression: string): string {
        // Handle Python functions first
        let processedExpr = expression
        
        // Handle len() function
        const lenRegex = /len\(([^)]+)\)/g
        let lenMatch
        while ((lenMatch = lenRegex.exec(expression)) !== null) {
          const [, lenArg] = lenMatch
          
          // For now, handle simple variable references directly
          let length = 0
          if (variables.hasOwnProperty(lenArg.trim())) {
            const varValue = variables[lenArg.trim()]
            if (typeof varValue === 'string') {
              length = varValue.length
            } else {
              length = String(varValue).length
            }
          } else {
            // Try to evaluate as a string literal
            const stringMatch = lenArg.match(/["']([^"']+)["']/)
            if (stringMatch) {
              length = stringMatch[1].length
            } else {
              // Fallback: try to evaluate the argument
              try {
                const evaluatedArg = evaluateExpression(lenArg)
                length = String(evaluatedArg).length
              } catch {
                length = 0
              }
            }
          }
          
          processedExpr = processedExpr.replace(lenMatch[0], String(length))
        }
        
        // Handle int() function
        const intRegex = /int\(([^)]+)\)/g
        let intMatch
        while ((intMatch = intRegex.exec(expression)) !== null) {
          const [, intArg] = intMatch
          
          let intValue = 0
          if (variables.hasOwnProperty(intArg.trim())) {
            const varValue = variables[intArg.trim()]
            intValue = Math.floor(Number(varValue))
          } else {
            // Try to evaluate as a string literal or expression
            try {
              const evaluatedArg = evaluateExpression(intArg)
              intValue = Math.floor(Number(evaluatedArg))
            } catch {
              intValue = 0
            }
          }
          
          processedExpr = processedExpr.replace(intMatch[0], String(intValue))
        }
        
        // Handle str() function
        const strRegex = /str\(([^)]+)\)/g
        let strMatch
        while ((strMatch = strRegex.exec(expression)) !== null) {
          const [, strArg] = strMatch
          
          let strValue = ""
          if (variables.hasOwnProperty(strArg.trim())) {
            const varValue = variables[strArg.trim()]
            strValue = String(varValue)
          } else {
            // Try to evaluate as an expression
            try {
              const evaluatedArg = evaluateExpression(strArg)
              strValue = String(evaluatedArg)
            } catch {
              strValue = strArg
            }
          }
          
          processedExpr = processedExpr.replace(strMatch[0], `"${strValue}"`)
        }
        
        // Handle input() function (simulate with a default value)
        const inputRegex = /input\([^)]*\)/g
        let inputMatch
        while ((inputMatch = inputRegex.exec(expression)) !== null) {
          // Extract the prompt from input() if present
          const promptMatch = inputMatch[0].match(/input\(["']([^"']+)["']\)/)
          const prompt = promptMatch ? promptMatch[1] : "Enter value: "
          
          // For simulation, we'll use a default value
          const defaultValue = "25" // You could make this configurable
          
          processedExpr = processedExpr.replace(inputMatch[0], `"${defaultValue}"`)
        }
        
        // Handle type() function
        const typeRegex = /type\(([^)]+)\)/g
        let typeMatch
        while ((typeMatch = typeRegex.exec(expression)) !== null) {
          const [, typeArg] = typeMatch
          
          let typeValue = "unknown"
          if (variables.hasOwnProperty(typeArg.trim())) {
            const varValue = variables[typeArg.trim()]
            if (typeof varValue === 'string') {
              typeValue = "str"
            } else if (typeof varValue === 'number') {
              typeValue = Number.isInteger(varValue) ? "int" : "float"
            } else if (Array.isArray(varValue)) {
              typeValue = "list"
            } else if (typeof varValue === 'object') {
              typeValue = "dict"
            }
          } else {
            // Try to evaluate as a string literal or expression
            try {
              const evaluatedArg = evaluateExpression(typeArg)
              if (typeof evaluatedArg === 'string') {
                typeValue = "str"
              } else if (typeof evaluatedArg === 'number') {
                typeValue = Number.isInteger(Number(evaluatedArg)) ? "int" : "float"
              }
            } catch {
              typeValue = "unknown"
            }
          }
          
          processedExpr = processedExpr.replace(typeMatch[0], `"${typeValue}"`)
        }
        
        // Handle method calls on variables FIRST (before variable substitution)
        const varMethodRegex = /(\w+)\.(\w+)\(\)/g
        let methodMatch
        
        while ((methodMatch = varMethodRegex.exec(expression)) !== null) {
          const [, varName, methodName] = methodMatch
          
          if (variables.hasOwnProperty(varName)) {
            const varValue = variables[varName]
            
            if (typeof varValue === 'string') {
              let result = varValue
              switch (methodName) {
                case 'upper': result = varValue.toUpperCase(); break
                case 'lower': result = varValue.toLowerCase(); break
                case 'title': 
                  result = varValue.replace(/\w\S*/g, txt => 
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                  ); 
                  break
                case 'capitalize': 
                  result = varValue.charAt(0).toUpperCase() + varValue.slice(1).toLowerCase(); 
                  break
                case 'strip': result = varValue.trim(); break
                case 'lstrip': result = varValue.replace(/^\s+/, ''); break
                case 'rstrip': result = varValue.replace(/\s+$/, ''); break
                default: result = varValue
              }
              processedExpr = processedExpr.replace(methodMatch[0], `"${result}"`)
            }
          }
        }
        
        // Now handle variable substitution for remaining variables
        for (const [varName, varValue] of Object.entries(variables)) {
          const varRegex = new RegExp(`\\b${varName}\\b`, 'g')
          if (typeof varValue === 'string') {
            processedExpr = processedExpr.replace(varRegex, `"${varValue}"`)
          } else {
            processedExpr = processedExpr.replace(varRegex, String(varValue))
          }
        }
        
        // Convert Python comparison operators to JavaScript equivalents
        processedExpr = processedExpr
          .replace(/==/g, '===')  // Python == to JavaScript ===
          .replace(/!=/g, '!==')  // Python != to JavaScript !==
        
        // Handle method calls on string literals (e.g., "hello".upper())
        const stringMethodRegex = /"([^"]+)"\.(\w+)\(\)/g
        while ((methodMatch = stringMethodRegex.exec(processedExpr)) !== null) {
          const [, stringValue, methodName] = methodMatch
          let result = stringValue
          switch (methodName) {
            case 'upper': result = stringValue.toUpperCase(); break
            case 'lower': result = stringValue.toLowerCase(); break
            case 'title': 
              result = stringValue.replace(/\w\S*/g, txt => 
                txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
              ); 
              break
            case 'capitalize': 
              result = stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase(); 
              break
            case 'strip': result = stringValue.trim(); break
            case 'lstrip': result = stringValue.replace(/^\s+/, ''); break
            case 'rstrip': result = stringValue.replace(/\s+$/, ''); break
            default: result = stringValue
          }
          processedExpr = processedExpr.replace(methodMatch[0], `"${result}"`)
        }
        
        // Try to evaluate the final expression
        try {
          const result = eval(processedExpr)
          return typeof result === 'string' ? result : String(result)
        } catch (error) {
          return expression // Fallback to original expression
        }
      }
      
      // Enhanced f-string evaluation function
      function evaluateFString(fString: string): string {
        // Remove the f" or f' prefix
        let content = fString.replace(/^f["']/, '').replace(/["']$/, '')
        
        // Find all expressions in curly braces
        const expressionRegex = /\{([^}]+)\}/g
        let match
        let result = content
        
        while ((match = expressionRegex.exec(content)) !== null) {
          const fullMatch = match[0] // {expression}
          const expression = match[1] // expression
          
          const evaluatedValue = evaluateExpression(expression)
          result = result.replace(fullMatch, evaluatedValue)
        }
        
        return result
      }
      
      // Handle print statements - this is the main output
      if (code.includes('print(')) {
        // Find all print statements with proper parenthesis matching
        const printStatements: string[] = []
        let startIndex = 0
        
        while (true) {
          const printStart = code.indexOf('print(', startIndex)
          if (printStart === -1) break
          
          // Find the matching closing parenthesis
          let parenCount = 0
          let endIndex = printStart + 6 // Skip 'print('
          
          for (let i = endIndex; i < code.length; i++) {
            if (code[i] === '(') {
              parenCount++
            } else if (code[i] === ')') {
              if (parenCount === 0) {
                endIndex = i
                break
              }
              parenCount--
            }
          }
          
          if (endIndex > printStart + 6) {
            const fullPrint = code.substring(printStart, endIndex + 1)
            printStatements.push(fullPrint)
          }
          
          startIndex = endIndex + 1
        }
        
        if (printStatements.length > 0) {
          output = printStatements.map(match => {
            // Extract content from print statements
            const content = match.replace(/print\(/, '').replace(/\)$/, '')
            
            // Handle f-strings
            if (content.includes('f"') || content.includes("f'")) {
              return evaluateFString(content)
            }
            
            // Handle simple string literals
            const stringMatch = content.match(/["']([^"']+)["']/)
            if (stringMatch) {
              return stringMatch[1]
            }
            
            // Handle expressions (including method calls)
            return evaluateExpression(content)
          }).join('\n')
        }
      }
      
      // Only show output if there are print statements, otherwise show minimal feedback
      if (!output.trim()) {
        // Check if there are any meaningful operations without print statements
        const hasOperations = code.includes('def ') || 
                             code.includes('=') || 
                             code.includes('if ') || 
                             code.includes('for ') || 
                             code.includes('while ') ||
                             code.includes('[') ||
                             code.includes('{')
        
        if (hasOperations) {
          output = 'Code executed successfully!'
        } else {
          output = 'No output to display. Add print() statements to see results.'
        }
      }
      
      console.log('Final output being returned:', output)
      resolve(output.trim())
    }, 800) // Slightly longer execution time for DSA algorithms
  })
} 