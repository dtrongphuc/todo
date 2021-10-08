import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTaskList, FetchParams, FindParams } from 'api/task';
import type { RootState } from 'app/store';
import { AxiosResponse } from 'axios';
import { TaskInput, TaskState } from 'models/Task.interface';
import { calcTotalPage } from 'utils';

interface TaskList {
  taskList: TaskState[];
  totalRecords: 0 | number;
  totalPage: number;
  loading: boolean;
  error: boolean;
}

// Define the initial state using that type
const initialState: TaskList = {
  taskList: [],
  totalRecords: 0,
  totalPage: 1,
  loading: true,
  error: false,
};

// fetch all tasks
export const fetchTaskList = createAsyncThunk(
  'task/fetchTaskList',
  async (params: FetchParams) => {
    const response = await getTaskList(params);
    return response;
  }
);

export const taskSlice = createSlice({
  name: 'task',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // fetch
    fetch: (state, action: PayloadAction<FetchParams>) => {
      state.loading = true;
    },
    fetchSucceeded: (
      state,
      action: PayloadAction<AxiosResponse<TaskState[]>>
    ) => {
      state.loading = false;
      state.taskList = action.payload.data;
      state.totalRecords = parseInt(
        action.payload.headers['x-total-count'] ?? 0
      );
      state.totalPage = calcTotalPage(state.totalRecords);
    },
    fetchRejected: (state) => {
      state.loading = false;
      state.error = true;
    },

    // add task
    addTask: (state, action: PayloadAction<TaskInput>) => {
      state.loading = true;
    },
    addTaskSucceeded: (state, action: PayloadAction<TaskState>) => {
      return {
        ...state,
        taskList: [action.payload, ...state.taskList.slice(0, -1)],
        loading: false,
        totalPage: calcTotalPage(state.totalRecords + 1),
        totalRecords: state.totalRecords + 1,
      };
    },
    addTaskRejected: (state) => {
      state.loading = false;
      state.error = true;
    },

    // update task
    updateTask: (state, action: PayloadAction<TaskState>) => {
      state.loading = true;
    },
    updateTaskSucceeded: (state, action: PayloadAction<TaskState>) => {
      state.loading = false;

      const index = state.taskList.findIndex((t) => t.id === action.payload.id);
      state.taskList = [
        ...state.taskList.slice(0, index),
        action.payload,
        ...state.taskList.slice(index + 1),
      ];
    },
    updateTaskRejected: (state) => {
      state.loading = false;
      state.error = true;
    },

    // delete task
    deleteTask: (state, action: PayloadAction<number>) => {},
    deleteTaskSucceeded: (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.taskList = state.taskList.filter((t) => t.id !== action.payload);
      state.totalPage = calcTotalPage(state.totalRecords - 1);
      state.totalRecords = state.totalRecords - 1;
    },
    deleteTaskRejected: (state) => {
      state.loading = false;
      state.error = true;
    },

    // search
    searchTask: (state, action: PayloadAction<FindParams>) => {
      state.loading = true;
    },
    searchTaskSucceeded: (state, action: PayloadAction<TaskState[]>) => {
      state.loading = false;
      state.taskList = action.payload;
    },
    searchTaskRejected: (state) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const actions = taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTaskList = (state: RootState) => state.tasks.taskList;
export const selectLoading = (state: RootState) => state.tasks.loading;

export default taskSlice.reducer;
