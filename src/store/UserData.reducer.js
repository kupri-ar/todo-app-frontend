import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    user: null
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setCurrentUser } = userDataSlice.actions

export default userDataSlice.reducer;