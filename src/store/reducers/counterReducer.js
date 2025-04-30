import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  loading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementAsync: (state) => {
      state.loading = true;
    },
    incrementAsyncSuccess: (state) => {
      state.value += 1;
      state.loading = false;
    },
  },
});

export const { increment, incrementAsync, incrementAsyncSuccess } =
  counterSlice.actions;
export default counterSlice.reducer;
