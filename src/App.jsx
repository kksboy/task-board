import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="task-board">
      <h1 className="task-board__title">Task Board</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
