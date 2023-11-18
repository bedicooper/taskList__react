import { useSelector } from "react-redux";
import { selectTasks } from "../../../tasksSlice";

const Counter = () => {
    const tasks = useSelector(selectTasks);

    const countUndone = (array) => array.filter(task => !task.done);

    return (
        <div>
            {tasks.length
                ? <span>pozostało zadań: {countUndone(tasks).length}</span>
                : ``
            }
        </div>
    )
};

export default Counter;