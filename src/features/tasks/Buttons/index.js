import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import { selectAreAllTasksDone, selectAreThereTasks, selectAreAllDoneHidden, toggleHideAllDoneTasks, markAllTasksAsDone } from "../tasksSlice";

const Buttons = () => {
  const allTasksDone = useSelector(selectAreAllTasksDone);
  const thereAreTasks = useSelector(selectAreThereTasks);
  const doneTasksHidden = useSelector(selectAreAllDoneHidden);
  
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      {thereAreTasks !== 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideAllDoneTasks())}
          >
            {doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(markAllTasksAsDone())}
            disabled={allTasksDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  )
};

export default Buttons;