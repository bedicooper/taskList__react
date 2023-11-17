import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, SubmitButton } from "./styled";
import { Field } from "../Input";
import { addTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

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

        dispatch(addTask({
            content: newTaskTrimmedContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputFocusOnSubmit();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Field
                ref={inputRef}
                value={newTaskContent}
                onChange={onInputChange}
                name="addTask"
                placeholder="Co jest do zrobienia?"
            />
            <SubmitButton>Dodaj zadanie</SubmitButton>
        </StyledForm>
    )
}

export default Form;