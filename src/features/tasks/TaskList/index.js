import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, selectAreAllDoneHidden, toggleTaskDone, deleteTask } from "../tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const doneTasksHidden = useSelector(selectAreAllDoneHidden);
  
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task =>
        <Item
          key={task.id}
          $hidden={task.done && doneTasksHidden}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content
            $done={task.done}
          >
            {task.content}
          </Content>
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            $remove
          >
            🗑
          </Button>
        </Item>
      )}
    </List>
  )
};

export default TaskList;