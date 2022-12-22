import { useState } from "react";
import Main from "./Main";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Header from "./Header";

function App() {
  const [doneTasksHidden, setDoneTaskHidden] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  const toggleHideAllDoneTasks = () => {
    setDoneTaskHidden(doneTasksHidden => !doneTasksHidden);
  };

  const markAllTasksAsDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })))
  };

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }))
  };

  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form tasks={tasks} addNewTask={addNewTask} />}
      />
      <Section
        title={"Lista zadań"}
        body={
          <List
            tasks={tasks}
            doneTasksHidden={doneTasksHidden}
            deleteTask={deleteTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            doneTasksHidden={doneTasksHidden}
            toggleHideAllDoneTasks={toggleHideAllDoneTasks}
            markAllTasksAsDone={markAllTasksAsDone}
          />
        }
      />
    </Main>
  );
}

export default App;