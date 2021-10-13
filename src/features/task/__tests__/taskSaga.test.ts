import { actions } from '../taskSlice';
import {
  handleFetchTaskList,
  tasksSaga,
  handleAddTask,
  handleUpdateTask,
  handleDeleteTask,
  handleSearch,
} from '../taskSaga';
import { takeLatest, takeEvery } from 'redux-saga/effects';

describe('test watch', () => {
  it('should watch all actions', () => {
    const gen = tasksSaga();

    expect(gen.next().value).toEqual(
      takeLatest(actions.fetch.type, handleFetchTaskList)
    );

    expect(gen.next().value).toEqual(
      takeEvery(actions.addTask.type, handleAddTask)
    );

    expect(gen.next().value).toEqual(
      takeEvery(actions.updateTask, handleUpdateTask)
    );

    expect(gen.next().value).toEqual(
      takeEvery(actions.deleteTask, handleDeleteTask)
    );

    expect(gen.next().value).toEqual(
      takeEvery(actions.searchTask, handleSearch)
    );
  });
});
