import { MainContainer } from "../../common/Main/MainContainer";
import Section from "../../common/Section";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Counter from "../../common/Counter";

const Tasks = () => (

  <>
    <MainContainer>
      <Header
        title={"Lista zadań"}
      />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
      />
      <Section
        title={"Lista zadań"}
        body={<TaskList />}
        firstExtraHeaderContent={<Counter />}
        secondExtraHeaderContent={<Buttons />}
      />
    </MainContainer>
  </>
);

export default Tasks;