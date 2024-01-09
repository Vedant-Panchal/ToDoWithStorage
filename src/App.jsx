import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'
import { TodoProvider } from './context/index'

function App() {
  
  const [todos,settodos] = useState([])
  const addtodo = (title)=>{
    settodos((prev)=>[...prev,{id: Date.now(), ...title}])
  }
  const updatetodo = (id,title)=>{
    settodos((prev)=> prev.map((eachTodo) => (eachTodo.id === id ? title : eachTodo)))
  }
  const deletetodo = (id)=>{
    settodos((prev)=> prev.filter((todo) => (todo.id !== id)))
  }
  const toggleComplete = (id)=>{
    settodos((prev)=> prev.map((todo)=> (todo.id === id) ? {...todo, completed : !todo.completed}: todo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todo'))

    if(todos && todos.length > 0)
    {
      settodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addtodo,updatetodo,deletetodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className=" w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-slate-700/80 backdrop-blur-lg">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3 w-full">
                        {/*Loop and Add TodoItem here */}
                        {/* <TodoItem /> */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
