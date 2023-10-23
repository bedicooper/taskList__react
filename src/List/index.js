import "./style.css"

const List = ({ tasks, doneTasksHidden, deleteTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task =>
      <li
        key={task.id}
        className={`list__item${task.done & doneTasksHidden ? " list__item--hidden" : ""}`}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          title="toggle done"
          className={`list__button`}
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`list__content${task.done ? " list__item--done" : ""}`}
        >
          {task.content}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          title="delete task"
          className="list__button list__button--delete"
        >
          🗑
        </button>
      </li>
    )}
  </ul >
);

export default List;