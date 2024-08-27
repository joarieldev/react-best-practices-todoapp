import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProvider } from './contexts/TodoContext.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </AuthProvider>
  </StrictMode>
)
