import { useAuthContext } from '../../lib/hooks'
import { Button } from '../buttons/Button'
import { CloseButton } from '../buttons/CloseButton'
import { Input } from '../inputs/Input'
import { BackgroundAuth } from './BackgroundAuth'

export const Login = () => {
  const { openAuth, login } = useAuthContext()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(e.target.user.value, e.target.password.value)
    openAuth()
  }

  return (
    <>
      <BackgroundAuth openAuth={openAuth} />

      <section className="fixed left-[30%] right-[30%] max-sm:left-[10%] max-sm:right-[10%] max-sm:top-[10%] max-md:top-[15%] md:top-[15%] z-50 xl:top-[20%] xl:left-[35%] xl:right-[35%] bg-red-900/95 rounded">
        <div className="flex items-center justify-between p-4 border-b border-gray-800 rounded-t md:p-5">
          <h3 className="text-xl font-semibold text-white">Iniciar Secion</h3>
          <CloseButton openAuth={openAuth}>x</CloseButton>
        </div>
        <div className="p-8 md:p-9">
          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <label className="inline-block text-sm font-medium text-white">
              <span>Usuario</span>
              <Input
                required
                placeholder="user2, juancito, ..."
                type="text"
                name="user"
                autoFocus
              />
            </label>
            <label className="inline-block pb-4 text-sm font-medium text-white">
              <span>Contraseña</span>
              <Input
                required
                placeholder="***********"
                type="password"
                name="password"
              />
            </label>
            <Button>Iniciar</Button>
          </form>
        </div>
      </section>
    </>
  )
}
