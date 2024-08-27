import { useAuthContext } from '../lib/hooks'
import { Login } from './auth/Login'
import { Signin } from './auth/Signin'
import { Button } from './buttons/Button'

export const Auth = () => {
  const { openAuth, open, openModal, isLogged, user, logout } = useAuthContext()
  return (
    <div className="flex flex-col justify-center grid-cols-2 gap-2 max-sm:grid">
      {isLogged ? (
        <>
          <p className="flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            {user?.fullName}
          </p>
          <Button buttonType="secondary" onClick={logout}>Salir</Button>
        </>
      ) : (
        <>
          <Button buttonType="secondary" onClick={() => openAuth('login')}>
            Acceder
          </Button>
          <Button buttonType="secondary" onClick={() => openAuth('signin')}>
            Crear cuenta
          </Button>
        </>
      )}
      {open && openModal === 'login' && <Login />}
      {open && openModal === 'signin' && <Signin />}
    </div>
  )
}
