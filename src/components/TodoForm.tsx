import { Auth } from './Auth'
import { Button } from './buttons/Button'

export const TodoForm = () => {
  return (
    <article className="flex flex-col justify-between p-2 rounded min-w-52 bg-red-950/20">
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="tarea" className="text-white">
          Agregar una tarea
        </label>
        <input
          type="text"
          className="block w-full px-3 py-2 rounded-md ring-purple-400 ring-2 placeholder-slate-400 focus:outline-none focus:ring-purple-500 sm:text-sm focus:ring-4"
          id="tarea"
          placeholder="realizar un..."
        />
        <Button>Agregar</Button>
      </form>
      <Auth />
    </article>
  )
}
