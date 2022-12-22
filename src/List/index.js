import "./style.css"

const List = ({ tasks, doneTasksHidden, deleteTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task =>
      <li
        key={task.id}
        className={`list__item${task.done & doneTasksHidden ? " list__item--hidden" : ""}`}
      >
        <button
          title="toggle done"
          className={`list__button${task.done ? " list__button--done" : ""}`}
          onClick={() => toggleTaskDone(task.id)}
        />
        <span
          className={`list__content${task.done ? " list__item--done" : ""}`}
        >
          {task.content}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          title="delete task"
          className="list__button list__button--delete"
        />
      </li>
    )}
  </ul >
);

export default List;