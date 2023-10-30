import { useState, useRef } from "react";
import { Container, Field, SubmitButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const inputFocusOnSubmit = () => {
        inputRef.current.focus();
    };

    const onInputChange = ({ target }) => setNewTaskContent(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskTrimmedContent = newTaskContent.trim();

        if (!newTaskTrimmedContent) {
            return
        }

        addNewTask(newTaskTrimmedContent);
        setNewTaskContent("");
        inputFocusOnSubmit();
    };

    return (
        <Container onSubmit={onFormSubmit}>
            <Field
                ref={inputRef}
                value={newTaskContent}
                onChange={onInputChange}
                name="addTask"
                placeholder="Co jest do zrobienia?"
            />
            <SubmitButton>Dodaj zadanie</SubmitButton>
        </Container>
    )
}

export default Form;