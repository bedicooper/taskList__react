import Main from "./Main";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejsc na reacta", done: true },
  { id: 2, content: "zjeść kolację", done: true   },
];
const doneTasksHidden = false;

function App() {
  return (
    <Main>
      <Header title={"Lista zadań"}/>
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
      />
      <Section
        title={"Lista zadań"}
      body={<List tasks={tasks} doneTasksHidden={doneTasksHidden} />}
      extraHeaderContent={<Buttons tasks={tasks} doneTasksHidden={doneTasksHidden} />}
      />
    </Main>
  );
}

export default App;
