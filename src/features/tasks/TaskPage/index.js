import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { selectTaskById } from '../tasksSlice';

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    return (
        <>
            <Header
                title={"Szczegóły zadania"}
            />
            <Section
                title={task ? task.content : "Przepraszam, nie znaleziono zadania."}
                body={
                    task
                        ? <>{task.done ? "Zadanie ukończone" : "Zadanie nieukończone"}</>
                        : "Coś poszło nie tak. Wróc do strony z zadaniami"
                }
            />
        </>
    )
};

export default TaskPage;