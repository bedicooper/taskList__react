import { Button } from "../styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

export default () => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </Button>
    )
};