import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTaskList, getParams, postNewTask } from 'api/task';
import type { RootState } from 'app/store';
import { TaskInput, TaskState } from 'models/Task.interface';

interface TaskList {
  taskList: TaskState[];
  totalRecords: 0 | number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

// Define the initial state using that type
const initialState: TaskList = {
  taskList: [],
  totalRecords: 0,
  loading: 'idle',
};

// fetch all tasks
export const fetchTaskList = createAsyncThunk(
  'tasks/fetchTaskList',
  async (params: getParams) => {
    const response = await getTaskList(params);
    return response;
  }
);

// add new task
export const addNewTask = createAsyncThunk(
  'tasks/addNewTask',
  async (task: TaskInput) => {
    const response = await postNewTask(task);
    return response.data;
  }
);

export const taskSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch todo task list
    builder.addCase(fetchTaskList.pending, (state, action) => {
      state.loading = 'pending';
    });

    builder.addCase(fetchTaskList.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.taskList = action.payload.data;
      state.totalRecords = parseInt(
        action.payload.headers['x-total-count'] ?? 0
      );
    });

    builder.addCase(fetchTaskList.rejected, (state, action) => {
      state.loading = 'failed';
      state.taskList = [];
    });

    // add new task
    builder.addCase(addNewTask.pending, (state, action) => {
      state.loading = 'pending';
    });

    builder.addCase(addNewTask.fulfilled, (state, action) => {
      return {
        ...state,
        taskList: [action.payload, ...state.taskList.slice(0, -1)],
        loading: 'succeeded',
      };
    });

    builder.addCase(addNewTask.rejected, (state, action) => {
      state.loading = 'failed';
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectTaskList = (state: RootState) => state.tasks.taskList;

export default taskSlice.reducer;
