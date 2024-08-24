import { DeleteButton } from './buttons/DeleteButton'

export const TodoList = () => {
  return (
    <article className="relative w-full p-2 pr-2 space-y-4 overflow-auto rounded bg-red-950/20">
      <ul>
        <li className="flex justify-between text-white border-b-[1px] border-white/50">
          <p>cook dinner</p>
          <DeleteButton />
        </li>
        <li className="flex justify-between text-white border-b-[1px] border-white/50">
          <p>walk dog</p>
          <DeleteButton />
        </li>
        <li className="flex justify-between text-white border-b-[1px] border-white/50">
          <p>study for exam</p>
          <DeleteButton />
        </li>
      </ul>
    </article>
  )
}
