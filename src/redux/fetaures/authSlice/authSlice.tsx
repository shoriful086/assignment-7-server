import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  email: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  token: null | string;
};
const initialState: TAuthState = {
  token: null,
};

const userSlice = createSlice({
  name: "Oauth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
