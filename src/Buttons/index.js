import "./style.css";

const Buttons = ({ tasks, doneTasksHidden, toggleHideAllDoneTasks }) => (
  <div className="buttons__container">
    {tasks.length !== 0 && (
      <>
        <button onClick={toggleHideAllDoneTasks} className="buttons_listEditButtons">
          {doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button className="buttons_listEditButtons"
          disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;