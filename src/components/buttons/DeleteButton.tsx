import { useTodoContext } from '../../lib/hooks'
import { TodoType } from '../../lib/types'

interface Props {
  id: TodoType['id']
}
export const DeleteButton = ({ id }: Props) => {
  const { deleteTodo } = useTodoContext()
  return (
    <button
      className="text-red-400 hover:text-red-300"
      onClick={(e) => {
        e.stopPropagation()
        deleteTodo(id)
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  )
}
