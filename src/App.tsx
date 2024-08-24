import { BackgroundHeading } from './components/BackgroundHeading'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-cyan-700">
      <BackgroundHeading />
      <main className=" bg-red-600/60 rounded-lg z-10 w-full max-w-[800px]">
        <Header />
        <section className="py-2 px-4 flex flex-row w-full gap-2 h-[500px] ">
          <TodoList />
          <TodoForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
