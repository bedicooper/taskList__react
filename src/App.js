import { useTask } from "./useTask";
import { MainContainer } from "./Main/MainContainer";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Counter from "./Counter";

function App() {

  const {
    tasks,
    deleteTask,
    toggleTaskDone,
    markAllTasksAsDone,
    addNewTask,
    doneTasksHidden,
    toggleHideAllDoneTasks,
  } = useTask();

  return (
    <>
        <MainContainer>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form addNewTask={addNewTask}
        />}
      />
      <Section
        title={"Lista zadań"}
        body={
          <Tasks
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
    </MainContainer>
    </>
  );
}

export default App;