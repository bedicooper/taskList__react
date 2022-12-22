import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onInputChange = ({ target }) => setNewTaskContent(target.value);
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={onInputChange}
                className="form__field" name="addTask"
                placeholder="Co jest do zrobienia?"
            />
            <button className="form__submitButton">Dodaj zadanie</button>
        </form>
    )
}

export default Form;