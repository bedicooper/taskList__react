import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        doneTasksHidden: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideAllDoneTasks: state => {
            state.doneTasksHidden = !state.doneTasksHidden;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        markAllTasksAsDone: ({ tasks }) => {
            tasks.forEach((task) => { task.done = true });
        },
        deleteTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        fetchExampleTasks: () => { },
        setExampleTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleHideAllDoneTasks,
    toggleTaskDone,
    markAllTasksAsDone,
    deleteTask,
    fetchExampleTasks,
    setExampleTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreThereTasks = state => selectTasks(state).length;
export const selectAreAllDoneHidden = state => selectTasksState(state).doneTasksHidden;
export default tasksSlice.reducer;