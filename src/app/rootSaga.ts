import { tasksSaga } from 'features/task/taskSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
