// import { MainContainer } from "../../../common/Main/MainContainer";
import Section from "../../../common/Section";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Header from "../../../common/Header";
import Search from "./Search";
import FetchButton from "./FetchButton";

const Tasks = () => (
  <>
    <Header
      title={"Lista zadań"}
    />
    <Section
      title={"Dodaj nowe zadanie"}
      firstExtraHeaderContent={<FetchButton />}
      body={<Form />}
    />
    <Section
      title={"Wyszukiwarka"}
      body={<Search />}
    />
    <Section
      title={"Lista zadań"}
      body={<TaskList />}
      firstExtraHeaderContent={<Buttons />}
    />
  </>
);

export default Tasks;