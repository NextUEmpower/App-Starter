import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string;
  name: string;
}

const initialState: UserState = {
  email: '',
  password: '',
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setEmail, setPassword, setName } = userSlice.actions;
export default userSlice.reducer;
