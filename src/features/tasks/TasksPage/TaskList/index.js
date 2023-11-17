import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { List, Item, Content, Button } from "./styled";
import { selectAreAllDoneHidden, toggleTaskDone, deleteTask, selectTasksByQuery } from "../../tasksSlice";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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