export type TodoType = {
  id: number
  content: string
  completed: boolean
}

export type TodoContextType = {
  todos: TodoType[]
  isLoading: boolean
  totalCount: number
  completedCount: number
  addTodo: (content: TodoType['content']) => void
  toggleTodo: (id: TodoType['id']) => void
  deleteTodo: (id: TodoType['id']) => void
}

export type UserType = {
  id: number
  fullName?: string
  user: string
  password: string
}

export type AuthContextType = {
  user: UserType | null
  isLogged: boolean
  open: boolean
  openModal: string | undefined
  login: (user: UserType['user'], password: UserType['password']) => void
  signin: (user: UserType) => void
  openAuth: (modal?: AuthContextType['openModal']) => void
  logout: () => void
}
