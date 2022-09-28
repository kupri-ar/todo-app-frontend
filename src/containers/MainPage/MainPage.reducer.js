import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    data: [],
    page: 1,
    sortCol: null,
    sortDir: 'asc',
    totalCount: 0,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setSortCol: (state, action) => {
      state.sortCol = action.payload
    },
    setSortDir: (state, action) => {
      state.sortDir = action.payload
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload
    },
  },
})

export const { setData, setPage, setSortCol, setSortDir, setTotalCount } = todoListSlice.actions

export default todoListSlice.reducer;