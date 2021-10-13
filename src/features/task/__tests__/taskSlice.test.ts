import { TaskState } from 'models/Task.interface';
import reducer, { actions } from '../taskSlice';

describe('task slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: 'init' })).toEqual({
      taskList: [],
      totalRecords: 0,
      totalPage: 1,
      shouldUpdate: false,
      loading: true,
      error: false,
    });
  });

  test('add task successful', () => {
    const previousState = {
      taskList: [],
      totalRecords: 0,
      totalPage: 1,
      shouldUpdate: false,
      loading: true,
      error: false,
    };

    const taskState: TaskState = {
      id: 1,
      content: 'test',
      date: 123456,
      isCompleted: false,
      isImportant: false,
    };

    expect(reducer(previousState, actions.addTaskSucceeded(taskState))).toEqual(
      {
        taskList: [
          {
            ...taskState,
          },
        ],
        totalRecords: 1,
        totalPage: 1,
        shouldUpdate: false,
        loading: false,
        error: false,
      }
    );
  });

  test('update task successful', () => {
    const previousState = {
      taskList: [
        {
          id: 1,
          content: 'test',
          date: 123456,
          isCompleted: false,
          isImportant: false,
        },
      ],
      totalRecords: 1,
      totalPage: 1,
      shouldUpdate: false,
      loading: false,
      error: false,
    };

    const taskState: TaskState = {
      id: 1,
      content: 'test has updated',
      date: 123456,
      isCompleted: true,
      isImportant: false,
    };

    expect(
      reducer(previousState, actions.updateTaskSucceeded(taskState))
    ).toEqual({
      taskList: [
        {
          ...taskState,
        },
      ],
      totalRecords: 1,
      totalPage: 1,
      shouldUpdate: false,
      loading: false,
      error: false,
    });
  });

  test('delete task successful', () => {
    const previousState = {
      taskList: [
        {
          id: 1,
          content: 'test',
          date: 123456,
          isCompleted: false,
          isImportant: false,
        },
      ],
      totalRecords: 1,
      totalPage: 1,
      shouldUpdate: false,
      loading: false,
      error: false,
    };

    expect(reducer(previousState, actions.deleteTaskSucceeded(1))).toEqual({
      taskList: [],
      totalRecords: 0,
      totalPage: 1,
      shouldUpdate: true,
      loading: false,
      error: false,
    });
  });

  test('search task successful', () => {
    const previousState = {
      taskList: [],
      totalRecords: 1,
      totalPage: 1,
      shouldUpdate: false,
      loading: false,
      error: false,
    };

    const taskState: TaskState = {
      id: 1,
      content: 'test',
      date: 123456,
      isCompleted: true,
      isImportant: false,
    };

    expect(
      reducer(previousState, actions.searchTaskSucceeded([taskState]))
    ).toEqual({
      taskList: [taskState],
      totalRecords: 1,
      totalPage: 1,
      shouldUpdate: false,
      loading: false,
      error: false,
    });
  });
});
