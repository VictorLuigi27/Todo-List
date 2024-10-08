import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "/src/components/ListIem.jsx"

function App() {

  const [todoList, setTodoList] = useState([
    { id: nanoid(8), content: "item 1" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ])

  const [todo, setTodo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (todo === "") {
      setShowValidation(true)
      return
    }

    setTodoList([...todoList, { id: nanoid(), content: todo }])
    setTodo("")
    setShowValidation(false)
  }

  return (
    <>
      <div className="h-screen bg-blue-950 flex items-center justify-center">

        <div className="max-w-4xl w-full bg-blue-900 shadow-lg rounded-lg p-8">
          <h1 className="text-3xl text-slate-100 mb-6 text-center font-bold">La To-Do List</h1>

          <form onSubmit={handleSubmit} className="mb-8">
            <label htmlFor="todo-item" className="text-slate-50 block text-lg font-semibold">
              Ajouter une tâche à faire :
            </label>

            <div className="flex mt-4">
              <input
                value={todo}
                onChange={e => setTodo(e.target.value)}
                type="text"
                className="flex-1 py-2 px-4 rounded-l-lg focus:outline-none border-none shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Nouvelle tâche..."
              />

              <button className="bg-emerald-500 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-600 transition-all duration-200 shadow-sm">
                Ajouter
              </button>
            </div>

            {showValidation && (
              <p className="text-red-400 mt-2 text-center font-semibold">
                Ajoutez d&apos;abord une tâche !
              </p>
            )}
          </form>

          <ul>
            {todoList.length === 0 && (
              <li className="text-slate-50 text-center text-md">Pas de tâches à afficher...</li>
            )}

            {todoList.length > 0 && todoList.map(item => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
