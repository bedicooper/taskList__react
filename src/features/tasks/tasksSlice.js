import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        doneTasksHidden: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideAllDoneTasks: state => {
            state.doneTasksHidden = !state.doneTasksHidden;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        markAllTasksAsDone: ({ tasks }) => {
            tasks.forEach((task) => {task.done = true});
        },
        deleteTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        },
    },
});

export const { addTask, toggleHideAllDoneTasks, toggleTaskDone, markAllTasksAsDone, deleteTask} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;