import { createContext, useEffect, useState } from 'react'
import { AuthContextType, UserType } from '../lib/types'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<UserType | null>(null)
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState<AuthContextType['openModal']>('')
  const [isLogged, setIsLogged] = useState(false)

  const setLocalStorage = (session: boolean, user: UserType | null) => {
    window.localStorage.setItem('TodoApp(user)', JSON.stringify({session,user}))
  }
  const getLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem('TodoApp(user)') as string)
  }

  const login = (uss: UserType['user'], pass: UserType['password']) => {
    const items = getLocalStorage()
    if (uss === items.user.user && pass === items.user.password) {
      setUser(items.user)
      setIsLogged(true)
      setLocalStorage(true, items.user)
    } else {
      alert('Las credenciales son icorrectas')
    }
  }
  const signin = (user: UserType) => {
    setUser(user)
    setIsLogged(true)
    setLocalStorage(true, user)
    alert('Cuenta creada con exito')
  }
  const logout = () => {
    setUser(null)
    setIsLogged(false)
    setLocalStorage(false, user)
  }
  const openAuth = (modal: AuthContextType['openModal'] | null) => {
    setOpen(!open)
    setOpenModal(modal as string)
  }

  useEffect(() => {
    const items = getLocalStorage()
    if (items) {
      if(items.session){
        setUser(items.user)
        setIsLogged(items.session)
      }
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        open,
        openModal,
        login,
        signin,
        openAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
