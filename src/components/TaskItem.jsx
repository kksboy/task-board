function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span className="task-item__text">{task.text}</span>
      </label>
      <button
        type="button"
        className="task-item__delete"
        onClick={() => onDeleteTask(task.id)}
        aria-label="タスクを削除"
      >
        削除
      </button>
    </li>
  )
}

export default TaskItem
