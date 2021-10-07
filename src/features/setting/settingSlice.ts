import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface SettingState {
  isSidebarOpen: boolean;
}

const initialState: SettingState = {
  isSidebarOpen: false,
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    open: (state) => {
      state.isSidebarOpen = true;
    },

    close: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { open, close } = settingSlice.actions;

export const selectSidebarState = (state: RootState) =>
  state.setting.isSidebarOpen;

export default settingSlice.reducer;
