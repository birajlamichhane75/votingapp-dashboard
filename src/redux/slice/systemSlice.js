import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: true,
};

const systemSlice = createSlice({
  name: "System",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { toggleMenu,toggleLink } = systemSlice.actions;
export default systemSlice.reducer;
