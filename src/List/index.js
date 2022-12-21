import "./style.css"

const List = ({ tasks, doneTasksHidden }) => (
  <ul className="list">
    {tasks.map(task =>
      <li key={task.id}
        className={
          `list__item${task.done & doneTasksHidden
            ? " list__item--hidden list__item--done"
            : task.done
              ? " list__item--done"
              : ""}`
        }
      >
        <button title="toggle done"
          className={`list__button${task.done ? " list__button--done" : ""}`}></button>
        <span className="list__content">
          {task.content}
        </span>
        <button title="delete task" className="list__button list__button--delete"></button>
      </li>
    )}
  </ul >
);

export default List;

