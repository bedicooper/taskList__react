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
        }
    },
});

export const { addTask, toggleHideAllDoneTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;