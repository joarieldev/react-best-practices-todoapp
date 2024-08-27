import { useTodoContext } from '../lib/hooks'
import { DeleteButton } from './buttons/DeleteButton'

export const TodoList = () => {
  const { todos, toggleTodo, isLoading } = useTodoContext()

  return (
    <article className="relative w-full p-2 pr-2 space-y-4 overflow-auto rounded bg-red-950/20 max-sm:grow">
      {isLoading && (
        <p className="flex items-center justify-center h-full font-bold text-white">
          Cargando...
        </p>
      )}
      {!isLoading && todos.length === 0 && (
        <p className="flex items-center justify-center h-full font-bold text-white">
          Comienza agregando una tarea.
        </p>
      )}
      {!isLoading && todos.length > 0 && (
        <ul className="space-y-2">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex cursor-pointer justify-between text-white border-b-[1px] border-white/50 hover:bg-gray-400/20 rounded px-2"
              onClick={() => {
                toggleTodo(item.id)
              }}
            >
              <p
                className={`truncate font-light text-lg ${
                  item.completed && 'line-through text-gray-400'
                }`}
              >
                {item.content}
              </p>
              <DeleteButton id={item.id} />
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
