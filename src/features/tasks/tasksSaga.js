import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setExampleTasks, toggleLoading } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {    
        yield delay(1500);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasks(exampleTasks));
        yield put(toggleLoading());

    } catch (error) {
        console.error(error);
        yield call(alert, "Przepraszam, coś poszło nie tak");
        yield put(toggleLoading());
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};