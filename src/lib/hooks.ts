import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'

export function useTodoContext() {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error(
      'TodoContext debe usarse dentro de un componente TodoProvider'
    )
  }

  return context
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'AuthContext debe usarse dentro de un componente AuthProvider'
    )
  }

  return context
}

