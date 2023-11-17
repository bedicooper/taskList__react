import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setExampleTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
        yield delay(200);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasks(exampleTasks));

    } catch (error) {
        console.error(error);
        yield call(alert, "Przepraszam, coś poszło nie tak");
    }
};

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}