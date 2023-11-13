import { useSelector } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ deleteTask, toggleTaskDone }) => {
  const { tasks, doneTasksHidden } = useSelector(selectTasks);

  return (
    <List>
      {tasks.map(task =>
        <Item
          key={task.id}
          $hidden={task.done && doneTasksHidden}
        >
          <Button
            onClick={() => toggleTaskDone(task.id)}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content
            $done={task.done}
          >
            {task.content}
          </Content>
          <Button
            onClick={() => deleteTask(task.id)}
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