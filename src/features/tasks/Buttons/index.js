import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import { selectTasks, toggleHideAllDoneTasks, markAllTasksAsDone } from "../tasksSlice";

const Buttons = () => {

  const { tasks, doneTasksHidden } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      {tasks.length !== 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideAllDoneTasks())}
          >
            {doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(markAllTasksAsDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  )
};

export default Buttons;