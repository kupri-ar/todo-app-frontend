import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    data: [],
    page: 1,
    sortCol: null,
    sortDesc: false,
    totalCount: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      state.data = [action.payload, ...state.data.slice(0, 2)]
    },
    updateTodo: (state, action) => {
      state.data = state.data.map(item => item.id === action.payload.id ? action.payload : item)
    },
    setData: (state, action) => {
      state.data = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setSortCol: (state, action) => {
      state.sortCol = action.payload
    },
    setSortDesc: (state, action) => {
      state.sortDesc = action.payload
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload
    },
  },
})

export const { setData, setPage, setSortCol, setSortDesc, setPageCount, addTodo, updateTodo } = todoListSlice.actions

export default todoListSlice.reducer;