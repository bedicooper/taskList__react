import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { List, Item, Content, Button, StyledLink } from "./styled";
import { selectAreAllDoneHidden, toggleTaskDone, deleteTask, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

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
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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