import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: "",
  reducers: {
    setGlobalName: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGlobalName } = nameSlice.actions;
export default nameSlice.reducer;
