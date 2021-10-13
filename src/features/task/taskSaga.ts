import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TaskInput, TaskState } from 'models/Task.interface';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  deleteTaskApi,
  FetchParams,
  FindParams,
  findTask,
  getTaskList,
  postNewTask,
  updateTask,
} from 'api/task';
import { AxiosResponse } from 'axios';
import { actions } from './taskSlice';

// fetch
export function* handleFetchTaskList(action: PayloadAction<FetchParams>) {
  try {
    const response: AxiosResponse<TaskState[]> = yield call(
      getTaskList,
      action.payload
    );
    yield put(actions.fetchSucceeded(response));
  } catch (error) {
    yield put(actions.fetchRejected());
  }
}

// add task
export function* handleAddTask(action: PayloadAction<TaskInput>) {
  try {
    const response: AxiosResponse<TaskState> = yield call(
      postNewTask,
      action.payload
    );
    yield put(actions.addTaskSucceeded(response.data));
  } catch (error) {
    yield put(actions.addTaskRejected());
  }
}

// update complete, important, content,...
export function* handleUpdateTask(action: PayloadAction<TaskState>) {
  try {
    const response: AxiosResponse<TaskState> = yield call(
      updateTask,
      action.payload
    );
    yield put(actions.updateTaskSucceeded(response.data));
  } catch (error) {
    yield put(actions.updateTaskRejected());
  }
}

// delete task
export function* handleDeleteTask(action: PayloadAction<number>) {
  try {
    yield call(deleteTaskApi, action.payload);
    yield put(actions.deleteTaskSucceeded(action.payload));
  } catch (error) {
    yield put(actions.deleteTaskRejected());
  }
}

export function* handleSearch(action: PayloadAction<FindParams>) {
  try {
    const response: AxiosResponse<TaskState[]> = yield call(
      findTask,
      action.payload
    );
    yield put(actions.searchTaskSucceeded(response.data));
  } catch (error) {
    yield put(actions.searchTaskRejected());
  }
}

export function* tasksSaga() {
  yield takeLatest(actions.fetch.type, handleFetchTaskList);

  yield takeEvery(actions.addTask.type, handleAddTask);
  yield takeEvery(actions.updateTask, handleUpdateTask);
  yield takeEvery(actions.deleteTask, handleDeleteTask);
  yield takeEvery(actions.searchTask, handleSearch);
}
