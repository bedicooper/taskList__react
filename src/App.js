import { useState } from "react";
import Main from "./Main";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Header from "./Header";
import Counter from "./Counter";
import { useTask } from "./useTask";

function App() {

  const {
    tasks,
    deleteTask,
    toggleTaskDone,
    markAllTasksAsDone,
    addNewTask,
  } = useTask();

  const [doneTasksHidden, setDoneTaskHidden] = useState(false);

  const toggleHideAllDoneTasks = () => {
    setDoneTaskHidden(doneTasksHidden => !doneTasksHidden);
  };

  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form addNewTask={addNewTask}
        />}
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
        firstExtraHeaderContent={
          <Counter tasks={tasks}
          />
        }
        secondExtraHeaderContent={
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