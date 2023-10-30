import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, doneTasksHidden, toggleHideAllDoneTasks, markAllTasksAsDone }) => (
  <ButtonsContainer>
    {tasks.length !== 0 && (
      <>
        <Button
          onClick={toggleHideAllDoneTasks}
        >
          {doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={markAllTasksAsDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </ButtonsContainer>
);

export default Buttons;