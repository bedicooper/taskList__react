import { useTask } from "../../useTask";
import { MainContainer } from "../../common/Main/MainContainer";
import Section from "../../common/Section";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Counter from "../../common/Counter";

const Tasks = () => {

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
            <TaskList
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

export default Tasks;