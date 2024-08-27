import { createContext, useEffect, useState } from 'react'
import { TodoContextType, TodoType } from '../lib/types'
import { useAuthContext } from '../lib/hooks'
import { sleep } from '../lib/sleep'
// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLogged } = useAuthContext()

  const [todos, setTodos] = useState<TodoType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const totalCount = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length

  const setLocalStorage = (todos: TodoType[]) => {
    window.localStorage.setItem('TodoApp(todos)', JSON.stringify(todos))
  }
  const getLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem('TodoApp(todos)') as string)
  }

  const addTodo = (content: TodoType['content']) => {
    const values = [
      ...todos,
      {
        id: todos.length + 1,
        content,
        completed: false,
      },
    ]
    setTodos(values)
    if (isLogged) {
      setLocalStorage(values)
    }
  }
  const toggleTodo = (id: TodoType['id']) => {
    const values = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(values)
    if (isLogged) {
      setLocalStorage(values)
    }
  }
  const deleteTodo = (id: TodoType['id']) => {
    const values = todos.filter((todo) => todo.id !== id)
    setTodos(values)
    setLocalStorage(values)
  }

  useEffect(() => {
    if (isLogged) {
      const fetchTodos = async () => {
        setIsLoading(true)
        const response = await sleep()
        if (response) {
          setTodos(getLocalStorage())
        }
        setIsLoading(false)
      }
      fetchTodos()
    } else {
      setTodos([])
    }
  }, [isLogged])

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoading,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
