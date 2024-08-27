import { useTodoContext } from '../lib/hooks'

export const Counter = () => {
  const { totalCount, completedCount } = useTodoContext()
  return (
    <p className="text-white">
      <b>{completedCount}</b>/{totalCount} tareas completadas
    </p>
  )
}
