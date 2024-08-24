import { Button } from './buttons/Button'

export const Auth = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button buttonType="secondary">Log In</Button>
      <Button buttonType="secondary">Register</Button>
    </div>
  )
}
