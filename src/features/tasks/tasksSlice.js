import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        doneTasksHidden: false,
        loading: false,
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
        fetchExampleTasks: state => { 
            state.loading = !state.loading;
        },
        setExampleTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        toggleLoading: state => {
            state.loading = !state.loading;
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
    toggleLoading,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreThereTasks = state => selectTasks(state).length;
export const selectAreAllDoneHidden = state => selectTasksState(state).doneTasksHidden;
export const selectLoading = state => selectTasksState(state).loading;

export const selectTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;