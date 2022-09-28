import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from "./containers/MainPage/MainPage.reducer";

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});