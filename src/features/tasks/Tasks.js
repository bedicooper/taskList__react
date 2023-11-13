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
    deleteTask,
    markAllTasksAsDone,
  } = useTask();

  return (
    <>
      <MainContainer>
        <Header title={"Lista zadań"} />
        <Section
          title={"Dodaj nowe zadanie"}
          body={<Form />}
        />
        <Section
          title={"Lista zadań"}
          body={
            <TaskList
              deleteTask={deleteTask}
            />
          }
          firstExtraHeaderContent={
            <Counter />
          }
          secondExtraHeaderContent={
            <Buttons
              markAllTasksAsDone={markAllTasksAsDone}
            />
          }
        />
      </MainContainer>
    </>
  );
}

export default Tasks;