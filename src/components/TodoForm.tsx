import { useState } from 'react'
import { Auth } from './Auth'
import { Button } from './buttons/Button'
import { useTodoContext } from '../lib/hooks'
import { Input } from './inputs/Input'

export const TodoForm = () => {
  const [todoContent, setTodoContent] = useState('')
  const { addTodo } = useTodoContext()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(todoContent)
    setTodoContent('')
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value)
  }

  return (
    <article className="flex flex-col justify-between p-2 rounded min-w-52 bg-red-950/20 max-sm:gap-2 max-sm:flex-col-reverse">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="space-y-1 text-white">
          <span>Agregar una tarea</span>
          <Input
            value={todoContent}
            onChange={handleOnChange}
            autoFocus
            required
            placeholder="realizar un..."
            type="text"
          />
        </label>
        <Button>Agregar</Button>
      </form>
      <Auth />
    </article>
  )
}
