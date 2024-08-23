function App() {
  return (
    <main className="bg-cyan-700 min-h-screen p-4">
      <h1 className="text-3xl font-bold uppercase">TodoApp</h1>
      <section className="bg-red-600/20 rounded-lg max-w-[800px]">
        <header className="bg-pink-600/50 rounded-t-lg flex flex-row justify-between py-2 px-4">
          <img src="/list.svg" alt="logo" />
          <p className="text-white">0/3 tareas completadas</p>
        </header>
        <div className="py-2 px-4 flex flex-row w-full gap-8 h-[500px]">
          <article className="relative w-full space-y-4 overflow-auto pr-2">
            <p className="text-white flex justify-between">
              walk dog <button className="text-red-400">X</button>
            </p>

            <p className="text-white flex justify-between">
              cook dinner <button className="text-red-400">X</button>
            </p>

            <p className="text-white flex justify-between">
              study for exam <button className="text-red-400">X</button>
            </p>
          </article>
          <aside className="min-w-52 flex flex-col justify-between">
            <form action="" className="flex flex-col gap-2">
              <label htmlFor="tarea" className="text-white">
                Agregar una tarea
              </label>
              <input
                type="text"
                className="px-3 py-2 ring-purple-400 ring-2 placeholder-slate-400 focus:outline-none  focus:ring-purple-500 block w-full rounded-md sm:text-sm focus:ring-4"
                id="tarea"
                placeholder="realizar un..."
              />
              <button className="bg-purple-950 text-white p-2 rounded-md hover:bg-purple-900">
                Agregar
              </button>
            </form>
            <div className="flex flex-col gap-2">
              <button className="bg-purple-950 text-white p-2 rounded-md hover:bg-purple-900">
                Log In
              </button>
              <button className="bg-purple-950 text-white p-2 rounded-md hover:bg-purple-900">
                Register
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
