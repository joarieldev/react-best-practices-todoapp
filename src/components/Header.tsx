import { Counter } from './Counter'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className="flex flex-row justify-between px-4 py-2 rounded-t-lg ">
      <Logo />
      <Counter />
    </header>
  )
}
