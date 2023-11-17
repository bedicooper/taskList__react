import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MainContainer } from "../../../common/Main/MainContainer";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { selectTaskById } from '../tasksSlice';


function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));
    console.log(task);

    return (
        <MainContainer>
            <Header
                title={"Szczegóły zadania"}
            />
            <Section
                title={task ? task.content : "Przepraszam, nie znaleziono zadania."}
                body={
                    task     
                    ?<>{task.done ? "Zadanie ukończone" : "Zadanie nieukończone"}</>
                    : "Coś poszło nie tak. Wróc do strony z zadaniami"
                }
            />
        </MainContainer>
    )
};

export default TaskPage;
