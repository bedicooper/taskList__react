import { useState } from "react";
import Main from "./Main";
import Section from "./Section";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejsc na reacta", done: true },
  { id: 2, content: "zjeść kolację", done: true },
];

function App() {
  const [doneTasksHidden, setDoneTaskHidden] = useState(false);
  const toggleHideAllDoneTasks = () => {
    setDoneTaskHidden(doneTasksHidden => !doneTasksHidden);
  };

  return (
    <Main>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form tasks={tasks} />}
      />
      <Section
        title={"Lista zadań"}
        body={<List tasks={tasks} doneTasksHidden={doneTasksHidden} />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            doneTasksHidden={doneTasksHidden}
            toggleHideAllDoneTasks={toggleHideAllDoneTasks}
          />
        }
      />
    </Main>
  );
}

export default App;